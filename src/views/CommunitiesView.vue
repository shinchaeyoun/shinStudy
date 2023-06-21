<template>
  <div id="communities" class="m-auto">
    <div class="title-area">
      <div class="page-title fwb">communities</div>
      <p>A list of communities helping each other make awesome things, teach beginners and solving problems, get jobs & get better at whetever they are doing.</p>
    </div>

    <!-- store 에서 아이템 정보 받아오기 -->
    <div class="item-wrap flex jcsb">
      <div class="item-wrap">
        <!-- <CommunitieItem v-for="card in communities" :key="card.title" :title="card.title" :describe="card.describe" :name="card.name" :snsicon="card.snsIcon"></CommunitieItem> -->

        <!-- test -->
        <div v-for="card in communities" :key="card.title" class="communitie-box box-shadow">
          <div class="img-area"></div>

          <div class="text-area posr">
            <div class="title">{{ card.title }}</div>
            <div class="describe">{{ card.describe }}</div>

            <div class="item-info flex aic">
              <div class="icon bdrs-50 tac box-shadow"></div>
              <div class="name">{{ card.name }}</div>
            </div>
            <div class="title-icon posa flex jcfe">
              <p v-for="icon in card.snsIcon" :key="icon">{{ icon }}</p>
            </div>
          </div>
        </div>
        <!-- test -->
      </div>

      <div class="newsletter shadow b-gray">
        <div class="title">newsletter</div>
        <p>a curated list of handpicked products delivered to your email every week</p>

        <div class="input-wrap flex jcsb">
          <input type="text" placeholder="Enter your email address">
          <div>
            <button class="b-gray">Join</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import CommunitieItem from '../components/CommunitieItem.vue'

export default {
  // components: {
  //   CommunitieItem
  // },
  computed: {
    communities () {
      // return this.$store.state.communities
      return this.$store.state.communities.filter(function (index) {
        // console.log(index.snsIcon)
        return index
      })
    },
    snsIcon () {
      let element
      for (let i = 0; i < this.$store.state.communities.length; i++) {
        element = this.$store.state.communities[i].snsIcon
        console.log(element)
      }
      return element
    }
  },
  mounted () {

  }
}
</script>
