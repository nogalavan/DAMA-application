import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from "axios";
import ItemDisplay from './ItemDisplay';


const QRScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState('');
  const [items, setItems] = useState();

  const getItems = () => {
    axios.get('https://dama-server-vercel.vercel.app/api/stockItem/getAll')
        .then(response => {setItems(response.data)
        });
    
    // axios.get('http://localhost:5000/api/stockItem/getAll')
    //     .then(response => {setItems(response.data)
    //     });
  }

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
    getItems();
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
  <ItemDisplay item={items.find(x => x.myId === scannedData)} 
  handleRemoveScann={handleRemoveScann} getItems={getItems}></ItemDisplay> :
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