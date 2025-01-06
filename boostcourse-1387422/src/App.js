/* eslint-disable */
import React, { Component } from "react";
import Subject from './component/Subject';
import TOC from './component/TOC';
import Content from './component/Content';
import Bottom from './component/Bottom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'read',
      subject: {
        title: "web", sub: "world wide web!"
      },
      welcome: { title: 'welcome', desc: 'hello, React!!' },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is HyperText ..." },
        { id: 2, title: "CSS", desc: "CSS is for design ..." },
        { id: 3, title: "JavaScript", desc: "JavsScript if for interactive ..." },
      ]
    }
  }

  render() {
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> */}

        <header>
          <h1><a href="/" onClick={function (e) {
            console.log('hi', e);
            // debugger;
            e.preventDefault();
            // this.state.mode = 'welcome';
            this.setState({ mode: 'welcome' });
          }.bind(this)} >{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>

        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
        <Content title="React" desc="HTML is HyperText Markup Language."></Content>
        <Content title={_title} desc={_desc}></Content>
        <Bottom></Bottom>
      </div>
    )
  }
}

export default App;