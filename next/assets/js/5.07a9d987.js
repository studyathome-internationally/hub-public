(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{117:function(t,e,n){var a=n(118),o=n(123),i=n(124),r="[object String]";t.exports=function(t){return"string"==typeof t||!o(t)&&i(t)&&a(t)==r}},118:function(t,e,n){var a=n(77),o=n(121),i=n(122),r="[object Null]",s="[object Undefined]",c=a?a.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?s:r:c&&c in Object(t)?o(t):i(t)}},119:function(t,e,n){var a=n(120),o="object"==typeof self&&self&&self.Object===Object&&self,i=a||o||Function("return this")();t.exports=i},120:function(t,e){var n="object"==typeof global&&global&&global.Object===Object&&global;t.exports=n},121:function(t,e,n){var a=n(77),o=Object.prototype,i=o.hasOwnProperty,r=o.toString,s=a?a.toStringTag:void 0;t.exports=function(t){var e=i.call(t,s),n=t[s];try{t[s]=void 0;var a=!0}catch(t){}var o=r.call(t);return a&&(e?t[s]=n:delete t[s]),o}},122:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},123:function(t,e){var n=Array.isArray;t.exports=n},124:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},125:function(t,e,n){"use strict";var a=n(68);n.n(a).a},126:function(t,e,n){"use strict";var a=n(69);n.n(a).a},164:function(t,e,n){"use strict";n.r(e);var a={components:{NavLink:n(91).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},o=(n(96),n(2)),i=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,a){return n("div",{key:a,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports,r=n(78),s=n(80),c=n(64),u=n(117),l=n.n(u),h=n(115),d=n.n(h),v={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return f(p.PREV,this)},next:function(){return f(p.NEXT,this)}}};var p={NEXT:{resolveLink:function(t,e){return g(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return g(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function f(t,e){var n=e.$themeConfig,a=e.$page,o=e.$route,i=e.$site,r=e.sidebarItems,s=t.resolveLink,u=t.getThemeLinkConfig,h=t.getPageLinkConfig,v=u(n),p=h(a),f=d()(p)?v:p;return!1===f?void 0:l()(f)?Object(c.k)(i.pages,f,o.path):s(a,r)}function g(t,e,n){var a=[];!function t(e,n){for(var a=0,o=e.length;a<o;a++)"group"===e[a].type?t(e[a].children||[],n):n.push(e[a])}(e,a);for(var o=0;o<a.length;o++){var i=a[o];if("page"===i.type&&i.path===decodeURIComponent(t.path))return a[o+n]}}var b=v,m=(n(125),Object(o.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))]):t._e(),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports),_={components:{PageEdit:s.a,PageNav:m},props:["sidebarItems"]},C=(n(126),{name:"Layout",components:{Home:i,Page:Object(o.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports,Sidebar:n(79).a,Navbar:r.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(c.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))},onMouseDown:function(){document.body.classList.add("using-mouse")},onKeyDown:function(){document.body.classList.remove("using-mouse")}}}),S=Object(o.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd,mousedown:t.onMouseDown,keydown:t.onKeyDown}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)}),[],!1,null,null,null);e.default=S.exports},67:function(t,e,n){},68:function(t,e,n){},69:function(t,e,n){},77:function(t,e,n){var a=n(119).Symbol;t.exports=a},96:function(t,e,n){"use strict";var a=n(67);n.n(a).a}}]);