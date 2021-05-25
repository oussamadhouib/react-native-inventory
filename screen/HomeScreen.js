import React from 'react';
import {  View, StyleSheet,ScrollView } from 'react-native';
import {useScrollToTop} from '@react-navigation/native';


function HomeScreen() {
    const ref = React.useRef(null);
  
    useScrollToTop(ref);

    return (
    
     
        <ScrollView ref={ref}>
        <View style={[styles.parent]}>
                <View style={[styles.card, {backgroundColor: '#996666'} ]} />
                <View style={[styles.card, {backgroundColor: '#339966'} ]} />
                <View style={[styles.card, {backgroundColor: '#996633'} ]} />
                <View style={[styles.card, {backgroundColor: '#669933'} ]} />
                <View style={[styles.card, {backgroundColor: '#339966'} ]} />
                <View style={[styles.card, {backgroundColor: '#996633'} ]} />
                <View style={[styles.card, {backgroundColor: '#669933'} ]} />
            </View>
      </ScrollView>

   
    
    );
  }
  export default HomeScreen;

  const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginLeft:20,
        marginRight:20, 
    },

    product_img: {
        width: '100%',
        height: '70%%',  
    },
 
    parent: {
        width: '100%', 
        flexDirection: 'row', 
        flexWrap: 'wrap'
    },
    card: {
        width: '48%', 
        height:230,
        margin: '1%', 
        aspectRatio: 1,
    }

  });

 