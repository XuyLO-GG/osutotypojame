(()=>{"use strict";const e=[{y:96,keys:{Q:52,W:102,E:153,R:204,T:256,Y:307,U:358,I:409,O:460,P:512}},{y:192,keys:{CapsLock:52,A:102,S:153,D:204,F:256,G:307,H:358,J:409,K:460,L:512}},{y:288,keys:{Any:64,Z:128,X:192,C:256,V:320,B:384,N:448,M:512}},{y:384,keys:{Space:448,Return:512}}];function n(e,n){if(e){if("string"==typeof e)return t(e,n);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var r=document.forms["load-file"].elements.file;function o(t,r){var o,a,i,l=function(e){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=n(e))){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw a}}}}(e);try{for(l.s();!(o=l.n()).done;){var c=o.value;if(r<=c.y)for(var u=0,f=Object.entries(c.keys);u<f.length;u++){var s=(a=f[u],i=2,function(e){if(Array.isArray(e))return e}(a)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a,i,l=[],c=!0,u=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=a.call(t)).done)&&(l.push(r.value),l.length!==n);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}(a,i)||n(a,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),y=s[0];if(t<=s[1])return y}}}catch(e){l.e(e)}finally{l.f()}return"Space"}r.addEventListener("change",(function(e){var n=e.target.files[0];if(console.log(n),n){var t=new FileReader;t.onload=function(e){var n,t,a=function(e){var n='    {\n      "key": "'.concat(e[e.length-1].key,'",\n      "time": ').concat(e[e.length-1].timing/1e3,"\n    }\n  ]\n}");e.pop();var t=!1;console.log(e);var r=e.reduce((function(e,n,r){return"CapsLock"===n.key&&(t=!t),console.log("".concat(n.key," ").concat(r)),t||1!==n.key.length||(n.key=n.key.toLowerCase()),e+'    {\n      "key": "'.concat(n.key,'",\n      "time": ').concat(n.timing/1e3,"\n    },\n")}),'{\n  "inputs": [\n');return r+=n}(function(e){var n=e.split("\n"),t=!1,r=[];for(var a in n){var i=n[a];if("[HitObjects]"!==i.trim()){if(t&&""!==i.trim()&&!i.startsWith("[")){var l=i.split(","),c=o(l[0],l[1]);r.push({timing:l[2],key:c})}}else t=!0}return r}(e.target.result));n=new Blob([a],{type:"text/plain"}),(t=document.createElement("a")).href=URL.createObjectURL(n),t.download="inputs.json",document.body.appendChild(t),t.click(),document.body.removeChild(t),r.value=""},t.readAsText(n)}else console.error("File not chosen!")}))})();
