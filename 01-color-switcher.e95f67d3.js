!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=null;function o(n){t.disabled=n}t.addEventListener("click",(function(){o(!0),e=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),n.addEventListener("click",(function(){clearInterval(e),o(!1)}))}();
//# sourceMappingURL=01-color-switcher.e95f67d3.js.map