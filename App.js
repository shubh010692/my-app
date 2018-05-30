import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import ListItem from './src/components/listitem/listitem';

export default class App extends React.Component {

  state = {
      placeNam: '',
      places: []
  }

  placeNameChangeHandler = val => {
      this.setState({
        placeName: val
      })
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === ""){
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };

  render() {
    const placeOutput = this.state.places.map((place, i) => (
      <ListItem key={i} placeName={place} />
    ));
    return (
      <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
              style={{width: 300, borderColor: "black", borderWidth:1}}
              placeholder="An awesome place"
              value={this.state.placeName}
              onChangeText={this.placeNameChangeHandler}
              style={styles.placeInput}
            />
            <Button
              title="Add"
              style={styles.placeButton}
              onPress={this.placeSubmitHandler}
            />
          </View>
          <View style="styles.listContainer">
            {placeOutput}
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  placeOutput: {
    width: '100%'
  }
});
