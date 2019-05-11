import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { gray1, gray3, gray4 } from '../utils/colors';

class DeckItem extends Component {
  render() {
    const { title, cardsCount } = this.props;
    return (
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemCardsCount}>{cardsCount} Cards</Text>
      </View>
    );
  }
}

DeckItem.propTypes = {
  title: PropTypes.string,
  cardsCount: PropTypes.number
};

export default DeckItem;

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
