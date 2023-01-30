import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Button from './src/components/Button';
import QRScanner from './src/QRScanner';

const PlaceholderImage = require('./assets/images/study2.jpeg');

const App = () => {
  const [isScanBarcode, setIsScanBarcode] = useState(false);

  return (isScanBarcode ? 
    <QRScanner /> : 
    <ImageBackground source={PlaceholderImage} style={styles.backgroundImage}>
      <LinearGradient style={styles.linearContainer} colors={['transparent', 'rgba(0,0,0,1)']}>
        <View style={styles.container}>
          <Text style={{ color: '#f7f7f7', fontSize: 100, fontWeight: 'bold' }}>DAMA</Text>
          <Button label="בחר מוצר" onClick={()=>setIsScanBarcode(true)} isSmall={false}/>
        </View>
      </LinearGradient>
    </ImageBackground>
  )
  // return (isScanBarcode ?  
  //     <QRScanner /> : 
  //     <View style={styles.container}>
  //       <View style={styles.imageContainer}>
  //         <ImageViewer placeholderImageSource={PlaceholderImage} />
  //       </View>
  //       <Text style={{ color: '#823e18', fontFamily: 'Bodoni 72', fontSize: 80, fontWeight: 'bold' }}>DAMA</Text>
  //       <View style={styles.footerContainer}>
  //         <Button label="בחר מוצר" onClick={()=>setIsScanBarcode(true)}/>
  //       </View>
  //       <StatusBar style="auto" />
  //     </View>)
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  linearContainer: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  container: {
    paddingTop: 100,
    paddingBottom: 100,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: '#25292e',
  //   alignItems: 'center',
  // },
  // imageContainer: {
  //   flex: 1,
  //   paddingTop: 100,
  // },
  // image: {
  //   width: 320,
  //   height: 440,
  //   borderRadius: 18,
  // },
  // footerContainer: {
  //   flex: 1 / 2,
  //   alignItems: 'center',
  //   paddingTop: 20
  // },
});

export default App;