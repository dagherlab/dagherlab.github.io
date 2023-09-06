import { Q as o } from "./QImg.b4b5b53f.js";
import { b as n, c as r, d, Q as l, C as c } from "./ClosePopup.1e2aae46.js";
import { Q as m } from "./QPage.43821086.js";
import {
  _ as h,
  C as a,
  D as i,
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
var u = "/assets/Alex.22caf2a3.jpg";
const _ = {},
  f = { class: "q-ma-md flex justify-start wrap", style: { width: "900px" } },
  y = e(
    "p",
    { class: "text-h3 q-ml-md", style: { width: "100%" } },
    "Team",
    -1
  ),
  g = e(
    "p",
    { class: "text-h4 q-ma-md text-blue-grey-9", style: { width: "100%" } },
    "Member:",
    -1
  ),
  w = { class: "q-ma-md", style: { width: "100%" } },
  v = e("p", { class: "text-h4" }, "Alex Pastor-Bernier", -1),
  x = { class: "float-right vertical-top" },
  b = e("a", { href: "ap787@cam.ac.uk" }, "ap787@cam.ac.uk", -1),
  D = e(
    "p",
    { class: "q-my-md text-subtitle2 text-orange-9" },
    "Dagher's Lab",
    -1
  ),
  P = e(
    "div",
    { class: "q-ma-md" },
    [
      e(
        "p",
        { class: "q-my-md" },
        "Dr Pastor-Bernier has a background in molecular biology (Ms C. University of Oslo, Norway), classic primate electrophysiology (PhD. Universit\xE9 de Montr\xE9al, Canada) and human systems neuroscience (University of Cambridge, UK). His work relates to the psychology field of embodied cognition (Cisek P., and Pastor-Bernier A., 2014), motivated choice and neuroeconomics in both primates and humans (Pastor-Bernier, Stasiak A., and Schultz W). His work includes electrophysiological and utility theory modelling of multiple-component rewards and reward-specific satiety in both primates and humans: Pastor-Bernier et al., 2021-2017). Dr Pastor-Bernier is interested in studying value computational mechanisms underlying vulnerability to disease including disorders of motivation and self-control like addiction and disorders where apathy and anhedonia predominate like depression and Parkinson\u2019s Disease (PD). In Dr Dagher\u2019s lab at the Montreal Neurological institute (MNI-BIC), Alex is conducting a perceptual-discrimination neuroimaging study with Dr Qin Tau investigating the phenotypic traits that predispose humans to impulsive behaviour (urgency signaling). He is also studying how tractography phenotypes (DTI) manifest with genetic propensities for dysfunctional dopaminergic function in Alzheimer disease (AD) and PD in UKBB, Prevent_AD and QPN databases."
      ),
    ],
    -1
  );
function k(B, Q) {
  return (
    a(),
    i(
      m,
      { class: "flex justify-center items-start" },
      {
        default: t(() => [
          e("div", f, [
            y,
            g,
            e("div", w, [
              s(o, {
                class: "float-left q-ma-md",
                src: u,
                style: { width: "25%", "min-width": "300px" },
              }),
              v,
              e("div", x, [
                s(
                  l,
                  { label: "contact me", "dropdown-icon": "change_history" },
                  {
                    default: t(() => [
                      s(n, null, {
                        default: t(() => [
                          p(
                            (a(),
                            i(
                              r,
                              { clickable: "" },
                              {
                                default: t(() => [
                                  s(d, null, { default: t(() => [b]), _: 1 }),
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
              D,
              P,
            ]),
          ]),
        ]),
        _: 1,
      }
    )
  );
}
var T = h(_, [["render", k]]);
export { T as default };
