<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-v-for -->
<template>
    <q-page class="flex justify-center items-start">
        <div class="q-ma-md flex justify-start wrap" style="width:900px">
            <p class="text-h3 q-ml-md" style="width:100%">Team</p>
            <p class="text-h4 q-ma-md text-blue-grey-9" style="width:100%">Member:</p>
            <div class="q-ma-md" style="width:100%">
              <q-img class="float-left q-ma-md" src="~/assets/Team/FilipMorys.jpg" style="width:25%;min-width:300px;"></q-img>
              <p class="text-h4">Filip Morys</p>
              <div class="float-right vertical-top">
                <q-btn-dropdown label="contact me" dropdown-icon="change_history">
                  <q-list>
                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <a href="FilipMorys@mcgill.ca">FilipMorys@mcgill.ca</a>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
              <p class="q-my-md text-subtitle2 text-orange-9">Dagher's Lab</p>
              <div class="q-ma-md">
                <p class="q-my-md">Filip is a postdoctoral research fellow at the Dagher Lab. He received his PhD in Leipzig, Germany, where he worked with Dr. Annette Horstmann on neural correlates of maladaptive decision-making in obesity. Currently, Filip is funded by the FRQS and is working on defining the causes and consequences of obesity. He is investigating the environmental, brain, and genetic risk factors for unhealthy weight gain as well as the long-term effects of chronic obesity on the brain. When not neurosciencing, Filip can be found playing tennis, watching tennis, or obsessing about a healthy lifestyle.</p>
              </div>
              </div>
        </div>
    </q-page>
  </template>
