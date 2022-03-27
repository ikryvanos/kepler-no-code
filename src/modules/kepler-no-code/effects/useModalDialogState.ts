import {useSelector} from "react-redux";
import {ModalDialog} from "../store/types/state";
import {ReduxState} from "../store";

export const useModalDialogState = (): ModalDialog => {
  return useSelector((state: ReduxState) => {
    return state.keplerNoCode.modalDialog;
  });
}
