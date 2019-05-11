import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppLoading } from "expo";

import { red, white } from "../utils/colors";
import DeckItem from './DeckItem';
import { getDecks } from '../actions/index.actions'

class DecksList extends Component {
  state = {
    ready: false,
  };

  componentDidMount () {
    const { getDecks } = this.props;
    getDecks();
    this.setState(() => ({ready: true}))
  }


  render() {
    const { decks } = this.props;
    const { ready } = this.state;

    if (!ready) {
      return <AppLoading />
    }

    return (
      <View style={{flex: 1}}>
        <FlatList
          data={Object.values(decks)}
          keyExtractor={(item, index) => `${index}-${item.title}`}
          renderItem={({ item, index }) => <DeckItem key={index} title={item.title} cardsCount={item.questions.length}/> } />
        <TouchableOpacity style={styles.fab} onPress={() => this.props.navigation.navigate(
          'EntryDetail',
          { entryId: 'key' }
        )}>
          <Entypo name='plus' color={white} size={35}/>
        </TouchableOpacity>
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

const styles = StyleSheet.create({
  fab: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height:70,
    backgroundColor: red,
    borderRadius:100,
  }
});