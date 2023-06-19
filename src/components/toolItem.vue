<template>
  <tem-item v-for="item in itemFilter" :key="item.id" :id="item.id" :title="item.tag + ' ' + item.title" :subTitle="item.subTitle" :tag="item.tag" :byName="item.byName" @item-bookmark="$store.commit('setBookmark',item.id)">
  </tem-item>

  <div class="test-snackbar_wrap">
    <div class="snackbar added" @snackbar-bookmark="snackbarTest()">
      test1
      <span>close</span>
    </div>
    <div class="snackbar added">
      test2 {{ this.$store.state.Items[0].tag }}
      <span>close</span>
    </div>
    <div class="snackbar remove">
      test3 {{ this.$store.state.Items[8].tag }}
      <span>close</span>
    </div>
  </div>

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
    },
    bookmarkStateMsg () {
      const testMsg = 'test hi'
      console.log(testMsg, 'added or remove')
      return testMsg
    }
  },
  methods: {
    snackbarTest () {
      console.log('snackbarTest tool')
    }
  }
}
</script>
