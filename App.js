import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

import Button from './src/components/Button';
import ImageViewer from './src/components/ImageViewer';
import QRScanner from './src/QRScanner';

const PlaceholderImage = require('./assets/images/study2.jpeg');

const App = () => {
  const [isScanBarcode, setIsScanBarcode] = useState(false);

  return (isScanBarcode ?  
      <QRScanner /> : 
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer placeholderImageSource={PlaceholderImage} />
        </View>
        <Text style={{ color: '#823e18', fontSize: 80, fontWeight: 'bold' }}>DAMA</Text>
        <View style={styles.footerContainer}>
          <Button label="בחר מוצר" onClick={()=>setIsScanBarcode(true)}/>
        </View>
        <StatusBar style="auto" />
      </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 100,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 2,
    alignItems: 'center',
    paddingTop: 20
  },
});

export default App;