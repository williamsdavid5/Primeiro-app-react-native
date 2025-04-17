import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Slider from '@react-native-community/slider'
import { useState } from 'react'
import { ModalPassword } from '../../components/ui/ModalPassword'

let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export default function App() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPassword] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  function generatePassword() {
    let password = "";

    for (let i = 0, n = charSet.length; i < size; i++) {
      password += charSet.charAt(Math.floor(Math.random() * n))
    }

    setPassword(password)
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/cadeado.png")}
        style={styles.logo}>
      </Image>

      <Text style={styles.title}>
        {size} caracteres
      </Text>

      <View style={styles.area}>
        <Slider
          style={{ width: '100%', height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#FF0000'
          minimumTrackTintColor='#000'
          thumbTintColor='#392de9'
          value={size}
          step={1}
          onValueChange={(value) => setSize(value)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)} />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 200,
    margin: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: 30
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8
  },
  button: {
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
})