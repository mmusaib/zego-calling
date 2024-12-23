import React from 'react';
import { View, StyleSheet } from 'react-native';
import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'
export default function VoiceCallPage(props) {
    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={1935548536}
                appSign={'a092d13fc9a1cc5561b1aeb054551e75f9924eed4aa5322d7eb439a7f1def4f3'}
                userID={'auxStream'} // userID can be something like a phone number or the user id on your own user system. 
                userName={'codeWithAuxStream'}
                callID={'thfytfytfyt'} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onCallEnd: (callID, reason, duration) => { props.navigation.navigate('HomePage') },
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