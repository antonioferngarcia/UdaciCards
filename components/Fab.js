import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { red, white } from '../utils/colors';
import { Entypo } from '@expo/vector-icons';

class Fab extends Component {
  render() {
    const { onPress } = this.props;
    return (
      <TouchableOpacity style={styles.fab} onPress={onPress}>
        <Entypo name='plus' color={white} size={35}/>
      </TouchableOpacity>
    );
  }
}

Fab.propTypes = {
  title: PropTypes.string,
  cardsCount: PropTypes.number
};

export default Fab;

const styles = StyleSheet.create({
  fab: {
    borderWidth:1,
    borderColor: red,
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
