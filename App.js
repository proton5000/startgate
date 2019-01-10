import React, {Component} from 'react';
import {View} from 'react-native';
import Header from './src/components/uikit/header';

const url = 'https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json';
export default class App extends Component {
  state = {
    title: 'STAR GATE',
    data: []
  };

  componentDidMount = async() => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ data })
  };

  render() {
    console.log('state', this.state);
    return (
      <View>
        <Header title={this.state.title}/>
      </View>
    );
  }
}
