import {
  actions,
  KeplerNoCodeState,
  MODAL_CLOSE,
  MODAL_OPEN,
  ORIGINAl_HTML_TAG_SET_META
} from "./types/state";

export const reducer = (state: KeplerNoCodeState = {
  modalDialog: {
    isOpened: false,
    activeDialogId: null,
  }
}, action: actions): KeplerNoCodeState => {
  if (action.type === MODAL_OPEN) {
    return {
      ...state,
      modalDialog: {
        ...state.modalDialog,
        isOpened: true,
        activeDialogId: action.modalId,
      }
    }
  }

  if (action.type === MODAL_CLOSE) {
    return {
      ...state,
      modalDialog: {
        ...state.modalDialog,
        isOpened: false,
        activeDialogId: null,
      }
    }
  }

  if (action.type === ORIGINAl_HTML_TAG_SET_META) {
    return {
      ...state,
      originalHtmlTag: {
        ...state.originalHtmlTag,
        meta: action.payload,
      },
    }
  }

  return state;
};
