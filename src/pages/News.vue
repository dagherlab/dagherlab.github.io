<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <q-page class="flex justify-center col items-start wrap">
        <template v-for="item,index in items" :key="index">
            <div class="q-pa-lg row justify-center items-start q-gutter-md" style="width:60%; min-width: 900px">
                <q-card class="q-ma-md" flat bordered  style="width:80%">
                <q-img
                    :src="item.url"
                />

                <q-card-section>
                    <div class="text-overline text-orange-9">Dagher's lab</div>
                    <div class="text-h5 q-mt-sm q-mb-xs">{{item.title}}</div>
                    <div class="text-caption text-black">
                    {{ item.people }}
                    </div>
                    <div class="q-my-md text-caption text-black">
                    {{ item.content }}
                    </div>
                </q-card-section>
                </q-card>
            </div>
        </template>
    </q-page>
</template>
<script>
import { defineComponent } from 'vue'
import { news } from '../i18n/news.js'

export default defineComponent({
  data () {
    return {
      items: [{
        title: 'Neuro Appreciation day in 2022',
        url: new URL('../assets/newsPhoto/NeuroAppreciationdayin2022.jpg', import.meta.url).href,
        people: ' ',
        content: 'content here'
      }, {
        title: 'Lab picnic 2022',
        url: new URL('../assets/newsPhoto/Labpicnic2022.jpg', import.meta.url).href,
        people: ' ',
        content: 'content here'
      }, {
        title: 'Lab dinner 2021',
        url: new URL('../assets/newsPhoto/Labdinner2021.jpg', import.meta.url).href,
        people: 'all of us',
        content: news[2][3]
      }, {
        title: 'Filip and Mari',
        url: new URL('../assets/newsPhoto/FilipandMari.jpg', import.meta.url).href,
        people: 'Filip Morys & Mari',
        content: 'content here'
      }, {
        title: 'Lab in the conference',
        url: new URL('../assets/newsPhoto/Labintheconference.jpg', import.meta.url).href,
        people: ' ',
        content: 'content here'
      }, {
        title: 'LiuYi and JiaQi farewell party',
        url: new URL('../assets/newsPhoto/LiuYiandJiaQifarewellparty.jpg', import.meta.url).href,
        people: ' ',
        content: 'content here'
      }, {
        title: "Filip's presentation",
        url: new URL('../assets/newsPhoto/Filipspresentation.jpg', import.meta.url).href,
        people: 'Filip Morys',
        content: 'content here'
      }]
    }
  }
})
</script>
