'use strict';

import './typograph.scss';
import React from 'react';
import tf from './tf'

const text = `\
In "the 'world' of software management" there exists a dread place called "dependency hell." The bigger your system grows and the more packages you integrate into your software — the more likely you are to find yourself, one day, in this pit of despair...

'This is not a new or "revolutionary" idea'. In fact, you probably do something close to this already in 1999-2014. The problem -- that "close" isn't good enough. Without compliance to some sort of formal specification, version numbers are essentially useless for dependency management. By giving a name and clear definition to the above ideas, it becomes easy to communicate your intentions to the users of your software. Once these intentions are clear, flexible (but not too flexible) dependency specifications' can finally be made.

This instructional goatherding video is (c) 2013 MegaCorp Inc (tm). This instructional goatherding video is (c) 2013 MegaCorp Inc (r).
`;


export default class App extends React.Component {

  constructor(props) {
    super();
    this.state = { text };
  }

  update(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div className="playground">
        <textarea className="input" rows="20" value={this.state.text} onInput={this.update.bind(this)} />
        <p className="output">{tf(this.state.text)}</p>
      </div>
    )
  }

}