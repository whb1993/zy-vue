<template>
  <div>
    <el-row>
      <el-col :span="12" style="background: #fff;border: 1px solid #ccc;padding: 0 10px;">
        <h5 class="clearfix">gvhost8 CPU利用率 <span style="float: right;"><i class="el-icon-more"></i></span></h5>
        <div style="text-align: center;">最高利用率 <span class="danger-font">{{high}}</span> 最低利用率 <span class="success-font">{{low}}</span></div>
        <div id="cpuChart" style="width: 100%; height: 300px;"></div>
        <div class="clearfix">
          <p style="float: left;">全局CPU利用率<span class="brand-font">{{globalUtil}}</span></p>
          <p style="float: right;">Update：<span>{{updateTime}}</span></p>
        </div>
      </el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Overview',
  data(){
    return {
      high: '88%',
      low: '12%',
      globalUtil: '22%',
      updateTime: '10:20:30'
    }
  },
  mounted() {
    this.initCpuCharts();
  },
  methods: {
    initCpuCharts(){
      let base = +new Date(1968, 9, 3);
      let oneDay = 24 * 3600 * 1000;
      let date = [];

      let data = [Math.random() * 100];

      for (let i = 1; i < 1000; i++) {
        let now = new Date(base += oneDay);
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
      }
console.log(date,data)
      let option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: date
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%']
        },
        series: [
          {
            name:'模拟数据',
            type:'line',
            smooth:true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              color: '#409EFF'
            },
            areaStyle: {
              color: '#409EFF'
            },
            data: data
          }
        ]
      };

      let myChart = this.$echarts.init(document.getElementById('cpuChart'));

      myChart.setOption(option);
    }
  }
};
</script>

<style scoped>

</style>
