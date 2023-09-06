<!-- eslint-disable vue/valid-v-for -->
<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white flex" height-hint="98">
      <div style="width:50%" class="flex items-center">
        <q-toolbar>
          <p class="text-h4 no-margin text-no-wrap">Dagher's Lab</p>
        </q-toolbar>
      </div>
      <div class="flex justify-end" style="width:50%">
        <q-tabs align="left" class="gt-xs">
          <q-route-tab to="/" label="Home" style="color:grey"/>
          <q-route-tab to="research" label="Research" style="color:grey"/>
          <q-route-tab to="team" label="Team" style="color:grey"/>
          <q-route-tab to="News" label="News" style="color:grey"/>
          <q-route-tab to="publications" label="Publications" style="color:grey"/>
        </q-tabs>
        <div class="q-pa-md lt-sm">
          <q-btn-dropdown color="primary" label="menu">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label @click="home">Home</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label @click="research">Research</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label @click="team">Team</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label @click="News">News</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label @click="publications">Publications</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<style>
  p{
    color:rgb(46, 46, 46);
  }
</style>
<script>
export default {
  setup () {
    return {
      onItemClick () {
        console.log('Clicked on an Item')
      }
    }
  },
  methods: {
    home () {
      this.$router.push('/')
    },
    research () {
      this.$router.push('/research')
    },
    team () {
      this.$router.push('/team')
    },
    News () {
      this.$router.push('/News')
    },
    publications () {
      this.$router.push('/publications')
    }
  }
}
</script>
