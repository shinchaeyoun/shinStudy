import { configureStore, createSlice } from '@reduxjs/toolkit';

let bookmark = createSlice({
  name: 'bookmark',
  initialState: 0,
  reducers: {
    addBookmark (state){
      return (
        state += 1
      )
    },
    removeBookmark(state){
      if(state>0){
        state -= 1
      }
      return state
    }
  }
});

let toolItems = createSlice({
  name: 'toolItems',
  initialState: [
    {
      id: 1,
      title: 'featured',
      icon: 'A'
    },
    {
      id: 2,
      title: 'API',
      icon: 'A'
    },
    {
      id: 3,
      title: 'Browser Extensions',
      icon: 'A'
    },
    {
      id: 4,
      title: 'CSS Frameworks',
      icon: 'A'
    },
    {
      id: 5,
      title: 'Career',
      icon: 'A'
    },
    {
      id: 6,
      title: 'Cheatsheets',
      icon: 'A'
    },
    {
      id: 7,
      title: 'Code Automation',
      icon: 'A'
    },
    {
      id: 8,
      title: 'Content & Writing',
      icon: 'A'
    },
    {
      id: 9,
      title: 'Design Mockup',
      icon: 'A'
    },
    {
      id: 10,
      title: 'Design Tools',
      icon: 'A'
    },
    {
      id: 11,
      title: 'Developer Productivity',
      icon: 'A'
    },
    {
      id: 12,
      title: 'Developer Resources',
      icon: 'A'
    },
    {
      id: 13,
      title: 'Developer Tools',
      icon: 'A'
    },
    {
      id: 14,
      title: 'Education',
      icon: 'A'
    },
    {
      id: 15,
      title: 'Email Builders',
      icon: 'A'
    },
    {
      id: 16,
      title: 'Email Tools',
      icon: 'A'
    },{
      id: 17,
      title: 'Entertainment',
      icon: 'A'
    },
    {
      id: 18,
      title: 'Freebis',
      icon: 'A'
    },
    {
      id: 19,
      title: 'Icons',
      icon: 'A'
    },
    {
      id: 20,
      title: 'Illustrations',
      icon: 'A'
    },
    {
      id: 21,
      title: 'JS Plugins',
      icon: 'A'
    },
    {
      id: 22,
      title: 'Loaders & Spinnners',
      icon: 'A'
    },
    {
      id: 23,
      title: 'Marketing Resources',
      icon: 'A'
    },
    {
      id: 24,
      title: 'Misc',
      icon: 'A'
    },
    {
      id: 25,
      title: 'Nocode',
      icon: 'A'
    },
    {
      id: 26,
      title: 'Productivity',
      icon: 'A'
    },
    {
      id: 27,
      title: 'SEO',
      icon: 'A'
    },
    {
      id: 28,
      title: 'Stock Assets',
      icon: 'A'
    },
    {
      id: 29,
      title: 'Wireframe',
      icon: 'A'
    },
    {
      id: 30,
      title: 'productivity',
      icon: 'A'
    }
  ]
})

export default configureStore({
  reducer: {
    bookmark : bookmark.reducer,
    toolItems: toolItems.reducer
  }
})

export let { addBookmark, removeBookmark } = bookmark.actions;