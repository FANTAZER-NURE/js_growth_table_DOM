parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".append-row"),t=document.querySelector(".remove-row"),n=document.querySelector(".append-column"),r=document.querySelector(".remove-column");document.querySelector(".container").addEventListener("click",function(c){var l=document.querySelector(".field").children[0],d=document.getElementsByTagName("tr");switch(c.target){case e:if(l.childElementCount<10){for(var o=document.getElementsByTagName("tr")[0].children.length,m=document.createElement("tr"),u=0;u<o;u++)m.appendChild(document.createElement("td"));l.appendChild(m)}break;case t:l.childElementCount>2&&l.removeChild(l.children[0]);break;case n:if(document.getElementsByTagName("tr")[0].childElementCount<10)for(var a=0;a<d.length;a++)d[a].appendChild(document.createElement("td"));break;case r:if(document.getElementsByTagName("tr")[0].childElementCount>2)for(var i=0;i<d.length;i++)d[i].removeChild(d[i].children[d[i].children.length-1])}document.querySelector(".remove-row").disabled=2===l.childElementCount,document.querySelector(".append-row").disabled=10===l.childElementCount,document.querySelector(".append-column").disabled=10===document.getElementsByTagName("tr")[0].childElementCount,document.querySelector(".remove-column").disabled=2===document.getElementsByTagName("tr")[0].childElementCount});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.833871fe.js.map