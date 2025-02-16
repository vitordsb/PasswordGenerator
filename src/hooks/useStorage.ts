import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = () => {
    const getItem = async (key: string) => {
        try {
            let password = await AsyncStorage.getItem(key);
            return JSON.parse(password as string) || [];
        } catch(error) {
            console.log("Erro ao buscar", error)
            return []
        }
    }

    const saveItem = async (key: string, item: string) => {
        try {
            let password = await getItem(key)
            password.push(item)

            await AsyncStorage.setItem(key, JSON.stringify(password))
        } catch (error) {
            console.log("Erro ao salvar", error)
        }
    }

    const removeItem = async (key: string, item: string) => { 
        try {
            let password = await getItem(key)
            let myPasswords = password.filter((password: string) => {
                return password !== item
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPasswords))

        } catch (error) {
            console.log("Erro ao remover", error)
        }
    }

    return {
        getItem,
        saveItem,
        removeItem
    }
}


export default useStorage