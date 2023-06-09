<template>
  <main id="bookMarkList" class="m-auto posr">
    <div class="page-title fwb">bookmarks</div>

    <ul v-if="hasBookmark" class="bookMark-wrap box-bg m-auto">
      <div class="all-clear-btn posa box-bg flex aic" @click="allClear(), $store.commit('clearBookmark')">
        <span>
          <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
            stroke="currentColor" class="h-6 w-6">
            <path
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
            </path>
          </svg>
        </span>
        clear
      </div>

      <BookmarkList v-for="list in bookList" :key="list" :id="list.id" :title="list.title" :tag="list.tag" @item-delete="bookmarkArr"></BookmarkList>
    </ul>
  </main>
</template>

<script>
import BookmarkList from '../components/BookmarkList.vue'

export default {
  components: {
    BookmarkList
  },
  data () {
    let bookmarkBool = false
    const bookmarkListArr = this.$store.state.Items.filter((item) => item.isBookmark)

    bookmarkListArr.length > 0 ? bookmarkBool = true : bookmarkBool = false

    return {
      hasBookmark: bookmarkBool
    }
  },
  computed: {
    bookList () {
      const bookmarkListArr = this.$store.state.Items.filter((item) => item.isBookmark)

      return bookmarkListArr
    }
  },
  methods: {
    allClear () {
      this.hasBookmark = false
    },
    bookmarkArr () {
      const bookmarkListArr = this.$store.state.Items.filter((item) => item.isBookmark)

      if (bookmarkListArr.length <= 0) {
        this.hasBookmark = false
      }
    }
  }
}
</script>
