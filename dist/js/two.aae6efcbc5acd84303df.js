(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}console.log("Hello page #2");var t,r=document.querySelector(".item"),n=function(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t))){n&&(t=n);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,d=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var e=n.next();return d=e.done,e},e:function(e){l=!0,i=e},f:function(){try{d||null==n.return||n.return()}finally{if(l)throw i}}}}(document.querySelectorAll(".placeholder"));try{for(n.s();!(t=n.n()).done;){var a=t.value;a.addEventListener("dragover",d),a.addEventListener("dragenter",l),a.addEventListener("dragleave",c),a.addEventListener("drop",u)}}catch(e){n.e(e)}finally{n.f()}r.addEventListener("dragstart",o),r.addEventListener("dragend",i);var o=function(e){e.target.classList.add("hold"),setTimeout((function(){e.target.classList.add("hide")}),0)},i=function(e){e.target.className="item"};function d(e){e.preventDefault()}function l(e){e.target.classList.add("hovered")}function c(e){e.target.classList.remove("hovered")}function u(e){e.target.classList.remove("hovered"),e.target.append(r)}})();