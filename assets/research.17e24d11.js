import { Q as i, a as o } from "./QCard.69e0a8f4.js";
import { Q as _ } from "./QPage.43821086.js";
import {
  _ as p,
  V as f,
  C as n,
  D as c,
  E as s,
  G as t,
  Y as d,
  Z as u,
  F as h,
  d as r,
  X as a,
  H as m,
} from "./index.a522e294.js";
import "./render.1fb580e6.js";
import "./use-dark.89eb9134.js";
const x = f({
    name: "IndexPage",
    data() {
      return {
        items: [
          {
            title:
              "Obesity-Associated Neurodegeneration Pattern Mimics Alzheimer’s Disease in an Observational Cohort Study",
            author: "Filip Morys, et al",
            content:
              "we compared patterns of brain atrophy and amyloid-β/tau protein accumulation in obesity and AD using a sample of over 1,300 individuals from four groups: AD patients, healthy controls, obese otherwise healthy individuals, and lean individuals.",
          },
          { title: "2022", author: "author", content: "content here" },
          { title: "2022", author: "author", content: "content here" },
          { title: "2022", author: "author", content: "content here" },
          { title: "2022", author: "author", content: "content here" },
          { title: "2022", author: "author", content: "content here" },
        ],
      };
    },
  }),
  g = { class: "q-ma-md flex justify-start wrap", style: { width: "900px" } },
  y = t(
    "p",
    { class: "text-h3 q-ml-md", style: { width: "100%" } },
    "Research",
    -1
  ),
  q = t(
    "img",
    {
      src: "https://content.iospress.com/media/jad/2023/91-3/jad-91-3-jad220535/jad-91-jad220535-g001.jpg",
    },
    null,
    -1
  ),
  v = { class: "text-h6" },
  w = { class: "text-subtitle2 text-orange-9" },
  C = t("img", { src: "https://cdn.quasar.dev/img/mountains.jpg" }, null, -1),
  Q = { class: "text-h6" },
  j = { class: "text-subtitle2" };
function B(l, V, $, k, N, b) {
  return (
    n(),
    c(
      _,
      { class: "flex justify-center items-start" },
      {
        default: s(() => [
          t("div", g, [
            y,
            (n(!0),
            d(
              h,
              null,
              u(
                l.items,
                (e) => (
                  n(),
                  c(
                    i,
                    { class: "my-card gt-xs q-ma-md", style: { width: "45%" } },
                    {
                      default: s(() => [
                        q,
                        r(
                          o,
                          null,
                          {
                            default: s(() => [
                              t("div", v, a(e.title), 1),
                              t("div", w, a(e.author), 1),
                            ]),
                            _: 2,
                          },
                          1024
                        ),
                        r(
                          o,
                          { class: "q-pt-none" },
                          { default: s(() => [m(a(e.content), 1)]), _: 2 },
                          1024
                        ),
                      ]),
                      _: 2,
                    },
                    1024
                  )
                )
              ),
              256
            )),
            (n(!0),
            d(
              h,
              null,
              u(
                l.items,
                (e) => (
                  n(),
                  c(
                    i,
                    { class: "my-card lt-sm q-ma-md", style: { width: "90%" } },
                    {
                      default: s(() => [
                        C,
                        r(
                          o,
                          null,
                          {
                            default: s(() => [
                              t("div", Q, a(e.title), 1),
                              t("div", j, a(e.author), 1),
                            ]),
                            _: 2,
                          },
                          1024
                        ),
                        r(
                          o,
                          { class: "q-pt-none" },
                          { default: s(() => [m(a(e.content), 1)]), _: 2 },
                          1024
                        ),
                      ]),
                      _: 2,
                    },
                    1024
                  )
                )
              ),
              256
            )),
          ]),
        ]),
        _: 1,
      }
    )
  );
}
var G = p(x, [["render", B]]);
export { G as default };
