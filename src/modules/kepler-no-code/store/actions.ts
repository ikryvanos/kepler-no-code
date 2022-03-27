import {store} from "./index";
import {
  MODAL_CLOSE,
  MODAL_OPEN,
  ModalCloseAction,
  ModalIds,
  ModalOpenAction,
  ORIGINAl_HTML_TAG_SET_META,
  OriginalHtmlTagSetMeta
} from "./types/state";

export const modalOpen = (modalId: ModalIds) => {
  const action: ModalOpenAction = {
    type: MODAL_OPEN,
    modalId: modalId,
  };
  store.dispatch(action);
}

export const modalClose = () => {
  const action: ModalCloseAction = {
    type: MODAL_CLOSE,
  };
  store.dispatch(action);
}

export const originalHtmlTagSetMeta = (payload: {
  tag: string;
  width: number,
  height: number,
  mapboxToken: string,
  onload: string
}) => {
  const action: OriginalHtmlTagSetMeta = {
    type: ORIGINAl_HTML_TAG_SET_META,
    payload,
  };
  store.dispatch(action);
}


