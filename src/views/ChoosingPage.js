import React, { useState, useEffect } from 'react';
import { View, Image ,  Text, TouchableOpacity, StyleSheet } from 'react-native';
import  CustomButton  from './../components/CustomButton';
import { containerStyle } from '../components/variables';
import { createTables } from '../db/SqlManager';



 const ChoosingPage = ({ navigation }) => {
 
  return (
    <View style={styles.container}>
       
       <Image style={styles.logo} source={require('./../../images/logo.png')}></Image>
        <Text>Vous etes</Text>
      
     
      <CustomButton text={'Un client'} onPress={()=>{navigation.navigate('ClientView')}}></CustomButton>
      <CustomButton text={'Un barbier'} onPress={() => { navigation.navigate('BarberView') }}></CustomButton>
     
     
     
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
export default ChoosingPage;