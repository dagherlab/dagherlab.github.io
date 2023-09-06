import { Q as i } from "./QImg.b4b5b53f.js";
import {
  b as r,
  c as n,
  d as c,
  Q as l,
  C as d,
} from "./ClosePopup.1e2aae46.js";
import { Q as m } from "./QPage.43821086.js";
import {
  _ as h,
  C as a,
  D as o,
  E as t,
  G as e,
  d as s,
  k as p,
} from "./index.a522e294.js";
import "./QSpinner.15e54a01.js";
import "./render.1fb580e6.js";
import "./use-dark.89eb9134.js";
import "./QBtn.731f31c7.js";
import "./dom.36906968.js";
import "./scroll.a161af1e.js";
var _ = "/assets/QinTao.4db109ce.jpg";
const f = {},
  u = { class: "q-ma-md flex justify-start wrap", style: { width: "900px" } },
  g = e(
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
  x = e("p", { class: "text-h4" }, "Qin Tao", -1),
  Q = { class: "float-right vertical-top" },
  w = e("a", { href: "QinTao@mcgill.ca" }, "QinTao@mcgill.ca", -1),
  b = e(
    "p",
    { class: "q-my-md text-subtitle2 text-orange-9" },
    "Dagher's Lab",
    -1
  ),
  q = e(
    "div",
    { class: "q-ma-md" },
    [
      e(
        "p",
        { class: "q-my-md" },
        "Qin received her B.S. degree in computer science and technology from Chengdu University of Technology and her M.S. degree in biomedical engineering from University of Electronic Science and Technology of China. For her PhD, her research interests include visual neuroscience research, where she attempts to explore the inner visual representation and apply it to computational model design. Moreover, Qin is also interested in decision-making and the reward system, and she attempts to collaborate with Alex Pastor-Bernier to investigate the effect of dopamine levels on perceptual decision-making."
      ),
    ],
    -1
  );
function T(k, B) {
  return (
    a(),
    o(
      m,
      { class: "flex justify-center items-start" },
      {
        default: t(() => [
          e("div", u, [
            g,
            y,
            e("div", v, [
              s(i, {
                class: "float-left q-ma-md",
                src: _,
                style: { width: "25%", "min-width": "300px" },
              }),
              x,
              e("div", Q, [
                s(
                  l,
                  { label: "contact me", "dropdown-icon": "change_history" },
                  {
                    default: t(() => [
                      s(r, null, {
                        default: t(() => [
                          p(
                            (a(),
                            o(
                              n,
                              { clickable: "" },
                              {
                                default: t(() => [
                                  s(c, null, { default: t(() => [w]), _: 1 }),
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
              b,
              q,
            ]),
          ]),
        ]),
        _: 1,
      }
    )
  );
}
var U = h(f, [["render", T]]);
export { U as default };
