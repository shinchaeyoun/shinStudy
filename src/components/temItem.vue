<template>
  <div @mouseenter="hoverIn" @mouseleave="hoverOut" :id="id" class="itemBox box box-shadow">
    <transition name="fade">
      <div v-if="isHover" class="hover_icon posa flex jcsb">
        <div class="bookmark box box-shadow flex aic" @click="addBookmark()">
          <svg v-if="isBookTag" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
            <path
              d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
            <path
              d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
          {{ bookmark }}
        </div>

        <div class="toLink posr box-shadow">
          <span class="material-symbols-outlined posa posa-center">
            open_in_new
          </span>
        </div>
      </div>
    </transition>

    <div class="img">
      <img :src="shopImg" :alt="tag">
    </div>
    <div class="shopicon box-shadow posa bdrs-50">
      <img :src="shopIcon" :alt="tag">
    </div>

    <div class="textBox posr ttc">
      <div class="title fwb">{{ title }}</div>
      <div class="subTitle gray ttn">{{ subTitle }}</div>

      <div class="bottomBox flex jcsb aic">
        <div class="tag ttl bdrs-8">{{ tag }}</div>
        <div class="byName gray">{{ byName }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    const _item = this.$store.state.Items.find(el => el.id === this.id)
    return {
      itemId: this.$store.state.Items.find(el => el.id === this.id),
      isHover: false,
      isBookTag: _item.isBookmark,
      bookmark: 'bookmark'
    }
  },
  props: {
    id: String,
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    tag: { type: String, required: true },
    byName: { type: String, required: true },
    shopImg: { type: String, required: true },
    shopIcon: { type: String, required: false }
  },
  methods: {
    hoverIn () {
      this.isHover = true
    },
    hoverOut () {
      this.isHover = false
    },
    addBookmark () {
      this.$emit('item-bookmark')
      this.isBookTag = this.itemId.isBookmark

      if (this.isBookTag) {
        this.bookmark = 'bookmarked'
      } else {
        this.bookmark = 'bookmark'
      }
    }
  },
  mounted () {
    if (this.isBookTag) {
      this.bookmark = 'bookmarked'
    } else {
      this.bookmark = 'bookmark'
    }
  }
}
</script>
