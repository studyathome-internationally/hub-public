(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{399:function(t,n,r){},478:function(t,n,r){r(157),t.exports={append:function(t,n){var r="?";for(var e in n){var a=n[e];r+="boolean"==typeof a?"".concat(e,"=").concat(a?"1":"0"):"".concat(e,"=").concat(a),r+="&"}return t+(r=r.substring(0,r.length-1))}}},479:function(t,n,r){"use strict";var e=r(399);r.n(e).a},509:function(t,n,r){"use strict";r.r(n);var e=r(478),a={name:"Youtube",props:{id:{type:String,required:!0},hl:{type:String,default:"en"}},data:function(){return{src:"https://www.youtube-nocookie.com/embed/",params:{autoplay:!1,cc_load_policy:!0,controls:!0,rel:!1,modestbranding:!0,hl:"en",origin:""}}},computed:{url:function(){var t=this.src+this.id;return Object(e.append)(t,this.params)}},created:function(){this.params.hl=this.hl}},o=(r(479),r(22)),i=Object(o.a)(a,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"container"}},[n("iframe",{attrs:{id:"player",type:"text/html",src:this.url,frameborder:"0"}})])}),[],!1,null,"760413ff",null);n.default=i.exports}}]);