import React from 'react';
import { Camera } from 'expo-camera';
import { View, Text } from 'react-native';
import * as Permissions from 'expo-permissions';

import styles from './styles';
import Toolbar from './toolbar.component';

export default class CameraPage extends React.Component {
    camera = null;

    state = {
        captures: [],
        capturing: null,
        hasCameraPermission: null,
        cameraType: Camera.Constants.Type.back,
        flashMode: Camera.Constants.FlashMode.off,
        //isCameraVisible : false
    };

    setFlashMode = (flashMode) => this.setState({ flashMode });

    handleShortCapture = async () => {
        const photoData = await this.camera.takePictureAsync();
        this.props.navigation.navigate('Loading', {picture: photoData});
        //this.setState({
        //    isCameraVisible : false
        //});
        console.log("photo", photoData);
    };


    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const hasCameraPermission = (camera.status === 'granted');
        this.setState({ hasCameraPermission });
    };

    render() {
        const { hasCameraPermission, flashMode, cameraType, capturing, captures, isCameraVisible } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }

        return (
            <React.Fragment>
                <View>
                    <Camera
                        type={cameraType}
                        flashMode={flashMode}
                        style={styles.preview}
                        ratio={'16:9'}
                        ref={camera => this.camera = camera}
                    />
                </View>

                <Toolbar 
                    capturing={capturing}
                    flashMode={flashMode}
                    cameraType={cameraType}
                    setFlashMode={this.setFlashMode}
                    onShortCapture={this.handleShortCapture}
                />
            </React.Fragment>
        );
    };
};
