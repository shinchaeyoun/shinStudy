<template>
  <header>
    <div class="header_container">
      <router-link to="/" class="logo nav_box">
        <span ref="btn" @click="logoActive">#</span>
      </router-link>

      <div class="title ttn">
        <span>appydev</span>
      </div>

      <div class="searchBox nav_box">
        <div class="icon">
          <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
            stroke="currentColor" class="w-5 h-5">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <div class="input">
          <input id="searchInput" type="text" placeholder="Search Tools, Cerators & Communities">
        </div>
      </div>

      <div class="btn_wrap">
        <router-link to="/sponsors" class="sponsorsBtn nav_box">
          <span>sponsors</span>
        </router-link>

        <div id="explor" class="exploreBtn top_btn nav_box">
          <span ref="menu" @click="click">explor</span>
          <transition name="fade">
            <div class="dropDown" ref="downMenu" v-if="state.isOpened">
              <ul>
                <router-link to="/" class="dropMenu tools">
                  <span>Tools</span>
                </router-link>
                <router-link to="/communities" class="dropMenu communities">
                  <span>Communities</span>
                </router-link>
                <router-link to="podcasts" class="dropMenu podcasts">
                  <span>Podcasts</span>
                </router-link>
              </ul>
            </div>
          </transition>

        </div>
        <router-link to="/submit" id="submit" class="submitBtn nav_box">
          <span>submit</span>
        </router-link>
        <router-link to="/bookmarks" id="bookmarks" class="bookmarksBtn nav_box jcsb">
          <span>{{ bookList }}</span> <span>bookmarks</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  setup () {
    const menu = ref(null)
    const downMenu = ref(null)
    const btn = ref(null)
    const state = reactive({ isOpened: false })

    function click () {
      !state.isOpened ? open() : close()
    }

    function open () {
      state.isOpened = true
      window.addEventListener('click', outside)
    }

    function close () {
      state.isOpened = false
      window.removeEventListener('click', outside)
    }

    function outside (e) {
      if (e.target !== menu.value) close()
    }

    function otherArea (e) {
      if (e.target === btn.value) {
        btn.value.parentNode.classList.add('router-link-exact-active')
      } else {
        btn.value.parentNode.classList.remove('router-link-exact-active')
      }
    }

    function logoActive (e) {
      window.addEventListener('click', otherArea)
    }

    return { btn, menu, downMenu, state, click, logoActive }
  },
  computed: {
    bookList () {
      const numberAddBookmark = this.$store.state.Items.filter((item) => item.isBookmark).length
      return numberAddBookmark
    }
  }
}
</script>
