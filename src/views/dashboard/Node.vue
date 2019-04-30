<template>
  <div class="container">
    <div id="terminal-container" />
  </div>
</template>

<script>
import { getToken } from '../../utils/auth.js';
import { Terminal } from 'xterm';
import 'xterm/dist/xterm.css';
import * as fit from 'xterm/lib/addons/fit/fit';
import { clearInterval } from 'timers';
// import 'xterm/dist/addons/fullscreen/fullscreen.css';
// import * as fullscreen from 'xterm/lib/addons/fullscreen/fullscreen';

// Terminal.applyAddon(fullscreen);
Terminal.applyAddon(fit);

export default {
  name: 'Node',
  data() {
    return {
      websock: null,
      term: null,
      wsTimer: 0
    };
  },
  mounted() {
    this.initTerm();
  },
  created() {
    this.initWebSocket();
  },
  destroyed() {
    this.websock.close(); // 离开路由之后断开websocket连接
  },
  methods: {
    initTerm() {
      const terminalContainer = document.getElementById('terminal-container');
      console.log(terminalContainer);
      // this.term = new Terminal();
      // var $width, $height;
      const $width = terminalContainer.clientWidth;
      const $height = terminalContainer.clientHeight;
      this.term = new Terminal({
        cols: Math.floor($width / 9),
        rows: (Math.floor($height / 20) < 24) ? 24 : Math.floor($height / 20),
        screenKeys: false,
        useStyle: true,
        cursorBlink: true,
        convertEol: true,
        scrollback: 800,
        fontSize: 15,
        lineHeight: 1.2
      });
      this.term.open(terminalContainer);
      terminalContainer.getElementsByClassName('xterm-viewport')[0].style['overflow-y'] = 'auto';
      this.term.focus();
      this.term.fit();
      // this.term.toggleFullScreen();
      this.term.on('data', function(data) {
        if (data != null && data !== undefined && data.length > 0) {
          this.websock.send(data);
        }
      });
    },
    initWebSocket() { // 初始化websocket
      const wsuri = 'ws://localhost:9000/websocket/tracker?access_token' + getToken();
      this.websock = new WebSocket(wsuri);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen() { // 连接建立之后执行send方法发送数据
      const actions = { 'test': '12345' };
      this.websocketsend(JSON.stringify(actions));
      this.wsTimer = setInterval(function show() {
        this.websocketsend('@heartbeat');
      }, 30000);
    },
    websocketonerror() {// 连接建立失败重连
      // this.initWebSocket();
      clearInterval(this.wsTimer);
    },
    websocketonmessage(e) { // 数据接收
      const redata = JSON.parse(e.data);
      this.term.write(redata);
    },
    websocketsend(Data) {// 数据发送
      this.websock.send(Data);
    },
    websocketclose(e) { // 关闭
      console.log('断开连接', e);
    }
  }
};
</script>

<style scoped>
/* #terminal-container .xterm .xterm-viewport{
  overflow-y: auto;
} */
.container{
  border: 8px solid #fff;
}
</style>
