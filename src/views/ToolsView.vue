<template>
  <section class="container">
    <nav class="navWrap">
      <ul>
        <li class="itemLi" v-for="navItem in this.$store.state.nav" :key="navItem.id"
        @click="nowItem = navItem">
            <nav-item :id="navItem.id" :class="{active: isActive}" :title="navItem.title" @click="navActive"></nav-item>
        </li>
      </ul>
    </nav>

    <section>
      <tem-item v-for="item in filtedItems" :key="item.id" :id="item.id" :title="item.tag + ' ' + item.title"
        :subTitle="item.subTitle" :tag="item.tag" :byName="item.byName">
      </tem-item>
    </section>
  </section>
</template>

<script>
// import uniqueId from 'lodash.uniqueid'
import NavItem from '../components/NavItem.vue'
import temItem from '../components/temItem.vue'

export default {
  name: 'app',
  components: {
    NavItem,
    temItem
  },
  data () {
    return {
      isActive: false,
      nowItem: ''
    }
  },
  computed: {
    filtedItems () {
      const _this = this
      if (_this.nowItem === '' || _this.nowItem.title === undefined || _this.nowItem.title === 'all') {
        return _this.$store.state.Items
      } else {
        return _this.$store.state.Items.filter(function (item) {
          return item.tag === _this.nowItem.title
        })
      }
    }
  },
  methods: {
    navActive () {
      // this.isActive = !this.isActive
      console.log('hi', this)
    }
  }
}
</script>
