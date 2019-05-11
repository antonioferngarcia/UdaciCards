import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { gray1, gray3, gray4 } from '../utils/colors';
import Fab from './Fab';
import TextButton from './TextButton';

class DeckDetail extends Component {
  render() {
    const { navigation } = this.props;
    const deck = navigation.state.params.deck;
    return (
      <View style={styles.item}>
        <View style={{ flex: 2 }}>
          <Text style={styles.itemTitle}>{deck.title}</Text>
          <Text style={styles.itemCardsCount}>{deck.questions.length} Cards</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TextButton children='START QUIZ' style={{ fontSize: 20 }} onPress={() => {}}/>
        </View>
        <Fab onPress={() => navigation.navigate('AddCard', { deck })}/>
      </View>
    );
  }
}

DeckDetail.propTypes = {
  title: PropTypes.string,
  cardsCount: PropTypes.number
};

export default DeckDetail;

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
