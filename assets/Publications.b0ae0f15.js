import { Q as d } from "./QPage.43821086.js";
import {
  _ as h,
  V as _,
  C as i,
  D as p,
  E as u,
  G as t,
  Y as r,
  Z as l,
  F as n,
  X as a,
} from "./index.a522e294.js";
import "./render.1fb580e6.js";
const s = [
    [
      "Brain atrophy in REM sleep behavior disorder is shaped by gene expression and structural connectivity",
      "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=Lu2XPfUAAAAJ&sortby=pubdate&citation_for_view=Lu2XPfUAAAAJ:TA2J6If_vOcC",
      "S Rahayel, C Tremblay, A Vo, S Leh\xE9ricy, I Arnulf, M Vidailhet, JC Corvol, ...",
      "Sleep Medicine 100, S224",
    ],
    [
      "Brain-clinical perfusion patterns may predict conversion subtype in REM sleep behavior disorder",
      "https://scholar.google.ca/citations?view_op=view_citation&hl=en&user=Lu2XPfUAAAAJ&sortby=pubdate&citation_for_view=Lu2XPfUAAAAJ:85sL7E1SSRcC",
      "S Rahayel, R Postuma, AA Baril, B Misic, A Pelletier, JP Soucy, ...",
      "Sleep Medicine 100, S225",
    ],
  ],
  f = _({
    name: "IndexPage",
    data() {
      return {
        items: [
          { title: s[0][0], url: s[0][1], author: s[0][2], date: s[0][3] },
          { title: s[1][0], url: s[1][1], author: s[1][2], date: s[1][3] },
        ],
      };
    },
    method: {
      goto: function (o) {
        o && window.open(o, "_blank");
      },
    },
  }),
  m = {
    class: "q-ma-md flex justify-start wrap gt-xs",
    style: { width: "900px" },
  },
  A = t(
    "p",
    { class: "text-h3 q-ml-md", style: { width: "100%" } },
    "Publications",
    -1
  ),
  y = { class: "q-ma-md" },
  v = ["href"],
  w = { class: "" },
  b = { class: "" },
  x = { class: "q-ma-md flex justify-start wrap lt-sm" },
  P = t(
    "p",
    { class: "text-h3 q-ml-md", style: { width: "100%" } },
    "Publications",
    -1
  ),
  g = { class: "q-ma-md" },
  S = { class: "text-h4" },
  B = { class: "" },
  C = { class: "" };
function J(o, L, k, q, M, R) {
  return (
    i(),
    p(
      d,
      { class: "flex justify-center items-start" },
      {
        default: u(() => [
          t("div", m, [
            A,
            t("div", y, [
              (i(!0),
              r(
                n,
                null,
                l(
                  o.items,
                  (e, c) => (
                    i(),
                    r(
                      n,
                      { key: c },
                      [
                        t(
                          "a",
                          { class: "text-h6", href: e.url },
                          a(e.title),
                          9,
                          v
                        ),
                        t("p", w, a(e.author), 1),
                        t("p", b, a(e.date), 1),
                      ],
                      64
                    )
                  )
                ),
                128
              )),
            ]),
          ]),
          t("div", x, [
            P,
            t("div", g, [
              (i(!0),
              r(
                n,
                null,
                l(
                  o.items,
                  (e, c) => (
                    i(),
                    r(
                      n,
                      { key: c },
                      [
                        t("p", S, a(e.title), 1),
                        t("p", B, a(e.author), 1),
                        t("p", C, a(e.content), 1),
                      ],
                      64
                    )
                  )
                ),
                128
              )),
            ]),
          ]),
        ]),
        _: 1,
      }
    )
  );
}
var V = h(f, [["render", J]]);
export { V as default };
