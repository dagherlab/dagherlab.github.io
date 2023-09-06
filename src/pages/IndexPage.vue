<!-- eslint-disable vue/require-v-for-key -->
<template>
  <q-page class="flex justify-center row items-start no-wrap">
    <div class="col-4 q-ma-md" style="width:800px">
      <p class="text-h4 q-ma-md text-orange-10">Welcome to the Dagher Lab</p>
      <div class="q-ma-md">
        <p>We are a dynamic research group at the Montreal Neurological Institute. Our laboratory examines various pathological states that are related to a disruption in dopamine function. These range from motor disease (Parkinson’s) to addictive disorders (gambling, smoking, obesity). We are currently employing various neuroimaging techniques, including functional MRI, PET and rTMS; in concert with these types of data we are also investigating some of the behavioral, endocrine and metabolic correlates of these syndromes so that we may gain a better and more thorough understanding into the complexities of these disease states.</p>
      </div>
      <div class="q-ma-md"><q-img src="~/assets/main.jpg"/></div>
      <div class="q-ma-md"><p>We are located at the Montreal Neurological Institute at McGill University, the birthplace of cognitive neuroscience and home to Penfield, Milner, Jasper and others. We exchange ideas and work with our colleagues in the McConnell Brain Imaging Centre.
          We are grateful for funding from CIHR, FRSQ, NIDA, the Parkinson Society of Canada, The Institute for Research on Pathological Gambling and Related Disorders, and Unilever PLC.
          </p>
      </div>

      <!-- extra: -->
      <div class="q-pa-md">
        <q-parallax>
          <template v-slot:media>
            <img src="https://cdn.quasar.dev/img/parallax2.jpg">
          </template>

          <template v-slot:content="scope">
            <div
              class="absolute column items-center"
              :style="{
                opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
                top: (scope.percentScrolled * 60) + '%',
                left: 0,
                right: 0
              }"
            >
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" style="width: 150px; height: 150px">
              <div class="text-h3 text-white text-center">Quasar Framework</div>
              <div class="text-h6 text-grey-3 text-center">
                v{{ $q.version }}
              </div>
            </div>
          </template>
        </q-parallax>
      </div>
<!--

      extra -->
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      items: [{
        date: '2022',
        content: '123321'
      }, {
        date: '2022',
        content: 'content here'
      }]
    }
  }
})
</script>
