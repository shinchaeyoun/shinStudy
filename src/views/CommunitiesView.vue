<template>
  <div id="communities" class="m-auto">
    <div class="title-area">
      <div class="page-title fwb">communities</div>
      <p>A list of communities helping each other make awesome things, teach beginners and solving problems, get jobs & get better at whetever they are doing.</p>
    </div>

    <div class="item-wrap flex jcsb">
      <div class="item-wrap">
        <div v-for="card in communities" :key="card.title" class="communitie-box box-shadow">
          <div class="img-area">
            <img :src="card.titleImg" :alt="card.name">
          </div>

          <div class="text-area posr">
            <div class="title">{{ card.title }}</div>
            <div class="describe">{{ card.describe }}</div>

            <div class="item-info flex aic">
              <img :src="card.profileImg" :alt="card.name" class="icon bdrs-50 tac box-shadow">
              <div class="name">{{ card.name }}</div>
            </div>
            <div class="title-icon posa flex jcfe">
              <p v-for="icon in card.snsIcon" :key="icon" ref="test" class="snsIcon" :class="icon">{{ icon }}</p>
            </div>
          </div>
        </div>
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
export default {
  computed: {
    communities () {
      return this.$store.state.communities
    }
  }
}
</script>
