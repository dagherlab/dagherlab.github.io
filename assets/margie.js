import { Q as r } from "./QImg.b4b5b53f.js";
import { b as o, c as n, d, Q as l, C as c } from "./ClosePopup.1e2aae46.js";
import { Q as h } from "./QPage.43821086.js";
import {
  _ as m,
  C as s,
  D as i,
  E as t,
  G as e,
  d as a,
  k as p,
} from "./index.a522e294.js";
import "./QSpinner.15e54a01.js";
import "./render.1fb580e6.js";
import "./use-dark.89eb9134.js";
import "./QBtn.731f31c7.js";
import "./dom.36906968.js";
import "./scroll.a161af1e.js";
var u = "/assets/margie.jpg";
const g = {},
  _ = { class: "q-ma-md flex justify-start wrap", style: { width: "900px" } },
  f = e(
    "p",
    { class: "text-h3 q-ml-md", style: { width: "100%" } },
    "Team",
    -1
  ),
  y = e(
    "p",
    { class: "text-h4 q-ma-md text-blue-grey-9", style: { width: "100%" } },
    "Member:",
    -1
  ),
  v = { class: "q-ma-md", style: { width: "100%" } },
  w = e("p", { class: "text-h4" }, "Margie Garber", -1),
  x = { class: "float-right vertical-top" },
  b = e(
    "a",
    { href: "margie.garber@mail.mcgill.ca" },
    "margie.garbe@mail.mcgill.ca",
    -1
  ),
  k = e(
    "p",
    { class: "q-my-md text-subtitle2 text-orange-9" },
    "Dagher's Lab",
    -1
  ),
  j = e(
    "div",
    { class: "q-ma-md" },
    [e("p", { class: "q-my-md" }, "Margie Garber is a PhD candidate")],
    -1
  );
function M(Q, q) {
  return (
    s(),
    i(
      h,
      { class: "flex justify-center items-start" },
      {
        default: t(() => [
          e("div", _, [
            f,
            y,
            e("div", v, [
              a(r, {
                class: "float-left q-ma-md",
                src: u,
                style: { width: "25%", "min-width": "300px" },
              }),
              w,
              e("div", x, [
                a(
                  l,
                  { label: "contact me", "dropdown-icon": "change_history" },
                  {
                    default: t(() => [
                      a(o, null, {
                        default: t(() => [
                          p(
                            (s(),
                            i(
                              n,
                              { clickable: "" },
                              {
                                default: t(() => [
                                  a(d, null, { default: t(() => [b]), _: 1 }),
                                ]),
                                _: 1,
                              }
                            )),
                            [[c]]
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              k,
              j,
            ]),
          ]),
        ]),
        _: 1,
      }
    )
  );
}
var U = m(g, [["render", M]]);
export { U as default };
