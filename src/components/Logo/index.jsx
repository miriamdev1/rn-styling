import React from 'react';
import { Image, StyleSheet } from 'react-native';

const img = require('../../img/logo.png');

const styles = StyleSheet.create({
    logo: {
        height: 110,
        borderBottomColor: 'darkstelblue',
        boderBottomWidth: StyleSheet.hairlineWidth
    }
})





export const Logo = () => (
    <Image style={styles.logo} source={img} />
)