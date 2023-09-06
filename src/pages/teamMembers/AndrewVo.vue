<!-- eslint-disable vue/valid-v-for -->
<template>
    <q-page class="flex justify-center items-start">
        <div class="q-ma-md flex justify-start wrap" style="width:900px">
            <p class="text-h3 q-ml-md" style="width:100%">Team</p>
            <p class="text-h4 q-ma-md text-blue-grey-9" style="width:100%">Member:</p>
            <div class="q-ma-md" style="width:100%">
              <q-img class="float-left q-ma-md" src="~/assets/Team/Andrew.jpg" style="width:25%;min-width:300px;"></q-img>
              <p class="text-h4">Andew Vu</p>
              <div class="float-right vertical-top">
                <q-btn-dropdown label="contact me" dropdown-icon="change_history">
                  <q-list>
                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <a href="AndrewVo@mcgill.ca">AndrewVo@mcgill.ca</a>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
              <p class="q-my-md text-subtitle2 text-orange-9">Dagher's Lab</p>
              <div class="q-ma-md">
                <p class="q-my-md">Hi, I’m Andrew. I’m currently an FRQS postdoctoral fellow in the Dagher Lab. My research focuses on modelling the progression of brain changes in Parkinson’s disease through the lenses of connectomics and imaging transcriptomics. I completed by PhD at the University of Western Ontario, where I conducted psychopharmacological studies in patients with Parkinson’s disease and healthy volunteers to better understand the role of the dopamine system in cognition.</p>
              </div>
              </div>
        </div>
    </q-page>
  </template>
