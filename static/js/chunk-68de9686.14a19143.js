(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68de9686"],{"2fbb":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"documentation-container"},[a("el-row",{staticStyle:{"margin-bottom":"32px",background:"white"}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"chart-wrapper"},[e.showPie?a("pie-chart",{attrs:{title:"按访客数","chart-data":e.pieData.visitor}}):e._e()],1)]),e._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"chart-wrapper"},[e.showPie?a("pie-chart",{attrs:{title:"按销售额","chart-data":e.pieData.money}}):e._e()],1)]),e._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"chart-wrapper"},[e.showPie?a("pie-chart",{attrs:{title:"按销售量","chart-data":e.pieData.sell}}):e._e()],1)]),e._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"chart-wrapper"},[e.showPie?a("pie-chart",{attrs:{title:"按订单数","chart-data":e.pieData.order}}):e._e()],1)])],1),e._v(" "),a("el-row",{staticStyle:{"margin-bottom":"30px"}},[a("el-col",{attrs:{offset:14}},[a("el-date-picker",{attrs:{"value-format":"timestamp",format:"yyyy-MM-dd",type:"daterange","range-separator":"~","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right"},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}}),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.getOrderDetails}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{plain:""},on:{click:e.reset}},[e._v("重置")])],1)],1),e._v(" "),a("el-row",{staticStyle:{"margin-bottom":"30px"}},[a("el-table",{attrs:{data:e.tableData,"default-expand-all":"true"}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.sub_cat,function(t,r){return a("div",{key:r,staticClass:"detailITem"},[a("div",{staticClass:"itemClumn"},[e._v(e._s(t.name))]),e._v(" "),a("div",{staticClass:"itemClumn"},[e._v("收藏小程序："+e._s(t.save_app))]),e._v(" "),a("div",{staticClass:"itemClumn"},[e._v("访问深度"+e._s(t.visitor_depth))]),e._v(" "),a("div",{staticClass:"itemClumn"},[e._v("访客数："+e._s(t.visitor_num))]),e._v(" "),a("div",{staticClass:"itemClumn"},[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.toDetail(t.scen)}}},[e._v("销售详情")])],1),e._v(" "),a("div",{staticClass:"itemClumn"},[a("el-button",{attrs:{type:"text",size:"small"}},[e._v("查看趋势")])],1)])})}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"渠道名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"visitor_num",label:"访客数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"visitor_depth",label:"访客深度"}}),e._v(" "),a("el-table-column",{attrs:{prop:"jumpr",label:"跳失率"}}),e._v(" "),a("el-table-column",{attrs:{prop:"save_app",label:"收藏小程序"}}),e._v(" "),a("el-table-column",{attrs:{prop:"save_goods",label:"收藏商品"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pay_money",label:"销售额"}}),e._v(" "),a("el-table-column",{attrs:{prop:"order_num",label:"销售量"}}),e._v(" "),a("el-table-column",{attrs:{prop:"order_num",label:"订单数"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pay_rate",label:"支付转化率"}})],1)],1)],1)},o=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.className,style:{height:e.height,width:e.width}})},i=[],s=a("34de"),n=a.n(s),c=a("ed08");a("82bd");var d={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},chartData:{type:Array,required:!0},title:{type:String,default:"",required:!1}},data:function(){return{chart:null}},mounted:function(){var e=this;this.initChart(),this.__resizeHanlder=Object(c["a"])(function(){e.chart&&e.chart.resize()},100),window.addEventListener("resize",this.__resizeHanlder)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHanlder),this.chart.dispose(),this.chart=null)},methods:{setOptions:function(e){this.chart.setOption({title:{text:this.title,textStyle:{fontSize:16,color:"#404040",lineHeight:50,fontWeight:400}},legend:{show:!1,orient:"vertical",left:0},label:{show:!0,formatter:"{b}: {d}%"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"访问来源",type:"pie",radius:"65%",center:["50%","60%"],data:e,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})},initChart:function(){this.chart=n.a.init(this.$el,"macarons"),this.setOptions(this.chartData)}}},p=d,u=a("f44b"),h=Object(u["a"])(p,l,i,!1,null,null,null),m=h.exports,f=a("b775"),b=a("2924"),g=a.n(b),v=a("d6dd"),_=a("4360"),y=g.a.create({baseURL:"http://127.0.0.1:8000/",timeout:5e3});y.interceptors.request.use(function(e){return _["a"].getters.token,e},function(e){return console.log(e),Promise.reject(e)}),y.interceptors.response.use(function(e){var t=e.data;if(200!==t.code)return Object(v["Message"])({message:t.message||"error",type:"error",duration:5e3}),t},function(e){return console.log("err"+e),Object(v["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)});var w=y;function C(e){return w({url:"/order/1",method:"get",params:e})}function S(e){return Object(f["a"])({url:"/app/business/ordertable",method:"get",params:e})}function x(e){return Object(f["a"])({url:"/app/business/ordercharts",method:"get",params:e})}var D={name:"Tab",components:{pieChart:m},data:function(){return{pieData:"",tableData:[],total:"",current:1,dateRange:[],showPie:!1}},created:function(){this.getordercharts(),this.getOrderDetails()},methods:{reset:function(){this.dateRange=[],this.getOrderDetails()},toDetail:function(e){var t=this.dateRange.length?{scen:e,start_time:parseInt(this.dateRange[0]/1e3),end_time:parseInt(this.dateRange[1]/1e3)}:{scen:e};this.$router.push({name:"treasure",query:t})},getordercharts:function(){var e=this;x().then(function(t){e.pieData=t.data,e.showPie=!0})},getOrders:function(){var e=this;C().then(function(t){console.log(t,"================"),e.pieData=t,console.log(e.pieData,"=============="),e.showPie=!0}).catch(function(e){console.log(e)})},showCreatedTimes:function(){this.createdTimes=this.createdTimes+1},getOrderDetails:function(){var e,t=this;this.dateRange.length>1&&(e={start_time:parseInt(this.dateRange[0]/1e3),end_time:parseInt(this.dateRange[1]/1e3)}),console.log(e,"============"),S(e).then(function(e){console.log(e.data,"================"),t.tableData=e.data}).catch(function(e){console.log(e)})}}},k=D,O=(a("6070"),Object(u["a"])(k,r,o,!1,null,"24813cb4",null));t["default"]=O.exports},6070:function(e,t,a){"use strict";var r=a("7efc"),o=a.n(r);o.a},"7efc":function(e,t,a){},"82bd":function(e,t,a){var r,o,l;(function(i,s){o=[t,a("34de")],r=s,l="function"===typeof r?r.apply(t,o):r,void 0===l||(e.exports=l)})(0,function(e,t){var a=function(e){"undefined"!==typeof console&&console&&console.error&&console.error(e)};if(t){var r=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],o={color:r,title:{textStyle:{fontWeight:"normal",color:"#008acd"}},visualMap:{itemWidth:15,color:["#5ab1ef","#e0ffff"]},toolbox:{iconStyle:{normal:{borderColor:r[0]}}},tooltip:{backgroundColor:"rgba(50,50,50,0.5)",axisPointer:{type:"line",lineStyle:{color:"#008acd"},crossStyle:{color:"#008acd"},shadowStyle:{color:"rgba(200,200,200,0.2)"}}},dataZoom:{dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd"},grid:{borderColor:"#eee"},categoryAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitLine:{lineStyle:{color:["#eee"]}}},valueAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.1)","rgba(200,200,200,0.1)"]}},splitLine:{lineStyle:{color:["#eee"]}}},timeline:{lineStyle:{color:"#008acd"},controlStyle:{normal:{color:"#008acd"},emphasis:{color:"#008acd"}},symbol:"emptyCircle",symbolSize:3},line:{smooth:!0,symbol:"emptyCircle",symbolSize:3},candlestick:{itemStyle:{normal:{color:"#d87a80",color0:"#2ec7c9",lineStyle:{color:"#d87a80",color0:"#2ec7c9"}}}},scatter:{symbol:"circle",symbolSize:4},map:{label:{normal:{textStyle:{color:"#d87a80"}}},itemStyle:{normal:{borderColor:"#eee",areaColor:"#ddd"},emphasis:{areaColor:"#fe994e"}}},graph:{color:r},gauge:{axisLine:{lineStyle:{color:[[.2,"#2ec7c9"],[.8,"#5ab1ef"],[1,"#d87a80"]],width:10}},axisTick:{splitNumber:10,length:15,lineStyle:{color:"auto"}},splitLine:{length:22,lineStyle:{color:"auto"}},pointer:{width:5}}};t.registerTheme("macarons",o)}else a("ECharts is not Loaded")})}}]);