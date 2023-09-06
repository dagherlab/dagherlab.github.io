<!-- eslint-disable vue/valid-v-for -->
<template>
    <q-page class="flex justify-center items-start">
        <div class="q-ma-md flex justify-start wrap" style="width:900px">
            <p class="text-h3 q-ml-md" style="width:100%">Team</p>
            <p class="text-h4 q-ma-md text-blue-grey-9" style="width:100%">Member:</p>
            <div class="q-ma-md" style="width:100%">
              <q-img class="float-left q-ma-md" src="~/assets/Team/QinTao.jpg" style="width:25%;min-width:300px;"></q-img>
              <p class="text-h4">Qin Tao</p>
              <div class="float-right vertical-top">
                <q-btn-dropdown label="contact me" dropdown-icon="change_history">
                  <q-list>
                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <a href="QinTao@mcgill.ca">QinTao@mcgill.ca</a>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
              <p class="q-my-md text-subtitle2 text-orange-9">Dagher's Lab</p>
              <div class="q-ma-md">
                <p class="q-my-md">Qin received her B.S. degree in computer science and technology from Chengdu University of Technology and her M.S. degree in biomedical engineering from University of Electronic Science and Technology of China. For her PhD, her research interests include visual neuroscience research, where she attempts to explore the inner visual representation and apply it to computational model design. Moreover, Qin is also interested in decision-making and the reward system, and she attempts to collaborate with Alex Pastor-Bernier to investigate the effect of dopamine levels on perceptual decision-making.</p>
              </div>
              </div>
        </div>
    </q-page>
  </template>
