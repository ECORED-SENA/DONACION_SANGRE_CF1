(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c796899c"],{ab14:function(t,e,s){"use strict";e["a"]={data:()=>({mainId:Math.floor(1e7*Math.random()),selected:0,elements:[],stateStr:"",rendered:!1}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((t,e)=>({id:this.mainId+e+1,html:t.elm.outerHTML,titulo:t.data&&t.data.attrs&&t.data.attrs.titulo,icono:t.data&&t.data.attrs&&t.data.attrs.icono})),this.selected=this.selected>0?this.selected:this.elements[0].id,void(this.stateStr=this.getStateStr())):[]},getActiveHeight(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(t=>t.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},d0b1:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tabs-b"},[s("div",{staticClass:"tabs-b__header row m-0"},t._l(t.elements,(function(e,a){return s("div",{key:"tabs-b-menu-"+e.id,staticClass:"col-6 col-sm-4 col-lg tabs-b__tab",class:{"tabs-b__tab--active":t.selected===e.id},on:{click:function(s){t.selected=e.id}}},[e.icono?s("div",{staticClass:"tabs-b__tab__icon"},[s("img",{attrs:{src:e.icono}})]):t._e(),s("div",{staticClass:"tabs-b__tab__title"},[t._v(t._s(e.titulo))])])})),0),t._l(t.elements,(function(e){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.selected===e.id,expression:"selected === elm.id"}],key:"tabs-content-"+e.id,staticClass:"tabs-b__content-item",domProps:{innerHTML:t._s(e.html)}})})),s("div",{staticClass:"tabs__slot"},[t._t("default")],2)],2)},i=[],d=s("ab14"),n={name:"TabsB",mixins:[d["a"]]},o=n,r=s("2877"),l=Object(r["a"])(o,a,i,!1,null,"314d46b6",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-c796899c.5ee4f487.js.map