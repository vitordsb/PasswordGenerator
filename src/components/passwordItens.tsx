import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function PasswordItens({data, removePassword}: any) {
 return (
     <Pressable onLongPress={removePassword} style={styles.container}>
         <Text style={styles.text}>{data}</Text>
     </Pressable>
  );
}

const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#0e0e0e',
        width: '100%',
        padding: 14,
        borderRadius: 10,
        marginBottom: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },  
    text: {
        color: '#fff',
        fontSize: 16,
    }
});