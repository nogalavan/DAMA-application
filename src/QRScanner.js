import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import ItemDisplay from './ItemDisplay';

// const PlaceholderImage = require('../../assets/images/study2.jpeg');

const items = [
  {
    id: 'item-Mouse',
    name: 'עכבר',
    imageSource: require('../assets/images/mouse.png')
  },
  {
    id: 'item-Key_baord',
    name: 'מקלדת',
    imageSource: require('../assets/images/keyboard.png')
  },
  {
    id: 'item-Charger',
    name: 'מטען',
    imageSource: require('../assets/images/macCharger.png')
  },
  {
    id: 'item-Type_C',
    name: 'מטען',
    imageSource: require('../assets/images/macCharger.png')
  },
  {
    id: 'item-Eathernet',
    name: 'כבל רשת',
    imageSource: require('../assets/images/eathernetCable.png')
  }
]

const QRScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState('');

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(data);
    setScannedData(data);
    // alert(`Bar code with type ${type} and data ${scannedData} has been scanned!`);
  };

  const handleRemoveScann = () => {
    setScanned(false);
    setScannedData('');
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (scanned && scannedData ? 
  <ItemDisplay item={items.find(x => x.id === scannedData)} 
  handleRemoveScann={handleRemoveScann}></ItemDisplay> :
    <View style={styles.container}>
        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        <Text style={{ color: '#823e18', fontSize: 16, fontWeight: 'bold' }}>{scannedData}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    footerContainer: {
      flex: 1 / 2,
      alignItems: 'center',
    },
  });

export default QRScanner;