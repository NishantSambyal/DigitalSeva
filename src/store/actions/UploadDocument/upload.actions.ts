import { getDocumentDetail } from 'src/network/request';
import { UploadActionType } from '../actionTypes';

export class UploadDocumentActions {
  static getDocumentDetail = (id): any => {
    return {
      isAsyncCall: true,
      baseType: UploadActionType.GET_DOCUMENT_DETAIL,
      asyncCall: () => {
        return getDocumentDetail(id);
      },
    };
  };
}
