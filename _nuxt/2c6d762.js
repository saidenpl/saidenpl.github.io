(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{255:function(t,n,e){var content=e(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(78).default)("78010ed6",content,!0,{sourceMap:!1})},259:function(t,n,e){"use strict";e(255)},260:function(t,n,e){var r=e(77)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.inverted[data-v-c568c976]{\n  filter:invert()\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},261:function(t,n,e){var content=e(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(78).default)("29603716",content,!0,{sourceMap:!1})},262:function(t,n,e){"use strict";e.r(n);e(22),e(79);var r={name:"DevIcon",props:{name:{type:String,default:"ruby"},size:{type:String,default:"16"},classes:{type:String,default:""},wordmark:{type:String,default:""}},data:function(){var t="rails"===this.name?"true":this.wordmark;return{iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/".concat(this.name,"/").concat(this.name,"-original").concat("true"===t?"-wordmark":"",".svg"),classList:"h-".concat(this.size)}}},c=(e(259),e(45)),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("img",{class:t.classList,attrs:{src:t.iconUrl,alt:""}})}),[],!1,null,"c568c976",null);n.default=component.exports},264:function(t,n,e){"use strict";e(261)},265:function(t,n,e){var r=e(77)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.tag-wrapper[data-v-03e91aea]{\n  margin-top:0.5rem;\n  margin-right:0.5rem;\n  display:inline-block;\n  width:8rem;\n  border-radius:0.75rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(156, 163, 175, var(--tw-bg-opacity));\n  padding:0.5rem;\n  font-size:0.75rem;\n  line-height:1rem;\n  text-transform:uppercase\n}\n.tag-icon[data-v-03e91aea], .tag-label[data-v-03e91aea]{\n  display:inline-block;\n  vertical-align:middle\n}\n.tag-icon[data-v-03e91aea]{\n  width:20%\n}\n.tag-label[data-v-03e91aea]{\n  display:inline-block;\n  width:60%;\n  text-align:center;\n  --tw-text-opacity:1;\n  color:rgba(0, 0, 0, var(--tw-text-opacity))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},268:function(t,n,e){"use strict";e.r(n);var r={props:{name:{type:String,default:""}}},c=(e(264),e(45)),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tag-wrapper"},[e("div",{staticClass:"tag-icon"},[e("DevIcon",{attrs:{name:t.name,size:"4"}})],1),t._v(" "),e("div",{staticClass:"tag-label"},[t._v(t._s(t.name))])])}),[],!1,null,"03e91aea",null);n.default=component.exports;installComponents(component,{DevIcon:e(262).default})}}]);