export const MODAL_OPEN = 'KEPLER_NO_CODE__MODAL_DIALOG__OPEN';
export const MODAL_CLOSE = 'KEPLER_NO_CODE__MODAL_DIALOG__CLOSE';
export const ORIGINAl_HTML_TAG_SET_META = 'KEPLER_NO_CODE__ORIGINAl_HTML_TAG__SET_META';

export enum ModalIds {
  HTML_TAG_SAVE = 'HTML_TAG_SAVE'
}

export interface ModalOpenAction {
  type: typeof MODAL_OPEN;
  modalId: ModalIds;
}

export interface ModalCloseAction {
  type: typeof MODAL_CLOSE;
}

export interface OriginalHtmlTagSetMeta {
  type: typeof ORIGINAl_HTML_TAG_SET_META;
  payload: {
    tag: string;
    width: number,
    height: number,
    mapboxToken: string,
    onload: string
  }
}

export interface ModalDialog {
  isOpened: boolean,
  activeDialogId: ModalIds | null
}

export interface OriginalHtmlTag {
  meta: {
    tag: string;
    width: number,
    height: number,
    mapboxToken: string,
    onload: string
  },
}

export interface KeplerNoCodeState {
  modalDialog: ModalDialog;
  originalHtmlTag?: OriginalHtmlTag
}

export type actions = ModalOpenAction | ModalCloseAction | OriginalHtmlTagSetMeta;
