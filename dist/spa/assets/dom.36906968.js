import { i as r } from "./index.a522e294.js";
function u(t) {
  if (t === window) return { top: 0, left: 0 };
  const { top: n, left: e } = t.getBoundingClientRect();
  return { top: n, left: e };
}
function f(t) {
  return t === window ? window.innerHeight : t.getBoundingClientRect().height;
}
function c(t, n) {
  const e = t.style;
  for (const i in n) e[i] = n[i];
}
function s(t) {
  if (t == null) return;
  if (typeof t == "string")
    try {
      return document.querySelector(t) || void 0;
    } catch {
      return;
    }
  const n = r(t) === !0 ? t.value : t;
  if (n) return n.$el || n;
}
function a(t, n) {
  if (t == null || t.contains(n) === !0) return !0;
  for (let e = t.nextElementSibling; e !== null; e = e.nextElementSibling)
    if (e.contains(n)) return !0;
  return !1;
}
export { c as a, a as c, s as g, f as h, u as o };
