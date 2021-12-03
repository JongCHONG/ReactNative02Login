import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeRouter, Route, Routes } from 'react-router-native'

import Nav from './components/Nav'
import Login from './pages/Login'
import Home from './pages/Home'

export default function App() {
  return (
    <View style={styles.container}>
      <NativeRouter>
        <Nav /> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </NativeRouter>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
