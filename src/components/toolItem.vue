<<<<<<< HEAD
<template>
  <tem-item v-for="item in itemFilter" :key="item.id" :id="item.id" :title="item.tag + ' ' + item.title" :shopImg="item.shopImg" :shopIcon="item.shopIcon" :subTitle="item.subTitle" :tag="item.tag" :byName="item.byName"
    @item-bookmark="addBookmark(item), snackbarTest(item.tag)">
  </tem-item>

  <div v-if="snackbarBookmark" class="test-snackbar_wrap">
    <div class="snackbar added">
      {{ 'added' + ' ' + bookmarkMsg }}
      <router-link to="/bookmarks" class="toBookmark">
        <span>view</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import temItem from '../components/temItem.vue'

// eslint-disable-next-line no-unused-vars
let nowState
export default {
  name: 'app',
  components: {
    temItem
  },
  data () {
    return {
      nowItem: this.$store.state.nav,
      nowLink: '',
      bookmarkMsg: '',
      snackbarBookmark: false
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
  },
  methods: {
    snackbarTest (tit) {
      this.snackbarBookmark = true
      this.bookmarkMsg = tit

      setTimeout(() => {
        this.snackbarBookmark = false
      }, 2000)
    },
    addBookmark (item) {
      if (String(item.id).search('card') === 0) {
        nowState = this.$store.state.communities
      } else {
        nowState = this.$store.state.Items
      }

      this.$store.commit('addBookmark', [item, nowState])
    }
  }
}
</script>
=======
<template>
  <tem-item v-for="item in itemFilter" :key="item.id" :id="item.id" :title="item.tag + ' ' + item.title" :shopImg="item.shopImg" :shopIcon="item.shopIcon" :subTitle="item.subTitle" :tag="item.tag" :byName="item.byName"
    @item-bookmark="addBookmark(item), snackbarTest(item.tag)">
  </tem-item>

  <div v-if="snackbarBookmark" class="test-snackbar_wrap">
    <div class="snackbar added">
      {{ 'added' + ' ' + bookmarkMsg }}
      <router-link to="/bookmarks" class="toBookmark">
        <span>view</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import temItem from '../components/temItem.vue'

// eslint-disable-next-line no-unused-vars
let nowState
export default {
  name: 'app',
  components: {
    temItem
  },
  data () {
    return {
      nowItem: this.$store.state.nav,
      nowLink: '',
      bookmarkMsg: '',
      snackbarBookmark: false
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
  },
  methods: {
    snackbarTest (tit) {
      this.snackbarBookmark = true
      this.bookmarkMsg = tit

      setTimeout(() => {
        this.snackbarBookmark = false
      }, 2000)
    },
    addBookmark (item) {
      if (String(item.id).search('card') === 0) {
        nowState = this.$store.state.communities
      } else {
        nowState = this.$store.state.Items
      }

      this.$store.commit('addBookmark', [item, nowState])
    }
  }
}
</script>
>>>>>>> 269fa2588211df2b85852438c0a4017feed285ae
