(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{393:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n(193);var a=function(t,e){return t.reduce((function(t,e){return t&&void 0!==t[e]?t[e]:null}),e)}},395:function(t,e,n){},396:function(t,e,n){},401:function(t,e,n){"use strict";n(194);var a={name:"Figure",props:{src:{type:String,required:!0},zoom:{type:Boolean,default:!0},alt:{type:String,default:""},title:{type:String,default:null}},computed:{source:function(){return this.src.startsWith("/")?this.$withBase(this.src):this.src}}},i=(n(420),n(20)),s=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",class:{"no-zoom":!this.zoom}},[e("img",{attrs:{src:this.source,alt:this.alt,title:this.title||this.alt}})])}),[],!1,null,"e8be841e",null);e.a=s.exports},419:function(t,e,n){"use strict";var a=n(395);n.n(a).a},420:function(t,e,n){"use strict";var a=n(396);n.n(a).a},425:function(t,e,n){},426:function(t,e,n){},455:function(t,e,n){"use strict";var a={name:"Home",components:{NavLink:n(399).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(n(419),n(20)),s=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,a){return n("div",{key:a,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);e.a=s.exports},497:function(t,e,n){"use strict";var a=n(425);n.n(a).a},498:function(t,e,n){"use strict";var a=n(426);n.n(a).a},540:function(t,e,n){"use strict";n.r(e);var a=n(455),i=n(453),s=n(393),r={name:"Position",computed:{show:function(){return!!Object(s.a)(["$frontmatter","position"],this)},role:function(){return Object(s.a)(["$frontmatter","position","role"],this)||""},department:function(){return Object(s.a)(["$frontmatter","position","department"],this)||""},href:function(){return Object(s.a)(["$frontmatter","position","href"],this)||""}}},o=n(20),c=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",[n("div",{staticClass:"position"},[t.href?n("a",{attrs:{href:t.href,rel:"noopener",target:"_blank"}},[t._v("\n      "+t._s(t.role)+"\n      "),n("OutboundLink")],1):n("span",[t._v(t._s(t.role))])]),t._v(" "),n("div",[t._v(t._s(t.department))])]):t._e()}),[],!1,null,"68d6f982",null).exports,l=(n(51),n(79),n(398),{name:"Contact",props:{contact:{type:[String,Object],required:!0,default:null}},computed:{href:function(){var t="";return t="string"==typeof this.contact?this.contact:this.contact.href,"mail"===this.$vnode.key?t="mailto:".concat(t):"tel"===this.$vnode.key&&(t="tel:".concat(t)),t},label:function(){var t="";return"string"==typeof this.contact?"tel"===this.$vnode.key?t=this.href.replace("tel:",""):"mail"===this.$vnode.key?t=this.href.replace("mailto:",""):"linkedin"===this.$vnode.key?t="LinkedIn":"reasearchgate"===this.$vnode.key&&(t="ResearchGate"):t=this.contact.label,t},icon:function(){var t=["fas","globe"];return"string"==typeof this.contact?"tel"===this.$vnode.key?t=["fas","phone-alt"]:"mail"===this.$vnode.key?t=["fas","envelope"]:"linkedin"===this.$vnode.key?t=["fab","linkedin"]:"reasearchgate"===this.$vnode.key&&(t=["fab","researchgate"]):t=this.contact.icon.split("-"),t}}}),u={name:"Contacts",components:{Contact:Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("font-awesome-icon",{attrs:{icon:t.icon}}),t._v(" "),n("a",{attrs:{href:t.href,rel:"noopener",target:"_blank"}},[t._v(t._s(t.label)),"mail"!==t.$vnode.key&&"tel"!==t.$vnode.key?n("OutboundLink"):t._e()],1)],1)}),[],!1,null,"123c4f0a",null).exports},computed:{show:function(){return!!Object(s.a)(["$frontmatter","contact"],this)},contacts:function(){return Object(s.a)(["$frontmatter","contact"],this)||{}}}},h=Object(o.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",[n("div",{staticClass:"title"},[t._v("Contact")]),t._v(" "),n("ul",t._l(t.contacts,(function(e,a){return n("Contact",{key:a,attrs:{contact:t.contacts[a]}})})),1)]):t._e()}),[],!1,null,"7890ff9d",null).exports,d=(n(25),n(183),n(78),n(184),{name:"Courses",computed:{courses:function(){var t=this.$page.path;return this.$site.pages.filter((function(e){return(Object(s.a)(["frontmatter","lecturers"],e)||[]).includes(t)})).map((function(t){var e=t.path;return{title:t.title,path:e}}))}}}),f=Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.courses.length>0?n("div",[n("div",{staticClass:"title"},[t._v("Courses")]),t._v(" "),n("ul",t._l(t.courses,(function(e){return n("li",{key:e.title},[n("router-link",{attrs:{to:e.path}},[t._v("\n        "+t._s(e.title)+"\n      ")])],1)})),0)]):t._e()}),[],!1,null,"2ce38269",null).exports,v={name:"Experience",computed:{experience:function(){return Object(s.a)(["$frontmatter","experience"],this)||[]}}},p=(n(497),{name:"Information",components:{Position:c,Contacts:h,Experience:Object(o.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.experience.length>0?n("div",[n("div",{staticClass:"title"},[t._v("Experience")]),t._v(" "),n("ul",t._l(t.experience,(function(e){return n("li",{key:e},[t._v(t._s(e))])})),0)]):t._e()}),[],!1,null,"4caf5502",null).exports,Courses:f}}),m=Object(o.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Position"),this._v(" "),e("Contacts"),this._v(" "),e("Courses"),this._v(" "),e("Experience")],1)}),[],!1,null,null,null).exports,_={name:"Overview",components:{Figure:n(401).a,Information:m},computed:{src:function(){return Object(s.a)(["$frontmatter","portrait"],this)||""}}},b=Object(o.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v(this._s(this.$page.title))]),this._v(" "),e("div",{staticClass:"overview"},[e("Figure",{staticClass:"portrait",attrs:{src:this.src,zoom:!1}}),this._v(" "),e("Information",{staticClass:"information"})],1)])}),[],!1,null,null,null).exports,g=n(456),$=n(457),C={components:{PageEdit:g.a,PageNav:$.a,Overview:b},props:["sidebarItems"]},k=(n(498),Object(o.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"page lecturer"},[e("div",{staticClass:"theme-default-content"},[e("Overview"),this._v(" "),e("Content")],1),this._v(" "),e("PageEdit"),this._v(" "),e("PageNav",this._b({},"PageNav",{sidebarItems:this.sidebarItems},!1))],1)}),[],!1,null,null,null).exports),y=n(454),O=n(394),S={name:"Lecturer",components:{Home:a.a,Page:k,Sidebar:y.a,Navbar:i.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(O.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},x=Object(o.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),n("Page",{attrs:{"sidebar-items":t.sidebarItems}})],1)}),[],!1,null,null,null);e.default=x.exports}}]);