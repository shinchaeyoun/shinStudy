<template>
  <main id="bookMarkList" class="m-auto">
    <div class="page-title fwb">bookmarks</div>

    <ul class="bookMark-wrap box-bg m-auto">
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
    const stitle = ''
    const shin = this.$store.state.Items.filter((item) => item.isBookmark)
    console.log('hi test')

    for (let i = 0; i < shin.length; i++) {
      const stitle = shin[i].title
      console.log(stitle)
    }

    return { shin, stitle }
  },
  computed: {
    bookList () {
      const shin = this.$store.state.Items.filter((item) => item.isBookmark)

      return shin
    }
  }
}
</script>
