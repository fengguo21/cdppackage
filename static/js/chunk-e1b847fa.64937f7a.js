(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1b847fa"],{4190:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"data_sources"},[r("div",{staticClass:"source_head"},[r("h4",[e._v("数据来源构成")]),e._v(" "),r("el-tooltip",{staticClass:"item",attrs:{effect:"light",placement:"right"}},[r("div",{attrs:{slot:"content"},slot:"content"},[e._v("\n          "+e._s(e.tip.visitor_num)+"\n          "),r("br"),e._v("\n          "+e._s(e.tip.pay_user)+"\n          "),r("br"),e._v("\n          "+e._s(e.tip.pay_money)+"\n          "),r("br"),e._v("\n          "+e._s(e.tip.pay_number)+"\n          "),r("br"),e._v("\n          "+e._s(e.tip.order_money)+"\n          "),r("br"),e._v("\n          "+e._s(e.tip.order_user)+"\n          "),r("br"),e._v("\n          "+e._s(e.tip.order_number)+"\n          "),r("br"),e._v("\n          "+e._s(e.tip.order_rate)+"\n          "),r("br"),e._v("\n          "+e._s(e.tip.pay_rate)+"\n        ")]),e._v(" "),r("i",{staticClass:"el-icon-question"})]),e._v(" "),r("a",{staticClass:"download",attrs:{href:"javascript:;"}},[r("download-excel",{staticClass:"export-excel-wrapper",attrs:{data:e.json_data,fields:e.json_fields,name:"treasure.xls"}},[r("i",{staticClass:"el-icon-download"}),e._v("下载\n        ")])],1),e._v(" "),r("el-checkbox",{staticClass:"hidedata",on:{change:e.hideData},model:{value:e.isHide,callback:function(t){e.isHide=t},expression:"isHide"}},[e._v("隐藏空数据")]),e._v(" "),r("el-button",{staticClass:"back",attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.$router.go(-1)}}},[e._v("返回")])],1),e._v(" "),r("div",{staticClass:"choose"},[r("el-checkbox-group",{attrs:{min:1,max:5},on:{change:e.checked},model:{value:e.checkedList,callback:function(t){e.checkedList=t},expression:"checkedList"}},e._l(e.dataType,function(t){return r("el-checkbox",{key:t.type,staticClass:"checkone",attrs:{label:t.name,disabled:e.tableList.length>=5&&-1==e.tableList.indexOf(t)}},[e._v(e._s(t.name))])}),1),e._v(" "),r("div",{staticClass:"reset"},[r("span",[e._v("选择 "+e._s(e.tableList.length)+"/5")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.reSet}},[e._v("重置")])],1)],1),e._v(" "),r("div",{staticClass:"tableList"},[r("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.orderTable,border:"","default-sort":{prop:"visitor_num",order:"descending"}}},[r("el-table-column",{attrs:{prop:"name",label:"spu名称",width:"230"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"clearfix"},[r("img",{staticClass:"pic",attrs:{src:t.row.spu_picture}}),e._v(" "),r("div",{staticClass:"commodity_content"},[r("p",{staticClass:"commodity_name"},[e._v(e._s(t.row.spu_name))]),e._v(" "),r("p",[r("span",[e._v(e._s(t.row.spu_sn))])])])])]}}])}),e._v(" "),e._l(e.tableList,function(t){return r("el-table-column",{key:t.type,attrs:{label:t.name,prop:t.type,sortable:""},scopedSlots:e._u([{key:"default",fn:function(a){return[r("span",[e._v(e._s(a.row[t.type]))]),e._v("  \n            ")]}}],null,!0)})})],2)],1)])])},s=[],n=(r("7364"),r("d4d5"),r("f763"),r("b775"));function i(e){return Object(n["a"])({url:"/app/business/goodsinfo",method:"get",params:e})}var o={data:function(){return{tip:{visitor_num:"访客数: 所选择时间段内，当前渠道访客去重后的数量累计",pay_user:"支付买家数: 所选择时间段内，来自当前渠道的所有订单且全额支付完成的单据对应买家的去重累计和",pay_money:"支付金额: 所选择时间段内，来自当前渠道的所有订单且全额支付完成的单据的实际支付金额的累计和",pay_number:"支付订单数量: 已支付完成的所有订单数量",order_money:"下单金额: 所选择时间段内，来自当前渠道的所有订单（不区分是否支付）对应的订单累计应付金额",order_user:"下单买家数: 所选择时间段内，来自当前渠道的所有订单（不区分是否支付）对应的买家去重后的累计和",order_number:"订单数量: 所有已提交的订单数量",order_rate:"订单转化率: 当前渠道的下单数量/访客数",pay_rate:"支付转化率: 当前渠道该商品的下单且全额支付完成的订单/访客数"},isHide:!1,tableList:[],checkedList:["访客数","支付买家数","支付金额","支付订单数量","下单金额"],dataType:[{name:"访客数",type:"visitor_num"},{name:"支付买家数",type:"pay_user"},{name:"支付金额",type:"pay_money"},{name:"支付订单数量",type:"pay_number"},{name:"下单金额",type:"order_money"},{name:"下单买家数",type:"order_user"},{name:"订单数量",type:"order_number"},{name:"订单转化率",type:"order_rate"},{name:"支付转化率",type:"pay_rate"}],orderTable:[],tempTable:[],tableGoodsData:[],json_fields:{spu_id:"spu_id",spu_name:"spu_name",spu_picture:"spu_picture",spu_sn:"spu_sn",visitor_num:"visitor_num",pay_user:"pay_user",pay_money:"pay_money",pay_number:"pay_number",order_money:"order_money",order_user:"order_user",order_number:"order_number",order_rate:"order_rate",pay_rate:"pay_rate"},json_data:[],json_meta:[[{" key ":" charset "," value ":" utf- 8 "}]]}},created:function(){this.checked(),this.getList()},methods:{hideData:function(e){this.orderTable=e?this.orderTable.filter(function(e){return e.visitor_num}):this.tempTable},getList:function(){var e=this;this.$route.query,console.log(this.$route.query),i(this.$route.query).then(function(t){console.log(t),e.orderTable=t.data,e.orderTable.forEach(function(e){e.visitor_num=Number(e.visitor_num),e.pay_user=Number(e.pay_user),e.pay_money=Number(e.pay_money),e.pay_number=Number(e.pay_number),e.order_money=Number(e.order_money),e.order_user=Number(e.order_user),e.order_number=Number(e.order_number),e.order_rate=Number(e.order_rate),e.pay_rate=Number(e.pay_rate)}),e.tempTable=t.data,e.json_data=t.data})},checked:function(){var e=this;this.tableList=this.checkedList,this.tableList=this.dataType.filter(function(t){return-1!==e.checkedList.indexOf(t.name)}),console.log(this.tableList)},handleClick:function(e,t){console.log(e,t)},reSet:function(){this.checkedList=[],this.checked()}}},_=o,c=(r("761c"),r("17cc")),u=Object(c["a"])(_,a,s,!1,null,"c5d697b4",null);t["default"]=u.exports},"56fd":function(e,t,r){},"761c":function(e,t,r){"use strict";var a=r("56fd"),s=r.n(a);s.a}}]);