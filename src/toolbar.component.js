import React from 'react';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { View, TouchableOpacity } from 'react-native';

import styles from './styles';

const { FlashMode: CameraFlashModes, Type: CameraTypes } = Camera.Constants;

export default ({ 
    flashMode = CameraFlashModes.off, 
    setFlashMode, onShortCapture, 
}) => (

    <Grid>
        <Row>
            <Col></Col>
            <Col size={2} style={styles.alignCenter}>
        <TouchableOpacity style={{alignSelf: 'center', bottom: 20, position: 'absolute'}} onPress={onShortCapture}>
            <View style={{ 
               borderWidth: 2,
               borderRadius:50,
               borderColor: '#DC7633',
               height: 70,
               width:70,
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'}}
            >
              <View style={{
                 borderWidth: 2,
                 borderRadius:50,
                 borderColor: '#DC7633',
                 height: 45,
                 width:45,
                 backgroundColor: '#DC7633'}} >
              </View>
            </View>
          </TouchableOpacity>
            </Col>
            <Col style={styles.alignCenter}>
                <TouchableOpacity style={{position: 'relative', top: '-43%', right: '-20%'}} onPress={() => setFlashMode( 
                    flashMode === CameraFlashModes.on ? CameraFlashModes.off : CameraFlashModes.on 
                )}>
                    <Ionicons
                        name={flashMode == CameraFlashModes.on ? "md-flash" : 'md-flash-off'}
                        color="#DC7633"
                        size={50}
                    />
                </TouchableOpacity>
            </Col>

        </Row>
    </Grid>
);
