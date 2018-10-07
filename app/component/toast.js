import React, {Component} from 'react'
import {View,Text, StyleSheet, Dimensions} from 'react-native'
import RootSiblings from 'react-native-root-siblings'
import Icon from 'react-native-vector-icons/FontAwesome'
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

let sibling = undefined;

const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';
const WARING = 'WARING';

const createSiblings = (msg,type) => {
    const iconType = renderType(type);

    return new RootSiblings(
        <View style={styles.maskStyle}>
            <View style={styles.backViewStyle}>
                <Icon name={iconType.name} size={50} color={iconType.color}/>
                {/* <Text style={[styles.message,{color:iconType.color}]}>{msg}</Text> */}
                <Text style={styles.message}>{msg}</Text>
            </View>
        </View>
    )
}

const renderType = (type) => {
    switch (type) {
        case SUCCESS: 
            return {
                name:'check',
                color:BaseColor.brandSuccess
            };

        case WARING: 
            return {
                name:'warning',
                color:BaseColor.brandWarning
            };

        case ERROR:
            return {
                name:'close',
                color:BaseColor.brandDanger
            };
    }
}

const Toast = {
    showSuccess: (msg) => {
        sibling = createSiblings(msg,SUCCESS);
        setTimeout(Toast.hidden, 2000)
    },
    showWaring: (msg) => {
        sibling = createSiblings(msg,WARING);
        setTimeout(Toast.hidden, 2000)
    },
    showError: (msg) => {
        sibling = createSiblings(msg,ERROR);
        setTimeout(Toast.hidden, 2000)
    },

    hidden: () => {
        if (sibling instanceof RootSiblings) sibling.destroy()
    }
}

const styles = StyleSheet.create({
    maskStyle: {
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      width: width,
      height: height,
      alignItems: 'center',
      justifyContent: 'center'
    },
    backViewStyle: {
      backgroundColor: "#fff",
      width: px2dp(400),
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    message: {
      color: '#000',
      marginTop: 10,
      textAlign: 'center',
      lineHeight: 20,
    }
  }
)

export {Toast}