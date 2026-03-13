import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ModalScreen() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState<number | null>(null);
  const [mensagem, setMensagem] = useState('');

  function calcular() {
  const p = parseFloat(peso);
  const a = parseFloat(altura) / 100;

  if (p > 0 && a > 0) {
    const valorImc = p / (a * a);
    setImc(valorImc);

    if (valorImc < 18.5) {
      setMensagem("Você está abaixo do peso");
    } else if (valorImc >= 18.5 && valorImc < 24.9) {
      setMensagem("Você está com o peso ideal");
    } else if (valorImc >= 25 && valorImc < 29.9) {
      setMensagem("Você está com sobrepeso");
    } else {
      setMensagem("Você está com obesidade");
    }
  } else {
    alert("Por favor, digite valores válidos!");
  }
}

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}> Calculadora de IMC</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Qual seu peso? Ex: 75"
        keyboardType="numeric"
        onChangeText={setPeso}
        value={peso}
      />

      <TextInput
        style={styles.input}
        placeholder="Qual a sua altura? Ex: 170"
        keyboardType="numeric"
        onChangeText={setAltura}
        value={altura}
      />

      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular Agora</Text>
      </TouchableOpacity>

    
      {imc && (
        <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Seu IMC é: {imc.toFixed(2)}</Text>
         <Text style={styles.messageText}>{mensagem}</Text>
  </View>
)}
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20 , 
    backgroundColor: '#e8f1fb'
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    color: '#FFF8F0' 
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF8F0',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#FF7D00',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: { 
    color: '#FFF8F0', 
    fontSize: 18, 
    fontWeight: 'bold'
  },
  resultContainer: { 
    marginTop: 30
  },
  resultText: {
    fontSize: 22, 
    color: '#FFF8F0', 
    fontWeight: 'bold' 
  },
  messageText: {
  fontSize: 20,
  marginTop: 10,
  color: '#FFF8F0',
  textAlign: 'center',
  fontWeight: '600',
},
});