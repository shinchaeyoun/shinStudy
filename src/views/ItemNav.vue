<template>
  <nav class="navWrap">
    <ul>
      <li class="itemLi">
        <router-link to="/">
          <div id="all" class="navItem">
            <div class="icon"></div>
            <div class="title">All</div>
          </div>
        </router-link>
      </li>

      <li class="itemLi" v-for="navItem in nav" :key="navItem.id">
        <router-link :to="navItem.link" class="activeNav">
          <nav-item :id="navItem.id" :title="navItem.title"></nav-item>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import uniqueId from 'lodash.uniqueid'
import NavItem from '../components/NavItem.vue'

export default {
  name: 'app',
  components: {
    NavItem
  },
  data () {
    return {
      nav: [
        {
          id: uniqueId('nav'),
          link: 'nocode',
          title: 'nocode'
        },
        {
          id: uniqueId('nav'),
          link: 'productivity',
          title: 'productivity'
        },
        {
          id: uniqueId('nav'),
          link: 'developer-tools',
          title: 'developer tools'
        },
        {
          id: uniqueId('nav'),
          link: 'education',
          title: 'education'
        },
        {
          id: uniqueId('nav'),
          link: 'entertainment',
          title: 'entertainment'
        }
      ]
    }
  }
}
</script>
