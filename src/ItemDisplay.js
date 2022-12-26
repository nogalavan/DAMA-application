import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

const ItemDisplay = ({ item, handleRemoveScann }) => {
  const [amount, setAmount] = useState(0);

  return (
      <View style={styles.container}>
        <Text style={{ color: '#f7f7f7', fontSize: 60, paddingTop: 100 }}>{item.name}</Text>
        <View style={styles.imageContainer}>
          <ImageViewer placeholderImageSource={item.imageSource} />
        </View>
        <Text style={{ color: '#f7f7f7', fontSize: 32 }}>כמות</Text>
        <Text style={{ color: '#f7f7f7', fontSize: 60 }}>{amount}</Text>
        <View style={styles.row}>
          <Text style={{ color: '#f7f7f7', fontSize: 16 }}>0</Text>
          <Slider
              style={{width: 300, height: 40}}
              step={1}
              minimumValue={0}
              maximumValue={30}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              onValueChange={(value) => setAmount(value)}
          />
          <Text style={{ color: '#f7f7f7', fontSize: 16 }}>30</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button label="ביטול" onClick={()=>handleRemoveScann()} isSmall={true}/>
          <Button label="אישור" onClick={()=>handleRemoveScann()} isSmall={true}/>
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
    paddingTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flex: 1 / 2,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 0
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 350
  }
});

export default ItemDisplay;