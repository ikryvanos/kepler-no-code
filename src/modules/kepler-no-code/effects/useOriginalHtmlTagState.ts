import {useSelector} from "react-redux";
import {ModalDialog, OriginalHtmlTag} from "../store/types/state";
import {ReduxState} from "../store";

export const useOriginalHtmlTagState = (): OriginalHtmlTag | undefined => {
  return useSelector((state: ReduxState) => {
    return state.keplerNoCode.originalHtmlTag;
  });
}
