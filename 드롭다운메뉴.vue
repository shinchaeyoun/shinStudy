<template>
  <div class="exploreBtn top_btn nav_box">
    <span ref="menu" @click="click">explor</span>
    <div class="dropDown" v-if="state.isOpened">
      <ul>
        <router-link to="/tools" class="dropMenu tools">
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
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  setup() {
    const menu = ref(null)
    const state = reactive({ isOpened: true })

    function click() {
      !state.isOpened ? open() : close()
    }

    function open() {
      state.isOpened = false
      window.addEventListener('click', outside)
    }

    function close() {
      state.isOpened = true
      window.removeEventListener('click', outside)
    }

    function outside(e) {
      if (e.target !== menu.value) close()
    }
    return { menu, state, click }
  }
}
</script>