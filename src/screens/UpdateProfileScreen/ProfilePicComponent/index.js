import {
  View, Image, TouchableOpacity, Platform,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style';
import SvgIcon from '../../../common/SvgIcon';
import ErrorHandler from '../../../common/ErrorHandler';
import { debugLog } from '../../../common/Logger';
import { getProfileImage } from '../actionUpdateProfile';
import { ImageUploadModal } from './Component/ImageUploadModal';

function ProfilePicComponent() {
  const [openUploadImage, setOpenUploadImage] = useState(false);
  const dispatch = useDispatch();
  const profileState = useSelector((state) => state.reducerUpdateProfile);
  const { customerData } = profileState;

  const captureData = (image) => {
    const parts = image.path.split('/');
    const uri = Platform.OS === 'ios' ? `file:///${image.path}` : image.path;
    const name = parts[parts.length - 1];
    const type = image.mime;
    const file = {
      uri,
      name,
      type,
    };
    dispatch(getProfileImage(file));
    setOpenUploadImage(false);
  };
  const imageOptions = {
    width: 300,
    height: 400,
    cropping: true,
    includeBase64: false,
    // cropperCircleOverlay: true,
    mediaType: 'photo',
  };
  const captureImage = useCallback(() => {
    ImagePicker.openCamera(imageOptions)
      .then((image) => {
        captureData(image);
      })
      .catch((e) => {
        debugLog('e', e);
      });
  });

  const captureUpload = useCallback(() => {
    ImagePicker.openPicker(imageOptions)
      .then((image) => {
        captureData(image);
      })
      .catch((e) => {
        debugLog('e', e);
      });
  });
  return (
    <View style={styles.profilePicContainer}>
      <View style={styles.circularProfilePic}>
        <Image
          style={styles.circularProfilePic}
          source={{ uri: customerData?.image_url }}
        />
      </View>
      <TouchableOpacity style={styles.cameraIconContainer} onPress={() => setOpenUploadImage(true)}>
        <View style={styles.cameraIcon}>
          <SvgIcon.CameraProfile />
        </View>
      </TouchableOpacity>
      <ErrorHandler componentName="ImagePermissionScreen">
        <ImageUploadModal
          isVisible={openUploadImage}
          onClose={() => setOpenUploadImage(false)}
          onPressUpload={captureUpload}
          onPressCapture={captureImage}
        />
      </ErrorHandler>
    </View>
  );
}

export default ProfilePicComponent;
