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
    communities: [
      {
        title: 'Code Newbie',
        describe: 'The most supportive community of programmers and people learning to code',
        name: 'fonuded by saron yitbarek',
        snsIcon: ['github', 'slack', 'partreon']
      },
      {
        title: 'FEDs on Slack',
        describe: 'A Community of Top-notch Front End Developers on Slack',
        name: 'Founded by Yogev Ahuvia',
        snsIcon: ['github']
      },
      {
        title: 'Free code camp',
        describe: 'Learn to code. Build projects. Earn certifications.Since 2015, 40,000 graduates have gotten jobs at tech companies including Google, Apple, Amazon, and Microsoft.',
        name: 'Founded by Quincy Larson',
        snsIcon: ['slack', 'github']
      },
      {
        title: 'indie hackers',
        describe: 'Connect with developers who are sharing the strategies and revenue numbers behind their companies and side projects.',
        name: 'Founded by courtland allen',
        snsIcon: ['partreon', 'github']
      },
      {
        title: 'Larachat',
        describe: "THE SLACK COMMUNITY FOR LARAVEL DEVELOPERS & MORE. Chat and share with over 31,800 worldwide members. We have live discussions. We're building the biggest PHP virtual user group in the world. Come join the fun.",
        name: 'Founded by shawn mayzes',
        snsIcon: ['linkedin', 'dev-to']
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
