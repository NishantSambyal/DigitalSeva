import React from 'react';
import { Image, View } from 'react-native';
import { upload } from 'src/assets/images';
import { BaseScreen, TextView } from 'src/components';
import { useStyles } from 'src/theme';
import style from './styles';

const UploadDocument = () => {
  const styles = useStyles(style);
  return (
    <BaseScreen title="Upload Document">
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <Image source={upload} resizeMode="contain" />
          <TextView style={styles.uploadTitle}>Let's upload document</TextView>
          <TextView style={styles.uploadDescription}>
            Add document from your phone or Open camera to scan new documents.
          </TextView>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomSafeAreaView}>
            <TextView>fdfdfdfdfd</TextView>
          </View>
        </View>
      </View>
    </BaseScreen>
  );
};

export default UploadDocument;
