(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e2aad85"],{4777:function(e,t,a){"use strict";a("9327")},"6d42":function(e,t,a){"use strict";a("b369")},9327:function(e,t,a){},"98a0":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"task-content"},[a("div",{staticClass:"__tools"},[a("router-link",{attrs:{to:{path:"/plugins/task/add"}}},[a("el-button",{attrs:{type:"primary"}},[e._v("添加商品")])],1)],1),a("div",{staticClass:"__search"},[a("el-form",{ref:"ruleForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formValue,rules:e.rules,"label-width":"100px"}},[a("div",[a("el-form-item",{attrs:{label:"商品搜索",prop:"search"}},[a("el-input",{attrs:{placeholder:"输入商品名称搜索",clearable:""},on:{clear:e.onSubmit},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSubmit(t)}},model:{value:e.formValue.search,callback:function(t){e.$set(e.formValue,"search",t)},expression:"formValue.search"}})],1),a("el-form-item",{attrs:{label:"积分价格",prop:"score_start"}},[a("el-input",{ref:"score_start",attrs:{placeholder:"积分的最低值"},model:{value:e.formValue.score_start,callback:function(t){e.$set(e.formValue,"score_start",t)},expression:"formValue.score_start"}}),a("span",{staticStyle:{display:"inline-block",width:"47px",height:"32px","line-height":"32px","text-align":"center"}},[e._v("至")]),a("el-form-item",{staticStyle:{display:"inline-block","margin-bottom":"0"},attrs:{prop:"score_end"}},[a("el-input",{attrs:{placeholder:"积分的最高值"},on:{change:e.handleChange},model:{value:e.formValue.score_end,callback:function(t){e.$set(e.formValue,"score_end",t)},expression:"formValue.score_end"}})],1)],1)],1),a("div",[a("el-form-item",{attrs:{label:"创建时间",prop:"date"}},[a("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间"},model:{value:e.formValue.date,callback:function(t){e.$set(e.formValue,"date",t)},expression:"formValue.date"}})],1)],1),a("div",{staticStyle:{"padding-left":"100px"}},[a("el-form-item",{staticStyle:{"margin-bottom":"0"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("筛选")]),a("el-button",{on:{click:e.onEmpty}},[e._v("清空")])],1)],1)])],1),a("div",{staticClass:"__tabs"},[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"全部("+e.statistics.all+")",name:"first"}},[a("tableGoods",{ref:"first",model:{value:e.formValue,callback:function(t){e.formValue=t},expression:"formValue"}})],1),a("el-tab-pane",{attrs:{label:"销售中("+e.statistics.onsale+")",name:"second"}},[a("tableGoods",{ref:"second",attrs:{tab_key:"onsale"},model:{value:e.formValue,callback:function(t){e.formValue=t},expression:"formValue"}})],1),a("el-tab-pane",{attrs:{label:"下架中("+e.statistics.nosale+")",name:"third"}},[a("tableGoods",{ref:"third",attrs:{tab_key:"nosale"},model:{value:e.formValue,callback:function(t){e.formValue=t},expression:"formValue"}})],1),a("el-tab-pane",{attrs:{label:"售罄("+e.statistics.soldout+")",name:"fourth"}},[a("tableGoods",{ref:"fourth",attrs:{tab_key:"soldout"},model:{value:e.formValue,callback:function(t){e.formValue=t},expression:"formValue"}})],1),a("el-tab-pane",{attrs:{label:"回收站("+e.statistics.recycle+")",name:"five"}},[a("tableGoods",{ref:"five",attrs:{tab_key:"recycle"},model:{value:e.formValue,callback:function(t){e.formValue=t},expression:"formValue"}})],1)],1)],1)])},o=[],r=a("1da1"),n=(a("96cf"),a("a9e3"),a("b0c0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"task-goodsList"},[a("div",{staticClass:"__goods_tools"},[a("el-checkbox",{staticClass:"le_goods__header-checkbox",attrs:{indeterminate:e.indeterminate},on:{change:e.handleCheckAllChange},model:{value:e.allCheck,callback:function(t){e.allCheck=t},expression:"allCheck"}},[e._v("当页全选 ")]),a("popconfirm",{attrs:{disabled:0===e.checkList.length,title:"确认上架选中商品？",width:"320.2px"},on:{confirm:function(t){return e.putOffShelf(1)}}},[a("el-button",{attrs:{disabled:0===e.checkList.length}},[e._v("上架")])],1),"nosale"!==e.tab_key&&"drafts"!==e.tab_key?[a("popconfirm",{attrs:{disabled:0===e.checkList.length,title:"确认下架选中商品？",width:"320.2px"},on:{confirm:function(t){return e.putOffShelf(0)}}},[a("el-button",{attrs:{disabled:0===e.checkList.length}},[e._v("下架")])],1)]:e._e(),"recycle"!==e.tab_key?[a("popconfirm",{attrs:{disabled:0===e.checkList.length,width:"424px",title:"商品删除请谨慎操作，确定删除？"},on:{confirm:e.batchDeletion}},[a("el-button",{attrs:{disabled:0===e.checkList.length}},[e._v("删除")])],1)]:e._e(),"recycle"==e.tab_key?[a("popconfirm",{attrs:{disabled:0===e.checkList.length,width:"424px",title:"商品将被删除且无法撤销，确定删除？"},on:{confirm:e.batchRecycleDelete}},[a("el-button",{attrs:{disabled:0===e.checkList.length}},[e._v("删除")])],1),a("popconfirm",{attrs:{disabled:0===e.checkList.length,width:"330px",title:"确认恢复商品？"},on:{confirm:e.batchRestore}},[a("el-button",{attrs:{disabled:0===e.checkList.length}},[e._v("恢复")])],1)]:e._e()],2),a("el-table",{ref:"goodsTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"default-sort":{prop:"created_time",order:"descending"}},on:{"selection-change":e.handleSelectionChange,select:e.selectRow,"select-all":e.selectAll,"sort-change":e.handleSortMethod}},[a("el-table-column",{attrs:{type:"selection",width:"35"}}),a("el-table-column",{attrs:{prop:"name",label:"商品描述","min-width":"312"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"__goods_cover"},[a("img",{attrs:{src:e.getGoodsCover(t.row.slideshow),alt:""}}),a("div",{staticClass:"__goods_title"},[a("h3",[e._v(e._s(e._f("capitalize")(t.row.name)))]),a("p",[e._v("货号："+e._s(t.row.data.goods_sn))]),a("p",[e._v("ID:"+e._s(t.row.id))])])])]}}])}),a("el-table-column",{attrs:{prop:"task_number",label:"积分价格",sortable:"custom","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.task?a("p",[e._v(e._s(t.row.task.task_number)+"积分 + ¥"+e._s(t.row.task.task_price))]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"task_stock",label:"已兑换/剩余",sortable:"custom","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("p",[e._v(e._s(t.row.visitors)+"/"+e._s(t.row.task.task_stock))])]}}])}),a("el-table-column",{attrs:{prop:"created_time",label:"创建时间",sortable:"custom","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("p",[e._v(e._s(e._f("dateFormat")(t.row.task.created_time)))])]}}])}),"recycle"!==e.tab_key?a("el-table-column",{attrs:{prop:"goods_is_sale",label:"商品状态","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.task.task_stock>0?[1==t.row.task.goods_is_sale?a("el-tag",{attrs:{size:"medium",type:"success"}},[e._v("销售中")]):0==t.row.task.goods_is_sale?a("el-tag",{attrs:{size:"medium",type:"info"}},[e._v("下架中")]):e._e()]:a("el-tag",{attrs:{size:"medium",type:"warning"}},[e._v("售罄")])]}}],null,!1,132624754)}):e._e(),a("el-table-column",{attrs:{label:"操作","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"le-button-editor el-row--flex he-btn flex align-center"},["recycle"!=e.tab_key?[a("he-link",{attrs:{query:{id:t.row.task.id},href:"plugins/task/edit"}},[a("el-button",{staticClass:"le-goods__btn",attrs:{type:"text"}},[e._v("编辑")])],1),"soldout"!==e.tab_key?a("span",{staticClass:"he-btn__span"}):e._e(),"soldout"!==e.tab_key?a("el-button",{directives:[{name:"popup",rawName:"v-popup.promotetask",value:{data:t.row,promoteType:"goods"},expression:"{\n                data: scope.row,\n                promoteType: 'goods',\n              }",modifiers:{promotetask:!0}}],staticClass:"le-goods__btn",staticStyle:{position:"relative",top:"2px"},attrs:{hide_footer:!0,id:t.row.id+"_promote",module:"goods",title:"推广",type:"text",width:"791"}},[e._v("推广 ")]):e._e(),"drafts"!==e.tab_key?a("span",{staticClass:"he-btn__span"}):e._e(),a("popconfirm",{attrs:{width:"392px",title:"商品删除请谨慎操作，确定删除？"},on:{confirm:function(a){return e.deleteGoods(t.row.id)}}},[a("el-button",{staticClass:"le-goods__btn",attrs:{type:"text"}},[e._v("删除")])],1)]:e._e(),"recycle"==e.tab_key?[a("popconfirm",{attrs:{title:"商品将被删除且无法撤销，确定删除？",width:"392px"},on:{confirm:function(a){return e.recycleDelete({id:t.row.id,index:t.$index})}}},[a("el-button",{staticClass:"le-goods__btn",attrs:{type:"text"}},[e._v("删除")])],1)]:e._e(),"recycle"==e.tab_key?[a("span",{staticClass:"he-btn__span"}),a("popconfirm",{attrs:{title:"确认恢复商品？",width:"320px"},on:{confirm:function(a){return e.restore({id:t.row.id,index:t.$index})}}},[a("el-button",{staticClass:"le-goods__btn",attrs:{type:"text"}},[e._v("恢复")])],1)]:e._e()],2)]}}])})],1),a("div",{staticClass:"he-tabpane-pagination",staticStyle:{padding:"14px 0 28px 0"}},[a("div",{staticClass:"__goods_tools",staticStyle:{float:"left"}},[a("el-checkbox",{staticClass:"le_goods__header-checkbox",attrs:{indeterminate:e.indeterminate},on:{change:e.handleCheckAllChange},model:{value:e.allCheck,callback:function(t){e.allCheck=t},expression:"allCheck"}},[e._v("当页全选 ")]),a("popconfirm",{attrs:{disabled:0===e.checkList.length,title:"确认上架选中商品？",width:"320.2px"},on:{confirm:function(t){return e.putOffShelf(1)}}},[a("el-button",{attrs:{disabled:0===e.checkList.length}},[e._v("上架")])],1),"nosale"!==e.tab_key&&"drafts"!==e.tab_key?[a("popconfirm",{attrs:{disabled:0===e.checkList.length,title:"确认下架选中商品？",width:"320.2px"},on:{confirm:function(t){return e.putOffShelf(0)}}},[a("el-button",{attrs:{disabled:0===e.checkList.length}},[e._v("下架")])],1)]:e._e(),"recycle"!==e.tab_key?[a("popconfirm",{attrs:{disabled:0===e.checkList.length,width:"424px",title:"商品删除请谨慎操作，确定删除？"},on:{confirm:e.batchDeletion}},[a("el-button",{attrs:{disabled:0===e.checkList.length}},[e._v("删除")])],1)]:e._e(),"recycle"==e.tab_key?[a("popconfirm",{attrs:{disabled:0===e.checkList.length,width:"424px",title:"商品将被删除且无法撤销，确定删除？"},on:{confirm:e.batchRecycleDelete}},[a("el-button",{attrs:{disabled:0===e.checkList.length}},[e._v("删除")])],1),a("popconfirm",{attrs:{disabled:0===e.checkList.length,width:"330px",title:"确认恢复商品？"},on:{confirm:e.batchRestore}},[a("el-button",{attrs:{disabled:0===e.checkList.length}},[e._v("恢复")])],1)]:e._e()],2),a("div",{staticStyle:{float:"right"}},[a("el-pagination",{attrs:{"current-page":e.page.current,"page-count":e.page.count,background:"",layout:"prev, pager, next, jumper"},on:{"current-change":e.currentChange,"size-change":e.sizeChange}})],1)])],1)}),l=[],i=(a("fb6a"),a("d81d"),a("d3b7"),a("c1df")),c=a.n(i),d=a("d8df"),u={components:{popconfirm:d["a"]},props:{value:{type:[String,Number,Boolean,Object,Array],default:""},tab_key:{type:[String,Number,Boolean,Object,Array],default:"all"},status:{type:String,default:"all"}},data:function(){return{indeterminate:!1,checkList:[],page:{size:20,current:1},allCheck:!1,checked:!1,tableData:[]}},filters:{dateFormat:function(e){return void 0===e?"":c()(1e3*e).format("YYYY-MM-DD HH:mm:ss")},capitalize:function(e){return e.length>=32?e.slice(0,29)+"...":e}},mounted:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.handleGoodsLoad();case 1:case"end":return t.stop()}}),t)})))()},methods:{aaaaaa:function(e){console.log("eeee",e)},handleSortMethod:function(e){"ascending"==e.order&&("task_number"==e.prop&&(this.value["sort"]={"t.task_number":"ASC","t.task_price":"ASC"}),"task_stock"==e.prop&&(this.value["sort"]={"t.task_stock":"ASC"}),"created_time"==e.prop&&(this.value["sort"]={"t.created_time":"ASC"})),"descending"==e.order&&("task_number"==e.prop&&(this.value["sort"]={"t.task_number":"DESC","t.task_price":"DESC"}),"task_stock"==e.prop&&(this.value["sort"]={"t.task_stock":"DESC"}),"created_time"==e.prop&&(this.value["sort"]={"t.created_time":"DESC"})),null==e.order&&(this.value["sort"]={}),this.handleGoodsLoad()},handleCheckAllChange:function(){this.$refs.goodsTable.toggleAllSelection()},handleSelectionChange:function(e){this.checkList=e.map((function(e){return e.id})),this.allCheck=this.checkList.length===this.tableData.length,this.indeterminate=this.checkList.length>0&&this.checkList.length<this.tableData.length},selectAll:function(e){e.length>0?(this.allCheck=!0,this.indeterminate=!1):this.allCheck=!1},selectRow:function(){this.allCheck&&(this.allCheck=!1)},formatter:function(e,t){return e.address},putOffShelf:function(e){var t=this;console.log("this.checkList",this.checkList),this.$heshop.plugin("put",{include:"task",model:"goods",type:1},{goods_is_sale:e,checkList:this.checkList}).then((function(a){t.handleGoodsLoad();var s="";s=1===e?"上架成功":"下架成功",t.$message.success(s)})).catch((function(e){t.$refs.goodsTable.clearSelection(),t.$message.error(e.data.message)}))},getGoodsCover:function(e){if(e){if("[object Array]"===Object.prototype.toString.call(e))return e[0];if("[object String]"===Object.prototype.toString.call(e))try{return JSON.parse(e)[0]}catch(t){return this.ipAddress+"/le-default-goods-bg.png"}}return this.ipAddress+"/le-default-goods-bg.png"},handleGoodsLoad:function(){var e=this,t=JSON.parse(JSON.stringify(this.value));t.tab_key=this.tab_key;var a=this.page;this.$heshop.plugin("get",{include:"task",model:"goods",keyword:JSON.stringify(t)}).page(a.current,a.size).then((function(t){if(t&&t.headers){var a=t.data,s=t.headers;if(e.page={current:+s["x-pagination-current-page"],count:+s["x-pagination-page-count"],size:+s["x-pagination-per-page"],total:+s["x-pagination-total-count"]},s["content-page"]){var o=JSON.parse(s["content-page"]);e.$parent.$parent.$parent.statistics=o}e.tableData=a}})).catch((function(t){e.$message.error("加载配置信息失败，请检查网络")}))},sizeChange:function(e){this.page.size=e,this.$emit("request",{page:this.page,sort:this.order})},currentChange:function(e){this.page.current=e,this.$emit("request",{page:this.page,sort:this.order})},deleteGoods:function(e){var t=this;this.$heshop.goods("delete",e,{is_task:1}).then((function(){t.$message.success("删除成功"),t.handleGoodsLoad()})).catch((function(e){t.$message.error(e.data.message)}))},batchDeletion:function(){var e=this;this.$heshop.goods("delete",this.checkList,{is_task:1}).then((function(){e.$message.success("删除成功"),e.handleGoodsLoad(),e.allCheck=!1})).catch((function(t){e.$refs.goodsTable.clearSelection(),e.$message.error(t.data.message)}))},restore:function(e){var t=this;this.$heshop.recycle("put",{id:e.id,include:"goods",is_task:1},null).then((function(){t.$message.success("恢复成功"),t.handleGoodsLoad()})).catch((function(e){t.$message.error(e.data.message)}))},batchRestore:function(){var e=this;this.$heshop.recycle("put",{id:this.checkList,include:"goods",is_task:1},null).then((function(){e.$message.success("恢复成功"),e.handleGoodsLoad()})).catch((function(t){e.$message.error(t.data.message)}))},recycleDelete:function(e){var t=this;this.$heshop.recycle("delete",e.id,{include:"goods",is_task:1}).then((function(){t.$message.success("删除成功"),t.handleGoodsLoad()})).catch((function(e){t.$message.error(e.data.message)}))},batchRecycleDelete:function(){var e=this;this.$heshop.recycle("delete",this.checkList,{include:"goods",is_task:1}).then((function(){e.$message.success("删除成功"),e.handleGoodsLoad()})).catch((function(t){e.$message.error(t.data.message)}))}}},h=u,p=(a("de3a"),a("2877")),f=Object(p["a"])(h,n,l,!1,null,"04ef7d42",null),m=f.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"task-goodsList"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"default-sort":{prop:"date",order:"descending"}}},[a("el-table-column",{attrs:{prop:"name",label:"商品描述",width:"312"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"__goods_cover"},[a("img",{attrs:{src:"http://www.qmpaas.com/static/images/home.png",alt:""}}),a("div",{staticClass:"__goods_title"},[a("h3",[e._v(e._s(e._f("capitalize")(t.row.name)))]),a("p",[e._v("货号：askjdhjkasdh")]),a("p",[e._v("ID:kdasjdkl")])])])]}}])}),a("el-table-column",{attrs:{prop:"date",label:"积分价格",sortable:"",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"已兑换/剩余",sortable:"",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"创建时间",sortable:"",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"商品状态",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"操作",formatter:e.formatter}})],1)],1)},_=[],g={data:function(){return{checked:!1,tableData:[{date:"2016-05-02",name:"可盐可甜连衣裙女装秋装新款温柔风裙子秋季收可盐可甜连衣裙女装秋装新款温柔风裙子秋季收可盐可甜连衣裙女装秋装新款温柔风裙子秋季收",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"可盐可甜连衣裙女装秋装新款温柔风裙子秋季收",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"可盐可甜连衣裙女装秋装新款温柔风裙子秋季收",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}},filters:{capitalize:function(e){return e.length>=32?e.slice(0,29)+"...":e}},methods:{formatter:function(e,t){return e.address}}},k=g,v=(a("4777"),Object(p["a"])(k,b,_,!1,null,"593239be",null)),y=v.exports,w={components:{tableGoods:m,tablesOrder:y},data:function(){var e=this,t=function(t,a,s){var o=Number(e.formValue.score_start),r=e.formValue.score_end?Number(e.formValue.score_end):"";if(o){if(o%1!==0)return void s(new Error("积分必须是整数"));if(console.log("score_end === 0",r,0===r),(r||0===r)&&o>r)return void s(new Error("最低值需小于或等于最高值"))}s()};return{statistics:{all:0,onsale:0,nosale:0,soldout:0,drafts:0,recycle:0},activeName:"first",formValue:{search:"",score_start:"",score_end:"",date:[]},rules:{score_start:[{validator:t,trigger:"blur"}]}}},computed:{},created:function(){},watch:{},mounted:function(){return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{handleChange:function(){this.$refs.ruleForm.validate((function(e){console.log("执行的",e)}))},onEmpty:function(){console.log("this.$refs.ruleForm.",this.$refs.ruleForm.resetFields),this.$refs.ruleForm.resetFields();var e=this.activeName;this.$refs[e]&&this.$refs[e].handleGoodsLoad&&this.$refs[e].handleGoodsLoad()},handleClick:function(e,t){var a=e.name;this.$refs[a]&&this.$refs[a].handleGoodsLoad&&this.$refs[a].handleGoodsLoad()},onSubmit:function(){var e=this;this.$refs.ruleForm.validate((function(t){if(!t)return!1;var a=e.activeName;e.$refs[a]&&e.$refs[a].handleGoodsLoad&&e.$refs[a].handleGoodsLoad()}))}}},C=w,x=(a("6d42"),Object(p["a"])(C,s,o,!1,null,"251a6af2",null));t["default"]=x.exports},b369:function(e,t,a){},d683:function(e,t,a){},de3a:function(e,t,a){"use strict";a("d683")}}]);