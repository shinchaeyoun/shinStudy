<template>
  <section class="container">
    <nav class="navWrap">
      <ul>
        <li class="itemLi" v-for="navItem in this.$store.state.nav" :key="navItem.id" @click="nowItem = navItem, filterFn()">
          <router-link :to="navItem.link">
            <nav-item :id="navItem.id" :title="navItem.title"></nav-item>
          </router-link>
        </li>
      </ul>
    </nav>

    <section v-if="isFilter">
      <router-view></router-view>
    </section>

    <section v-else>
      <toolItem></toolItem>
    </section>

  </section>
</template >

<script>
import NavItem from '../components/NavItem.vue'
import toolItem from '../components/toolItem.vue'

export default {
  name: 'app',
  components: {
    NavItem,
    toolItem
  },
  data () {
    return {
      isActive: false,
      nowItem: '',
      isFilter: false
    }
  },
  mounted () {
    this.filterFn()
  },
  methods: {
    filterFn () {
      const url = document.location.href.split('/')
      const routerLink = url[url.length - 1]

      if (routerLink === '') {
        this.isFilter = false
      } else {
        this.isFilter = true
      }

      return this.isFilter
    }
  }
}
</script>
