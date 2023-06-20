<template>
  <main id="bookMarkList" class="m-auto posr">
    <div class="page-title fwb">bookmarks</div>

    <ul v-if="hasBookmark" class="bookMark-wrap box-bg m-auto">
      <div class="all-clear-btn posa box-bg flex aic jcsb" @click="allClear(), $store.commit('clearBookmark')">
        <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
          stroke="currentColor" class="h-6 w-6">
          <path
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
          </path>
        </svg>
        clear
      </div>

      <BookmarkList v-for="list in bookList" :key="list" :id="list.id" :title="list.title" :tag="list.tag"
        @item-delete="bookmarkArr"></BookmarkList>
    </ul>

    <div v-else class="empty-bookmark tac ttn">
      <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
        stroke="currentColor" class="h-16 w-16 mb-4 mx-auto">
        <path d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>

      <div>No bookmarks found, go add something and you can even email it to youself.</div>
    </div>
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
    const bookmarkListArr = this.$store.state.bookmarkArr
    // const bookmarkListArr = this.$store.state.Items.filter((item) => item.isBookmark)

    bookmarkListArr.length > 0 ? bookmarkBool = true : bookmarkBool = false

    return {
      hasBookmark: bookmarkBool
    }
  },
  computed: {
    bookList () {
      // const bookmarkListArr = this.$store.state.Items.filter((item) => item.isBookmark)

      const bookmarkArr = this.$store.state.bookmarkArr
      // return bookmarkListArr
      return bookmarkArr
    }
  },
  methods: {
    allClear () {
      this.hasBookmark = false
    },
    bookmarkArr () {
      const bookmarkListArr = this.$store.state.bookmarkArr
      // const bookmarkListArr = this.$store.state.Items.filter((item) => item.isBookmark)

      if (bookmarkListArr.length <= 0) {
        this.hasBookmark = false
      }
    }
  }
}
</script>
