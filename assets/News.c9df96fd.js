import { Q as c } from "./QImg.b4b5b53f.js";
import { a as p, Q as d } from "./QCard.69e0a8f4.js";
import { Q as f } from "./QPage.43821086.js";
import {
  _ as h,
  V as u,
  C as n,
  D as m,
  E as a,
  Y as o,
  Z as w,
  F as L,
  d as s,
  G as t,
  X as i,
} from "./index.a522e294.js";
import "./QSpinner.15e54a01.js";
import "./render.1fb580e6.js";
import "./use-dark.89eb9134.js";
const g = [
    [
      "Neuro Appreciation day in 2022",
      "../assets/newsPhoto/NeuroAppreciationdayin2022.jpg",
      " ",
      "content here",
    ],
    [
      "Lab picnic 2022",
      "../assets/newsPhoto/Labpicnic2022.jpg",
      " ",
      "content here",
    ],
    [
      "Lab dinner 2021",
      "../assets/newsPhoto/Labdinner2021.jpg",
      "all of us",
      "content here",
    ],
    [
      "Filip's presentation",
      "../assets/newsPhoto/Filipspresentation.jpg",
      "Filip Morys",
      "content here",
    ],
    [
      "Filip and Mari",
      "../assets/newsPhoto/FilipandMari.jpg",
      "Filip Morys & Mari",
      "content here",
    ],
    [
      "Lab in the conference",
      "../assets/newsPhoto/Labintheconference.jpg",
      " ",
      "content here",
    ],
    [
      "LiuYi and JiaQi farewell party",
      "../assets/newsPhoto/LiuYiandJiaQifarewellparty.jpg",
      " ",
      "content here",
    ],
  ],
  b = u({
    data() {
      return {
        items: [
          {
            title: "Sugar Shack in 2023",
            url: new URL("/assets/sugar_shack_2023.jpg", self.location).href,
            people: " ",
            content: "content here",
          },
          {
            title: "Neuro Appreciation day in 2022",
            url: new URL(
              "/assets/NeuroAppreciationdayin2022.4e13b4ad.jpg",
              self.location
            ).href,
            people: " ",
            content: "content here",
          },
          {
            title: "Lab picnic 2022",
            url: new URL("/assets/Labpicnic2022.a3f93b59.jpg", self.location)
              .href,
            people: " ",
            content: "content here",
          },
          {
            title: "Lab dinner 2021",
            url: new URL("/assets/Labdinner2021.8d75d798.jpg", self.location)
              .href,
            people: "all of us",
            content: g[2][3],
          },
          {
            title: "Filip and Mari",
            url: new URL("/assets/FilipandMari.65ce9a09.jpg", self.location)
              .href,
            people: "Filip Morys & Mari",
            content: "content here",
          },
          {
            title: "Lab in the conference",
            url: new URL(
              "/assets/Labintheconference.1e94bc04.jpg",
              self.location
            ).href,
            people: " ",
            content: "content here",
          },
          {
            title: "LiuYi and JiaQi farewell party",
            url: new URL(
              "/assets/LiuYiandJiaQifarewellparty.edfa3ae1.jpg",
              self.location
            ).href,
            people: " ",
            content: "content here",
          },
          {
            title: "Filip's presentation",
            url: new URL(
              "/assets/Filipspresentation.21260781.jpg",
              self.location
            ).href,
            people: "Filip Morys",
            content: "content here",
          },
        ],
      };
    },
  }),
  y = t("div", { class: "text-overline text-orange-9" }, "Dagher's lab", -1),
  _ = { class: "text-h5 q-mt-sm q-mb-xs" },
  j = { class: "text-caption text-black" },
  F = { class: "q-my-md text-caption text-black" };
function x(r, Q, M, P, v, N) {
  return (
    n(),
    m(
      f,
      { class: "flex justify-center col items-start wrap" },
      {
        default: a(() => [
          (n(!0),
          o(
            L,
            null,
            w(
              r.items,
              (e, l) => (
                n(),
                o(
                  "div",
                  {
                    key: l,
                    class: "q-pa-lg row justify-center items-start q-gutter-md",
                    style: { width: "60%", "min-width": "900px" },
                  },
                  [
                    s(
                      d,
                      {
                        class: "q-ma-md",
                        flat: "",
                        bordered: "",
                        style: { width: "80%" },
                      },
                      {
                        default: a(() => [
                          s(c, { src: e.url }, null, 8, ["src"]),
                          s(
                            p,
                            null,
                            {
                              default: a(() => [
                                y,
                                t("div", _, i(e.title), 1),
                                t("div", j, i(e.people), 1),
                                t("div", F, i(e.content), 1),
                              ]),
                              _: 2,
                            },
                            1024
                          ),
                        ]),
                        _: 2,
                      },
                      1024
                    ),
                  ]
                )
              )
            ),
            128
          )),
        ]),
        _: 1,
      }
    )
  );
}
var B = h(b, [["render", x]]);
export { B as default };
