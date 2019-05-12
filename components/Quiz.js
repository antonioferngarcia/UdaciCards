import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Results from './Results';
import QuizCard from './QuizCard';

class Quiz extends Component {

  render() {
    const { currentQuestion, totalQuestions } = this.props;

    if(currentQuestion === totalQuestions) {
      return <Results/>;
    }

    return (
      <QuizCard/>
    );
  }
}

Quiz.propTypes = {
  title: PropTypes.string,
  cardsCount: PropTypes.number
};


function mapStateToProps (state) {
  return {
    totalQuestions: state.quiz.questions.length,
    currentQuestion: state.quiz.currentQuestion
  }
}

export default connect(mapStateToProps)(Quiz);
