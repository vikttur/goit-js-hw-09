function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire7bc7=o);var i=o("7Y9D8");refs={form:document.querySelector(".form"),submitBtn:document.querySelector("button[type]"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')};let l=0;function u(e){refs.delay.disabled=e,refs.step.disabled=e,refs.amount.disabled=e,refs.submitBtn.disabled=e}function a(t,n){const r=Math.random()>.3;new Promise(((e,o)=>{setTimeout((()=>{r?e({position:t,delay:n}):o({position:t,delay:n}),l===t&&(u(!1),refs.delay.value="",refs.step.value="",refs.amount.value="")}),n)})).then((({position:t,delay:n})=>{e(i).Notify.info(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}refs.form.addEventListener("submit",(function(t){t.preventDefault();let n=Number(refs.delay.value);const r=Number(refs.step.value);if(l=Number(refs.amount.value),!function(t){let n="";switch(""){case t.delay.value:n="First delay (ms)";break;case t.step.value:n="Delay step (ms)";break;case t.amount.value:n="Amount"}if(""!==n)return e(i).Notify.warning(`Please fill in the field "${n}"`),!1;return!0}(refs))return;u(!0);for(let e=1;e<=l;e+=1)a(e,n),n+=r}));
//# sourceMappingURL=03-promises.5300b358.js.map
