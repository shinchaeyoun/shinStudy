import React, { Component } from 'react';

// function Subject() {
//     return (
//         <header>
//             <h1>{this.props.title}</h1>
//             {this.props.sub}
//         </header>
//     )
// }

class Subject extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                {this.props.sub}
            </header>
        )
    }
}

export default Subject;