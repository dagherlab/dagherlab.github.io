<!-- eslint-disable vue/valid-v-for -->
<template>
    <q-page class="flex justify-center items-start">
        <div class="q-ma-md flex justify-start wrap" style="width:900px">
            <p class="text-h3 q-ml-md" style="width:100%">Team</p>
            <p class="text-h4 q-ma-md text-blue-grey-9" style="width:100%">Member:</p>
            <div class="q-ma-md" style="width:100%">
              <q-img class="float-left q-ma-md" src="~/assets/Team/Mirja.jpg" style="width:25%;min-width:300px;"></q-img>
              <p class="text-h4">Mirja Kuhlencord</p>
              <div class="float-right vertical-top">
                <q-btn-dropdown label="contact me" dropdown-icon="change_history">
                  <q-list>
                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <a href="MirjaKuhlencord@mcgill.ca">MirjaKuhlencord@mcgill.ca</a>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
              <p class="q-my-md text-subtitle2 text-orange-9">Dagher's Lab</p>
              <div class="q-ma-md">
                <p class="q-my-md">Mirja graduated from Medical School in Germany in November 2021 (Halle University). Previously, she completed a B.Sc. degree in Psychology at Leipzig University in Germany. During her undergraduate studies, she worked as a research assistant with Prof. Jonas Obleser at the Max Planck Institute for Human Cognitive and Brain Sciences (Auditory Cognition group), examining the effects of feedback on perception and behaviour. During her medical studies, she developed a deep interest in neurological and psychiatric diseases and their pathophysiology, diagnostics and treatment. A short internship at Prof. Bogdan Draganski's Research in Neuroimaging (LREN) lab in Lausanne (Switzerland) gave her insight into neuroimaging data analysis and motivated her to pursue research in this field after her medical studies. \nShe joined the Dagher lab in July 2022 and examines the relationship between genetic risk of neurodegenerative diseases (especially Parkinson’s disease) and brain morphology. For her analyses, she works with large datasets like the UK Biobank.</p>
              </div>
              </div>
        </div>
    </q-page>
  </template>
