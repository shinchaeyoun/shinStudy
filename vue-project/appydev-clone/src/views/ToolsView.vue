<template>
  <div class="container">
    <nav class="navWrap">
      <ul>
        <li class="itemLi" v-for="navItem in nav" :key="navItem.id"
        @click="nowItem = navItem">
            <nav-item :id="navItem.id" :class="{active: navItem.id === isActive}" :title="navItem.title" @click="isActive = navItem.id"></nav-item>
        </li>
      </ul>
    </nav>

    <section>
      <tem-item v-for="item in filtedItems" :key="item.id" :id="item.id" :title="item.tag + ' ' + item.title"
        :subTitle="item.subTitle" :tag="item.tag" :byName="item.byName">
      </tem-item>
    </section>
  </div>
</template>

<script>
import uniqueId from 'lodash.uniqueid'
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
      isActive: undefined,
      nav: [
        {
          id: uniqueId('nav'),
          title: 'all'
        },
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
      ],
      Items: [
        {
          id: uniqueId('item'),
          title: 'item Title',
          subTitle: 'The only trivia game that takes what you say ans puts it into action',
          tag: 'nocode',
          byName: 'jsustin matthews'
        },
        {
          id: uniqueId('item'),
          title: 'item Title',
          subTitle: 'The only trivia game that takes what you say ans puts it into action',
          tag: 'nocode',
          byName: 'jsustin matthews'
        },
        {
          id: uniqueId('item'),
          title: 'item Title',
          subTitle: 'The only trivia game that takes what you say ans puts it into action',
          tag: 'nocode',
          byName: 'jsustin matthews'
        },
        {
          id: uniqueId('item'),
          title: 'item Title',
          subTitle: 'The only trivia game that takes what you say ans puts it into action',
          tag: 'nocode',
          byName: 'jsustin matthews'
        },
        {
          id: uniqueId('item'),
          title: 'item Title',
          subTitle: 'The only trivia game that takes what you say ans puts it into action',
          tag: 'productivity',
          byName: 'jsustin matthews'
        },
        {
          id: uniqueId('item'),
          title: 'item Title',
          subTitle: 'The only trivia game that takes what you say ans puts it into action',
          tag: 'productivity',
          byName: 'jsustin matthews'
        },
        {
          id: uniqueId('item'),
          title: 'item Title',
          subTitle: 'The only trivia game that takes what you say ans puts it into action',
          tag: 'productivity',
          byName: 'jsustin matthews'
        },
        {
          id: uniqueId('item'),
          title: 'item Title',
          subTitle: 'The only trivia game that takes what you say ans puts it into action',
          tag: 'developer tools',
          byName: 'jsustin matthews'
        },
        {
          id: uniqueId('item'),
          title: 'item Title',
          subTitle: 'The only trivia game that takes what you say ans puts it into action',
          tag: 'developer tools',
          byName: 'jsustin matthews'
        },
        {
          id: uniqueId('item'),
          title: 'item Title',
          subTitle: 'The only trivia game that takes what you say ans puts it into action',
          tag: 'education',
          byName: 'jsustin matthews'
        },
        {
          id: uniqueId('item'),
          title: 'item Title',
          subTitle: 'The only trivia game that takes what you say ans puts it into action',
          tag: 'education',
          byName: 'jsustin matthews'
        },
        {
          id: uniqueId('item'),
          title: 'item Title',
          subTitle: 'The only trivia game that takes what you say ans puts it into action',
          tag: 'education',
          byName: 'jsustin matthews'
        },
        {
          id: uniqueId('item'),
          title: 'item Title',
          subTitle: 'The only trivia game that takes what you say ans puts it into action',
          tag: 'education',
          byName: 'jsustin matthews'
        },
        {
          id: uniqueId('item'),
          title: 'item Title',
          subTitle: 'The only trivia game that takes what you say ans puts it into action',
          tag: 'education',
          byName: 'jsustin matthews'
        },
        {
          id: uniqueId('item'),
          title: 'item Title',
          subTitle: 'The only trivia game that takes what you say ans puts it into action',
          tag: 'entertainment',
          byName: 'jsustin matthews'
        },
        {
          id: uniqueId('item'),
          title: 'item Title',
          subTitle: 'The only trivia game that takes what you say ans puts it into action',
          tag: 'entertainment',
          byName: 'jsustin matthews'
        },
        {
          id: uniqueId('item'),
          title: 'item Title',
          subTitle: 'The only trivia game that takes what you say ans puts it into action',
          tag: 'entertainment',
          byName: 'jsustin matthews'
        }
      ],
      nowItem: ''
    }
  },
  computed: {
    filtedItems () {
      const _this = this
      if (_this.nowItem === '' || _this.nowItem.title === undefined || _this.nowItem.title === 'all') {
        return _this.Items
      } else {
        return _this.Items.filter(function (item) {
          return item.tag === _this.nowItem.title
        })
      }
    }
  }
}
</script>
