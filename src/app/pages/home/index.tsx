import { Text, View, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import { useState } from "react";
import Slider from '@react-native-community/slider';
import ModalPassword from '../modal';

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';

export default function Home() {
    const [size, setSize] = useState<number>(10);
    const [password, setPassword] = useState<string>('');
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const generatePassword = () => {
        let password = '';
        for (let i = 0, n = charset.length; i < size; i++) {
            password += charset.charAt(Math.floor(Math.random() * n));
        }
        setPassword(password);
        setModalVisible(true);
    }
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../../assets/images/cadeado.png')} />
            
            <Text style={styles.title}>{size} Caracteres</Text>
            <View style={styles.area}>
                <Slider style={{ height: 50 }}
                    minimumValue={6}
                    maximumValue={30}
                    maximumTrackTintColor="#ff0000"
                    minimumTrackTintColor="#000"
                    thumbTintColor="#392de9"
                    value={size}
                    onValueChange={(value) => setSize(Number(value.toFixed(0)))}
                />

            </View>
            <TouchableOpacity style={styles.button} onPress={generatePassword}>
                <Text style={styles.buttonText}>Gerar Senha</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <ModalPassword password={password} handleClose ={() => setModalVisible(false)} />
            </Modal>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginBottom: 60,
        width: 250,
        height: 250,
    },
    area: {
        marginTop: 14,
        marginBottom: 14,
        width: "80%",
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 6,
    },
    button: {
        backgroundColor: '#392de9',
        width: "80%",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
})