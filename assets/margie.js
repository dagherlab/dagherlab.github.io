import { Q as o } from "./QImg.b4b5b53f.js";
import {
  b as c,
  c as n,
  d as l,
  Q as r,
  C as m,
} from "./ClosePopup.1e2aae46.js";
import { Q as d } from "./QPage.43821086.js";
import {
  _,
  C as a,
  D as i,
  E as s,
  G as t,
  d as e,
  k as p,
} from "./index.a522e294.js";
import "./QSpinner.15e54a01.js";
import "./render.1fb580e6.js";
import "./use-dark.89eb9134.js";
import "./QBtn.731f31c7.js";
import "./dom.36906968.js";
import "./scroll.a161af1e.js";
var h = "/assets/margie.jpg";
const f = {},
  g = { class: "q-ma-md flex justify-start wrap", style: { width: "900px" } },
  u = t(
    "p",
    { class: "text-h3 q-ml-md", style: { width: "100%" } },
    "Team",
    -1
  ),
  y = t(
    "p",
    { class: "text-h4 q-ma-md text-blue-grey-9", style: { width: "100%" } },
    "Member:",
    -1
  ),
  x = { class: "q-ma-md", style: { width: "100%" } },
  b = t("p", { class: "text-h4" }, "Margie Garber", -1),
  w = { class: "float-right vertical-top" },
  v = t(
    "a",
    { href: "alain.dagher@mcgill.ca" },
    "margie.garber@mail.mcgill.ca",
    -1
  ),
  Q = t(
    "p",
    { class: "q-my-md text-subtitle2 text-orange-9" },
    "Dagher's Lab",
    -1
  ),
  L = t(
    "div",
    { class: "q-ma-md" },
    [t("p", { class: "q-my-md" }, "Margie is a PhD candidate.")],
    -1
  );
function q(D, B) {
  return (
    a(),
    i(
      d,
      { class: "flex justify-center items-start" },
      {
        default: s(() => [
          t("div", g, [
            u,
            y,
            t("div", x, [
              e(o, {
                class: "float-left q-ma-md",
                src: h,
                style: { width: "25%", "min-width": "300px" },
              }),
              b,
              t("div", w, [
                e(
                  r,
                  { label: "contact me", "dropdown-icon": "change_history" },
                  {
                    default: s(() => [
                      e(c, null, {
                        default: s(() => [
                          p(
                            (a(),
                            i(
                              n,
                              { clickable: "" },
                              {
                                default: s(() => [
                                  e(l, null, { default: s(() => [v]), _: 1 }),
                                ]),
                                _: 1,
                              }
                            )),
                            [[m]]
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
              L,
            ]),
          ]),
        ]),
        _: 1,
      }
    )
  );
}
var U = _(f, [["render", q]]);
export { U as default };