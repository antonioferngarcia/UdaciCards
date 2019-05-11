import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppLoading } from "expo";

import DeckItem from './DeckItem';
import { getDecks } from '../actions/index.actions'
import Fab from './Fab';

class DecksList extends Component {
  state = {
    ready: false,
  };

  componentDidMount () {
    const { getDecks } = this.props;
    getDecks();
    this.setState(() => ({ready: true}))
  }

  renderItem = ({ item, index }) =>
    <DeckItem
      key={index}
      title={item.title}
      cardsCount={item.questions.length}
      navigate={() => this.props.navigation.navigate('DeckDetail',{ deck: item })}/>;

  render() {
    const { decks, navigation } = this.props;
    const { ready } = this.state;

    if (!ready) {
      return <AppLoading />
    }

    return (
      <View style={{flex: 1}}>
        <FlatList
          data={Object.values(decks)}
          keyExtractor={(item, index) => `${index}-${item.title}`}
          renderItem={this.renderItem} />
          <Fab onPress={() => navigation.navigate('AddDeck', { entryId: 'key' })}/>
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
