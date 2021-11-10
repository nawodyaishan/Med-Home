import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, Dimensions  } from 'react-native';
import { Container, Header, Icon, Item, Input, Text } from "native-base";

import ClinicList from './ClinicList';
import SearchedClinic from './SearchedClinics';
import Banner from "../../Shared/Banner";

var { height } = Dimensions.get('window')

const data = require('../../assets/data/clinics.json');

const ClinicContainer = () => {

    const [clinics, setClinics] = useState([]);
    const [clinicsFiltered, setClinicsFiltered] = useState([]);
    const [focus, setFocus] = useState([]);

    useEffect(() => {

        setClinics(data);
        setClinicsFiltered(data);
        setFocus(false);

        return () => {
            setClinics([]);
            setClinicsFiltered([]);
            setFocus();
            };
        }, [],)

        const searchClinic = (text) => {
            setClinicsFiltered(
                clinics.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };
            const openList =() => {
                setFocus(true);
            };

            const onBlur = () => {
                setFocus(false);
            };



        return (
            <Container>
            <Header searchBar rounded>
            <Item>
                <Icon name="ios-search"/>
                <Input
                placeholder="Search"
                onFocus={openList}
                onChangeText={(text) => searchClinic(text)}
                />
                {focus == true ? (
                    <Icon onPress={onBlur} name="ios" />
                ) : null}
            </Item>
            </Header>

            {focus == true ? (
                <SearchedClinic
                clinicsFiltered={clinicsFiltered}/>

            ) : (
                
                <View style={styles.container}><View>
                <Banner /></View>
            <View style={styles.listContainer}><FlatList
            
            numColumns={2}

                data={clinics}
                renderItem={({item}) => <ClinicList key={item.id} item={item}/>}
                keyExtractor={item => item.name}
            /></View>
       
        </View>

            )
            }

            </Container>
            
    )
}
const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  listContainer: {
    height: height,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  center: {
      justifyContent: 'center',
      alignItems: 'center'
  }
});

export default ClinicContainer;