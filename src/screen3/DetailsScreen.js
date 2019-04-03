import React, { PureComponent } from 'react';
import { Button, ScrollView, View, Text, StyleSheet } from 'react-native';
import { Header, ImageBigCard } from "../components/uikit";
import { STARGATE_HOME } from "../route";

class DetailsScreen extends PureComponent {
  render() {
    const { image, name, summary } = this.props.navigation.state.params;
    const { navigation } = this.props;
    const { container, h1, h2, sub } = styles;
    const data = { image, name };
    return (
      <View style={container}>
        <Header
          detail
          title={name}
          onPress={() => navigation.goBack()}
          leftIcon='ios-arrow-back'
          leftColor='#fff'
        />
        <ScrollView>
          <View style={sub}>
            <ImageBigCard data={data} />
            <Button
              onPress={() => navigation.navigate(STARGATE_HOME)}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <Text style={h1}>{name.toUpperCase()}</Text>
            <Text style={h2}>{summary.replace(/<[^>]+>/g, '')}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 150,
    backgroundColor: '#fff'
  },
  h1: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 30,
    padding: 15,
    textAlign: 'center'
  },
  h2: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 15,
    padding: 15,
    color: 'gray',
    paddingHorizontal: 15,
    textAlign: 'center'
  }
});

export default DetailsScreen;