<template>
  <HeaderView/>

  <router-view></router-view>

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
