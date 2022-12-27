import { UploadActionType } from '../actions/actionTypes';
import { handleData } from '../middlewares';

const initialState = {
  documentDetail: {
    data: {},
    loading: false,
    error: null,
  },
};

const UploadDocumentReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UploadActionType.GET_DOCUMENT_DETAIL: {
      return handleData(state, action, {
        request: prevState => ({
          ...prevState,
          documentDetail: { loading: true },
        }),
        success: prevState => ({
          ...prevState,
          documentDetail: {
            loading: false,
            data: payload,
            // error: null,
          },
        }),
        failure: prevState => ({
          ...prevState,
          documentDetail: { loading: false, data: payload },
        }),
      });
    }

    default:
      return state;
  }
};

export default UploadDocumentReducer;
