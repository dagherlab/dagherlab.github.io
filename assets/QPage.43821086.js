import { c as l, h } from "./render.1fb580e6.js";
import {
  c as o,
  h as g,
  a as s,
  z as p,
  A as d,
  g as y,
} from "./index.a522e294.js";
var v = l({
  name: "QPage",
  props: { padding: Boolean, styleFn: Function },
  setup(a, { slots: r }) {
    const {
        proxy: { $q: n },
      } = y(),
      e = s(p);
    s(d, () => {
      console.error("QPage needs to be child of QPageContainer");
    });
    const i = o(() => {
        const t =
          (e.header.space === !0 ? e.header.size : 0) +
          (e.footer.space === !0 ? e.footer.size : 0);
        if (typeof a.styleFn == "function") {
          const u =
            e.isContainer.value === !0
              ? e.containerHeight.value
              : n.screen.height;
          return a.styleFn(t, u);
        }
        return {
          minHeight:
            e.isContainer.value === !0
              ? e.containerHeight.value - t + "px"
              : n.screen.height === 0
              ? t !== 0
                ? `calc(100vh - ${t}px)`
                : "100vh"
              : n.screen.height - t + "px",
        };
      }),
      c = o(() => `q-page ${a.padding === !0 ? " q-layout-padding" : ""}`);
    return () => g("main", { class: c.value, style: i.value }, h(r.default));
  },
});
export { v as Q };
