(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-474b9e5a"],{6114:function(t,e,a){"use strict";var i=a("627e"),s=a.n(i);s.a},"627e":function(t,e,a){},e2a6:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"operation clearfix"},[a("el-button",{staticStyle:{float:"right",margin:"2px 0 0 10px"},attrs:{type:"primary",size:"mini"},on:{click:t.reset}},[t._v("重置")]),t._v(" "),a("el-button",{staticStyle:{float:"right",margin:"2px 0 0 10px"},attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.search()}}},[t._v("确认")]),t._v(" "),a("el-date-picker",{staticClass:"timepick",attrs:{type:"daterange",align:"right",clearable:!1,size:"small","range-separator":"~","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),a("div",{staticClass:"tab"},[a("ul",{staticClass:"choose-table clearfix"},t._l(t.list,function(e){return a("li",{key:e.type,class:["choose-one",e.type===t.currentId?"checked":""],on:{click:function(a){return t.choose(e.name,e.type)}}},[a("p",{staticClass:"h1"},[t._v(t._s(e.name))]),t._v(" "),a("p",{staticClass:"h2"},[t._v(t._s(e.number))]),t._v(" "),a("p",{staticClass:"h3"},[t._v("\n          环比    \n          "),a("span",[t._v(t._s(e.hb))]),t._v(" "),a("i",{staticClass:"icon"})]),t._v(" "),a("p",{directives:[{name:"show",rawName:"v-show",value:t.currentId===e.type,expression:"currentId === item.type ? true:false"}],staticClass:"current"})])}),0)]),t._v(" "),a("div",{staticClass:"echarts"},[a("line-chart",{attrs:{"chart-data":t.lineChartData}})],1)])},s=[],n=(a("0175"),a("9a44"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})}),r=[],l=a("34de"),o=a.n(l),c=a("ed08"),h={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null,sidebarElm:null}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.initChart(),this.autoResize&&(this.__resizeHandler=Object(c["a"])(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHandler)),this.sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.sidebarElm&&this.sidebarElm.addEventListener("transitionend",this.sidebarResizeHandler)},beforeDestroy:function(){this.chart&&(this.autoResize&&window.removeEventListener("resize",this.__resizeHandler),this.sidebarElm&&this.sidebarElm.removeEventListener("transitionend",this.sidebarResizeHandler),this.chart.dispose(),this.chart=null)},methods:{sidebarResizeHandler:function(t){"width"===t.propertyName&&this.__resizeHandler()},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.expectedData,a=t.actualData;this.chart.setOption({title:{text:this.chartData.tit,textStyle:{fontSize:16,color:"#404040",fontWeight:400}},grid:{left:20,right:20,bottom:20,top:60,containLabel:!0},xAxis:{data:this.chartData.xdate,boundaryGap:!1,axisTick:{show:!1}},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1},axisLine:{show:!1}},legend:{data:[this.chartData.date,""],right:10},series:[{name:this.chartData.date,itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2}}},smooth:!0,type:"line",data:a,animationDuration:2800,animationEasing:"cubicInOut"},{name:"",smooth:!0,type:"line",itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}}},data:e,animationDuration:2800,animationEasing:"quadraticOut"}]})},initChart:function(){this.chart=o.a.init(this.$el),this.setOptions(this.chartData)}}},u=h,d=a("f44b"),p=Object(d["a"])(u,n,r,!1,null,null,null),m=p.exports,f=a("b775");function v(t,e){return Object(f["a"])({url:"/app/business/flowlabel",method:"get",params:{start_time:t,end_time:e}})}function g(t,e){return Object(f["a"])({url:"/app/business/flowcharts",method:"get",params:{start_time:t,end_time:e}})}var D=function(t){var e=new Date,a=e.getTime()+864e5*t;e.setTime(a);var i=e.getMonth(),s=e.getDate();return i=_(i+1),s=_(s),i+"."+s};function _(t){var e=t;return 1===t.toString().length&&(e="0"+t),e}function b(t,e){var a=function(t){var e=new Date,a=t.split("-");return e.setFullYear(a[0]),e.setMonth(a[1]-1),e.setDate(a[2]),e},i=a(t),s=a(e);if(i>s){var n=i;i=s,s=n}i.setDate(i.getDate()+1);var r=[],l=0;while(i.getFullYear()!==s.getFullYear()||i.getMonth()!==s.getMonth()||i.getDate()!==s.getDate()){var o=i.getDate().toString();1===o.length&&(o="0"+o),r[l]=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+o,l++,i.setDate(i.getDate()+1)}return r.splice(0,0,t),r.push(e),r}var y={components:{LineChart:m},data:function(){return{list:[],currentId:"visit",lineChartData:{tit:"访客数",actualData:[],xdate:[],date:"近七天"},value:"",selected:"",chooseOne:"",wxList:[],chartsData:[]}},created:function(){this.getInfo()},methods:{getInfo:function(t,e){var a=this,i=t,s=e;t&&(i=new Date(t),s=new Date(e),i=parseInt(Date.parse(i)/1e3),s=parseInt(Date.parse(s)/1e3),this.lineChartData.date=t+"至"+e,console.log(i,s)),v(i,s).then(function(t){for(var e in a.list=t.data,a.list)a.list[e].type=e;a.list.visit.name="访客数",a.list.browse.name="浏览量",a.list.save_goods.name="收藏小程序人数",a.list.share_app.name="分享小程序人数",a.list.share_app_num.name="分享小程序次数",a.list.share_goods.name="分享商品人数",a.list.share_goods_num.name="分享商品次数",a.list.auth.name="授权人数",console.log(123,a.list)}),g(i,s).then(function(i){if(t){var s=b(t,e);a.lineChartData.xdate=s}else{for(var n=[],r=-7;r<0;r++)n.push(D(r));a.lineChartData.xdate=n}a.chartsData=i.data,a.lineChartData.actualData=i.data.visit})},choose:function(t,e){this.currentId=e,this.lineChartData.tit=t,this.lineChartData.actualData=this.chartsData[e]},changeDate:function(t){this.pickdate=t[0]+"~"+t[1],console.log(this.pickdate)},search:function(){console.log(this.value);var t=this.value[0],e=this.value[1];this.getInfo(t,e)},reset:function(){this.value=[],this.getInfo()}}},w=y,x=(a("6114"),Object(d["a"])(w,i,s,!1,null,"4120ca05",null));e["default"]=x.exports}}]);