import { convertArrayOfObjectsToCSV, getAllCountries } from "@/utils";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, SafeAreaView, StyleSheet, Alert, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";


export default function Task2() {

  const [countryList, setCountryList] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [totalCountry, setTotalCountry] = useState<any>(10)
  useEffect(() => {
    getCountries(15,)
  }, [])
  async function getCountries(limit: number,) {
    setLoading(true)
    try {
      if (countryList.length < totalCountry) {
        setLoading(false)
        let data = await getAllCountries(limit, countryList.length)
        setTotalCountry(data.total)
        let finalData = convertArrayOfObjectsToCSV(data.data)
        setCountryList([...countryList, ...finalData])
        setLoading(false)
        return
      }

    }
    catch (err) {
      setLoading(false)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ textAlign: 'center', color: '#0a7ea4', fontSize: 20 }}> Country List </Text>
      <FlatList
        data={countryList}
        ItemSeparatorComponent={() => <View style={{ height: 4 }} />}
        renderItem={({ item, index }) => {
          return (
            <View key={index} style={{ height: 40, borderWidth: 1, justifyContent: 'center', marginHorizontal: 10, paddingHorizontal: 4, borderRadius: 5, borderColor: 'lightgrey' }}>
              <Text style={{ color: '#0a7ea4' }}>{item.country}</Text>
            </View>
          )
        }}
        keyExtractor={(item, index) => index.toString()}
        refreshing={loading}
        onRefresh={() => getCountries(10,)}
        onEndReached={() => getCountries(10,)}
        ListEmptyComponent={() => loading ? <ActivityIndicator size={'large'} color={'#0a7ea4'} /> : <Text style={{ textAlign: 'center', color: '#0a7ea4', fontSize: 20 }}> No more data </Text>}
      />


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputBox: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    marginHorizontal: 10,
    paddingHorizontal: 4,
    marginTop: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10
  }
})