<template>
  <div class="container">
    <div id="terminal-container" />
  </div>
</template>

<script>
import { Terminal } from 'xterm';

export default {
  mounted() {
    const terminalContainer = document.getElementById('terminal-container');
    const term = new Terminal();
    term.open(terminalContainer);
  }
};
</script>

<style scoped>
.container{
  border: 8px solid #fff;
}
</style>
