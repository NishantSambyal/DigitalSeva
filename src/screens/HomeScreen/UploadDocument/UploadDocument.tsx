import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { pickSingle, types } from 'react-native-document-picker';
import { useDispatch, useSelector } from 'react-redux';
import type { ProductDetailType } from 'src/store/actions/UploadDocument/detail';
import { upload } from 'src/assets/images';
import { BaseScreen, Button, TextView } from 'src/components';
import { horizontalScale } from 'src/helpers/basicStyles';
import { UploadDocumentActions } from 'src/store/actions/UploadDocument/upload.actions';
import { RootState } from 'src/store/reducers';
import { useStyles } from 'src/theme';
import style from './styles';

export type DocumentType = {
  name: string | null;
  size: number | null;
  uri: string;
};
const UploadDocument = () => {
  const styles = useStyles(style);
  const route = useRoute();
  const dispatch = useDispatch();
  const [documentList, setDocumentList] = useState<Array<DocumentType>>([]);

  const updateDocumentList = () => {
    pickSingle({ type: [types.doc, types.docx, types.pdf] }).then(res => {
      const document: DocumentType = {
        name: res.name,
        size: res.size,
        uri: res.uri,
      };
      setDocumentList((arr: DocumentType) => [...arr, document]);
    });
  };

  const productDetail: ProductDetailType = useSelector(
    (state: RootState) => state.UploadDocumentReducer.documentDetail?.data,
  );

  useEffect(() => {
    dispatch(UploadDocumentActions.getDocumentDetail(route?.params?.productID));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BaseScreen title="Upload Document">
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <Image source={upload} resizeMode="contain" />
          <TextView style={styles.uploadTitle}>Let's upload document</TextView>
          <TextView style={styles.uploadDescription}>
            {productDetail?.data?.description}
            {/* Add document from your phone or Open camera to scan new documents. */}
          </TextView>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomSafeAreaView}>
            <View style={styles.flexRow}>
              <Image
                style={styles.imageIcon}
                source={{ uri: productDetail?.data?.icon }}
              />
              <View style={styles.uploadDocDescription}>
                <TextView style={styles.uploadNameTitle}>
                  {productDetail?.data?.product_name}
                </TextView>
                <View style={styles.flexRow}>
                  <TextView>Price per page: ₹</TextView>
                  <TextView>{productDetail?.data?.price}</TextView>
                </View>
              </View>
            </View>

            <View style={styles.bottomWrapper}>
              {documentList.map((item, index) => {
                return (
                  <View key={index.toString()}>
                    <TextView>{item.name}</TextView>
                    <TextView>
                      {item?.size && Math.ceil(item?.size / 1024)} KB
                    </TextView>
                  </View>
                );
              })}
              <Button
                text="Upload Document"
                buttonStyle={styles.uploadButton}
                textStyle={styles.uploadButtonText}
                leftIcon={{
                  name: 'pluscircle',
                  family: 'antdesign',
                  color: 'red',
                  size: horizontalScale(30),
                }}
                onClick={updateDocumentList}
              />
            </View>
          </View>
        </View>
      </View>
    </BaseScreen>
  );
};

export default UploadDocument;
