import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { gray1, gray3, gray4 } from '../utils/colors';

class Quiz extends Component {
  render() {
    const { title, cardsCount, navigate } = this.props;
    return (
      <TouchableOpacity style={styles.item} onPress={navigate}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemCardsCount}>{cardsCount} Cards</Text>
      </TouchableOpacity>
    );
  }
}

Quiz.propTypes = {
  title: PropTypes.string,
  cardsCount: PropTypes.number
};

export default Quiz;

const styles = StyleSheet.create({
  item: {
    backgroundColor: gray1,
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
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
