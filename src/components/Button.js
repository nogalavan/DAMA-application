import { StyleSheet, View, Pressable, Text } from 'react-native';

const Button = ({ label, onClick, isSmall }) => {
  return (
    <View style={isSmall ? styles.smallButtonContainer : styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onClick}>
        <Text style={isSmall ? styles.smallButtonLabel : styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  smallButtonContainer: {
    width: 150,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  buttonContainer: {
    width: 200,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#e19b70',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 32,
    fontFamily: 'Arial'
  },
  smallButtonLabel: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Arial'
  },
});

export default Button;