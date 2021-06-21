import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import {Content, Left, Body, ListItem, Thumbnail, Text} from 'native-base';

var { width } = Dimensions.get("window")


const SearchedClinic = (props) => {

    const { clinicsFiltered} = props;

    return (
    
    <Content style={{ width : width}}>

        {clinicsFiltered.legth > 0 ? (

            clinicsFiltered.map((item) =>

            (
                <ListItem key={item.id}
                avatar>

                <Left>
                    <Thumbnail source={{uri : item.image ? item.image : 'https://lh3.googleusercontent.com/proxy/GeJGzARV-f7l3Cqe1jf6TmuQ_GDg-cLbSEeCwMOWjmp2DewcZZ-uWmbOrshrWRxzgPTRBKb1NdS5qWi87940wemALOX8v27Ynq3x3JSyg54zRmUJA7Exv6jcMfY'}}/>
                </Left>
                <Body>
                    <Text>
                        {item.name}
                    </Text>
                    <Text note > {item.description}
                    </Text>
                </Body>
                </ListItem>
            ))
        ) : (
            <View style={StyleSheet.Center}>
                <Text style={{alignSelf: 'center'}}>
                No Clinics Found</Text>
            </View>
        )}
    </Content>)
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100
    }
})


export default SearchedClinic;