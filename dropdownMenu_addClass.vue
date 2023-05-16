<template>
  <div class="exploreBtn top_btn nav_box">
    <span ref="menu" @click="click">explor</span>
    <div class="dropDown" ref="downMenu" v-if="state.isOpened" :class="{ active: isActive }">
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
    const downMenu = ref(null)
    const state = reactive({ isOpened: false })

    function click() {
      !state.isOpened ? open() : close()
    }

    function open() {
      state.isOpened = true
      window.addEventListener('click', outside)

      setTimeout(() => {
        downMenu.value.classList.add('active')
      }, 100)
    }

    function close() {
      state.isOpened = false
      window.removeEventListener('click', outside)
    }

    function outside(e) {
      if (e.target !== menu.value) close()
    }

    return { menu, downMenu, state, click }
  }
}
</script>