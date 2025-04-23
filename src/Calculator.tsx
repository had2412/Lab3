import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handlePress = (value: string) => {
    if (value === '=') {
      try {
        const evalResult = eval(input);
        setResult(evalResult.toString());
      } catch {
        setResult('Lỗi');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(prev => prev + value);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const themeStyles = isDarkMode ? darkTheme : lightTheme;

  const renderButton = (label: string) => (
    <TouchableOpacity
      key={label}
      style={[styles.button, themeStyles.button]}
      onPress={() => handlePress(label)}
    >
      <Text style={[styles.buttonText, themeStyles.buttonText]}>{label}</Text>
    </TouchableOpacity>
  );

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', 'C', '=', '+'],
  ];

  return (
    <View style={[styles.container, themeStyles.container]}>
      {/* Thông tin sinh viên */}
      <View style={styles.infoContainer}>
        <Text style={[styles.infoText, themeStyles.text]}>
          MSSV: 2124802010604
        </Text>
        <Text style={[styles.infoText, themeStyles.text]}>
          Họ tên: Hoàng Anh Dũng
        </Text>
      </View>

      {/* Chuyển đổi chế độ sáng / tối */}
      <View style={styles.toggleContainer}>
        <Text style={[themeStyles.text]}>Chế độ tối</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>

      {/* Hiển thị biểu thức và kết quả */}
      <Text style={[styles.inputText, themeStyles.text]}>{input}</Text>
      <Text style={[styles.resultText, themeStyles.text]}>{result}</Text>

      {/* Nút bấm */}
      {buttons.map((row, i) => (
        <View key={i} style={styles.row}>
          {row.map(renderButton)}
        </View>
      ))}
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },
  infoContainer: {
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputText: {
    fontSize: 32,
    textAlign: 'right',
    marginBottom: 10,
  },
  resultText: {
    fontSize: 28,
    textAlign: 'right',
    marginBottom: 20,
    color: 'green',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

const lightTheme = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
  button: {
    backgroundColor: '#ffffff',
  },
  buttonText: {
    color: '#333',
  },
  text: {
    color: '#000',
  },
});

const darkTheme = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
  },
  button: {
    backgroundColor: '#333',
  },
  buttonText: {
    color: '#fff',
  },
  text: {
    color: '#fff',
  },
});
