<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <q-page class="flex justify-center items-start">
        <div class="q-ma-md flex justify-start wrap" style="width:900px">
            <p class="text-h3 q-ml-md" style="width:100%">Team</p>
            <p class="text-h4 q-ma-md text-blue-grey-9" style="width:100%">Member:</p>
            <div class="q-ma-md" style="width:100%">
              <q-img class="float-left q-ma-md" src="~/assets/Team/ShadyRahayel.jpg" style="width:25%;min-width:300px;"></q-img>
              <p class="text-h4">Shady Rahayel</p>
              <div class="float-right vertical-top">
                <q-btn-dropdown label="contact me" dropdown-icon="change_history">
                  <q-list>
                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <a href="Shady Rahayel@mcgill.ca">Shady Rahayel@mcgill.ca</a>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
              <p class="q-my-md text-subtitle2 text-orange-9">Dagher's Lab</p>
              <div class="q-ma-md">
                <p class="q-my-md">Shady Rahayel is a postdoctoral researcher specialized in brain imaging, sleep, and neurodegenerative disorders. After a first postdoctoral training in molecular imaging at the University of Montreal, he is now a postdoctoral researcher at The Neuro in the lab of Alain Dagher. His research work primarily focuses on the use of MRI imaging and computational neuroscience to understand the neurodegeneration associated with prodromal and manifest synucleinopathies. Shady also practices as a clinical sleep psychologist.</p>
              </div>
              </div>
        </div>
    </q-page>
  </template>
