<template>
  <div id="communities" class="m-auto">
    <div class="title-area">
      <div class="page-title fwb">communities</div>
      <p>A list of communities helping each other make awesome things, teach beginners and solving problems, get jobs & get better at whetever they are doing.</p>
    </div>

    <div class="item-wrap flex jcsb">
      <div class="item-wrap">
        <div v-for="card in this.$store.state.communities" :key="card.title" :id="card.id"  class="communitie-box box-shadow posr"  @mouseenter="hoverIn(card)" @mouseleave="hoverOut(card)">
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

          <transition name="fade">
            <div v-if="card.isHover" class="bookmark hover_icon posa flex jcsb">
              <div class="bookmark box box-shadow flex aic" @click="bookmarkFn(card)">
                <svg v-if="card.isMark" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                  <path
                    d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                  <path
                    d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
                {{card.bookmark}}
              </div>
            </div>
          </transition>
        </div>
      </div>

      <div class="newsletter shadow b-gray">
        <div class="title">newsletter</div>
        <p>a curated list of handpicked products delivered to your email every week</p>

        <div class="input-wrap flex jcsb">
          <input type="email" placeholder="Enter your email address">
          <div>
            <button class="b-gray">Join</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="snackbarBookmark" class="test-snackbar_wrap">
    <div class="snackbar added">
      {{ 'added' + ' ' + bookmarkMsg }}
      <router-link to="/bookmarks" class="toBookmark">
        <span>view</span>
      </router-link>
    </div>
  </div>

  </div>
</template>

<script>
let getItem
let _item
const itemArr = []
export default {
  data () {
    return {
      isHover: false,
      isMark: null,
      bookmark: 'bookmark'
    }
  },
  methods: {
    hoverIn (item) {
      item.isHover = true
    },
    hoverOut (item) {
      item.isHover = false
    },
    bookmarkFn (card) {
      this.$store.commit('addBookmarkArr', card)
      card.isMark = card.isBookmark

      if (card.isMark) {
        card.bookmark = 'bookmarked'
      } else {
        card.bookmark = 'bookmark'
      }
    },
    getUnits () {
      for (let i = 0; i < this.$store.state.communities.length; i++) {
        getItem = this.$store.state.communities[i]
        itemArr.push(getItem)
        _item = this.$store.state.communities.find(el => el === getItem)
        _item.isMark = _item.isBookmark
      }
    }
  },
  mounted () {
    for (let i = 0; i < itemArr.length; i++) {
      if (itemArr[i].isMark) {
        itemArr[i].bookmark = 'bookmarked'
      } else {
        itemArr[i].bookmark = 'bookmark'
      }
    }
  },
  beforeMount () {
    this.getUnits()
  }
}
</script>
