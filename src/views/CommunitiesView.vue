<template>
  <div id="communities" class="m-auto">
    <div class="title-area">
      <div class="page-title fwb">communities</div>
      <p>A list of communities helping each other make awesome things, teach beginners and solving problems, get jobs & get better at whetever they are doing.</p>
    </div>

    <!-- store 에서 아이템 정보 받아오기 -->
    <div class="item-wrap flex jcsb">
      <div class="item-wrap">
        <CommunitieItem v-for="card in communities" :key="card.title" :title="card.title" :describe="card.describe" :name="card.name"></CommunitieItem>
      </div>

      <div class="newsletter box-shadow">
        <div class="title">newsletter</div>
        <p>a curated list of handpicked products delivered to your email every week</p>

        <div class="input-wrap">
          <input type="text">
          <button></button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import CommunitieItem from '../components/CommunitieItem.vue'

export default {
  components: {
    CommunitieItem
  },
  computed: {
    communities () {
      return this.$store.state.communities
    }
  }
}
</script>
