import { convertArrayOfObjectsToCSV, getAllCountries } from "@/utils";
import { useBearStore } from '@/zustand/store';
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, SafeAreaView, StyleSheet, Alert, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";


export default function Task2() {
  const { products: count, addProduct, updateProduct } = useBearStore();
  const listOfVegetable = [
    {
      name: "Potato",
      id: 1,
      price: 10
    }
    ,
    {
      name: "Tomato",
      id: 2,
      price: 20
    }
    ,
    {
      name: "Cucumber",
      id: 3,
      price: 30
    }
    ,
    {
      name: "Carrot",
      id: 4,
      price: 40

    }
    ,
    {
      name: "Beans",
      id: 5,
      price: 50
    }
    ,
    {
      name: "Cabbage",
      id: 6,
      price: 100

    }
    ,
    {
      name: "Cauliflower",
      id: 7,
      price: 200

    }
  ]

  function addToThereBasket(name: string, id: number, price: number, quantity: number) {
    if (count.some((product: any) => product.id === id)) {
      const index = count.findIndex((product: any) => product.id === id);
      const updatedProduct = { ...count[index], quantity: count[index].quantity + quantity };
      const updatedProducts = [...count.slice(0, index), updatedProduct, ...count.slice(index + 1)];
      updateProduct(updatedProducts)
    }
    else {
      addProduct(id, name, price, quantity)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ textAlign: 'center', color: '#0a7ea4', fontSize: 20 }}> Food List </Text>
      <FlatList data={listOfVegetable} renderItem={({ item }) =>
        <TouchableOpacity onPress={() => {
          addToThereBasket(item.name, item.id, item.price, 1)
        }

        }>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      } />
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', textAlign: 'center', alignItems: 'center' }}> List of Products</Text>
      <FlatList data={count ?? []} renderItem={({ item }) =>
        <View style={{ borderWidth: 1 }}>
          <Text>Name:{item.name}</Text>
          <Text>
            Quantity {item.quantity}</Text>
          <Text>
            Price {item.quantity * item.price}$</Text>

          <TouchableOpacity style={{ height: 40, width: '100%', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }} onPress={() => {
            const index = count.findIndex((product: any) => product.id === item.id);
            const updatedProducts = [...count.slice(0, index), ...count.slice(index + 1)];
            updateProduct(updatedProducts)
          }}>

            <Text style={{ color: 'white' }}>
              Remove
            </Text>
          </TouchableOpacity>
        </View>
      } />

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