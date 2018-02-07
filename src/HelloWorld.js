import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {

  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello', lang: 'english' };

    this.changeLang     = this.changeLang.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }

  removeGreeting() {
    this.props.removeGreeting(this.props.name);
  }

  changeLang() {
    if (this.state.lang === 'english') {
      this.setState({ greeting: 'Bonjour', lang: 'french' });
    }
    else {
      this.setState({ greeting: 'Hello', lang: 'english' });
    }
  }

  render() {
    return (
      <div className="HelloWorld">
        {this.state.greeting} {this.props.name}!
        <br/>
        <button onClick={this.changeLang}>{this.state.lang === 'english' ? 'frenchify' : 'englify'}!</button>
        <br/>
        <button onClick={this.removeGreeting}>Remove Me!</button>
      </div>
    );
  }
}

export default HelloWorld;
