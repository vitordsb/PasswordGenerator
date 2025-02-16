import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard';
import useStorage from "@/src/hooks/useStorage";

export default function ModalPassword({ password, handleClose }: any) {
    const {saveItem} = useStorage();

    async function handleCopyPassword() {
        await Clipboard.setStringAsync(password);
        await saveItem('@pass', password);
        alert("Senha salva com sucesso!");
        handleClose();
    }
    return (
        <View style = {styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada: </Text>
                
                <Pressable style={styles.innerPressable} onLongPress={handleCopyPassword}>
                    <Text style={styles.text}>{password}</Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleCopyPassword} style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}>salvar senha</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        backgroundColor: '#fff',
        width: '85%',
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 24,
    },
    innerPressable: {
        backgroundColor: '#0e0e0e',
        width: '90%',
        padding: 14,
        borderRadius: 8
    },
    text: {
        color: '#fff',
        textAlign: 'center'
    },
    buttonArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignItems: 'center',
        marginTop: 8,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
        padding: 8,
    },
    buttonSave: {
        backgroundColor: '#392de9',
        borderRadius: 8,
    },
    buttonSaveText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    buttonText: {
        color: '#000000',
        fontWeight: 'bold'
    }

})