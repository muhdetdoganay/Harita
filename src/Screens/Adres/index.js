import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const Adres = props => {
  const { ADRES } = props;

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{`Adres: ${item.adres}`}</Text>
      <Text>{`Koordinatlar: Enlem - ${item.koordinatlar.enlem}, Boylam - ${item.koordinatlar.boylam}`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={ADRES}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const mapStateProps = state => ({
  ADRES: state.default.ADRESLER,
});

export default connect(mapStateProps)(Adres);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  itemContainer: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});
