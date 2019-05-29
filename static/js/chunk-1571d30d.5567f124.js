(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1571d30d"],{"2fbb":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"documentation-container"},[a("el-row",{staticStyle:{"margin-bottom":"32px",background:"white"}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"chart-wrapper"},[t.showPie?a("pie-chart",{attrs:{title:"按访客数","chart-data":t.pieData.visitor}}):t._e()],1)]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"chart-wrapper"},[t.showPie?a("pie-chart",{attrs:{title:"按销售额","chart-data":t.pieData.money}}):t._e()],1)]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"chart-wrapper"},[t.showPie?a("pie-chart",{attrs:{title:"按销售量","chart-data":t.pieData.sell}}):t._e()],1)]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"chart-wrapper"},[t.showPie?a("pie-chart",{attrs:{title:"按订单数","chart-data":t.pieData.order}}):t._e()],1)])],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"30px"}},[a("el-col",{attrs:{offset:14}},[a("el-date-picker",{attrs:{"value-format":"timestamp",format:"yyyy-MM-dd",type:"daterange","range-separator":"~","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right"},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}}),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.getOrderDetails}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{plain:""},on:{click:t.reset}},[t._v("重置")])],1)],1),t._v(" "),a("el-row",{staticStyle:{"margin-bottom":"30px"}},[a("el-table",{attrs:{data:t.tableData,indent:"0","row-key":"id","row-class-name":t.rowStyle}},[a("el-table-column",{attrs:{prop:"name",label:"渠道名称",width:"230"}}),t._v(" "),a("el-table-column",{attrs:{prop:"visitor_num",label:"访客数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"visitor_depth",label:"访客深度"}}),t._v(" "),a("el-table-column",{attrs:{prop:"jumpr",label:"跳失率"}}),t._v(" "),a("el-table-column",{attrs:{prop:"save_app",label:"收藏小程序"}}),t._v(" "),a("el-table-column",{attrs:{prop:"save_goods",label:"收藏商品"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pay_money",label:"销售额"}}),t._v(" "),a("el-table-column",{attrs:{prop:"order_num",label:"销售量"}}),t._v(" "),a("el-table-column",{attrs:{prop:"order_num",label:"订单数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pay_rate",label:"支付转化率"}}),t._v(" "),a("el-table-column",{attrs:{prop:"",label:"销售详情"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.scen!=e.row.id?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.toDetail(e.row.scen)}}},[t._v("查看")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"趋势"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"plain",size:"small"},on:{click:function(a){return t.getTend(e.row)}}},[t._v("趋势")])]}}])})],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"实时趋势",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"choose"},t._l(t.btnList,function(e){return a("el-button",{key:e.type,on:{click:function(a){return t.choose(e)}}},[t._v(t._s(e.tit))])}),1),t._v(" "),a("div",{staticClass:"line",staticStyle:{"margin-top":"20px",width:"635px",height:"350px"}},[a("line-chart",{attrs:{"chart-data":t.lineChartData}})],1)])],1)},r=[],i=(a("f763"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})}),n=[],o=a("24ce"),l=a.n(o),c=a("ed08");a("6cbb");var d={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},chartData:{type:Array,required:!0},title:{type:String,default:"",required:!1}},data:function(){return{chart:null}},mounted:function(){var t=this;this.initChart(),this.__resizeHanlder=Object(c["a"])(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHanlder)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHanlder),this.chart.dispose(),this.chart=null)},methods:{setOptions:function(t){this.chart.setOption({title:{text:this.title,textStyle:{fontSize:16,color:"#404040",lineHeight:50,fontWeight:400}},legend:{show:!1,orient:"vertical",left:0},label:{show:!0,formatter:"{b}: {d}%"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"访问来源",type:"pie",radius:"65%",center:["50%","60%"],data:t,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})},initChart:function(){this.chart=l.a.init(this.$el,"macarons"),this.setOptions(this.chartData)}}},h=d,u=a("17cc"),f=Object(u["a"])(h,i,n,!1,null,null,null),b=f.exports,p=a("b775"),m=a("7f43"),j=a.n(m),g=a("7105"),y=a("4360"),v=j.a.create({baseURL:"http://127.0.0.1:8000/",timeout:5e3});v.interceptors.request.use(function(t){return y["a"].getters.token,t},function(t){return console.log(t),Promise.reject(t)}),v.interceptors.response.use(function(t){var e=t.data;if(200!==e.code)return Object(g["Message"])({message:e.message||"error",type:"error",duration:5e3}),e},function(t){return console.log("err"+t),Object(g["Message"])({message:t.message,type:"error",duration:5e3}),Promise.reject(t)});var _=v;function w(t){return _({url:"/order/1",method:"get",params:t})}function D(t){return Object(p["a"])({url:"/app/business/ordertable",method:"get",params:t})}function S(t){return Object(p["a"])({url:"/app/business/ordercharts",method:"get",params:t})}function k(t){return Object(p["a"])({url:"/app/business/ordertendency",method:"get",params:t})}var z=a("6834"),x=a("fb92"),C=a("6bf2"),O="",E=function(t){return O=t.scen,t.children&&t.children.forEach(function(t){O+=","+t.scen,t.children&&t.children.forEach(function(t){O+=","+t.scen})}),O},R={name:"Tab",components:{pieChart:b,LineChart:z["a"]},data:function(){return{pieData:"",tableData:[],total:"",current:1,dateRange:[],showPie:!1,showHeader:!1,dialogVisible:!1,lineChartData:{tit:"",actualData:[],xdate:[]},chartData:[],btnList:[{tit:"访客数",type:"visitor_num"},{tit:"跳失率",type:"jumpr"},{tit:"销售额",type:"pay_money"},{tit:"销售量",type:"pay_num"},{tit:"订单数",type:"order_num"}]}},created:function(){this.getordercharts(),this.getOrderDetails()},methods:{reset:function(){this.dateRange=[],this.getOrderDetails()},getTend:function(t){var e=this;this.dialogVisible=!0;var a={scen:E(t)};if(this.dateRange.length>1){a.start_time=parseInt(this.dateRange[0]/1e3),a.end_time=parseInt(this.dateRange[1]/1e3);var s=C(this.dateRange[0]).format("YYYY-MM-DD"),r=C(this.dateRange[1]).format("YYYY-MM-DD");this.lineChartData.xdate=Object(x["a"])(s,r)}else{for(var i=[],n=-6;n<1;n++)i.push(Object(x["b"])(n));this.lineChartData.xdate=i}k(a).then(function(t){console.log(t),e.chartData=t.data,e.lineChartData.tit="访客数",e.lineChartData.actualData=t.data.visitor_num})},choose:function(t){this.lineChartData.actualData=this.chartData[t.type],this.lineChartData.tit=t.tit},toDetail:function(t){var e=this.dateRange.length?{scen:t,start_time:parseInt(this.dateRange[0]/1e3),end_time:parseInt(this.dateRange[1]/1e3)}:{scen:t};this.$router.push({name:"treasure",query:e})},getordercharts:function(){var t=this;S().then(function(e){t.pieData=e.data,t.showPie=!0})},getOrders:function(){var t=this;w().then(function(e){console.log(e,"================"),t.pieData=e,console.log(t.pieData,"=============="),t.showPie=!0}).catch(function(t){console.log(t)})},showCreatedTimes:function(){this.createdTimes=this.createdTimes+1},getOrderDetails:function(){var t,e=this;this.dateRange.length>1&&(t={start_time:parseInt(this.dateRange[0]/1e3),end_time:parseInt(this.dateRange[1]/1e3)}),console.log(t,"============"),D(t).then(function(t){console.log(t.data,"================"),e.tableData=t.data}).catch(function(t){console.log(t)})}}},L=R,M=(a("3c67"),Object(u["a"])(L,s,r,!1,null,"36a35746",null));e["default"]=M.exports},"3c67":function(t,e,a){"use strict";var s=a("eb27"),r=a.n(s);r.a},6834:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},r=[],i=a("24ce"),n=a.n(i),o=a("ed08"),l={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null,sidebarElm:null,hours:["0:00","1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.initChart(),this.autoResize&&(this.__resizeHandler=Object(o["a"])(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHandler)),this.sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.sidebarElm&&this.sidebarElm.addEventListener("transitionend",this.sidebarResizeHandler)},beforeDestroy:function(){this.chart&&(this.autoResize&&window.removeEventListener("resize",this.__resizeHandler),this.sidebarElm&&this.sidebarElm.removeEventListener("transitionend",this.sidebarResizeHandler),this.chart.dispose(),this.chart=null)},methods:{sidebarResizeHandler:function(t){"width"===t.propertyName&&this.__resizeHandler()},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.expectedData,a=t.actualData;this.chart.setOption({title:{text:this.chartData.tit,textStyle:{fontSize:16,color:"#404040",fontWeight:400}},grid:{left:20,right:34,bottom:20,top:60,containLabel:!0},xAxis:{data:this.chartData.xdate||this.hours,boundaryGap:!1,axisTick:{show:!1}},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1},axisLine:{show:!1}},legend:{data:[this.chartData.date,""],right:10},series:[{name:this.chartData.date,itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}}},smooth:!0,type:"line",data:a,animationDuration:2800,animationEasing:"cubicInOut"},{name:"",smooth:!0,type:"line",itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}}},data:e,animationDuration:2800,animationEasing:"quadraticOut"}]})},initChart:function(){this.chart=n.a.init(this.$el),this.setOptions(this.chartData)}}},c=l,d=a("17cc"),h=Object(d["a"])(c,s,r,!1,null,null,null);e["a"]=h.exports},"6cbb":function(t,e,a){var s,r,i;(function(n,o){r=[e,a("24ce")],s=o,i="function"===typeof s?s.apply(e,r):s,void 0===i||(t.exports=i)})(0,function(t,e){var a=function(t){"undefined"!==typeof console&&console&&console.error&&console.error(t)};if(e){var s=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],r={color:s,title:{textStyle:{fontWeight:"normal",color:"#008acd"}},visualMap:{itemWidth:15,color:["#5ab1ef","#e0ffff"]},toolbox:{iconStyle:{normal:{borderColor:s[0]}}},tooltip:{backgroundColor:"rgba(50,50,50,0.5)",axisPointer:{type:"line",lineStyle:{color:"#008acd"},crossStyle:{color:"#008acd"},shadowStyle:{color:"rgba(200,200,200,0.2)"}}},dataZoom:{dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd"},grid:{borderColor:"#eee"},categoryAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitLine:{lineStyle:{color:["#eee"]}}},valueAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.1)","rgba(200,200,200,0.1)"]}},splitLine:{lineStyle:{color:["#eee"]}}},timeline:{lineStyle:{color:"#008acd"},controlStyle:{normal:{color:"#008acd"},emphasis:{color:"#008acd"}},symbol:"emptyCircle",symbolSize:3},line:{smooth:!0,symbol:"emptyCircle",symbolSize:3},candlestick:{itemStyle:{normal:{color:"#d87a80",color0:"#2ec7c9",lineStyle:{color:"#d87a80",color0:"#2ec7c9"}}}},scatter:{symbol:"circle",symbolSize:4},map:{label:{normal:{textStyle:{color:"#d87a80"}}},itemStyle:{normal:{borderColor:"#eee",areaColor:"#ddd"},emphasis:{areaColor:"#fe994e"}}},graph:{color:s},gauge:{axisLine:{lineStyle:{color:[[.2,"#2ec7c9"],[.8,"#5ab1ef"],[1,"#d87a80"]],width:10}},axisTick:{splitNumber:10,length:15,lineStyle:{color:"auto"}},splitLine:{length:22,lineStyle:{color:"auto"}},pointer:{width:5}}};e.registerTheme("macarons",r)}else a("ECharts is not Loaded")})},"77d2":function(t,e,a){var s={"./af":"fbac","./af.js":"fbac","./ar":"f96f","./ar-dz":"e63c","./ar-dz.js":"e63c","./ar-kw":"b7bd","./ar-kw.js":"b7bd","./ar-ly":"968f","./ar-ly.js":"968f","./ar-ma":"9f9d","./ar-ma.js":"9f9d","./ar-sa":"aea5","./ar-sa.js":"aea5","./ar-tn":"d44b","./ar-tn.js":"d44b","./ar.js":"f96f","./az":"c7ed","./az.js":"c7ed","./be":"5a28","./be.js":"5a28","./bg":"1251","./bg.js":"1251","./bm":"2809","./bm.js":"2809","./bn":"b4fc","./bn.js":"b4fc","./bo":"5484","./bo.js":"5484","./br":"5adc","./br.js":"5adc","./bs":"ac10","./bs.js":"ac10","./ca":"e381","./ca.js":"e381","./cs":"aef2","./cs.js":"aef2","./cv":"6566","./cv.js":"6566","./cy":"1390","./cy.js":"1390","./da":"1ece","./da.js":"1ece","./de":"5f10","./de-at":"09c4","./de-at.js":"09c4","./de-ch":"89a2","./de-ch.js":"89a2","./de.js":"5f10","./dv":"e662","./dv.js":"e662","./el":"196b","./el.js":"196b","./en-SG":"0a32","./en-SG.js":"0a32","./en-au":"94ed","./en-au.js":"94ed","./en-ca":"2806","./en-ca.js":"2806","./en-gb":"b0dd","./en-gb.js":"b0dd","./en-ie":"7a6e","./en-ie.js":"7a6e","./en-il":"1f0f","./en-il.js":"1f0f","./en-nz":"1606","./en-nz.js":"1606","./eo":"f214","./eo.js":"f214","./es":"7d58","./es-do":"737b","./es-do.js":"737b","./es-us":"a894","./es-us.js":"a894","./es.js":"7d58","./et":"a888","./et.js":"a888","./eu":"1357","./eu.js":"1357","./fa":"0a48","./fa.js":"0a48","./fi":"c2b1","./fi.js":"c2b1","./fo":"52c4","./fo.js":"52c4","./fr":"04e6","./fr-ca":"6ad1","./fr-ca.js":"6ad1","./fr-ch":"b12f","./fr-ch.js":"b12f","./fr.js":"04e6","./fy":"ad13","./fy.js":"ad13","./ga":"369e","./ga.js":"369e","./gd":"22de","./gd.js":"22de","./gl":"f808","./gl.js":"f808","./gom-latn":"50d5","./gom-latn.js":"50d5","./gu":"e67a","./gu.js":"e67a","./he":"037c","./he.js":"037c","./hi":"3d53","./hi.js":"3d53","./hr":"678b","./hr.js":"678b","./hu":"1783","./hu.js":"1783","./hy-am":"2873","./hy-am.js":"2873","./id":"de99","./id.js":"de99","./is":"6aa2","./is.js":"6aa2","./it":"1f93","./it-ch":"2db9","./it-ch.js":"2db9","./it.js":"1f93","./ja":"6bf8","./ja.js":"6bf8","./jv":"6e55","./jv.js":"6e55","./ka":"e65f","./ka.js":"e65f","./kk":"7167","./kk.js":"7167","./km":"4668","./km.js":"4668","./kn":"e3d2","./kn.js":"e3d2","./ko":"b058","./ko.js":"b058","./ku":"017e","./ku.js":"017e","./ky":"b2bd","./ky.js":"b2bd","./lb":"e50c","./lb.js":"e50c","./lo":"ca14","./lo.js":"ca14","./lt":"3e84","./lt.js":"3e84","./lv":"ce1d","./lv.js":"ce1d","./me":"9d38","./me.js":"9d38","./mi":"3e2e","./mi.js":"3e2e","./mk":"d532","./mk.js":"d532","./ml":"db61","./ml.js":"db61","./mn":"7493","./mn.js":"7493","./mr":"52d8","./mr.js":"52d8","./ms":"b559","./ms-my":"7462","./ms-my.js":"7462","./ms.js":"b559","./mt":"c055","./mt.js":"c055","./my":"49e0","./my.js":"49e0","./nb":"eb1c","./nb.js":"eb1c","./ne":"0acb","./ne.js":"0acb","./nl":"7497","./nl-be":"3114","./nl-be.js":"3114","./nl.js":"7497","./nn":"9a9c","./nn.js":"9a9c","./pa-in":"c595","./pa-in.js":"c595","./pl":"801c","./pl.js":"801c","./pt":"5b08","./pt-br":"155f","./pt-br.js":"155f","./pt.js":"5b08","./ro":"05fc","./ro.js":"05fc","./ru":"90b3","./ru.js":"90b3","./sd":"99bf","./sd.js":"99bf","./se":"20d6","./se.js":"20d6","./si":"7c0b","./si.js":"7c0b","./sk":"90fc","./sk.js":"90fc","./sl":"871b","./sl.js":"871b","./sq":"b045","./sq.js":"b045","./sr":"ac81","./sr-cyrl":"a2d0","./sr-cyrl.js":"a2d0","./sr.js":"ac81","./ss":"b093","./ss.js":"b093","./sv":"12e5","./sv.js":"12e5","./sw":"38a0","./sw.js":"38a0","./ta":"a462","./ta.js":"a462","./te":"18cb","./te.js":"18cb","./tet":"0c11","./tet.js":"0c11","./tg":"d707","./tg.js":"d707","./th":"883f","./th.js":"883f","./tl-ph":"6cc0","./tl-ph.js":"6cc0","./tlh":"ab53","./tlh.js":"ab53","./tr":"e523","./tr.js":"e523","./tzl":"b192","./tzl.js":"b192","./tzm":"5604","./tzm-latn":"9f95","./tzm-latn.js":"9f95","./tzm.js":"5604","./ug-cn":"9f4f","./ug-cn.js":"9f4f","./uk":"8bd6","./uk.js":"8bd6","./ur":"9a78","./ur.js":"9a78","./uz":"4d4c","./uz-latn":"da73","./uz-latn.js":"da73","./uz.js":"4d4c","./vi":"b766","./vi.js":"b766","./x-pseudo":"2a69","./x-pseudo.js":"2a69","./yo":"fd2e","./yo.js":"fd2e","./zh-cn":"35d0","./zh-cn.js":"35d0","./zh-hk":"7b45","./zh-hk.js":"7b45","./zh-tw":"fa66","./zh-tw.js":"fa66"};function r(t){var e=i(t);return a(e)}function i(t){var e=s[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}r.keys=function(){return Object.keys(s)},r.resolve=i,t.exports=r,r.id="77d2"},eb27:function(t,e,a){},fb92:function(t,e,a){"use strict";a.d(e,"b",function(){return s}),a.d(e,"a",function(){return r});a("7bc1"),a("0857");function s(t){var e=new Date,a=e.getTime()+864e5*t;e.setTime(a);var s=e.getFullYear(),r=e.getMonth(),i=e.getDate();function n(t){var e=t;return 1===t.toString().length&&(e="0"+t),e}return r=n(r+1),i=n(i),s+"-"+r+"-"+i}function r(t,e){var a=function(t){var e=new Date,a=t.split("-");return e.setFullYear(a[0]),e.setMonth(a[1]-1),e.setDate(a[2]),e},s=a(t),r=a(e);if(s>r){var i=s;s=r,r=i}s.setDate(s.getDate()+1);var n=[],o=0;while(s.getFullYear()!==r.getFullYear()||s.getMonth()!==r.getMonth()||s.getDate()!==r.getDate()){var l=s.getDate().toString();1===l.length&&(l="0"+l),n[o]=s.getFullYear()+"-"+(s.getMonth()+1)+"-"+l,o++,s.setDate(s.getDate()+1)}return n.splice(0,0,t),n.push(e),n}}}]);