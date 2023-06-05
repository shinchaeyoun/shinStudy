<template>
  <div @mouseenter="hoverIn" @mouseleave="hoverOut" :id="id" class="itemBox box box-shadow">
      <transition name="fade">
        <div v-if="isHover" class="hover_icon">
          <div v-on:click="addBookmark" class="bookmark box box-shadow">
            <span v-if="isBookmark"><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></span>
            <span v-else><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></span>
            <span>bookmark</span>
          </div>
          <div class="toLink">
            <span class="material-symbols-outlined">
            open_in_new
            </span>
          </div>
        </div>
      </transition>

      <div class="img"></div>
      <div class="shopicon box-shadow"></div>

      <div class="textBox">
        <div class="title">{{ title }}</div>
        <div class="subTitle gray">{{ subTitle }}</div>

        <div class="bottomBox">
          <div class="tag">{{tag}}</div>
          <div class="byName gray">{{byName}}</div>
        </div>
      </div>

    <div class="text-center">
      <v-btn
        color="orange-darken-2"
        @click="snackbar = true"
      >
        Open Snackbar
      </v-btn>

      <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
      >
        {{ text }}

        <template v-slot:actions>
          <v-btn
            color="blue"
            variant="text"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      isHover: true,
      isBookmark: false,
      snackbar: false,
      text: 'My timeout is set to 2000.',
      timeout: 2000
    }
  },
  props: {
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    tag: { type: String, required: true },
    byName: { type: String, required: true }
  },
  methods: {
    hoverIn () {
      this.isHover = true
    },
    hoverOut () {
      this.isHover = false
    },
    addBookmark () {
      console.log('hi book mark')
      this.isBookmark = !this.isBookmark
    }
  }
}
</script>
