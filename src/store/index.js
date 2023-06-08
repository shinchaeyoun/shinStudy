import { createStore } from 'vuex'
// import pathify from '@/plugins/vuex-pathify'
import createPersistedState from 'vuex-persistedstate'
// import modules from './modules'
import uniqueId from 'lodash.uniqueid'

export default createStore({
  state: {
    account: null,
    isAdmin: null,
    nav: [
      {
        id: uniqueId('nav'),
        link: '/',
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
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'nocode',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'nocode',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'nocode',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'productivity',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'productivity',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'productivity',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'developer tools',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'developer tools',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'education',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'education',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'education',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'education',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'education',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'entertainment',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'entertainment',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'entertainment',
        byName: 'jsustin matthews',
        isBookmark: false
      }
    ]
  },
  getters: {
  },
  mutations: {
    setBookmark (state, itemId) {
      const item = state.Items.find(el => el.id === itemId)
      if (item.isBookmark === false) {
        item.isBookmark = true
      } else {
        item.isBookmark = false
      }
      console.log('mutations', item.isBookmark)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState({
      // paths: ['noticeStore']
      paths: ['Items']
    })
  ]
})
