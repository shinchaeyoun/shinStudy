<template>
  <main id="bookMarkList" class="m-auto posr">
    <div class="page-title fwb">bookmarks</div>

    <div class="all-clear-btn posa box-bg flex aic" @click="allClear(),$store.commit('clearBookmark')">
      <span><svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></span>
      clear
    </div>

    <ul v-if="hasBookmark" class="bookMark-wrap box-bg m-auto">
      <BookmarkList v-for="list in bookList" :key="list" :title="list.title" :tag="list.tag"></BookmarkList>
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
    // const stitle = ''
    const shin = this.$store.state.Items.filter((item) => item.isBookmark)

    let bookmarkBool = false

    if (shin.length > 0) {
      bookmarkBool = true
    } else {
      bookmarkBool = false
    }

    console.log(bookmarkBool)
    return {
      hasBookmark: bookmarkBool
    }
  },
  computed: {
    bookList () {
      const shin = this.$store.state.Items.filter((item) => item.isBookmark)

      return shin
    }
  },
  methods: {
    allClear () {
      console.log('all clear')
    }
  }
}
</script>
