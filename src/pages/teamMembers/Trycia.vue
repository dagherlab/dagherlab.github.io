<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <q-page class="flex justify-center items-start">
        <div class="q-ma-md flex justify-start wrap" style="width:900px">
            <p class="text-h3 q-ml-md" style="width:100%">Team</p>
            <p class="text-h4 q-ma-md text-blue-grey-9" style="width:100%">Member:</p>
            <div class="q-ma-md" style="width:100%">
              <q-img class="float-left q-ma-md" src="~/assets/Team/TryciaKouchache.jpg" style="width:25%;min-width:300px;"></q-img>
              <p class="text-h4">Trycia Kouchache</p>
              <div class="float-right vertical-top">
                <q-btn-dropdown label="contact me" dropdown-icon="change_history">
                  <q-list>
                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <a href="Trycia Kouchache@mcgill.ca">Trycia Kouchache@mcgill.ca</a>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
              <p class="q-my-md text-subtitle2 text-orange-9">Dagher's Lab</p>
              <div class="q-ma-md">
                <p class="q-my-md">Trycia completed her MSc in the Dopamine Neuroimaging lab working on the Polygenic Risk Scores for Smoking and their association with brain morphometry in typical development. Trycia now works in clinical research on brain tumours, movement disorders and cognitive diseases at the NEURO.</p>
              </div>
              </div>
        </div>
    </q-page>
  </template>
