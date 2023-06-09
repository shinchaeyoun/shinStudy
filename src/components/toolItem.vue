<template>
  <tem-item v-for="item in itemFilter" :key="item.id" :id="item.id" :title="item.tag + ' ' + item.title" :subTitle="item.subTitle" :tag="item.tag" :byName="item.byName" @item-bookmark="$store.commit('setBookmark',item.id)">
  </tem-item>

  <template>
    <div class="text-center ma-2">
      <v-btn @click="snackbar = true"> Open Snackbar </v-btn>
      <v-snackbar v-model="snackbar" :timeout="200">
        {{ text }}

        <template v-slot:actions>
          <v-btn color="pink" variant="text" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </template>
</template>

<script>
import temItem from '../components/temItem.vue'

export default {
  name: 'app',
  components: {
    temItem
  },
  data () {
    return {
      nowItem: this.$store.state.nav,
      nowLink: ''
    }
  },
  created () {
    const url = document.location.href.split('/')
    const routerLink = url[url.length - 1]

    for (let i = 0; i < this.nowItem.length; i++) {
      if (this.nowItem[i].link === routerLink) {
        this.nowLink = this.nowItem[i].title
      }
    }
  },
  computed: {
    itemFilter () {
      const thislink = this.nowLink

      if (thislink === '' || thislink === undefined || thislink === 'all') {
        return this.$store.state.Items
      } else {
        return this.$store.state.Items.filter(function (item) {
          return item.tag === thislink
        })
      }
    }
  }
}
</script>
