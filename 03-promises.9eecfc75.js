!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequire7bc7;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=a);var u=a("6JpON"),i={form:document.querySelector(".form"),submitBtn:document.querySelector("button[type]"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')},r=0;function l(e){i.delay.disabled=e,i.step.disabled=e,i.amount.disabled=e,i.submitBtn.disabled=e}function d(t,n){var o=Math.random()>.3;new Promise((function(e,a){setTimeout((function(){o?e({position:t,delay:n}):a({position:t,delay:n}),r===t&&(l(!1),i.delay.value="",i.step.value="",i.amount.value="")}),n)})).then((function(t){var n=t.position,o=t.delay;e(u).Notify.info("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(u).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}i.form.addEventListener("submit",(function(t){t.preventDefault();var n=Number(i.delay.value),o=Number(i.step.value);if(r=Number(i.amount.value),!function(t){var n="";"0"===t.amount.value&&(n="Amount");switch(""){case t.delay.value:n="First delay (ms)";break;case t.step.value:n="Delay step (ms)";break;case t.amount.value:n="Amount"}if(""!==n)return e(u).Notify.warning('Please fill in the field "'.concat(n,'"')),!1;return!0}(i))return;l(!0);for(var a=1;a<=r;a+=1)d(a,n),n+=o}))}();
//# sourceMappingURL=03-promises.9eecfc75.js.map
