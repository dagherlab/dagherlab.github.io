<template>
    <q-page class="flex justify-center items-start">
        <div class="q-ma-md flex justify-start wrap" style="width:900px">
            <p class="text-h3 q-ml-md" style="width:100%">Team</p>
            <p class="text-h4 q-ma-md text-blue-grey-9" style="width:100%">Member:</p>
            <div class="q-ma-md" style="width:100%">
              <q-img class="float-left q-ma-md" src="~/assets/Team/Alex.jpg" style="width:25%;min-width:300px;"></q-img>
              <p class="text-h4">Alex Pastor-Bernier</p>
              <div class="float-right vertical-top">
                <q-btn-dropdown label="contact me" dropdown-icon="change_history">
                  <q-list>
                    <q-item clickable v-close-popup>
                      <q-item-section>
                        <a href="ap787@cam.ac.uk">ap787@cam.ac.uk</a>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
              <p class="q-my-md text-subtitle2 text-orange-9">Dagher's Lab</p>
              <div class="q-ma-md">
                <p class="q-my-md">Dr Pastor-Bernier has a background in molecular biology (Ms C. University of Oslo, Norway), classic primate electrophysiology (PhD. Université de Montréal, Canada) and human systems neuroscience (University of Cambridge, UK). His work relates to the psychology field of embodied cognition (Cisek P., and Pastor-Bernier A., 2014), motivated choice and neuroeconomics in both primates and humans (Pastor-Bernier, Stasiak A., and Schultz W). His work includes electrophysiological and utility theory modelling of multiple-component rewards and reward-specific satiety in both primates and humans: Pastor-Bernier et al., 2021-2017). Dr Pastor-Bernier is interested in studying value computational mechanisms underlying vulnerability to disease including disorders of motivation and self-control like addiction and disorders where apathy and anhedonia predominate like depression and Parkinson’s Disease (PD). In Dr Dagher’s lab at the Montreal Neurological institute (MNI-BIC), Alex is conducting a perceptual-discrimination neuroimaging study with Dr Qin Tau investigating the phenotypic traits that predispose humans to impulsive behaviour (urgency signaling). He is also studying how tractography phenotypes (DTI) manifest with genetic propensities for dysfunctional dopaminergic function in Alzheimer disease (AD) and PD in UKBB, Prevent_AD and QPN databases.</p>
              </div>
              </div>
        </div>
    </q-page>
  </template>
