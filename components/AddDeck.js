import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { purple } from "../utils/colors";
import Fab from './Fab';
import { addCard } from '../actions/index.actions';

class AddDeck extends Component {
  state = {
    text: '',
  };

  saveDeck = () => {
    const {navigation, addDeck} = this.props;
    const {text} = this.state;

    addDeck({ title: text, questions: [] });
    navigation.navigate('home');
  };

  render() {

    return (
      <View  style={{flex: 1, justifyContent: 'space-around'}}>
        <KeyboardAvoidingView behavior="position" enabled>
        <Text style={styles.header}>Add your new deck title</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: purple, borderRadius: 5, minHeight: 40, padding: 6, marginBottom: 120}}
            placeholder="Deck title"
            multiline={true}
            onChangeText={(text) => this.setState({text})}/>

        </KeyboardAvoidingView>
        {this.state.text !== '' && <Fab onPress={this.saveDeck}/>}
      </View >
    );
  }
}

function mapDispatchToProps (dispatch ) {
  return {
    addCard: bindActionCreators(addCard, dispatch)
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddDeck);

const styles = StyleSheet.create({
  header: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 50
  },
});