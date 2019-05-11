import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { purple, red } from "../utils/colors";
import { getDecks } from '../actions/index.actions'

class DecksList extends Component {
  state = {
    text: '',
  };

  render() {

    return (
      <View style={{flex: 1}}>
        <Text>Add your new deck title</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: purple, borderRadius: 5, minHeigth: 40, padding: 6}}
          placeholder="Deck title"
          multiline={true}
          onChangeText={(text) => this.setState({text})}/>
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    decks: state.decks
  }
}

function mapDispatchToProps (dispatch ) {
  return {
    getDecks: bindActionCreators(getDecks, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DecksList);

const styles = StyleSheet.create({
  fab: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height:70,
    backgroundColor: red,
    borderRadius:100,
  }
});