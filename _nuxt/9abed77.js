(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{208:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{story:{content:{}}}},mounted:function(){var t=this;this.$storybridge((function(){(new StoryblokBridge).on(["input","published","change"],(function(e){"input"==e.action?e.story.id===t.story.id&&(t.story.content=e.story.content):t.$nuxt.$router.go({path:t.$nuxt.$router.currentRoute,force:!0})}))}),(function(t){console.error(t)}))},asyncData:function(t){var e="/"==t.route.path||""==t.route.path?"home":t.route.path;return t.app.$storyapi.get("cdn/stories/".concat(e),{version:"draft"}).then((function(t){return t.data})).catch((function(e){e.response?(console.error(e.response.data),t.error({statusCode:e.response.status,message:e.response.data})):(console.error(e),t.error({statusCode:404,message:"Failed to receive content form api"}))}))}},r=o(7),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.story.content.component?o("page",{key:t.story.content._uid,attrs:{blok:t.story.content}}):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);