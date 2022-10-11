import React from 'react';
import { Image, View } from 'react-native';
import { cancel, checked } from 'src/assets/images';
import { useStyles, useTheme } from 'src/theme';
import Button from '../Button';
import DimModal from '../DimModal';
import TextView from '../TextView';
import style from './styles';
import { Props } from './types';

const AlertDialog: React.FC<Props> = ({
  visibility,
  setVisibility,
  success,
  description,
  alertHandler,
}) => {
  const styles = useStyles(style);
  const theme = useTheme();
  return (
    <DimModal visibility={visibility} setVisibility={setVisibility}>
      <View style={styles.mainContainer}>
        <Image source={success ? checked : cancel} />
        <TextView
          style={[
            styles.title,
            { color: success ? theme.colors.green : theme.colors.red },
          ]}>
          {success ? 'Success!' : 'Sorry :('}
        </TextView>
        <TextView style={styles.descriptionStyle}>{description}</TextView>
        <Button
          buttonStyle={[
            styles.buttonStyle,
            {
              backgroundColor: success ? theme.colors.green : theme.colors.red,
            },
          ]}
          text={success ? 'Okay' : 'Try Again'}
          onClick={() => (alertHandler ? alertHandler() : setVisibility(false))}
        />
      </View>
    </DimModal>
  );
};

export default AlertDialog;
