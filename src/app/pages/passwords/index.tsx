import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useStorage from '../../../hooks/useStorage';
import PasswordItens  from '../../../components/passwordItens';

export default function Passwords() {
  const [listPasswords, setListPasswords] = useState<any>([]);
  const focused = useIsFocused();
  const { getItem, removeItem } = useStorage();
  
  async function loadPasswords() {
    const passwords = await getItem('@pass');
    setListPasswords(passwords);
  }

  async function handleDeletePassword(item: any) {
    await removeItem('@pass', item);
    alert("Senha removida com sucesso!");
    loadPasswords();
  }

  useEffect(() => {
    loadPasswords()
  }, [focused])

 return (
   <SafeAreaView style={{ flex: 1 }}>
     <View style={styles.header}>
       <Text style={styles.text}>Minhas senhas</Text>
     </View>

     <View style={styles.content}>
       <FlatList
         style={{ flex: 1, paddingTop: 14 }}
         data={listPasswords}
         keyExtractor={(item: string) => String(item)}
         renderItem={({ item }: any) => <PasswordItens data={item} removePassword={() => handleDeletePassword(item)} />}
       />
     </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#392de9',
    paddingTop: 58,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14,
  }
});