(window.webpackJsonp=window.webpackJsonp||[]).push([[6,10],{133:function(t,e,n){},226:function(t,e,n){var r=n(36);r(r.S+r.F*!n(4),"Object",{defineProperty:n(14).f})},227:function(t,e,n){var r=n(36);r(r.S+r.F*!n(4),"Object",{defineProperties:n(46)})},228:function(t,e,n){var r=n(36),o=n(229),i=n(15),a=n(28),s=n(231);r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,r=i(t),c=a.f,u=o(r),l={},h=0;u.length>h;)void 0!==(n=c(r,e=u[h++]))&&s(l,e,n);return l}})},229:function(t,e,n){var r=n(40),o=n(230),i=n(9),a=n(3).Reflect;t.exports=a&&a.ownKeys||function(t){var e=r.f(i(t)),n=o.f;return n?e.concat(n(t)):e}},230:function(t,e){e.f=Object.getOwnPropertySymbols},231:function(t,e,n){"use strict";var r=n(14),o=n(24);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},232:function(t,e,n){"use strict";var r=n(36),o=n(66)(0),i=n(67)([].forEach,!0);r(r.P+r.F*!i,"Array",{forEach:function(t){return o(this,t,arguments[1])}})},233:function(t,e,n){t.exports=n(234)},234:function(t,e,n){n(235);var r=n(69).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},235:function(t,e,n){var r=n(87);r(r.S+r.F*!n(78),"Object",{defineProperty:n(77).f})},236:function(t,e,n){"use strict";var r=n(133);n.n(r).a},243:function(t,e,n){"use strict";n.r(e);var r=n(91),o=(n(226),n(227),n(228),n(232),n(86),n(92),n(94),n(111),n(233)),i=n.n(o);function a(t,e,n){return e in t?i()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var c={props:{enrollment:{type:Object,required:!0}},data:function(){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},this.enrollment,{bodyHeader:"<h3 style='display: inline-flex; align-items: center;'><img style='height: 2rem;' src='https://studyathome-internationally.github.io/hub-public/assets/img/logos/studyathome-noir.svg'/><span style='color: #0f303e; margin-left: 6px;'>StudyATHome Internationally<span></h3></hr>"})},methods:{mailto:function(){return"mailto:?".concat(this.getTo).concat(this.getSubject).concat(this.getCC).concat(this.getBCC).concat(this.getBody)},construct:function(t,e){var n=e;return"Array"==typeof e&&(n=e.join(",")),n=escape?escape(n):n,"&".concat(t,"=").concat(n)}},computed:{getTo:function(){return this.construct("to",this.to)},getSubject:function(){return this.construct("subject",this.subject)},getCC:function(){return this.construct("cc",this.cc)},getBCC:function(){return this.construct("bcc",this.bcc)},getBody:function(){var t=[this.bodyHeader,this.body].join("\n");return t=t.replace(/\\n/g,"<br/>"),this.construct("body",t)},bodyN:function(){return encodeURI(this.body)}}},u=(n(236),n(2)),l={components:{JoinButton:Object(u.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-link",{staticClass:"link",staticStyle:{display:"flex"},attrs:{href:this.mailto()}},[e("b-button",{staticClass:"join-button",attrs:{variant:"info"}},[this._v("\n    Open E-Mail Template\n    "),e("font-awesome-icon",{attrs:{icon:"mail-bulk"}})],1)],1)}),[],!1,null,"ebca2cfc",null).exports}},h=Object(u.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"theme-default-content"},[e("Content"),this._v(" "),e("JoinButton",{attrs:{enrollment:this.$frontmatter.enrollment}})],1)}),[],!1,null,null,null).exports,f={components:{BasicLayout:r.default,EnrollPage:h},data:function(){return{}}},b=Object(u.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("BasicLayout",[e("EnrollPage",{attrs:{slot:"content"},slot:"content"})],1)}),[],!1,null,null,null);e.default=b.exports},91:function(t,e,n){"use strict";n.r(e);var r=n(80),o=n(81),i=n(82),a=n(64),s={components:{Navbar:r.a,Sidebar:o.a,PageEdit:i.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(a.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},c=n(2),u=Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t._t("content"),t._v(" "),n("PageEdit")],2)}),[],!1,null,null,null);e.default=u.exports}}]);