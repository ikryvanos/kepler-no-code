import {Modal, StyledModalContent} from "kepler.gl/components";
import React from "react";
import {modalClose} from "../../store/actions";
import {useModalDialogState} from "../../effects/useModalDialogState";
import {ModalIds} from "../../store/types/state";
import {HtmlTagExportDialogContent} from "./html-tag-export-dialog-content";
import {useStore} from "react-redux";
import {ReduxState} from "../../store";

export const ModalDialog = () => {
  const modalState = useModalDialogState();
  let activeDialog = <div>No active dialog</div>;
  if (modalState.activeDialogId === ModalIds.HTML_TAG_SAVE) {
    activeDialog = <HtmlTagExportDialogContent/>;
  }

  const store = useStore<ReduxState>()

  return <Modal isOpen={modalState.isOpened} onCancel={() => modalClose(store)}>
    <StyledModalContent>
      {activeDialog}
    </StyledModalContent>
  </Modal>
}
