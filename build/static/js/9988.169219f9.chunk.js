/*! For license information please see 9988.169219f9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkbluedriver=self.webpackChunkbluedriver||[]).push([[9988],{9988:function(e,n,t){t.r(n),t.d(n,{startFocusVisible:function(){return s}});var o="ion-focused",r=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],s=function(e){var n=[],t=!0,s=e?e.shadowRoot:document,i=e||document.body,c=function(e){n.forEach((function(e){return e.classList.remove(o)})),e.forEach((function(e){return e.classList.add(o)})),n=e},u=function(){t=!1,c([])},a=function(e){(t=r.includes(e.key))||c([])},d=function(e){if(t&&e.composedPath){var n=e.composedPath().filter((function(e){return!!e.classList&&e.classList.contains("ion-focusable")}));c(n)}},f=function(){s.activeElement===i&&c([])};s.addEventListener("keydown",a),s.addEventListener("focusin",d),s.addEventListener("focusout",f),s.addEventListener("touchstart",u),s.addEventListener("mousedown",u);return{destroy:function(){s.removeEventListener("keydown",a),s.removeEventListener("focusin",d),s.removeEventListener("focusout",f),s.removeEventListener("touchstart",u),s.removeEventListener("mousedown",u)},setFocus:c}}}}]);
//# sourceMappingURL=9988.169219f9.chunk.js.map