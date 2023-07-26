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
        shopImg: require('@/assets/images/toolsimg.jpg'),
        shopIcon: require('@/assets/images/toolsicon.jpg'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'nocode',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        shopImg: require('@/assets/images/toolsimg.jpg'),
        shopIcon: require('@/assets/images/toolsimg.jpg'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'nocode',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        shopImg: require('@/assets/images/toolsimg.jpg'),
        shopIcon: require('@/assets/images/toolsimg.jpg'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'nocode',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        shopImg: require('@/assets/images/toolsimg.jpg'),
        shopIcon: require('@/assets/images/toolsimg.jpg'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'nocode',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        shopImg: require('@/assets/images/toolsimg.jpg'),
        shopIcon: require('@/assets/images/toolsimg.jpg'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'productivity',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        shopImg: require('@/assets/images/toolsimg.jpg'),
        shopIcon: require('@/assets/images/toolsimg.jpg'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'productivity',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        shopImg: require('@/assets/images/toolsimg.jpg'),
        shopIcon: require('@/assets/images/toolsimg.jpg'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'productivity',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        shopImg: require('@/assets/images/toolsimg.jpg'),
        shopIcon: require('@/assets/images/toolsimg.jpg'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'developer tools',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        shopImg: require('@/assets/images/toolsimg.jpg'),
        shopIcon: require('@/assets/images/toolsimg.jpg'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'developer tools',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        shopImg: require('@/assets/images/toolsimg.jpg'),
        shopIcon: require('@/assets/images/toolsimg.jpg'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'education',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        shopImg: require('@/assets/images/toolsimg.jpg'),
        shopIcon: require('@/assets/images/toolsimg.jpg'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'education',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        shopImg: require('@/assets/images/toolsimg.jpg'),
        shopIcon: require('@/assets/images/toolsimg.jpg'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'education',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        shopImg: require('@/assets/images/toolsimg.jpg'),
        shopIcon: require('@/assets/images/toolsimg.jpg'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'education',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        shopImg: require('@/assets/images/toolsimg.jpg'),
        shopIcon: require('@/assets/images/toolsimg.jpg'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'education',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        shopImg: require('@/assets/images/toolsimg.jpg'),
        shopIcon: require('@/assets/images/toolsicon.jpg'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'entertainment',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        shopImg: require('@/assets/images/toolsimg.jpg'),
        shopIcon: require('@/assets/images/toolsicon.jpg'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'entertainment',
        byName: 'jsustin matthews',
        isBookmark: false
      },
      {
        id: uniqueId('item'),
        shopImg: require('@/assets/images/toolsimg.jpg'),
        shopIcon: require('@/assets/images/toolsicon.jpg'),
        title: 'item Title',
        subTitle: 'The only trivia game that takes what you say ans puts it into action',
        tag: 'entertainment',
        byName: 'jsustin matthews',
        isBookmark: false
      }
    ],
    communities: [
      {
        id: uniqueId('card'),
        titleImg: require('@/assets/images/Larachat.jpg'),
        title: 'Code Newbie',
        describe: 'The most supportive community of programmers and people learning to code',
        profileImg: require('@/assets/images/Larachat.jpg'),
        shopIcon: require('@/assets/images/communitiesIcon.jpg'),
        name: 'fonuded by saron yitbarek',
        snsIcon: ['github', 'slack', 'partreon'],
        isBookmark: false
      },
      {
        id: uniqueId('card'),
        titleImg: require('@/assets/images/Larachat.jpg'),
        title: 'FEDs on Slack',
        describe: 'A Community of Top-notch Front End Developers on Slack',
        profileImg: require('@/assets/images/Larachat.jpg'),
        shopIcon: require('@/assets/images/communitiesIcon.jpg'),
        name: 'Founded by Yogev Ahuvia',
        snsIcon: ['github'],
        isBookmark: false
      },
      {
        id: uniqueId('card'),
        titleImg: require('@/assets/images/Larachat.jpg'),
        title: 'Free code camp',
        describe: 'Learn to code. Build projects. Earn certifications.Since 2015, 40,000 graduates have gotten jobs at tech companies including Google, Apple, Amazon, and Microsoft.',
        profileImg: require('@/assets/images/Larachat.jpg'),
        shopIcon: require('@/assets/images/communitiesIcon.jpg'),
        name: 'Founded by Quincy Larson',
        snsIcon: ['slack', 'github'],
        isBookmark: false
      },
      {
        id: uniqueId('card'),
        titleImg: require('@/assets/images/Larachat.jpg'),
        title: 'indie hackers',
        describe: 'Connect with developers who are sharing the strategies and revenue numbers behind their companies and side projects.',
        profileImg: require('@/assets/images/Larachat.jpg'),
        shopIcon: require('@/assets/images/communitiesIcon.jpg'),
        name: 'Founded by courtland allen',
        snsIcon: ['partreon', 'github'],
        isBookmark: false
      },
      {
        id: uniqueId('card'),
        titleImg: require('@/assets/images/Larachat.jpg'),
        title: 'Larachat',
        describe: "THE SLACK COMMUNITY FOR LARAVEL DEVELOPERS & MORE. Chat and share with over 31,800 worldwide members. We have live discussions. We're building the biggest PHP virtual user group in the world. Come join the fun.",
        profileImg: require('@/assets/images/Larachat.jpg'),
        shopIcon: require('@/assets/images/communitiesIcon.jpg'),
        name: 'Founded by shawn mayzes',
        snsIcon: ['linkedin', 'dev-to'],
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
      const hasItem = state.bookmarkArr.find(el => el.id === itemId)
      const deleIdx = state.bookmarkArr.indexOf(hasItem)

      if (item.isBookmark === false) {
        item.isBookmark = true
        state.bookmarkArr.push(item)
      } else {
        item.isBookmark = false
        state.bookmarkArr.splice(deleIdx, 1)
      }
    },
    addBookmark (state, item) {
      const nowState = item[1]
      const addMark = nowState.find(el => el.id === item[0].id)
      const hasItem = state.bookmarkArr.find(el => el.id === item[0].id)
      const deleIdx = state.bookmarkArr.indexOf(hasItem)

      // const addMark = state.communities.find(el => el.id === item.id)
      // const hasItem = state.bookmarkArr.find(el => el.id === item)
      // const deleIdx = state.bookmarkArr.indexOf(hasItem)

      if (addMark.isBookmark === false) {
        addMark.isBookmark = true
        state.bookmarkArr.push(addMark)
      } else {
        addMark.isBookmark = false
        state.bookmarkArr.splice(deleIdx, 1)
      }
    },
    deleteBookmarkItem (state, item) {
      const nowState = item[1]

      const delItem = nowState.find(el => el.id === item[0].id)
      const delIdx = nowState.indexOf(delItem)

      const bookmarItem = state.bookmarkArr.find(el => el.id === item[0].id)
      const bookmarIdx = state.bookmarkArr.indexOf(bookmarItem)

      nowState[delIdx].isBookmark = false
      state.bookmarkArr.splice(bookmarIdx, 1)
    },
    clearBookmark (state) {
      for (let i = 0; i < state.Items.length; i++) {
        state.Items[i].isBookmark = false
      }
      for (let i = 0; i < state.communities.length; i++) {
        state.communities[i].isBookmark = false
      }
      state.bookmarkArr = []
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState({
      paths: ['Items', 'communities', 'bookmarkArr']
    })
  ]
})
