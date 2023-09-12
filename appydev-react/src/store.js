/* eslint-disable */
import {
  configureStore,
  createSlice
} from '@reduxjs/toolkit';

// import { BiShoppingBag, BiPieChartAlt2, BiTable, BiAnchor, BiArchive, BiAt, BiBadge, BiBarChartSquare, BiBriefcase, BiBomb, BiBookmarkAlt, BiBookHeart, BiBot, BiBox, BiCake, BiCalendarEdit, BiCar, BiCartAlt, BiCategoryAlt, BiChalkboard, BiChart, BiCast, BiCarousel, BiCctv, BiCheese, BiChild, BiCloset, BiCoffeeTogo, BiCog } from "react-icons/bi";

let toolNavs = createSlice({
  name: 'toolNavs',
  initialState: [
    {
      title: 'API',
      // icon: <BiShoppingBag/>
    },
    {
      title: 'Browser Extensions',
      // icon: <BiPieChartAlt2/>
    },
    {
      title: 'CSS Frameworks',
      // icon: <BiAnchor/>
    },
    {
      title: 'Career',
      // icon: <BiBriefcase/>
    },
    {
      title: 'Cheatsheets',
      // icon: <BiTable/>
    },
    {
      title: 'Code Automation',
      // icon: <BiAt/>
    },
    {
      title: 'Content & Writing',
      // icon: <BiBadge/>
    },
    {
      title: 'Design Mockup',
      // icon: <BiArchive/>
    },
    {
      title: 'Design Tools',
      // icon: <BiBarChartSquare/>
    },
    {
      title: 'Developer Productivity',
      // icon: <BiBomb/>
    },
    {
      title: 'Developer Resources',
      // icon: <BiBookHeart/>
    },
    {
      title: 'Developer Tools',
      // icon: <BiBot/>
    },
    {
      title: 'Education',
      // icon: <BiBox/>
    },
    {
      title: 'Email Builders',
      // icon: <BiCake/>
    },
    {
      title: 'Email Tools',
      // icon: <BiCalendarEdit/>
    },{
      title: 'Entertainment',
      // icon: <BiCar/>
    },
    {
      title: 'Freebis',
      // icon: <BiCartAlt/>
    },
    {
      title: 'Icons',
      // icon: <BiCategoryAlt/>
    },
    {
      title: 'Illustrations',
      // icon: <BiChalkboard/>
    },
    {
      title: 'JS Plugins',
      // icon: <BiChart/>
    },
    {
      title: 'Loaders & Spinnners',
      // icon: <BiCast/>
    },
    {
      title: 'Marketing Resources',
      // icon: <BiCarousel/>
    },
    {
      title: 'Misc',
      // icon: <BiCctv/>
    },
    {
      title: 'Nocode',
      // icon: <BiCheese/>
    },
    {
      title: 'Productivity',
      // icon: <BiChild/>
    },
    {
      title: 'SEO',
      // icon: <BiCloset/>
    },
    {
      title: 'Stock Assets',
      // icon: <BiCoffeeTogo/>
    },
    {
      title: 'Wireframe',
      // icon: <BiCog/>
    },
    {
      title: 'productivity',
      // icon: <BiBookmarkAlt/>,
    }
  ]
});

let tools = createSlice({
  name: 'tools',
  initialState: [
    {
      title: 'Tinyjar',
      subTitle: 'Donations made easy',
      tag: 'nocode',
      name: 'Jordan Kerr',
      titleImg: 'test',
      shopImg: 'test',
      icon: 'test',
      bookmark: false
    },
    {
      title: 'JotForm Tables',
      subTitle: 'Free Spreadsheet Powered Database Platform',
      tag: 'productivity',
      name: 'JotForm',
      titleImg: 'test',
      shopImg: 'test',
      icon: 'test',
      bookmark: false
    },
    {
      title: 'Note Bag',
      subTitle: 'Organize your notes without getting distracted',
      tag: 'productivity',
      name: 'pretzelhands',
      titleImg: 'test',
      shopImg: 'test',
      icon: 'test',
      bookmark: false
    },
    {
      title: 'OpenGraph',
      subTitle: 'Preview and generate open graph meta tags',
      tag: 'developer tools',
      name: 'Yuyu',
      titleImg: 'test',
      shopImg: 'test',
      icon: 'test',
      bookmark: false
    }
  ],
  reducers: {
    addBookmark (state, action){
      let idx = action.payload[0];
      let isMark = action.payload[1];
      
      state[idx].bookmark = isMark;
    },
    removeBookmark(state){
      if(state>0){
        state -= 1
      }
      return state
    }
  }
});

export default configureStore({
  reducer: {
    toolNavs: toolNavs.reducer,
    tools: tools.reducer
  }
})

export let { addBookmark, removeBookmark } = tools.actions;