import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import BarberApointementListItem from '../components/BarberApointementListItem';
import { containerStyle } from '../components/Variables';
import { getAll } from '../db/SqlManager';
import { useSelector } from 'react-redux';


const ListAppoinments = () => {
  const barber = useSelector(state => state.barber.connected);
  const [data, setData] = useState([]);

  useEffect(() => {
    
    getAll('appoinments', tab => setData(tab.filter(elem => elem.barberId == barber.barberId)));
    console.log("appoinments from the database : ")
    console.log(data)

  }, []);


  const renderItem = ({ item }) => {
    


    return (
      <BarberApointementListItem barber={item} onPressHandler={() => { console.log("remove apointement") }} />
    );

  }


  return (
    <View style={styles.container}>
      <Text>Logged in as {barber.name}</Text>
      {data.length != 0 ?
        <FlatList
          style={styles.flatList}
          data={data}
          renderItem={renderItem}
        ></FlatList>
        : <Text >{barber.name}, you don't have any incoming appoinments</Text>}
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    ...containerStyle,
  },
  flatList: {
    alignSelf: 'stretch',

  }

})

export default ListAppoinments;
