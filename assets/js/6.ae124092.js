(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{102:function(t,e,n){"use strict";var a=n(71);n.n(a).a},121:function(t,e,n){var a=n(122),r=n(127),o=n(128),i="[object String]";t.exports=function(t){return"string"==typeof t||!r(t)&&o(t)&&a(t)==i}},122:function(t,e,n){var a=n(81),r=n(125),o=n(126),i="[object Null]",s="[object Undefined]",c=a?a.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?s:i:c&&c in Object(t)?r(t):o(t)}},123:function(t,e,n){var a=n(124),r="object"==typeof self&&self&&self.Object===Object&&self,o=a||r||Function("return this")();t.exports=o},124:function(t,e){var n="object"==typeof global&&global&&global.Object===Object&&global;t.exports=n},125:function(t,e,n){var a=n(81),r=Object.prototype,o=r.hasOwnProperty,i=r.toString,s=a?a.toStringTag:void 0;t.exports=function(t){var e=o.call(t,s),n=t[s];try{t[s]=void 0;var a=!0}catch(t){}var r=i.call(t);return a&&(e?t[s]=n:delete t[s]),r}},126:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},127:function(t,e){var n=Array.isArray;t.exports=n},128:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},129:function(t,e){t.exports=function(t){return null==t}},130:function(t,e,n){"use strict";var a=n(72);n.n(a).a},131:function(t,e,n){"use strict";var a=n(73);n.n(a).a},143:function(t,e,n){"use strict";var a={components:{NavLink:n(96).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},r=(n(102),n(2)),o=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,a){return n("div",{key:a,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports,i=n(83),s=n(85),c=n(65),l=n(121),u=n.n(l),h=n(129),p=n.n(h),v={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return d(f.PREV,this)},next:function(){return d(f.NEXT,this)}}};var f={NEXT:{resolveLink:function(t,e){return g(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return g(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function d(t,e){var n=e.$themeConfig,a=e.$page,r=e.$route,o=e.$site,i=e.sidebarItems,s=t.resolveLink,l=t.getThemeLinkConfig,h=t.getPageLinkConfig,v=l(n),f=h(a),d=p()(f)?v:f;return!1===d?void 0:u()(d)?Object(c.k)(o.pages,d,r.path):s(a,i)}function g(t,e,n){var a=[];!function t(e,n){for(var a=0,r=e.length;a<r;a++)"group"===e[a].type?t(e[a].children||[],n):n.push(e[a])}(e,a);for(var r=0;r<a.length;r++){var o=a[r];if("page"===o.type&&o.path===decodeURIComponent(t.path))return a[r+n]}}var b=v,m=(n(130),Object(r.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))]):t._e(),t._v("→\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports),_={components:{PageEdit:s.a,PageNav:m},props:["sidebarItems"]},x=(n(131),{components:{Home:o,Page:Object(r.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports,Sidebar:n(84).a,Navbar:i.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(c.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),C=Object(r.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)}),[],!1,null,null,null);e.a=C.exports},257:function(t,e,n){"use strict";n.r(e);var a={components:{ParentLayout:n(143).a}},r=n(2),o=Object(r.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("ParentLayout")}),[],!1,null,null,null);e.default=o.exports},71:function(t,e,n){},72:function(t,e,n){},73:function(t,e,n){},81:function(t,e,n){var a=n(123).Symbol;t.exports=a}}]);