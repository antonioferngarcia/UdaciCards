import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { purple } from '../utils/colors';
import { addCard } from '../actions/index.actions';

class AddCard extends Component {
  state = { question: '', answer: '' };

  saveCard = () => {
    const { navigation } = this.props;
    const { question, answer, addCard } = this.state;

    debugger;
    addCard({ question, answer });
    navigation.goBack();
  };

  render() {
    const { question, answer } = this.state;
    return (
      <View  style={{flex: 1}}>
        <View  style={{flex: 2, justifyContent: 'space-around'}}>
        <KeyboardAvoidingView behavior="position" enabled>
          <Text style={styles.header}>Add new card to deck</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: purple, borderRadius: 5, minHeight: 40, padding: 6, marginBottom: 120}}
            placeholder="Question"
            multiline={true}
            onChangeText={(text) => this.setState({ question: text })}/>
          <TextInput
            style={{ borderWidth: 1, borderColor: purple, borderRadius: 5, minHeight: 40, padding: 6, marginBottom: 120}}
            placeholder="Answer"
            multiline={true}
            onChangeText={(text) => this.setState({ answer: text })}/>
        </KeyboardAvoidingView>
        </View >
        <Button
          onPress={this.saveCard}
          color={purple}
          disabled={answer === '' || question === ''}
          title="Add card"/>
      </View >
    );
  }
}

AddCard.propTypes = {
  // title: PropTypes.string,
  // cardsCount: PropTypes.number
};

function mapDispatchToProps (dispatch ) {
  return {
    addCard: bindActionCreators(addCard, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AddCard);

const styles = StyleSheet.create({
  header: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 50
  }
});
