import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View ,Vibration} from 'react-native';

export default function App() {
  const handleIncrease = () => {
    setcount(count + 1);
  }
  const handleDecrease = () => {
    setcount(count - 1);
  }
  const Resethandle = () => {
    Vibration.vibrate(150);
    setcount(0);
  }
  const [count, setcount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.counterBox}>{count}</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonPlus} onPress={handleIncrease}>
          <Text style={styles.buttonText}>+</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonMinus} onPress={handleDecrease}>
          <Text style={styles.buttonText}>-</Text></TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.resetbtn} onPress={Resethandle}>
          <Text style={styles.resetText}>Reset</Text></TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  counterBox: {
    backgroundColor: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 50,
    paddingVertical: 25,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    marginBottom: 40,
    fontSize: 28,
    color: '#1d3557'
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 40,
    marginBottom: 40,
  },
  buttonPlus: {
    backgroundColor: '#06d6a0',
    padding: 25,
    borderRadius: 60,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  buttonMinus: {
    backgroundColor: '#ef476f',
    padding: 25,
    borderRadius: 60,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  buttonText: {
    fontSize: 34,
    color: '#fff',
    fontWeight: 'bold',
  },
  resetbtn: {
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    backgroundColor: '#118ab2',
    marginTop: 10,
    elevation: 5,
  },
  resetText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
});
