(window.webpackJsonp=window.webpackJsonp||[]).push([[5,15],{102:function(t,e,n){"use strict";n.r(e);var i=n(90),r=n(93),a=n(91),o=n(68),s={name:"BasicLayout",props:{edit:{type:Boolean,default:!0}},components:{Navbar:i.a,Sidebar:r.a,PageEdit:a.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(o.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))},onMouseDown:function(){document.body.classList.add("using-mouse")},onKeyDown:function(){document.body.classList.remove("using-mouse")}}},c=n(2),l=Object(c.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd,mousedown:t.onMouseDown,keydown:t.onKeyDown}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top"),t._v(" "),t._t("sidebar-bottom")],2),t._v(" "),n("div",{staticClass:"page"},[t._t("content"),t._v(" "),t.edit?n("PageEdit"):t._e()],2)],1)}),[],!1,null,null,null);e.default=l.exports},150:function(t,e,n){"use strict";var i=n(76);n.n(i).a},151:function(t,e,n){"use strict";var i=n(77);n.n(i).a},152:function(t,e,n){"use strict";var i=n(78);n.n(i).a},153:function(t,e,n){"use strict";var i=n(79);n.n(i).a},154:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(69);function r(t,e){const n=Object(i.b)(e,e.$page);if(void 0===n)return null;const r=n.frontmatter["international-office"],{cc:a,bcc:o,subject:s,body:{before:c,form:l,after:u}}=t;return{to:r,cc:a,bcc:o,subject:s,body:function(t,{course:e}){let n=t.replace(/(\\n\s|\\n)/g,"\n");return[["title",e.frontmatter.title],["link",e.frontmatter.link]].forEach(([t,e])=>{n=n.replace(new RegExp(`{{\\s?${t}\\s?}}`,"g"),e)}),n}([c,l,u].join(""),{course:e.$page})}}},159:function(t,e,n){},168:function(t,e,n){"use strict";function i({to:t,cc:e,bcc:n,subject:i,body:r}){"string"==typeof t&&(t=[t]),"string"==typeof t&&(e=[e]),"string"==typeof t&&(n=[n]);const a={to:t,cc:e,bcc:n,subject:i,body:r};return Object.entries(a).map(([t,e])=>function(t,e){if(void 0===e)return"";let n=e;return"Array"==typeof e&&(n=e.join(",")),`${encodeURIComponent(t)}=${encodeURIComponent(n)}`}(t,e)).join("&")}var r={name:"Mailer",props:{to:{type:[Array,String],required:!1,default:function(){return[]}},cc:{type:[Array,String],required:!1,default:function(){return[]}},bcc:{type:[Array,String],required:!1,default:function(){return[]}},subject:{type:String,required:!1,default:""},body:{type:String,required:!1,default:""},disabled:{type:Boolean,required:!1,default:!1},variant:{type:String,default:"info"}},data:function(){return{mailto:""}},methods:{mail:function(){return this.disabled?"#":"mailto:?".concat(this.mailto)}},computed:{},updated:function(){this.mailto=i(this)},mounted:function(){this.mailto=i(this)}},a=(n(153),n(2)),o=Object(a.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-link",{staticClass:"link",staticStyle:{display:"flex"},attrs:{href:this.mail()}},[e("b-button",{staticClass:"mailer-button",attrs:{variant:this.variant,disabled:this.disabled}},[this._t("default",[this._v("Mail")]),this._v(" "),this._t("icon",[e("font-awesome-icon",{attrs:{icon:"mail-bulk"}})])],2)],1)],1)}),[],!1,null,"55bfdcec",null);e.a=o.exports},169:function(t,e,n){"use strict";var i=n(92),r=n(75),a={name:"EnrollmentPageDisclaimer",props:{variant:{type:String,default:"warning"},pages:{type:Object,default:function(){}}},components:{AlertCollapse:i.a},data:function(){return{status:!1,display:!0,icon:""}},methods:{onChange:function(t){this.$emit("confirmation-change",t.target.checked)}},computed:{disclaimer:function(){return{general:Object(r.a)("disclaimer",this.pages.enrollment.general.excerpt),university:Object(r.a)("disclaimer",this.pages.enrollment.university.excerpt)}}},created:function(){this.icon=this.display?"chevron-down":"chevron-up"}},o=(n(152),n(2)),s=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AlertCollapse",{attrs:{title:"Privacy Information",variant:t.variant},scopedSlots:t._u([{key:"default",fn:function(){return[n("hr"),t._v(" "),t._t("default",[t._t("start"),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.disclaimer.general)}}),t._v(" "),n("hr"),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.disclaimer.university)}}),t._v(" "),t._t("end")])]},proxy:!0},{key:"footer",fn:function(){return[n("hr"),t._v(" "),n("input",{attrs:{id:"disclaimer-confirmation",type:"checkbox"},on:{change:t.onChange}}),t._v(" "),n("label",{attrs:{for:"disclaimer-confirmation"}},[t._v("I confirm reading this information.")])]},proxy:!0}],null,!0)})}),[],!1,null,"da998624",null);e.a=s.exports},170:function(t,e,n){"use strict";var i=n(92),r=n(69),a=n(75),o={name:"EnrollmentPageMatriculationData",props:{variant:{type:String,default:"info"}},components:{AlertCollapse:i.a},computed:{content:function(){var t=Object(r.d)(this,"/general/enroll.html");return Object(a.a)("matriculation-data",t.excerpt)}}},s=(n(151),n(2)),c=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AlertCollapse",{attrs:{title:"Matriculation Data",initial:!1,variant:t.variant,idKey:"enrollment-matriculation-data-collapse"}},[t._t("default",[t._t("start"),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.content)}}),t._v(" "),t._t("end")])],2)}),[],!1,null,"5dd1bec8",null);e.a=c.exports},271:function(t,e,n){"use strict";var i=n(159);n.n(i).a},283:function(t,e,n){"use strict";n.r(e);n(120);var i=n(102),r=n(170),a=n(169),o={name:"EnrollmentPageCourseSelection",props:{label:{type:String,default:"Select Course:"},choices:{type:Array,required:!0,default:function(){return[]}},choice:{default:""}},data:function(){return{selection:""}},methods:{onChange:function(t){this.$emit("update:choice",t)}},created:function(){this.selection=this.choice}},s=n(2),c=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-form-group",{attrs:{label:t.label,"label-for":"course-select"}},[n("b-form-select",{attrs:{id:"course-select",options:t.choices,required:""},on:{change:t.onChange},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}})],1)}),[],!1,null,"a7116a40",null).exports,l=n(168),u=n(154),d=n(69),f={name:"EnrollmentPage",components:{MatriculationData:r.a,Disclaimer:a.a,CourseSelection:c,Mailer:l.a},props:{course:{type:String,require:!0}},data:function(){return{courseSelection:"",mailerLabel:"Compose E-Mail",confirmation:!1}},computed:{mail:function(){return Object(u.a)(this.$frontmatter.enrollment,this,this.courseSelection)},courses:function(){return Object(d.c)(this)},disableMailer:function(){return!this.confirmation||""===this.courseSelection},university:function(){var t=Object(d.e)(this,this.courseSelection);return void 0===t?null:Object(d.b)(this,t).frontmatter.short}},methods:{onConfirmationChange:function(t){this.confirmation=t}},created:function(){this.$frontmatter.mailerLabel=this.mailerLabel;var t=Object(d.d)(this,this.course);t&&(this.courseSelection=t.frontmatter.title)}},h=(n(271),Object(s.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-default-content"},[n("Content"),t._v(" "),n("MatriculationData",[n("Content",{attrs:{"slot-key":"matriculation-data"}})],1),t._v(" "),n("Disclaimer",{on:{"confirmation-change":t.onConfirmationChange}},[n("Content",{attrs:{"slot-key":"disclaimer"}}),t._v(" "),t.university?n("hr"):t._e(),t._v(" "),n("Content",{attrs:{"slot-key":"disclaimer-"+t.university}})],1),t._v(" "),n("CourseSelection",{attrs:{choice:t.courseSelection,choices:t.courses},on:{"update:choice":function(e){t.courseSelection=e}}}),t._v(" "),n("Mailer",t._b({attrs:{disabled:t.disableMailer}},"Mailer",t.mail,!1),[t._v(t._s(t.mailerLabel))])],1)}),[],!1,null,null,null).exports),p={name:"Enrollment",components:{BasicLayout:i.default,EnrollPage:h},data:function(){return{course:null}},created:function(){var t=this.$route.query.course;void 0!==t&&(this.course=decodeURIComponent(t),this.$router.replace(this.$route.path))}},m=Object(s.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("BasicLayout",[e("EnrollPage",{attrs:{slot:"content",course:this.course},slot:"content"})],1)}),[],!1,null,null,null);e.default=m.exports},69:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"f",(function(){return u})),n.d(e,"h",(function(){return d})),n.d(e,"g",(function(){return f}));function i(t,e){return t.$site.pages.find(({regularPath:t})=>t===e)}function r(t,e){return t.$site.pages.find(t=>t.frontmatter.title===e)}function a(t,e,n="",r="/studyathome/partner/"){const{university:a}=e.frontmatter;return i(t,`${r+(a&&a.name?a.name:"")}/${n}`)}function o(t,e,n="/lecturer/"){let r=[];const{lecturers:a}=e.frontmatter||[];for(const e of a)if(void 0!==e.page){const a=i(t,`${n+e.page}`);void 0!==a&&r.push(a)}return r}function s(t,e){return{general:i(t,"/general/enroll.html"),university:a(t,e,"enroll.html")}}function c(t,e="/courses/"){return function(t,e){return t.$site.pages.filter(({regularPath:t})=>e.includes(t))}(t,i(t,e).frontmatter.indexed).map(t=>t.frontmatter).filter(({state:t})=>t).map(t=>t.title).sort()}function l(t,e,n){const r={course:n};for(const c of e)if(void 0!==c.path){const e=i(t,`${n.path}${c.path}`);void 0!==e&&(r[c.slot]=e)}else c.slot&&("lecturers"===c.slot?r.lecturers=o(t,n):"university"===c.slot?r.university=a(t,n):"enrollment"===c.slot&&(r.enrollment=s(t,n)));return r}function u(t){return t.replace(/h3/g,"h4").replace(/h2/g,"h3").replace(/h1/g,"h2")}function d(t,e){return t.replace(/\$withBase\('\/(.*?)'\)/g,(t,n)=>e+n).replace(/img :src/g,"img class='medium-zoom-image' src")}function f(t){return t.replace(/<Video.*id=["'](.*)["']\/>/g,(t,e)=>`<div id="youtube-container"><iframe id="youtube-player" type="text/html" src="https://www.youtube.com/embed/${e}?autoplay=0controle=0rel=0modestbranding=1origin=" frameborder="0"></iframe></div>`)}},75:function(t,e,n){"use strict";function i(t,e,n="div",i="gslot"){const r=(new DOMParser).parseFromString(e,"text/html").querySelector(`.${i}.${t}`);return r?r.innerHTML:""}n.d(e,"a",(function(){return i}))},76:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){},79:function(t,e,n){},92:function(t,e,n){"use strict";var i={name:"AlertCollapse",props:{icon:{type:String,default:"chevron-down"},idKey:{type:String,default:"alert-collapse"},title:{type:String,default:"Title"},variant:{type:String,default:"primary"},ariaLabel:{type:String,default:"Collapse"},initial:{type:Boolean,default:!0}},data:function(){return{display:!0}},created:function(){this.display=this.initial}},r=(n(150),n(2)),a=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-alert",{attrs:{show:"",variant:t.variant}},[n("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.idKey,expression:"idKey"}],staticClass:"toggle-collapse",attrs:{"aria-label":t.ariaLabel,tabindex:"0"},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.display=!t.display}}},[n("span",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),t._t("icon",[n("font-awesome-icon",{staticClass:"icon",class:{"rotate-down":!t.display,"rotate-up":t.display},attrs:{size:"lg",icon:t.icon}})])],2),t._v(" "),n("b-collapse",{attrs:{id:t.idKey},model:{value:t.display,callback:function(e){t.display=e},expression:"display"}},[t._t("default")],2),t._v(" "),t._t("footer")],2)],1)}),[],!1,null,"86034f1a",null);e.a=a.exports}}]);