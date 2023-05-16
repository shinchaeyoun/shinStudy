<template>
  <div class="exploreBtn top_btn nav_box">
    <span ref="menu" @click="setActive">explor</span>
    <div class="dropDown" :class="{ active: isActive }">
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
export default {
  data: function () {
    return {
      isActive: false
    }
  },
  methods: {
    setActive() {
      this.isActive = !this.isActive
    }
  }
}
</script>