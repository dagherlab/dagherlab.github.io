<!-- eslint-disable vue/require-v-for-key -->
<template>
    <q-page class="flex justify-center items-start">
        <div class="q-ma-md flex justify-start wrap" style="width:900px">
            <p class="text-h3 q-ml-md" style="width:100%">Team</p>
            <p class="text-h4 q-ma-md text-blue-grey-9" style="width:100%">Member:</p>
            <div class="q-ma-md" style="width:100%">
              <q-img class="float-left q-ma-md" src="~/assets/Team/ChristinaTremblay.jpg" style="width:25%;min-width:300px;"></q-img>
              <p class="text-h4">Christina Tremblay</p>
              <div class="float-right vertical-top">
                <q-btn-dropdown label="contact me" dropdown-icon="change_history">
                  <q-list>
                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <a href="ChristinaTremblay@mcgill.ca">ChristinaTremblay@mcgill.ca</a>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
              <p class="q-my-md text-subtitle2 text-orange-9">Dagher's Lab</p>
                <div class="q-ma-md">
                  <p class="q-my-md">Christina Tremblay completed a PhD in Medical Research (Laval University, Canada) under the supervision of Dr. Laura Monetta, Dr. Joël Macoir and Dr. Cyril Schneider about the effects of two brain stimulation technics, Deep Brain Stimulation and Transcranial Magnetic Stimulation (TMS), on cognitive and language abilities in Parkinson’s disease. She also used TMS to investigate the role of the supplementary motor cortex in decision-making during her postdoctoral training at Aix-Marseille University in France. She holds a MSc in Neurobiology and BSc in Physic both from Laval University, Canada. She is currently working at the Montreal Neurological Institute (MNI) with Alain Dagher’s research team on identifying vulnerable brain regions associated with Parkinson’s and Alzheimer’s disease pathology and the factors implicated in this vulnerability using multimodal neuroimaging analyses.</p>
                </div>
              </div>
              <div class="q-ma-md flex justify-start wrap" style="width:900px">
              <!-- <p class="q-my-md text-subtitle2 text-orange-9">Preprints:</p> -->
                <template v-for="item in items">
                  <p>{{ item.content }}</p>
                </template>
              <!-- <p class="q-my-md text-subtitle2 text-orange-9">Peer-reviewed publications:</p> -->
                <template v-for="item in peer">
                  <p>{{ item.content }}</p>
                </template>
              </div>
        </div>
    </q-page>
  </template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      items: [],
      peer: []
    }
  }
})
</script>
