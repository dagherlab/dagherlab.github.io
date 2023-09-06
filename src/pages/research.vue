<!-- eslint-disable vue/valid-v-for -->
<template>
    <q-page class="flex justify-center items-start">
        <div class="q-ma-md flex justify-start wrap" style="width:900px">
            <p class="text-h3 q-ml-md" style="width:100%">Research</p>
            <template v-for="item in items">
                <q-card class="my-card gt-xs q-ma-md" style="width:45%">
                    <img src="https://cdn.quasar.dev/img/mountains.jpg">

                    <q-card-section>
                        <div class="text-h6">{{item.title}}</div>
                        <div class="text-subtitle2 text-orange-9">{{item.author}}</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        {{ item.content }}
                    </q-card-section>
                </q-card>
            </template>
            <template v-for="item in items">
                <q-card class="my-card lt-sm q-ma-md" style="width:90%">
                    <img src="https://cdn.quasar.dev/img/mountains.jpg">

                    <q-card-section>
                        <div class="text-h6">{{item.title}}</div>
                        <div class="text-subtitle2">{{item.author}}</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none">
                        {{ item.content }}
                    </q-card-section>
                </q-card>
            </template>
        </div>
    </q-page>
  </template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      items: [{
        title: '2022',
        author: 'author',
        content: 'content here'
      }, {
        title: '2022',
        author: 'author',
        content: 'content here'
      }, {
        title: '2022',
        author: 'author',
        content: 'content here'
      }, {
        title: '2022',
        author: 'author',
        content: 'content here'
      }, {
        title: '2022',
        author: 'author',
        content: 'content here'
      }, {
        title: '2022',
        author: 'author',
        content: 'content here'
      }]
    }
  }
})
</script>
