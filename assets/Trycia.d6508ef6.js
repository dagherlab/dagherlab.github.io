import { Q as i } from "./QImg.b4b5b53f.js";
import {
  b as c,
  c as r,
  d as l,
  Q as m,
  C as d,
} from "./ClosePopup.1e2aae46.js";
import { Q as n } from "./QPage.43821086.js";
import {
  _ as h,
  C as a,
  D as o,
  E as e,
  G as t,
  d as s,
  k as _,
} from "./index.a522e294.js";
import "./QSpinner.15e54a01.js";
import "./render.1fb580e6.js";
import "./use-dark.89eb9134.js";
import "./QBtn.731f31c7.js";
import "./dom.36906968.js";
import "./scroll.a161af1e.js";
var p = "/assets/TryciaKouchache.3e4df46f.jpg";
const f = {},
  u = { class: "q-ma-md flex justify-start wrap", style: { width: "900px" } },
  y = t(
    "p",
    { class: "text-h3 q-ml-md", style: { width: "100%" } },
    "Team",
    -1
  ),
  g = t(
    "p",
    { class: "text-h4 q-ma-md text-blue-grey-9", style: { width: "100%" } },
    "Member:",
    -1
  ),
  w = { class: "q-ma-md", style: { width: "100%" } },
  x = t("p", { class: "text-h4" }, "Trycia Kouchache", -1),
  v = { class: "float-right vertical-top" },
  b = t(
    "a",
    { href: "Trycia Kouchache@mcgill.ca" },
    "Trycia Kouchache@mcgill.ca",
    -1
  ),
  Q = t(
    "p",
    { class: "q-my-md text-subtitle2 text-orange-9" },
    "Dagher's Lab",
    -1
  ),
  k = t(
    "div",
    { class: "q-ma-md" },
    [
      t(
        "p",
        { class: "q-my-md" },
        "Trycia completed her MSc in the Dopamine Neuroimaging lab working on the Polygenic Risk Scores for Smoking and their association with brain morphometry in typical development. Trycia now works in clinical research on brain tumours, movement disorders and cognitive diseases at the NEURO."
      ),
    ],
    -1
  );
function q(T, D) {
  return (
    a(),
    o(
      n,
      { class: "flex justify-center items-start" },
      {
        default: e(() => [
          t("div", u, [
            y,
            g,
            t("div", w, [
              s(i, {
                class: "float-left q-ma-md",
                src: p,
                style: { width: "25%", "min-width": "300px" },
              }),
              x,
              t("div", v, [
                s(
                  m,
                  { label: "contact me", "dropdown-icon": "change_history" },
                  {
                    default: e(() => [
                      s(c, null, {
                        default: e(() => [
                          _(
                            (a(),
                            o(
                              r,
                              { clickable: "" },
                              {
                                default: e(() => [
                                  s(l, null, { default: e(() => [b]), _: 1 }),
                                ]),
                                _: 1,
                              }
                            )),
                            [[d]]
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              Q,
              k,
            ]),
          ]),
        ]),
        _: 1,
      }
    )
  );
}
var M = h(f, [["render", q]]);
export { M as default };
