
<template>
    <q-page class="flex justify-center items-start">
      <div class="q-ma-md flex justify-start wrap gt-xs" style="width:900px">
        <p class="text-h3 q-ml-md" style="width:100%">Publications</p>
        <div class="q-ma-md">
          <template v-for="item,key in items" :key="key">
            <a class="text-h6" :href="item.url">{{item.title}}</a>
            <p class="">{{item.author}}</p>
            <p class="">{{item.date}}</p>
          </template>
        </div>
      </div>
      <div class="q-ma-md flex justify-start wrap lt-sm">
        <p class="text-h3 q-ml-md" style="width:100%">Publications</p>
        <div class="q-ma-md">
          <template v-for="item,key in items" :key="key">
            <p class="text-h4">{{item.title}}</p>
            <p class="">{{item.author}}</p>
            <p class="">{{item.content}}</p>
          </template>
        </div>
      </div>
    </q-page>
  </template>

<script>
import { defineComponent } from 'vue'
import { web } from '../i18n/publication.js'

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      items: [{
        title: web[0][0],
        url: web[0][1],
        author: web[0][2],
        date: web[0][3]
      }, {
        title: web[1][0],
        url: web[1][1],
        author: web[1][2],
        date: web[1][3]
      }]
    }
  },
  method: {
    goto: function (url) {
      if (url) {
        window.open(url, '_blank')
      }
    }
  }
})
</script>
