import React, { Component } from "react";
import Subject from "./component/Subject";

// class Subject extends Component {
//   render() {
//     return (
//       <header>
//         <h1>{this.props.title}</h1>
//         {this.props.sub}
//       </header>
//     )
//   }
// }

class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="1.html">{this.props.first}</a></li>
          <li><a href="2.html">{this.props.second}</a></li>
          <li><a href="3.html">{this.props.thrid}</a></li>
        </ul>
      </nav>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>someone</h2>
        someone
      </article>
    )
  }
}

class Bottom extends Component {
  render() {
    return (
      <footer>
        <h2>someone</h2>
        my React app
      </footer>
    )
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: { title: 'WEB', sub: 'World Wide Web!' }
    };
  }
  render() {
    return (
      <div className="App">
        {/* <Subject title="WEB" desc="world wide web!"></Subject> */}
        <Subject title={this.state.subject.title} sub={this.sate.subject.sub}></Subject>
        <TOC first="HTdML" second="CSS" thrid="JavaScript"></TOC>
        {/* <Content title={this.state.content.title} desc={this.state.content.desc}></Content> */}
        <Content></Content>
        <Bottom></Bottom>
      </div>
    )
  }
}

export default App;