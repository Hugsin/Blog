(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b4593d2"],{"0ca9":function(t,e,n){},"61a5":function(t,e,n){"use strict";var r=n("0ca9"),i=n.n(r);i.a},"91f0":function(t,e,n){},c430b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"main"},[n("Row",{staticStyle:{margin:"1rem 0"}},[n("i-col",{attrs:{xs:{span:24},sm:{span:24},md:{span:24},lg:{span:24}}},[n("bt-radio",{attrs:{data:t.count_arr},model:{value:t.count,callback:function(e){t.count=e},expression:"count"}})],1)],1),n("Table",{attrs:{columns:t.columns,data:t.data[t.count],size:"small",height:.85*t.height,"row-class-name":t.rowClassName,stripe:""},on:{"on-row-click":t.handleRow},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.row;return[n("Button",{directives:[{name:"show",rawName:"v-show",value:t.showAction(r).pause,expression:"showAction(row).pause"}],staticStyle:{"margin-right":"5px"},attrs:{type:"info",size:"small"},on:{click:function(e){return e.stopPropagation(),t.cancel(Object.assign({},r,{status:"INACTIVE"}))}}},[t._v("暂停")]),n("Button",{directives:[{name:"show",rawName:"v-show",value:t.showAction(r).active,expression:"showAction(row).active"}],staticStyle:{"margin-right":"5px"},attrs:{type:"success",size:"small"},on:{click:function(e){return e.stopPropagation(),t.cancel(Object.assign({},r,{status:"ACTIVE"}))}}},[t._v("激活")]),n("Button",{directives:[{name:"show",rawName:"v-show",value:t.showAction(r).cancel,expression:"showAction(row).cancel"}],staticStyle:{"margin-right":"5px"},attrs:{type:"error",size:"small"},on:{click:function(e){return e.stopPropagation(),t.cancel(Object.assign({},r,{status:"CANCEL"}))}}},[t._v("取消")]),n("Button",{directives:[{name:"show",rawName:"v-show",value:t.showAction(r).load,expression:"showAction(row).load"}],staticStyle:{"margin-right":"5px"},attrs:{type:"default",ghost:!0,size:"small"},on:{click:function(e){return e.stopPropagation(),t.handleLoad(Object.assign({},r))}}},[t._v("显示")]),n("Button",{directives:[{name:"show",rawName:"v-show",value:t.showAction(r).goto,expression:"showAction(row).goto"}],staticStyle:{"margin-right":"5px"},attrs:{type:"warning",size:"small"},on:{click:function(e){return e.stopPropagation(),t.$router.push("/trade?_symbol="+r.brief+"_"+r.symbol)}}},[t._v("跳转")]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.showAction(r).empty,expression:"showAction(row).empty"}]},[t._v("-")])]}}],null,!1,343263888)})],1):t._e()},i=[],a=n("9ab4"),o=n("2b0e"),s=n("fd9b"),c=n("f129"),u=n("b1f3"),l=n("2ef0"),d=o["default"].extend({components:{BtRadio:s["a"]},data:function(){return{task:[],type_indeterminate:!0,type_checkAll:!1,show:!1,count:"全部",type:[],type_arr:[],status:[],status_arr:[],columns:[{title:"提交时间",key:"taskId",minWidth:100,render:function(t,e){var n=e.row;return t("span",Object(u["s"])(n.taskId))}},{title:"交易对",key:"symbol",minWidth:120,render:function(t,e){var n=e.row;return t("a",{attrs:{href:"/trade?_symbol="+n.brief+"_"+n.symbol,target:"_blank"},style:{"text-decoration":"underline",color:"var(--textcolor)"}},n.brief+"."+n.symbol)}},{title:"模式",minWidth:60,key:"mode_text",render:function(t,e){var n=e.row,r="Test Run"===n.mode?"var(--textcolor)":"var(--green)";return t("span",{style:{color:r}},""+n.mode_text)}},{title:"任务类型",minWidth:100,key:"type_text",render:function(t,e){var n=e.row;return t("span",{style:{color:"hunting"!==n.type&&(~n.type.indexOf("buy")?"var(--green)":"var(--red)")}},n.type_text)}},{title:"触发条件",minWidth:90,key:"condition_text"},{title:"选项",minWidth:100,key:"condition2",render:function(t,e){var n=e.row;return t("Tooltip",{props:{trigger:"hover",placement:"left","max-width":"100px"}},[t("div",{style:{display:"block","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis",width:"70px"}},n.condition2),t("div",{slot:"content"},n.condition2)])}},{title:"执行状态",minWidth:100,key:"status_text",render:function(t,e){var n=e.row,r=[{status:"ACTIVE",color:"var(--green)"},{status:"INACTIVE",color:"var(--textcolor)"},{status:"CANCEL",color:"var(--gary)"},{status:"END",color:"var(--blue)"}],i=function(t){return t.status===n.status},a=r.find(i).color;return t("span",{style:{color:a}},n.status_text)}},{title:"订单数量",minWidth:70,key:"qty"},{title:"成交数量",minWidth:70,key:"exe_qty"},{title:"平均价格",minWidth:70,key:"exe_price",render:function(t,e){var n=e.row.exe_price;return t("span",Object(u["p"])(n))}},{title:"交易额",minWidth:60,key:"interval",render:function(t,e){var n=e.row,r=n.exe_qty,i=n.exe_price;return t("span",Object(u["p"])(r*i))}},{title:"执行时间",key:"exe_time",minWidth:120,render:function(t,e){var n=e.row;return t("span",Object(u["s"])(n.exe_time))}},{title:"操作",slot:"action",fixed:"right",align:"center",width:120}],data:[]}},mounted:function(){return a["b"](this,void 0,void 0,function(){return a["e"](this,function(t){return this.$store.state.instant.cursor&&this.init_params(),[2]})})},watch:{},computed:{count_arr:function(){var t=Object.keys(this.data);return t},height:u["d"]},methods:{handleLoad:function(){},handleTypeCheckAll:function(){this.type_indeterminate?this.type_checkAll=!1:this.type_checkAll=!this.type_checkAll,this.type_indeterminate=!1,this.type_checkAll?this.type=this.type_arr.map(function(t){return t.type_text}):this.type=[]},toTickSize:u["p"],showAction:function(t){var e=t.status,n={cancel:!1,pause:!1,active:!1,empty:!1,load:!1,goto:!1};return"t_futures"===t.t_type?"ACTIVE"===t.status?n.goto=!0:n.empty=!0:(~t.type.indexOf("limit")&&(n.cancel=!0),"ACTIVE"===e?(n.cancel=!0,n.pause=!0):"INACTIVE"===e?(n.cancel=!0,n.active=!0):(n.cancel=!1,n.empty=!0)),n},handleRow:function(t){this.$store.commit("update_tigger",t)},init_params:function(){return a["b"](this,void 0,void 0,function(){var t,e,n;return a["e"](this,function(r){switch(r.label){case 0:return[4,Object(c["Y"])({exchange:"",symbol:"",account:""})];case 1:return t=r.sent(),e=t.error_num,n=t.list.task,this.show=!0,this.task=n,e||this.handle_meage_data(n),[2]}})})},rowClassName:function(t,e){var n="";return"ACTIVE"===t.status&&(n="row-"+t.status),n},handleChangeType:function(t){var e=this.type_arr.length;t.length===e&&(this.type_indeterminate=!1,this.type_checkAll=!0);var n=this.task;n=n.filter(function(e){return t.some(function(t){return t===e.type_text})}),this.data[this.count]=n},handle_meage_data:function(t){var e=function(t){var e=t.brief,n=t.symbol,r=a["f"](t,["brief","symbol"]);return a["a"]({brief_add_symbol:e+"."+n,brief:e,symbol:n},r)},n=t.map(e),r=function(t){var e=t.type_text,n=t.type;return{type_text:e,type:n}},i=JSON.parse(JSON.stringify(t.map(r)));this.type_arr=Object(l["uniqBy"])(i,function(t){return t.type});var o={};for(var s in o["全部"]=t,o=a["a"]({},o,Object(l["groupBy"])(n,"brief_add_symbol")),o){var c=o[s],u=o[s].length;delete o[s],o[s+"("+u+")"]=c}this.data=o,~this.count.indexOf("全部")&&(this.count=Object.keys(o)[0])},cancel:function(t){var e=t.taskId,n=t.type,r=t.status;return a["b"](this,void 0,void 0,function(){var t,i,o,s;return a["e"](this,function(a){switch(a.label){case 0:return t={taskId:e,type:n,status:r},[4,Object(c["X"])(t)];case 1:return i=a.sent(),o=i.error_num,s=i.msg,o?this.$Notice.error({title:s}):(this.init_params(),this.$Notice.success({title:s})),[2]}})})}}}),p=d,h=(n("d11f"),n("2877")),m=Object(h["a"])(p,r,i,!1,null,null,null);e["default"]=m.exports},d11f:function(t,e,n){"use strict";var r=n("91f0"),i=n.n(r);i.a},fd9b:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("RadioGroup",{staticClass:"bt-group",attrs:{value:t.value,type:"button",size:t.size},on:{"on-change":function(e){return t.$emit("on-change",e)}}},t._l(t.data,function(e,r){return n("Radio",{key:r,staticClass:"bt-radio",style:t.style_name,attrs:{label:e},nativeOn:{click:function(n){return t.$emit("on-navite",e)}}})}),1)},i=[],a=n("2b0e"),o=a["default"].extend({model:{prop:"value",event:"on-change"},props:{style_name:{type:Object||Number,default:function(){}},value:{type:String||Number,default:function(){return""}},data:{type:Array||Object,default:function(){return[]}},size:{type:String,default:function(){return"default"}}}}),s=o,c=(n("61a5"),n("2877")),u=Object(c["a"])(s,r,i,!1,null,"dbfcdeb2",null),l=u.exports;e["a"]=l}}]);