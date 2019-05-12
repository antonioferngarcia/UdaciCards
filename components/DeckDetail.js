import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { gray1, gray3, gray4 } from '../utils/colors';
import Fab from './Fab';
import TextButton from './TextButton';
import { addQuiz } from '../actions/index.actions';

class DeckDetail extends Component {

  goToQuiz = () => {
    const { navigation, addQuiz, deck } = this.props;
    addQuiz(Object.assign({
      currentQuestion: 0,
      correctAnswers: 0,
      incorrectAnswers: 0
    }, deck));
    navigation.navigate('Quiz', { deckTitle: deck.title });
  };

  render() {
    const { navigation, deck } = this.props;

    return (
      <View style={styles.item}>
        <View style={{ flex: 2 }}>
          <Text style={styles.itemTitle}>{deck.title}</Text>
          <Text style={styles.itemCardsCount}>{deck.questions.length} Cards</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TextButton children='START QUIZ' style={{ fontSize: 20 }} onPress={this.goToQuiz}/>
        </View>
        <Fab onPress={() => navigation.navigate('AddCard', { deck })}/>
      </View>
    );
  }
}

DeckDetail.propTypes = {
  deck: PropTypes.object,
  title: PropTypes.string,
  cardsCount: PropTypes.number
};


function mapStateToProps (state, props) {
  return {
    deck: state.decks[props.navigation.state.params.deckTitle]
  }
}

function mapDispatchToProps (dispatch ) {
  return {
    addQuiz: bindActionCreators(addQuiz, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: gray1,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
  },
  itemTitle: {
    color: gray4,
    fontSize: 50,
    textAlign: 'center',
    marginTop: 50
  },
  itemCardsCount: {
    color: gray3,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10
  }
});
