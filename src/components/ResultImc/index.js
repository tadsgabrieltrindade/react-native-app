import React from 'react';
import { View, Text, TouchableOpacity, Share } from 'react-native';
import styles from './style';

export default function ResultImc(props){

    //share
    const onShare = async () =>{
        const result = await Share.share({
            message: `Testei meu IMC no OneBitHealth e deu ${props.resultImc}, venha testar também!`
        })
    }

    return (
        <View style={styles.resultImc}>
            <View style={styles.boxShareButton}>
               {props.resultImc != null ?
                <TouchableOpacity onPress={onShare} style={styles.shared}>
                    <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity> 
                :
                <View />
                }
            </View>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
        </View>
    );
}