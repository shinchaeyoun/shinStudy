<template>
  <HeaderView/>

  <router-view class="router-main"></router-view>

  <FooterView/>
</template>

<script>
import HeaderView from './views/HeaderView.vue'
import FooterView from './views/FooterView.vue'

export default {
  components: {
    HeaderView,
    FooterView
  }
}
</script>
