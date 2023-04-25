import { Q as l } from "./QImg.b4b5b53f.js";
import {
  b as f,
  c as y,
  d as b,
  Q as v,
  C as w,
} from "./ClosePopup.1e2aae46.js";
import { Q as d, a as g } from "./QCard.69e0a8f4.js";
import { Q as k } from "./QPage.43821086.js";
import {
  _ as D,
  V as _,
  C as s,
  D as r,
  E as i,
  G as e,
  d as n,
  k as P,
  Y as h,
  Z as u,
  F as m,
  X as c,
  H as S,
} from "./index.a522e294.js";
import "./QSpinner.15e54a01.js";
import "./render.1fb580e6.js";
import "./use-dark.89eb9134.js";
import "./QBtn.731f31c7.js";
import "./dom.36906968.js";
import "./scroll.a161af1e.js";
var M = "/assets/alain_dagher.4c49746d.jpg";
const x = _({
    name: "IndexPage",
    data() {
      return {
        items: [
          {
            title: "PhD student\nLang Liu",
            url: new URL("/assets/langliu.211ea394.jpg", self.location).href,
            link: "/LangLiu",
            content:
              "Lang completed his BA in cell and systems biology, statistics and mathematics in the University of Toronto. He completed his MSc in biomedical informatics in the Department of Computing, Queens University. His projects are focused on bioinformatic and machine learning approaches using genetics and brain imaging in PD.",
          },
          {
            title: "PhD student: Qin Tao",
            url: new URL("/assets/QinTao.4db109ce.jpg", self.location).href,
            link: "/QinTao",
            content:
              "Qin received her B.S. degree in computer science and technology from Chengdu University of Technology and her M.S. degree in biomedical engineering from University of Electronic Science and Technology of China. For her PhD, her research interests include visual neuroscience research, where she attempts to explore the inner visual representation and apply it to computational model design. Moreover, Qin is also interested in decision-making and the reward system, and she attempts to collaborate with Alex Pastor-Bernier to investigate the effect of dopamine levels on perceptual decision-making.",
          },
          {
            title: "PhD student: Mari Shishikura",
            url: new URL("/assets/mari.1af3b6f7.jpg", self.location).href,
            link: "/mari",
            content:
              "Mari received B.Sc. in biology from Kyoto University, Japan. For her PhD, she investigates how genetic and socioeconomic factors impact the brain, leading to impulsive behaviours. Additionally, she is interested in how brain mechanisms involved in impulsivity plays a role in obesity.",
          },
          {
            title: "Postdoctoral Researcher: Alex Pastor-Bernier",
            url: new URL("/assets/Alex.22caf2a3.jpg", self.location).href,
            link: "/Alex",
            content:
              "Dr Pastor-Bernier has a background in molecular biology (Ms C. University of Oslo, Norway), classic primate electrophysiology (PhD. Universit\xE9 de Montr\xE9al, Canada) and human systems neuroscience (University of Cambridge, UK). His work relates to the psychology field of embodied cognition (Cisek P., and Pastor-Bernier A., 2014), motivated choice and neuroeconomics in both primates and humans (Pastor-Bernier, Stasiak A., and Schultz W). His work includes electrophysiological and utility theory modelling of multiple-component rewards and reward-specific satiety in both primates and humans: Pastor-Bernier et al., 2021-2017). Dr Pastor-Bernier is interested in studying value computational mechanisms underlying vulnerability to disease including disorders of motivation and self-control like addiction and disorders where apathy and anhedonia predominate like depression and Parkinson\u2019s Disease (PD). In Dr Dagher\u2019s lab at the Montreal Neurological institute (MNI-BIC), Alex is conducting a perceptual-discrimination neuroimaging study with Dr Qin Tau investigating the phenotypic traits that predispose humans to impulsive behaviour (urgency signaling). He is also studying how tractography phenotypes (DTI) manifest with genetic propensities for dysfunctional dopaminergic function in Alzheimer disease (AD) and PD in UKBB, Prevent_AD and QPN databases.",
          },
          {
            title: `Postdoctoral Researcher: Andrew Vo`,
            url: new URL("/assets/Andrew.39ddbb1a.jpg", self.location).href,
            link: "/Andrew",
            content:
              "Hi, I\u2019m Andrew. I\u2019m currently an FRQS postdoctoral fellow in the Dagher Lab. My research focuses on modelling the progression of brain changes in Parkinson\u2019s disease through the lenses of connectomics and imaging transcriptomics. I completed by PhD at the University of Western Ontario, where I conducted psychopharmacological studies in patients with Parkinson\u2019s disease and healthy volunteers to better understand the role of the dopamine system in cognition.",
          },
          {
            title: `MSc Student: Houman Azizi`,
            url: new URL("/assets/Houman.2e04a8e1.jpg", self.location).href,
            link: "/Houman",
            content:
              "Houman received his B.Sc. in Honours Neuroscience from McGill University, and has since taken an interest in research in the fields of neurodegenration and neuroimaging.He worked as a research assistant at the Douglas Mental Health Institute with a focus on performing neuropsychological tests and MRI scans on human participants.He started his MSc studies at Dr. Alain Dagher\u2019s lab with co-supervision of Dr. Yashar Zeighami in September 2021, working on the relationship between polygenic risk scores and neuroanatomical measures in Parkinson\u2019s disease.His research interests include looking at the genetic and neurological patterns underlying Parkinson\u2019s disease and modeling of neurodegenerative disorders through machine learning.",
          },
          {
            title: `Postdoctoral Researcher: Mirja Kuhlencord`,
            url: new URL("/assets/Mirja.d154d921.jpg", self.location).href,
            link: "/Mirja",
            content: `Mirja graduated from Medical School in Germany in November 2021 (Halle University). Previously, she completed a B.Sc. degree in Psychology at Leipzig University in Germany. During her undergraduate studies, she worked as a research assistant with Prof. Jonas Obleser at the Max Planck Institute for Human Cognitive and Brain Sciences (Auditory Cognition group), examining the effects of feedback on perception and behaviour. During her medical studies, she developed a deep interest in neurological and psychiatric diseases and their pathophysiology, diagnostics and treatment. A short internship at Prof. Bogdan Draganski's Research in Neuroimaging (LREN) lab in Lausanne (Switzerland) gave her insight into neuroimaging data analysis and motivated her to pursue research in this field after her medical studies. 
She joined the Dagher lab in July 2022 and examines the relationship between genetic risk of neurodegenerative diseases (especially Parkinson\u2019s disease) and brain morphology. For her analyses, she works with large datasets like the UK Biobank.`,
          },
        ],
        alumni: [
          {
            title: "Msc Student: Trycia Kouchache",
            url: new URL("/assets/TryciaKouchache.3e4df46f.jpg", self.location)
              .href,
            link: "/Trycia",
            content:
              "Trycia completed her MSc in the Dopamine Neuroimaging lab working on the Polygenic Risk Scores for Smoking and their association with brain morphometry in typical development. Trycia now works in clinical research on brain tumours, movement disorders and cognitive diseases at the NEURO.",
          },
        ],
      };
    },
    methods: {
      toPage(t) {
        this.$router.push(`${this.items[t].link}`);
      },
      goPage(t) {
        this.$router.push(`${this.alumni[t].link}`);
      },
    },
  }),
  A = { class: "q-ma-md flex justify-start wrap", style: { width: "900px" } },
  C = e(
    "p",
    { class: "text-h3 q-ml-md", style: { width: "100%" } },
    "Team",
    -1
  ),
  U = e(
    "p",
    { class: "text-h4 q-ma-md text-blue-grey-9", style: { width: "100%" } },
    "Principal Investigator",
    -1
  ),
  L = { class: "q-ma-md", style: { width: "100%" } },
  R = e("p", { class: "text-h4" }, "Alain Dagher", -1),
  T = { class: "float-right vertical-top" },
  B = e("a", { href: "alain.dagher@mcgill.ca" }, "alain.dagher@mcgill.ca", -1),
  H = e(
    "p",
    { class: "q-my-md text-subtitle2 text-orange-9" },
    "Dagher's Lab",
    -1
  ),
  I = e(
    "a",
    {
      class: "q-my-md text-subtitle2",
      href: "https://scholar.google.ca/citations?user=Lu2XPfUAAAAJ&hl=en&oi=ao",
    },
    "Google-scholar",
    -1
  ),
  Q = e(
    "p",
    { class: "q-my-md" },
    "Dr. Dagher is a neurologist specializing in movement disorders and functional brain imaging. His research aims at understanding the function of the basal ganglia, with a particular emphasis on appetitive behaviours. This involves studying how we learn about rewards and punishments, and become motivated to engage in reward seeking behaviours. The two main techniques used are positron emission tomography (PET) targeting the dopamine system, and functional magnetic resonance imaging (fMRI). The research focuses on Parkinson\u2019s disease, stress, drug addiction (notably cigarette smoking), pathological gambling, and obesity. Dr Dagher is funded by CIHR, FRSQ, NIDA, the Parkinson Society of Canada, The Institute for Research on Pathological Gambling and Related Disorders, and Unilever PLC.",
    -1
  ),
  j = e(
    "p",
    { class: "text-h4 q-ma-md text-blue-grey-9", style: { width: "100%" } },
    "Current Members",
    -1
  ),
  N = { style: { width: "100%" }, class: "flex" },
  q = { class: "absolute-bottom text-subtitle2 text-center" },
  F = { class: "text-subtitle2 text-weight-bold" },
  z = e(
    "p",
    { class: "text-h4 q-ma-md text-blue-grey-9", style: { width: "100%" } },
    "Alumni",
    -1
  ),
  $ = { class: "absolute-bottom text-subtitle2 text-center" };
