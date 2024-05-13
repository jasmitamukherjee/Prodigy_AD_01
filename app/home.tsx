import { View, Text ,Switch,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { ThemeContext } from '@/src/context/ThemeContext'
import { Colors } from '@/constants/Colors'

const home = () => {
    const [theme, setTheme] = useState("light")
  return (
    <ThemeContext.Provider value={theme}>
    <View style={ theme === 'light' ? styles.container :  [styles.container,{backgroundColor:"#000"}]}>
      <Switch value={theme === 'light'} onValueChange={()=> setTheme(theme === 'light' ? 'dark' : 'light')}/>
    </View>
    </ThemeContext.Provider>
  )
}

export default home

const styles = StyleSheet.create({
    container :{
        flex :1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent : "center"
    }
})