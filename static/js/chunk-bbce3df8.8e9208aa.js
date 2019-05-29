(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bbce3df8"],{"4d51":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-container"},[a("el-row",{staticClass:"panel-group",attrs:{gutter:10}},[a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:8}},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.getRanking},slot:"append"})],1)],1)],1),t._v(" "),a("el-tabs",{staticStyle:{"margin-top":"15px"},attrs:{type:"border-card"},on:{"tab-click":t.switchOrder},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[t._l(t.tabMapOptions,function(e){return a("el-tab-pane",{key:e.key,attrs:{label:e.label,name:e.key}},[a("keep-alive",[t.activeName==e.key?a("tab-pane",{attrs:{type:e.key,"table-data":t.tableData},on:{getspuid:t.getspuid}}):t._e()],1)],1)}),t._v(" "),a("el-pagination",{attrs:{"current-page":t.current,"page-size":"10",background:"",layout:"prev, pager, next",total:t.total},on:{"update:currentPage":function(e){t.current=e},"update:current-page":function(e){t.current=e},"current-change":t.getRanking}})],2),t._v(" "),a("el-dialog",{attrs:{title:"实时趋势",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"choose"},t._l(t.btnList,function(e){return a("el-button",{key:e.type,on:{click:function(a){return t.choose(e)}}},[t._v(t._s(e.tit))])}),1),t._v(" "),a("div",{staticClass:"line",staticStyle:{"margin-top":"20px"}},[a("line-chart",{attrs:{"chart-data":t.lineChartData}})],1)])],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{width:"220px",align:"left",label:"商品","element-loading-text":"请给我点时间！"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"imgWrapper"},[a("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:e.row.goods_front_image}}),t._v(" "),a("div",[a("div",{staticStyle:{color:"blue","font-size":"1em"}},[t._v(t._s(e.row.name))])])])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"浏览量"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.click_num))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"访客数"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.visitor_num))])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"150px",align:"center",label:"支付金额"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.income))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"150px",label:"支付买家数"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.sold_num))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"支付转化率",width:"195"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.pay_rate))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.getspuid(i.spu_id)}}},[t._v("实时趋势")])]}}])})],1)},r=[],l=a("b775");function o(t){return Object(l["a"])({url:"/article/list",method:"get",params:t})}var c={filters:{statusFilter:function(t){var e={published:"success",draft:"info",deleted:"danger"};return e[t]}},props:{type:{type:String,default:"CN"},tableData:{type:Array,required:!0}},data:function(){return{listQuery:{page:1,limit:5,type:this.type,sort:"+id"},loading:!1}},created:function(){},methods:{getList:function(){var t=this;this.loading=!0,this.$emit("create"),o(this.listQuery).then(function(e){t.list=e.data.items,t.loading=!1})},getspuid:function(t){this.$emit("getspuid",t)}}},u=c,d=(a("d9d9"),a("17cc")),h=Object(d["a"])(u,s,r,!1,null,null,null),p=h.exports;function f(t){return Object(l["a"])({url:"/app/business/goodslist/",method:"get",params:t})}function g(t){return Object(l["a"])({url:"/app/business/goodstendency?spuid="+t,method:"get"})}var m=a("6834"),b={name:"Tab",components:{tabPane:p,LineChart:m["a"]},data:function(){return{tabMapOptions:[{label:"访问数排序",key:"1"},{label:"支付金额排序",key:"2"}],activeName:"1",createdTimes:0,total:"",current:1,tableData:"",keyword:"",spuid:"",dialogVisible:!1,lineChartData:{tit:"",actualData:[]},chartData:[],btnList:[{tit:"浏览量",type:"visit_num"},{tit:"访客数",type:"visitor"},{tit:"支付金额",type:"income"},{tit:"支付买家数",type:"pay_user"},{tit:"支付转化率",type:"pay_rate"}]}},created:function(){this.getRanking()},methods:{switchOrder:function(t){this.getRanking()},getRanking:function(){var t=this;f({page:this.current,pagerows:10,order:this.activeName,keyword:this.keyword}).then(function(e){console.log(e),t.tableData=e.data,t.total=e.count}).catch(function(t){console.log(t)})},showCreatedTimes:function(){this.createdTimes=this.createdTimes+1},getspuid:function(t){var e=this;console.log(t),this.spuid=t,this.dialogVisible=!0,g(this.spuid).then(function(t){e.chartData=t.data,console.log(t),e.lineChartData.actualData=t.data.visit_num,e.lineChartData.tit="浏览量"})},choose:function(t){this.lineChartData.actualData=this.chartData[t.type],this.lineChartData.tit=t.tit}}},y=b,v=(a("9582"),Object(d["a"])(y,i,n,!1,null,"4f921b58",null));e["default"]=v.exports},6834:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},n=[],s=a("24ce"),r=a.n(s),l=a("ed08"),o={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object,required:!0}},data:function(){return{chart:null,sidebarElm:null,hours:["0:00","1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.initChart(),this.autoResize&&(this.__resizeHandler=Object(l["a"])(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHandler)),this.sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.sidebarElm&&this.sidebarElm.addEventListener("transitionend",this.sidebarResizeHandler)},beforeDestroy:function(){this.chart&&(this.autoResize&&window.removeEventListener("resize",this.__resizeHandler),this.sidebarElm&&this.sidebarElm.removeEventListener("transitionend",this.sidebarResizeHandler),this.chart.dispose(),this.chart=null)},methods:{sidebarResizeHandler:function(t){"width"===t.propertyName&&this.__resizeHandler()},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.expectedData,a=t.actualData;this.chart.setOption({title:{text:this.chartData.tit,textStyle:{fontSize:16,color:"#404040",fontWeight:400}},grid:{left:20,right:34,bottom:20,top:60,containLabel:!0},xAxis:{data:this.chartData.xdate||this.hours,boundaryGap:!1,axisTick:{show:!1}},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1},axisLine:{show:!1}},legend:{data:[this.chartData.date,""],right:10},series:[{name:this.chartData.date,itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}}},smooth:!0,type:"line",data:a,animationDuration:2800,animationEasing:"cubicInOut"},{name:"",smooth:!0,type:"line",itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:2},areaStyle:{color:"#f3f8ff"}}},data:e,animationDuration:2800,animationEasing:"quadraticOut"}]})},initChart:function(){this.chart=r.a.init(this.$el),this.setOptions(this.chartData)}}},c=o,u=a("17cc"),d=Object(u["a"])(c,i,n,!1,null,null,null);e["a"]=d.exports},"8c17":function(t,e,a){},9582:function(t,e,a){"use strict";var i=a("8c17"),n=a.n(i);n.a},d153:function(t,e,a){},d9d9:function(t,e,a){"use strict";var i=a("d153"),n=a.n(i);n.a}}]);