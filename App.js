import React, {Component} from 'react';
import {View} from 'react-native';
import Header from './src/components/uikit/header';

export default class App extends Component {
  state = {title: 'STAR GATE'};

  render() {
    console.log('state', this.state.title);
    return (
      <View>
        <Header title={this.state.title}/>
      </View>
    );
  }
}
