<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-v-for -->
<template>
    <q-page class="flex justify-center items-start">
        <div class="q-ma-md flex justify-start wrap" style="width:900px">
            <p class="text-h3 q-ml-md" style="width:100%">Team</p>
            <p class="text-h4 q-ma-md text-blue-grey-9" style="width:100%">Member:</p>
            <div class="q-ma-md" style="width:100%">
              <q-img class="float-left q-ma-md" src="~/assets/Team/mari.jpg" style="width:25%;min-width:300px;"></q-img>
              <p class="text-h4">Mari Shishikura</p>
              <div class="float-right vertical-top">
                <q-btn-dropdown label="contact me" dropdown-icon="change_history">
                  <q-list>
                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <a href="Mari Shishikura@mcgill.ca">Mari Shishikura@mcgill.ca</a>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
              <p class="q-my-md text-subtitle2 text-orange-9">Dagher's Lab</p>
              <div class="q-ma-md">
                <p class="q-my-md">Mari received B.Sc. in biology from Kyoto University, Japan. For her PhD, she investigates how genetic and socioeconomic factors impact the brain, leading to impulsive behaviours. Additionally, she is interested in how brain mechanisms involved in impulsivity plays a role in obesity.</p>
              </div>
              </div>
        </div>
    </q-page>
  </template>
