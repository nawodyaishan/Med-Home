import React from 'react';
import { TouchableOpacity, View, Dimensions } from 'react-native';

import ClinicCard from './ClinicCard'

var { width } = Dimensions.get("window");

const ClinicList = (props) => {
    const {item} = props;
    return(
        <TouchableOpacity style={{ width: '50%' }}>
        <View style={{ width: width / 2, backgroundColor: 'gainsboro' }}>
        <ClinicCard {...item}/>

        </View>
        </TouchableOpacity>
    )
}
    
export default ClinicList;