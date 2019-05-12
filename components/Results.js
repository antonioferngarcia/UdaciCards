import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import { gray2, purple } from '../utils/colors';
import TextButton from './TextButton';
import { restartQuiz } from '../actions/index.actions';
import { bindActionCreators } from 'redux';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

class Results extends Component {

  componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification());
  }

  render() {
    const { correctAnswers, incorrectAnswers, totalQuestions, restartQuiz } = this.props;
    return (
        <View style={{ flex: 1 }}>
          <Text style={styles.percentage}>Score: {(correctAnswers/totalQuestions*100).toFixed(0)}%</Text>
          <Text style={styles.stats}>Total questions: {totalQuestions}</Text>
          <Text style={styles.stats}>Correct answers: {correctAnswers}</Text>
          <Text style={styles.stats}>Incorrect answers: {incorrectAnswers}</Text>
          <TextButton children='RESTART QUIZ' style={styles.restart} onPress={restartQuiz}/>
        </View>
    );
  }
}

Results.propTypes = {
  title: PropTypes.string,
  cardsCount: PropTypes.number
};

function mapStateToProps (state) {
  return {
    quiz: state.quiz,
    totalQuestions: state.quiz.questions.length,
    currentQuestion: state.quiz.currentQuestion,
    correctAnswers: state.quiz.correctAnswers,
    incorrectAnswers: state.quiz.incorrectAnswers,
  }
}

function mapDispatchToProps (dispatch ) {
  return {
    restartQuiz: bindActionCreators(restartQuiz, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);

const styles = StyleSheet.create({
  percentage: {
    color: purple,
    fontSize: 60,
    marginTop: 40,
    textAlign: 'center',
  },
  stats: {
    color: gray2,
    fontSize: 40,
    marginTop: 40,
    textAlign: 'center',
  },
  item: {
    flex: 1
  },
  restart: { fontSize: 20, paddingTop: 80 }
});
