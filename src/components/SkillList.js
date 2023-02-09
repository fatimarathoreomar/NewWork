import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SkillItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemText}>{item}</Text>
    <View style={styles.remove}>
    <TouchableOpacity>
    <FontAwesome name="remove" size={28} color="black" />
    </TouchableOpacity>
    </View>
  </View>
);

const SkillList = ({ items }) => (
  <View style={styles.listContainer}>
    {items.map((item, index) => (
      <SkillItem key={index} item={item} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    flexDirection:'row',
    backgroundColor: '#f7f7f7',
    padding: 16,
    borderRadius: 4,
    marginBottom: 16,
    width:'80%',
  },
  itemText: {
    fontSize: 16,
  },
  remove:{
    marginRight:10,
    JustifyContent:"space-evenly",
  }
});

export default SkillList;