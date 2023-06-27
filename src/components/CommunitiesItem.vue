<template>
  <div v-for="card in this.$store.state.communities" :key="card.title" :id="card.id"  class="communitie-box box-shadow posr"  @mouseenter="hoverIn(card)" @mouseleave="hoverOut">
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

          <!-- <div v-if="isHover" class="bookmark posa">
            <p>bookmark</p>
          </div> -->

          <!-- $store.commit('addBookmarkArr', card, this.bool) -->
          <transition name="fade">
            <div v-if="isHover" class="bookmark hover_icon posa flex jcsb">
              <div class="bookmark box box-shadow flex aic" @click="bookmarkFn(card)">
                <svg v-if="isMark" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                  <path
                    d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                  <path
                    d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
                bookmark
              </div>
            </div>
          </transition>
        </div>
</template>

<script>
export default {
  data () {
    return {
      isHover: true,
      isMark: false
    }
  },
  props: {
    titleImg: { type: String, required: true },
    title: { type: String, required: true },
    describe: { type: String, required: true },
    profileImg: { type: String, required: true },
    name: { type: String, required: true },
    shopIcon: { type: String, required: false }
  },
  methods: {
    hoverIn (card) {
      const stringArray = card.title.split(' ')
      // this.isHover = true
      console.log(stringArray[0])
      // $('.' + stringArray[0])
    },
    hoverOut () {
      this.isHover = true
    },
    bookmarkFn ($val) {
      // console.log($val.title)
      // console.log(this.$store.state.communities.indexOf(this.$store.state.communities.find(el => el.title === $val.title)))
      // console.log(this.$store.state.bookmarkArr)
      this.isMark = !this.isMark
      // this.$store.commit('addBookmarkArr', [$val, this.isMark])
    }
  }
}
</script>
