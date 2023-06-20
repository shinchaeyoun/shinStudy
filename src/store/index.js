import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
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
    ],
    bookmarkArr: []
  },
  getters: {
  },
  mutations: {
    setBookmark (state, itemId) {
      const item = state.Items.find(el => el.id === itemId)
      const testitem = state.bookmarkArr.find(el => el.id === itemId)
      const deleIdx = state.bookmarkArr.indexOf(testitem)

      if (item.isBookmark === false) {
        item.isBookmark = true
        state.bookmarkArr.push(item)
      } else {
        item.isBookmark = false
        state.bookmarkArr.splice(deleIdx, 1)
      }
    },
    clearBookmark (state) {
      for (let i = 0; i < state.Items.length; i++) {
        state.Items[i].isBookmark = false
      }

      state.bookmarkArr = []
    },
    deleteBookmarkItem (state, deleteId) {
      const delItem = state.bookmarkArr.find(el => el.id === deleteId)
      const delIdx = state.bookmarkArr.indexOf(delItem)
      delItem.isBookmark = false
      state.bookmarkArr.splice(delIdx, 1)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState({
      paths: ['Items', 'bookmarkArr']
    })
  ]
})
