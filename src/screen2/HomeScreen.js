import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header, ImageCard, Layout } from '../components/uikit';
import { BATMAN_DETAILS } from "../route";

// const url = 'https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json';
const url = 'http://api.tvmaze.com/search/shows?q=batman';

export default class HomeScreen extends Component {
  state = {
    title: 'BATMAN',
    data: []
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({data})
    } catch (e) {
      throw e
    }
  };

  render() {
    const { title, data } = this.state;
    const { navigation } = this.props;
    return (
      <View>
        <Header title={title}/>
        <ScrollView>
          <Layout>
            {data.map(item => (
              <ImageCard
                data={item.show}
                key={item.show.id}
                onPress = {() => navigation.navigate(BATMAN_DETAILS, (item.show))}
              />
            ))
            }
          </Layout>
        </ScrollView>
      </View>
    );
  }
}