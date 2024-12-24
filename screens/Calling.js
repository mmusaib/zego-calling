import React from 'react';
import { View, StyleSheet } from 'react-native';
import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'
import keyCenter from '../constants';
export default function VoiceCallPage(props) {

    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={keyCenter.appID}
                appSign={keyCenter.appSign}
                userID={props.route.params.data.userID} // userID can be something like a phone number or the user id on your own user system. 
                userName={props.route.params.data.userName}
                callID={props.route.params.data.id.toString()} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onCallEnd: (callID, reason, duration) => { props.navigation.navigate('Home') },
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 0,
  },
});
