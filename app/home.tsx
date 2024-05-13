import { View, Text ,Switch,StyleSheet,SafeAreaView} from 'react-native'
import React, { useState } from 'react'
import { ThemeContext } from '@/src/context/ThemeContext'
import Button from '@/src/components/Button'
import Keyboard from '@/src/components/Keyboard'
const home = () => {
    const [theme, setTheme] = useState("light")
  return (
    <ThemeContext.Provider value={theme}>
    <SafeAreaView style={ theme === 'light' ? styles.container :  [styles.container,{backgroundColor:"#000"}]}>
      <Switch value={theme === 'light'} onValueChange={()=> setTheme(theme === 'light' ? 'dark' : 'light')}/>
      {/* <Button title="3" onPress={()=> {alert("hello")}}/> */}
      <Keyboard/>
    </SafeAreaView>
    </ThemeContext.Provider>
  )
}

export default home

const styles = StyleSheet.create({
    container :{
        flex :1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent : "flex-start"
    }
})