function G(t, K, E, J, V, O) {
  return (
    s(),
    r(
      k,
      { class: "flex justify-center items-start" },
      {
        default: i(() => [
          e("div", A, [
            C,
            U,
            e("div", L, [
              n(l, {
                class: "float-left q-ma-md",
                src: M,
                style: { width: "25%", "min-width": "300px" },
              }),
              R,
              e("div", T, [
                n(
                  v,
                  { label: "contact me", "dropdown-icon": "change_history" },
                  {
                    default: i(() => [
                      n(f, null, {
                        default: i(() => [
                          P(
                            (s(),
                            r(
                              y,
                              { clickable: "" },
                              {
                                default: i(() => [
                                  n(b, null, { default: i(() => [B]), _: 1 }),
                                ]),
                                _: 1,
                              }
                            )),
                            [[w]]
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              H,
              I,
              Q,
            ]),
            j,
            e("div", N, [
              (s(!0),
              h(
                m,
                null,
                u(
                  t.items,
                  (a, o) => (
                    s(),
                    r(
                      d,
                      {
                        key: o,
                        onClick: (p) => t.toPage(o),
                        class: "q-ma-sm gt-xs cursor-pointer",
                        style: { width: "30%" },
                        flat: "",
                        bordered: "",
                      },
                      {
                        default: i(() => [
                          n(
                            l,
                            {
                              class: "rounded-borders col-3",
                              fit: "cover",
                              src: a.url,
                            },
                            {
                              default: i(() => [e("div", q, c(a.title), 1)]),
                              _: 2,
                            },
                            1032,
                            ["src"]
                          ),
                        ]),
                        _: 2,
                      },
                      1032,
                      ["onClick"]
                    )
                  )
                ),
                128
              )),
            ]),
            (s(!0),
            h(
              m,
              null,
              u(
                t.items,
                (a) => (
                  s(),
                  r(
                    d,
                    {
                      class: "my-card q-ma-sm lt-sm cursor-pointer",
                      style: { width: "90%" },
                      flat: "",
                      bordered: "",
                    },
                    {
                      default: i(() => [
                        n(
                          g,
                          { horizontal: "" },
                          {
                            default: i(() => [
                              n(
                                l,
                                {
                                  class: "rounded-borders col-6",
                                  fit: "cover",
                                  Style: "height:100%",
                                  src: a.url,
                                },
                                null,
                                8,
                                ["src"]
                              ),
                              n(
                                g,
                                null,
                                {
                                  default: i(() => [
                                    e("p", F, c(a.title), 1),
                                    S(" " + c(a.content), 1),
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
                      ]),
                      _: 2,
                    },
                    1024
                  )
                )
              ),
              256
            )),
            z,
            (s(!0),
            h(
              m,
              null,
              u(
                t.alumni,
                (a, o) => (
                  s(),
                  r(
                    d,
                    {
                      key: o,
                      onClick: (p) => t.goPage(o),
                      class: "q-ma-md gt-xs cursor-pointer",
                      style: { width: "30%" },
                      flat: "",
                      bordered: "",
                    },
                    {
                      default: i(() => [
                        n(
                          l,
                          {
                            class: "rounded-borders col-3",
                            fit: "cover",
                            src: a.url,
                          },
                          {
                            default: i(() => [e("div", $, c(a.title), 1)]),
                            _: 2,
                          },
                          1032,
                          ["src"]
                        ),
                      ]),
                      _: 2,
                    },
                    1032,
                    ["onClick"]
                  )
                )
              ),
              128
            )),
          ]),
        ]),
        _: 1,
      }
    )
  );
}
var re = D(x, [["render", G]]);
export { re as default };
