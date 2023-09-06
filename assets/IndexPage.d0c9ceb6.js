import { Q as H } from "./QImg.b4b5b53f.js";
import { c as N, h as $ } from "./render.1fb580e6.js";
import { h as R, o as k } from "./dom.36906968.js";
import { g as B } from "./scroll.a161af1e.js";
import {
  r as _,
  w as Q,
  o as D,
  j as L,
  h as w,
  u as z,
  _ as F,
  V as j,
  C as A,
  D as O,
  E as I,
  G as t,
  d as W,
  W as G,
  X as U,
} from "./index.a522e294.js";
import { Q as V } from "./QPage.43821086.js";
import "./QSpinner.15e54a01.js";
function T(e) {
  let a = !1,
    c,
    i;
  function r() {
    (i = arguments),
      a !== !0 &&
        ((a = !0),
        (c = requestAnimationFrame(() => {
          e.apply(this, i), (i = void 0), (a = !1);
        })));
  }
  return (
    (r.cancel = () => {
      window.cancelAnimationFrame(c), (a = !1);
    }),
    r
  );
}
const { passive: x } = z;
var J = N({
    name: "QParallax",
    props: {
      src: String,
      height: { type: Number, default: 500 },
      speed: { type: Number, default: 1, validator: (e) => e >= 0 && e <= 1 },
      scrollTarget: { default: void 0 },
      onScroll: Function,
    },
    setup(e, { slots: a, emit: c }) {
      const i = _(0),
        r = _(null),
        y = _(null),
        d = _(null);
      let l, n, C, g, u, s;
      Q(
        () => e.height,
        () => {
          l === !0 && m();
        }
      ),
        Q(
          () => e.scrollTarget,
          () => {
            l === !0 && (q(), S());
          }
        );
      let f = (o) => {
        (i.value = o), e.onScroll !== void 0 && c("scroll", o);
      };
      function m() {
        let o, h, p;
        s === window
          ? ((o = 0), (p = h = window.innerHeight))
          : ((o = k(s).top), (h = R(s)), (p = o + h));
        const P = k(r.value).top,
          E = P + e.height;
        if (u !== void 0 || (E > o && P < p)) {
          const M = (p - P) / (e.height + h);
          v((C - e.height) * M * e.speed), f(M);
        }
      }
      let v = (o) => {
        n.style.transform = `translate3d(-50%,${Math.round(o)}px,0)`;
      };
      function b() {
        (C = n.naturalHeight || n.videoHeight || R(n)), l === !0 && m();
      }
      function S() {
        (l = !0),
          (s = B(r.value, e.scrollTarget)),
          s.addEventListener("scroll", m, x),
          window.addEventListener("resize", g, x),
          m();
      }
      function q() {
        l === !0 &&
          ((l = !1),
          s.removeEventListener("scroll", m, x),
          window.removeEventListener("resize", g, x),
          (s = void 0),
          v.cancel(),
          f.cancel(),
          g.cancel());
      }
      return (
        D(() => {
          (v = T(v)),
            (f = T(f)),
            (g = T(b)),
            (n = a.media !== void 0 ? y.value.children[0] : d.value),
            (n.onload = n.onloadstart = n.loadedmetadata = b),
            b(),
            (n.style.display = "initial"),
            window.IntersectionObserver !== void 0
              ? ((u = new IntersectionObserver((o) => {
                  (o[0].isIntersecting === !0 ? S : q)();
                })),
                u.observe(r.value))
              : S();
        }),
        L(() => {
          q(),
            u !== void 0 && u.disconnect(),
            (n.onload = n.onloadstart = n.loadedmetadata = null);
        }),
        () =>
          w(
            "div",
            { ref: r, class: "q-parallax", style: { height: `${e.height}px` } },
            [
              w(
                "div",
                { ref: y, class: "q-parallax__media absolute-full" },
                a.media !== void 0
                  ? a.media()
                  : [w("img", { ref: d, src: e.src })]
              ),
              w(
                "div",
                {
                  class: "q-parallax__content absolute-full column flex-center",
                },
                a.content !== void 0
                  ? a.content({ percentScrolled: i.value })
                  : $(a.default)
              ),
            ]
          )
      );
    },
  }),
  X = "/assets/main.53809809.jpg";
const K = j({
    name: "IndexPage",
    data() {
      return {
        items: [
          { date: "2022", content: "123321" },
          { date: "2022", content: "content here" },
        ],
      };
    },
  }),
  Y = { class: "col-4 q-ma-md", style: { width: "800px" } },
  Z = t(
    "p",
    { class: "text-h4 q-ma-md text-orange-10" },
    "Welcome to the Dagher Lab",
    -1
  ),
  ee = t(
    "div",
    { class: "q-ma-md" },
    [
      t(
        "p",
        null,
        "We are a dynamic research group at the Montreal Neurological Institute. Our laboratory examines various pathological states that are related to a disruption in dopamine function. These range from motor disease (Parkinson\u2019s) to addictive disorders (gambling, smoking, obesity). We are currently employing various neuroimaging techniques, including functional MRI, PET and rTMS; in concert with these types of data we are also investigating some of the behavioral, endocrine and metabolic correlates of these syndromes so that we may gain a better and more thorough understanding into the complexities of these disease states."
      ),
    ],
    -1
  ),
  te = { class: "q-ma-md" },
  ae = t(
    "div",
    { class: "q-ma-md" },
    [
      t(
        "p",
        null,
        "We are located at the Montreal Neurological Institute at McGill University, the birthplace of cognitive neuroscience and home to Penfield, Milner, Jasper and others. We exchange ideas and work with our colleagues in the McConnell Brain Imaging Centre. We are grateful for funding from CIHR, FRSQ, NIDA, the Parkinson Society of Canada, The Institute for Research on Pathological Gambling and Related Disorders, and Unilever PLC. "
      ),
    ],
    -1
  ),
  ne = { class: "q-pa-md" },
  oe = t("img", { src: "https://cdn.quasar.dev/img/parallax2.jpg" }, null, -1),
  re = t(
    "img",
    {
      src: "https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg",
      style: { width: "150px", height: "150px" },
    },
    null,
    -1
  ),
  ie = t(
    "div",
    { class: "text-h3 text-white text-center" },
    "Quasar Framework",
    -1
  ),
  se = { class: "text-h6 text-grey-3 text-center" };
function le(e, a, c, i, r, y) {
  return (
    A(),
    O(
      V,
      { class: "flex justify-center row items-start no-wrap" },
      {
        default: I(() => [
          t("div", Y, [
            Z,
            ee,
            t("div", te, [W(H, { src: X })]),
            ae,
            t("div", ne, [
              W(J, null, {
                media: I(() => [oe]),
                content: I((d) => [
                  t(
                    "div",
                    {
                      class: "absolute column items-center",
                      style: G({
                        opacity: 0.45 + (1 - d.percentScrolled) * 0.55,
                        top: d.percentScrolled * 60 + "%",
                        left: 0,
                        right: 0,
                      }),
                    },
                    [re, ie, t("div", se, " v" + U(e.$q.version), 1)],
                    4
                  ),
                ]),
                _: 1,
              }),
            ]),
          ]),
        ]),
        _: 1,
      }
    )
  );
}
var ve = F(K, [["render", le]]);
export { ve as default };
