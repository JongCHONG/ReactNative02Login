import React from 'react'
import { Link } from 'react-router-native'
import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  navlink: {
    margin: 5,
  }
})

const Nav = () => {

  return (
    <View style={styles.nav}>
      <View style={styles.navlink}>
        <Link to="/">
          <Text>Home</Text>
        </Link>
      </View>
      <View style={styles.navlink}>
        <Link to ="/login">
          <Text>Login</Text>
        </Link>
      </View>
    </View>
  )
}

export default Nav