import { Q as m } from "./QImg.b4b5b53f.js";
import {
  b as h,
  c as p,
  d as u,
  Q as _,
  C as f,
} from "./ClosePopup.1e2aae46.js";
import { Q as g } from "./QPage.43821086.js";
import {
  _ as y,
  V as b,
  C as e,
  D as o,
  E as a,
  G as t,
  d as i,
  k as v,
  Y as s,
  Z as l,
  F as c,
  X as d,
} from "./index.a522e294.js";
import "./QSpinner.15e54a01.js";
import "./render.1fb580e6.js";
import "./use-dark.89eb9134.js";
import "./QBtn.731f31c7.js";
import "./dom.36906968.js";
import "./scroll.a161af1e.js";
var w = "/assets/ChristinaTremblay.b54ba7cb.jpg";
const x = b({
    name: "IndexPage",
    data() {
      return { items: [], peer: [] };
    },
  }),
  C = { class: "q-ma-md flex justify-start wrap", style: { width: "900px" } },
  S = t(
    "p",
    { class: "text-h3 q-ml-md", style: { width: "100%" } },
    "Team",
    -1
  ),
  D = t(
    "p",
    { class: "text-h4 q-ma-md text-blue-grey-9", style: { width: "100%" } },
    "Member:",
    -1
  ),
  M = { class: "q-ma-md", style: { width: "100%" } },
  k = t("p", { class: "text-h4" }, "Christina Tremblay", -1),
  q = { class: "float-right vertical-top" },
  Q = t(
    "a",
    { href: "ChristinaTremblay@mcgill.ca" },
    "ChristinaTremblay@mcgill.ca",
    -1
  ),
  T = t(
    "p",
    { class: "q-my-md text-subtitle2 text-orange-9" },
    "Dagher's Lab",
    -1
  ),
  B = t(
    "div",
    { class: "q-ma-md" },
    [
      t(
        "p",
        { class: "q-my-md" },
        "Christina Tremblay completed a PhD in Medical Research (Laval University, Canada) under the supervision of Dr. Laura Monetta, Dr. Jo\xEBl Macoir and Dr. Cyril Schneider about the effects of two brain stimulation technics, Deep Brain Stimulation and Transcranial Magnetic Stimulation (TMS), on cognitive and language abilities in Parkinson\u2019s disease. She also used TMS to investigate the role of the supplementary motor cortex in decision-making during her postdoctoral training at Aix-Marseille University in France. She holds a MSc in Neurobiology and BSc in Physic both from Laval University, Canada. She is currently working at the Montreal Neurological Institute (MNI) with Alain Dagher\u2019s research team on identifying vulnerable brain regions associated with Parkinson\u2019s and Alzheimer\u2019s disease pathology and the factors implicated in this vulnerability using multimodal neuroimaging analyses."
      ),
    ],
    -1
  ),
  P = { class: "q-ma-md flex justify-start wrap", style: { width: "900px" } };
function I(r, L, N, j, $, A) {
  return (
    e(),
    o(
      g,
      { class: "flex justify-center items-start" },
      {
        default: a(() => [
          t("div", C, [
            S,
            D,
            t("div", M, [
              i(m, {
                class: "float-left q-ma-md",
                src: w,
                style: { width: "25%", "min-width": "300px" },
              }),
              k,
              t("div", q, [
                i(
                  _,
                  { label: "contact me", "dropdown-icon": "change_history" },
                  {
                    default: a(() => [
                      i(h, null, {
                        default: a(() => [
                          v(
                            (e(),
                            o(
                              p,
                              { clickable: "" },
                              {
                                default: a(() => [
                                  i(u, null, { default: a(() => [Q]), _: 1 }),
                                ]),
                                _: 1,
                              }
                            )),
                            [[f]]
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              T,
              B,
            ]),
            t("div", P, [
              (e(!0),
              s(
                c,
                null,
                l(r.items, (n) => (e(), s("p", null, d(n.content), 1))),
                256
              )),
              (e(!0),
              s(
                c,
                null,
                l(r.peer, (n) => (e(), s("p", null, d(n.content), 1))),
                256
              )),
            ]),
          ]),
        ]),
        _: 1,
      }
    )
  );
}
var Z = y(x, [["render", I]]);
export { Z as default };
