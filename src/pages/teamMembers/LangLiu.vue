<!-- eslint-disable vue/valid-v-for -->
<template>
    <q-page class="flex justify-center items-start">
        <div class="q-ma-md flex justify-start wrap" style="width:900px">
            <p class="text-h3 q-ml-md" style="width:100%">Team</p>
            <p class="text-h4 q-ma-md text-blue-grey-9" style="width:100%">Member:</p>
            <div class="q-ma-md" style="width:100%">
              <q-img class="float-left q-ma-md" src="~/assets/Team/langliu.jpg" style="width:25%;min-width:300px;"></q-img>
              <p class="text-h4">Lang Liu</p>
              <div class="float-right vertical-top">
                <q-btn-dropdown label="contact me" dropdown-icon="change_history">
                  <q-list>
                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <a href="alain.dagher@mcgill.ca">Lang_Liu@mcgill.ca</a>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
              <p class="q-my-md text-subtitle2 text-orange-9">Dagher's Lab</p>
              <div class="q-ma-md">
                <p class="q-my-md">Lang completed his BA in cell and systems biology, statistics and mathematics in the University of Toronto. He completed his MSc in biomedical informatics in the Department of Computing, Queens University. His projects are focused on bioinformatic and machine learning approaches using genetics and brain imaging in PD.</p>
              </div>
              </div>
        </div>
    </q-page>
  </template>
