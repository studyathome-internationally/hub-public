(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{351:function(e,t,n){"use strict";var r=n(2),i=n(29).find,o=n(89),s=n(16),a=!0,c=s("find");"find"in[]&&Array(1).find((function(){a=!1})),r({target:"Array",proto:!0,forced:a||!c},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o("find")},417:function(e,t,n){},511:function(e,t,n){"use strict";var r=n(417);n.n(r).a},534:function(e,t,n){"use strict";n.r(t);n(23),n(351),n(147),n(40),n(148),n(62);var r={name:"CourseSelection",props:{path:{type:String,default:"/courses/"},placeholder:{type:String,default:"-- Please choose a course --"}},data:function(){return{selection:""}},computed:{index:function(){var e=this;return this.$site.pages.find((function(t){return t.regularPath===e.path})).frontmatter.indexed},courses:function(){var e=this;return this.$site.pages.filter((function(t){var n=t.regularPath;return t.frontmatter.state&&e.index.includes(n)}))}},watch:{selection:function(e,t){var n=this.$route.query,r=n.course,i=n.home;e!==r&&this.$router.replace({path:this.$route.path,query:{course:e,home:i}})}},created:function(){this.selection=this.$route.query.course||""}},i=(n(511),n(22)),o=Object(i.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select",attrs:{id:"course-select"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selection,expression:"selection"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selection=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:""}},[e._v(e._s(e.placeholder))]),e._v(" "),e._l(e.courses,(function(t){return n("option",{key:t.title,domProps:{value:t.title}},[e._v(e._s(t.title))])}))],2),e._v(" "),n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"angle-down"}})],1)}),[],!1,null,"6c9f47c5",null);t.default=o.exports}}]);