import React from "react";
import { SafeAreaView, StatusBar, ScrollView, StyleSheet } from "react-native";
import Home from "./telas/home/Home"

function App(): JSX.Element {

  return (
    <SafeAreaView style={estilo.safeArea}>
      <StatusBar />
      <Home />

    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  safeArea: {
    flex: 1
  }
})

export default App;
