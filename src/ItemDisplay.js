import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import { updateStockItem } from "./services/stockItemService";
import { addTransaction } from "./services/transactionService";

export const itemsImages = [
  {
    id: 'item-Mouse',
    imageSource: require('../assets/images/mouse.png'),
  },
  {
    id: 'item-Key_baord',
    imageSource: require('../assets/images/keyboard.png'),
  },
  {
    id: 'item-Charger',
    imageSource: require('../assets/images/macCharger.png'),
  },
  {
    id: 'item-Eathernet',
    imageSource: require('../assets/images/eathernetCable.png'),
  },
  {
    id: 'item-Computer_screen',
    imageSource: require('../assets/images/computer-screen.jpeg'),
  },
  {
    id: 'item-Hard_disk',
    imageSource: require('../assets/images/hard-disk.jpeg'),
  }
]

const ItemDisplay = ({ item, handleRemoveScann, getItems }) => {
  const [amount, setAmount] = useState(0);

  const handleEditAmountClose = () => {
    // console.log(item);
    updateStockItem({...item, amount: item.amount - amount})
    .then(x => addTransaction(item.name, new Date().toLocaleString(), -amount).then(y => getItems()));
    handleRemoveScann();
  }


  return (
      <View style={styles.container}>
        <Text style={{ color: '#f7f7f7', fontSize: 60, paddingTop: 100 }}>{item.name}</Text>
        <View style={styles.imageContainer}>
          <ImageViewer placeholderImageSource={itemsImages.find(x => x.id === item.myId).imageSource} />
        </View>
        <Text style={{ color: '#f7f7f7', fontSize: 32 }}>כמות</Text>
        <Text style={{ color: '#f7f7f7', fontSize: 60 }}>{amount}</Text>
        <View style={styles.row}>
          <Text style={{ color: '#f7f7f7', fontSize: 16 }}>0</Text>
          <Slider
              style={{width: 300, height: 40}}
              step={1}
              minimumValue={0}
              maximumValue={item.amount}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              onValueChange={(value) => setAmount(value)}
          />
          <Text style={{ color: '#f7f7f7', fontSize: 16 }}>{item.amount}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button label="ביטול" onClick={()=>handleRemoveScann()} isSmall={true}/>
          <Button label="אישור" onClick={()=>handleEditAmountClose()} isSmall={true}/>
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