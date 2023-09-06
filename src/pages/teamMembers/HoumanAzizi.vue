<!-- eslint-disable vue/valid-v-for -->
<template>
    <q-page class="flex justify-center items-start">
        <div class="q-ma-md flex justify-start wrap" style="width:900px">
            <p class="text-h3 q-ml-md" style="width:100%">Team</p>
            <p class="text-h4 q-ma-md text-blue-grey-9" style="width:100%">Member:</p>
            <div class="q-ma-md" style="width:100%">
              <q-img class="float-left q-ma-md" src="~/assets/Team/Houman.jpg" style="width:25%;min-width:300px;"></q-img>
              <p class="text-h4">Houman Azizi</p>
              <div class="float-right vertical-top">
                <q-btn-dropdown label="contact me" dropdown-icon="change_history">
                  <q-list>
                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <a href="Houman@mcgill.ca">HoumanAzizi@mcgill.ca</a>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
              <p class="q-my-md text-subtitle2 text-orange-9">Dagher's Lab</p>
              <div class="q-ma-md">
                <p class="q-my-md">Houman received his B.Sc. in Honours Neuroscience from McGill University, and has since taken an interest in research in the fields of neurodegenration and neuroimaging.He worked as a research assistant at the Douglas Mental Health Institute with a focus on performing neuropsychological tests and MRI scans on human participants.He started his MSc studies at Dr. Alain Dagher’s lab with co-supervision of Dr. Yashar Zeighami in September 2021, working on the relationship between polygenic risk scores and neuroanatomical measures in Parkinson’s disease.His research interests include looking at the genetic and neurological patterns underlying Parkinson’s disease and modeling of neurodegenerative disorders through machine learning.</p>
              </div>
              </div>
        </div>
    </q-page>
  </template>
