import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import * as $ from '../../Redux/Action';
import {connect} from 'react-redux';
import Geocoder from 'react-native-geocoding';


Geocoder.init('AIzaSyC3LvmiZtU3aJuJ7AGvJ6T81WG2nepRCQg', {language: 'en'});

const AdresEkle = props => {
  const {AdresKayit} = props;
  const [adres, setAdres] = useState('');

  const adresiKaydet = async () => {
    if (!adres) {
      Alert.alert('Uyarı', 'Lütfen bir adres giriniz.');
      return;
    }

    try {
      
      const response = await Geocoder.from(adres);
      const {lat, lng} = response.results[0].geometry.location;

      
      AdresKayit({
        adres,
        koordinatlar: {
          enlem: lat,
          boylam: lng,
        },
      });

      Alert.alert('Başarılı', 'Adres başarıyla eklendi.');
      setAdres(''); // Adres alanını temizle
    } catch (error) {
      Alert.alert(
        'Hata',
        'Adres çözümlenemedi. Lütfen geçerli bir adres giriniz.'
      );
      console.error('Geocoder Hatası:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adres Ekle</Text>
      <TextInput
        style={styles.input}
        placeholder="Adres giriniz"
        value={adres}
        onChangeText={setAdres}
      />
      <Button title="Adresi Kaydet" onPress={adresiKaydet} />
    </View>
  );
};

const mapStateProps = state => ({
  ADRES: state.default.ADRESLER,
});

const mapDispatchToProps = dispatch => ({
  AdresKayit: adres => {
    dispatch({
      type: $.ADRES_KAYIT,
      payload: adres,
    });
  },
});

const ConnectedAdresEkle = connect(
  mapStateProps,
  mapDispatchToProps,
)(AdresEkle);

export default ConnectedAdresEkle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
});