import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, FlatList } from 'react-native'

import ClinicList from './ClinicList';

const data = require('../../assets/data/clinics.json');

const ClinicContainer = () => {

    const [clinics, setClinics] = useState([]);

    useEffect(() => {

        setClinics(data);

        return () => {
            setClinics([])
            }
        }, [])

        return (
            <View><Text>
                Clinics Container</Text>
            <View style={{marginTop: 100}}><FlatList
            horizontal

                data={clinics}
                renderItem={({item}) => <ClinicList key={item.id} item={item}/>}
                keyExtractor={item => item.name}
            /></View>
       
        </View>
    )
}

export default ClinicContainer;