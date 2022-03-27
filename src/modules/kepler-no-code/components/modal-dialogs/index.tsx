import {Modal, StyledModalContent} from "kepler.gl/components";
import React from "react";
import {modalClose} from "../../store/actions";
import {useModalDialogState} from "../../effects/useModalDialogState";
import {ModalIds} from "../../store/types/state";
import {HtmlTagExportDialogContent} from "./html-tag-export-dialog-content";

export const ModalDialog = () => {
  const modalState = useModalDialogState();
  let activeDialog = <div>No active dialog</div>;
  if (modalState.activeDialogId === ModalIds.HTML_TAG_SAVE) {
    activeDialog = <HtmlTagExportDialogContent/>;
  }

  return <Modal isOpen={modalState.isOpened} onCancel={() => modalClose()}>
    <StyledModalContent>
      {activeDialog}
    </StyledModalContent>
  </Modal>
}
