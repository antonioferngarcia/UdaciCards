import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, Animated, View, Button } from 'react-native';

import { gray3, gray4, green, purple, red } from '../utils/colors';
import TextButton from './TextButton';
import { addQuizAnswer } from '../actions/index.actions';

class Quiz extends Component {
  state = {
    bounceValue: new Animated.Value(1),
    showingQuestion: true
  };

  toggleShowQuestion = () => {
    const { showingQuestion, bounceValue } = this.state;
    Animated.sequence([
      Animated.timing(bounceValue, { duration: 100, toValue: 1.04}),
      Animated.timing(bounceValue, { duration: 100, toValue: 1})
    ]).start();

    this.setState({ showingQuestion: !showingQuestion });
  };

  setCorrect = () => {
    const { correctAnswers, currentQuestion, incorrectAnswers, addQuizAnswer } = this.props;
    addQuizAnswer({ correctAnswers: correctAnswers + 1, currentQuestion: currentQuestion + 1, incorrectAnswers });
  };

  setIncorrect = () => {
    const { currentQuestion, correctAnswers, incorrectAnswers, addQuizAnswer } = this.props;
    addQuizAnswer({ correctAnswers, currentQuestion: currentQuestion + 1, incorrectAnswers: incorrectAnswers + 1 });
  };

  render() {
    const { quiz, currentQuestion, totalQuestions, navigation } = this.props;
    const { bounceValue, showingQuestion } = this.state;

    if(currentQuestion === totalQuestions) {
      return navigation.navigate('Results', { quiz });
    }

    return (
      <View style={styles.item}>
        <View style={{ flex: 2 }}>
          <Text>{currentQuestion}/{totalQuestions}</Text>
          <View style={styles.directionContainer}>
            <Animated.Text
              style={[styles.direction, {transform: [{scale: bounceValue}]}]}>
              {showingQuestion ? quiz.questions[currentQuestion].question : quiz.questions[currentQuestion].answer}
            </Animated.Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <TextButton onPress={this.toggleShowQuestion}>
            {showingQuestion ? 'Show answer' : 'Show question'}
          </TextButton>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 50, alignItems: 'stretch' }}>
          <Button
            onPress={this.setCorrect}
            title="Correct"
            color={green}/>
          <Button
            onPress={this.setIncorrect}
            title="Incorrect"
            color={red}/>
        </View>
      </View>
    );
  }
}

Quiz.propTypes = {
  title: PropTypes.string,
  cardsCount: PropTypes.number
};


function mapStateToProps (state) {
  return {
    quiz: state.quiz,
    totalQuestions: state.quiz.questions.length,
    currentQuestion: state.quiz.currentQuestion,
    correctAnswers: state.quiz.correctAnswers,
    incorrectAnswers: state.quiz.incorrectAnswers
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addQuizAnswer: bindActionCreators(addQuizAnswer, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

const styles = StyleSheet.create({
  directionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 35,
    textAlign: 'center',
  },
  direction: {
    color: purple,
    fontSize: 40,
    marginTop: 40,
    textAlign: 'center',
  },
  item: {
    flex: 1
  },
  itemTitle: {
    color: gray4,
    fontSize: 25,
    margin: 10
  },
  itemCardsCount: {
    color: gray3,
    fontSize: 15,
    marginBottom: 10
  }
});
