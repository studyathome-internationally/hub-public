(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{135:function(t,e,s){"use strict";var a=s(35),n=s(36),i=s(79),r="".startsWith;a(a.P+a.F*s(80)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),s=n(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),a=String(t);return r?r.call(e,a,s):e.slice(s,s+a.length)===a}})},136:function(t,e,s){},137:function(t,e,s){},138:function(t,e,s){},139:function(t,e,s){},140:function(t,e,s){},141:function(t,e,s){},146:function(t,e,s){},147:function(t,e,s){},148:function(t,e,s){},149:function(t,e,s){},252:function(t,e,s){"use strict";var a=s(136);s.n(a).a},253:function(t,e,s){"use strict";var a=s(137);s.n(a).a},254:function(t,e,s){"use strict";var a=s(138);s.n(a).a},255:function(t,e,s){"use strict";var a=s(139);s.n(a).a},263:function(t,e,s){"use strict";var a=s(140);s.n(a).a},264:function(t,e,s){"use strict";var a=s(141);s.n(a).a},275:function(t,e,s){"use strict";var a=s(146);s.n(a).a},276:function(t,e,s){"use strict";var a=s(147);s.n(a).a},277:function(t,e,s){"use strict";var a=s(148);s.n(a).a},278:function(t,e,s){"use strict";var a=s(149);s.n(a).a},287:function(t,e,s){"use strict";s.r(e);var a=s(158),n=(s(135),{name:"CoursePageDetails",props:{pages:{type:Object,default:function(){return{universityPage:{title:"University Name"}}}}},computed:{university:function(){return this.pages.universityPage},title:function(){return this.university&&void 0!==this.university.title?this.university.title:"Default Title"}}}),i=(s(252),s(2)),r=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"title"},[e("h1",[this._v(this._s(this.$page.title))])])])}),[],!1,null,"2652063e",null).exports,o={name:"CoursePageEditLink",props:{pages:{type:Object,default:function(){}},page:{type:String,default:"default"}},methods:{createEditLink:function(t,e,s,a,n){return"https://github.com/".concat(e)+"/edit"+"/".concat(a,"/")+s+"/"+n}},computed:{lastUpdated:function(){return this.pages[this.page].lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=this.pages[this.page],e=this.$site.themeConfig,s=e.repo,a=e.docsDir,n=void 0===a?"":a,i=e.docsBranch,r=void 0===i?"master":i,o=e.docsRepo,u=void 0===o?s:o;return u&&t.relativePath?this.createEditLink(s,u,n,r,t.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}}},u=Object(i.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"page-edit"},[t.editLink?s("div",{staticClass:"edit-link"},[s("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),s("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?s("div",{staticClass:"last-updated"},[s("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),s("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,"53f17545",null).exports,c={name:"CoursePageOverview",props:{pages:{type:Object,default:function(){}}},components:{CoursePageEditLink:u},computed:{overview:function(){return this.pages.overview.excerpt}}},l=(s(253),Object(i.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"theme-default-content"},[e("div",{staticClass:"overview-content"},[this._m(0),this._v(" "),e("div",{domProps:{innerHTML:this._s(this.overview)}})]),this._v(" "),this._m(1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"course-media"},[e("img",{attrs:{src:"https://studyathome-internationally.github.io/hub-public/next/assets/img/courses/asterics-grid.jpg",alt:"Image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar-content"},[e("div",[e("h3",[this._v("Sidebar")]),this._v(" "),e("p",[this._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.")])])])}],!1,null,"5ad2d18c",null).exports),p={name:"CoursePageAssessment",props:{pages:{type:Object,default:function(){}}},components:{CoursePageEditLink:u},computed:{assessment:function(){return this.pages.assessment.excerpt}}},d=(s(254),Object(i.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"theme-default-content"},[e("div",{domProps:{innerHTML:this._s(this.assessment)}}),this._v(" "),e("CoursePageEditLink",{attrs:{pages:this.pages,page:"assessment"}})],1)}),[],!1,null,"54374788",null).exports),m={name:"CoursePageRequirements",props:{pages:{type:Object,default:function(){}}},components:{CoursePageEditLink:u},computed:{requirements:function(){return this.pages.requirements.excerpt}}},f=(s(255),Object(i.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"theme-default-content"},[e("div",{domProps:{innerHTML:this._s(this.requirements)}}),this._v(" "),e("CoursePageEditLink",{attrs:{pages:this.pages,page:"assessment"}})],1)}),[],!1,null,"25fc0cec",null).exports),h=s(66),g={name:"CoursePageLecturers",props:{lecturer:{type:Object,default:function(){}}},methods:{subHeading:h.f}},v=Object(i.a)(g,(function(){var t=this.$createElement;return(this._self._c||t)("div",{domProps:{innerHTML:this._s(this.subHeading(this.lecturer.excerpt))}})}),[],!1,null,"fc3eb6e8",null).exports,b={name:"CoursePageLecturers",props:{pages:{type:Object,default:function(){}}},components:{CoursePageLecturer:v},computed:{lecturers:function(){return this.pages.lecturers}}},C=(s(263),Object(i.a)(b,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"theme-default-content"},[e("div",this._l(this.lecturers,(function(t){return e("CoursePageLecturer",{key:t.regularPath,attrs:{lecturer:t}})})),1)])}),[],!1,null,"61782f92",null).exports),_={name:"CoursePageUniversity",props:{pages:{type:Object,default:function(){}}},computed:{university:function(){return Object(h.f)(this.pages.university.excerpt)}}},P=(s(264),Object(i.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"theme-default-content"},[e("div",{domProps:{innerHTML:this._s(this.university)}})])}),[],!1,null,"4891129c",null).exports),y=s(95),L={name:"EnrollmentPageDescription",data:function(){return{}},computed:{content:function(){var t=Object(h.d)(this,"/general/enroll.html");return Object(y.a)("content",t.excerpt)}}},O=Object(i.a)(L,(function(){var t=this.$createElement;return(this._self._c||t)("div",{domProps:{innerHTML:this._s(this.content)}})}),[],!1,null,"301ae0bd",null).exports,j=s(193),E=s(194),k=s(191),x=s(187),$={name:"CoursePageEnrollment",components:{Description:O,MatriculationData:j.a,Disclaimer:E.a,Mailer:k.a},props:{pages:{type:Object,default:function(){return{}}}},data:function(){return{mailerLabel:"Compose E-Mail",confirmation:!1}},computed:{disableMailer:function(){return!this.confirmation},mail:function(){return Object(x.a)(this.pages.enrollment.general.frontmatter.enrollment,this)}},methods:{onConfirmationChange:function(t){this.confirmation=t}}},T=(s(275),{name:"CoursePageContent",components:{CoursePageOverview:l,CoursePageAssessment:d,CoursePageRequirements:f,CoursePageLecturers:C,CoursePageUniversity:P,CoursePageEnrollment:Object(i.a)($,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"theme-default-content"},[s("Description"),t._v(" "),s("MatriculationData",{attrs:{variant:"primary"}}),t._v(" "),s("Disclaimer",{attrs:{pages:t.pages,variant:"info"},on:{"confirmation-change":t.onConfirmationChange}}),t._v(" "),s("Mailer",t._b({attrs:{disabled:t.disableMailer,variant:"primary"}},"Mailer",t.mail,!1),[t._v(t._s(t.mailerLabel))])],1)}),[],!1,null,"5fb5a091",null).exports,CoursePageEditLink:u},props:{tabs:{type:Array,default:function(){return[]}},page:{type:String,default:"overview"},pages:{type:Object,default:function(){}}}}),w=Object(i.a)(T,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},["assessment"===t.page?s("CoursePageAssessment",{attrs:{pages:t.pages}}):"requirements"===t.page?s("CoursePageRequirements",{attrs:{pages:t.pages}}):"lecturers"===t.page?s("CoursePageLecturers",{attrs:{pages:t.pages}}):"university"===t.page?s("CoursePageUniversity",{attrs:{pages:t.pages}}):"enrollment"===t.page?s("CoursePageEnrollment",{attrs:{pages:t.pages}}):s("CoursePageOverview",{attrs:{pages:t.pages}})],1)}),[],!1,null,"aff3f03a",null).exports,U={name:"IconTab",props:{tab:{type:Object,required:!0},active:{type:Boolean,default:!1}},methods:{onClick:function(){this.$emit("tab-change",this.tab.slot)}},computed:{id:function(){return"#".concat(this.tab.slot)}}},M=(s(276),Object(i.a)(U,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"tab",class:{active:t.active},attrs:{href:t.id},on:{click:t.onClick}},[t.tab.icon?s("font-awesome-icon",{staticClass:"tab-icon",attrs:{icon:t.tab.icon,size:"lg"}}):t._e(),t._v(" "),s("span",[t._v(t._s(t.tab.title))])],1)}),[],!1,null,"9a687b3e",null).exports),q={name:"IconTabs",props:{tabs:{type:Array,default:function(){return[]}},tab:{type:String,default:"default"}},components:{IconTab:M},data:function(){return{}},methods:{onTabChange:function(t){this.$emit("update:tab",t)}}},D=(s(277),{name:"CourseTabsPage",components:{CoursePageDetails:r,IconTabs:Object(i.a)(q,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"tabs"},t._l(t.tabs,(function(e){return s("IconTab",{key:e.slot,attrs:{tab:e,active:t.tab===e.slot},on:{"tab-change":t.onTabChange}})})),1)}),[],!1,null,"5a20834d",null).exports,CoursePageContent:w},props:{tabs:{type:[Array,Object],default:function(){return[]}}},data:function(){return{activePage:"overview",pages:null}},methods:{onTabChange:function(t){this.activePage=t},updateTab:function(){var t=this.$route.hash;this.activePage=t.startsWith("#")?t.substring(1):"overview"}},computed:{},created:function(){this.pages=Object(h.a)(this,this.tabs,this.$page)},mounted:function(){this.updateTab()}}),A=(s(278),Object(i.a)(D,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"course-page"},[s("CoursePageDetails",{attrs:{pages:t.pages}}),t._v(" "),s("div",[s("IconTabs",{staticClass:"sticky",attrs:{tabs:t.tabs,tab:t.activePage},on:{"update:tab":function(e){t.activePage=e}}}),t._v(" "),s("CoursePageContent",{staticClass:"main-content",attrs:{page:t.activePage,tabs:t.tabs,pages:t.pages}})],1)],1)}),[],!1,null,"c8c4aa20",null).exports),S=(s(64),{name:"Course",components:{BasicLayout:a.default,CourseTabsPage:A},data:function(){return{isSidebarOpen:!1,tabs:[{title:"Overview",slot:"overview",path:"overview.html",icon:"anchor"},{title:"Assessment",slot:"assessment",path:"assessment.html",icon:"balance-scale"},{title:"Requirements",slot:"requirements",path:"requirements.html",icon:"certificate"},{title:"Lecturer",slot:"lecturers",icon:"chalkboard-teacher"},{title:"University",slot:"university",icon:"university"},{title:"Enrollment",slot:"enrollment",icon:"envelope"}]}},computed:{},methods:{}}),H=Object(i.a)(S,(function(){var t=this.$createElement,e=this._self._c||t;return e("BasicLayout",{attrs:{edit:!1}},[e("CourseTabsPage",{attrs:{slot:"content",tabs:this.tabs},slot:"content"})],1)}),[],!1,null,null,null);e.default=H.exports}}]);