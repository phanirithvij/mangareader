// ==UserScript==
// @name         Mangareader Adblocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Phani Rithvij
// @match        *.mangareader.net/*
// @include      *.mangareader.net/
// @run-at       document-end
// @grant        GM_deleteValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// ==/UserScript==

window.addEventListener('load',() => {
console.log('STARTED SXCRIPTY');
var elements = document.getElementsByTagName('iframe');
while (elements[0]) elements[0].parentNode.removeChild(elements[0]);
}, false);

//RUN in TAmpermonkey
