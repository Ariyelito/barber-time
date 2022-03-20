import React, { useState, useEffect } from 'react';
import { View, Image ,  Text, TouchableOpacity, StyleSheet } from 'react-native';
import  CustomButton  from './../components/CustomButton';
import { containerStyle } from '../components/variables';
import { createTables } from '../db/SqlManger';



 const Home = ({ navigation }) => {
 
  return (
    <View style={styles.container}>
       
       <Image style={styles.logo} source={require('./../../images/logo.png')}></Image>
        <Text>Barber Time</Text>
      
     
      <CustomButton text={'Trouver un barbier!'} onPress={()=>{navigation.navigate('ListBarbers')}}></CustomButton>
      <CustomButton text={'Connectez-vous en tant que barbier'} onPress={() => { navigation.navigate('Login') }}></CustomButton>
      <CustomButton text={'Créez un compte'} onPress={() => { navigation.navigate('Signup') }}></CustomButton>
     
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...containerStyle ,
  } , 
  logo:{
    width:200,
    height : 200,
  },
  button:{
    
  },
})
export default Home;
