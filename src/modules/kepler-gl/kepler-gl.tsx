import {injectComponents, PanelHeaderDropdownFactory, SaveExportDropdownFactory, withState} from "kepler.gl/components";
import React from 'react';

export interface AnyAction {
  type: string;
  [otherProps: string]: any
}

export type AnyActionFn = () => AnyAction;

export type AnyFn = (...args: Array<any>) => any;

export interface ShareButtonsHandlerFactoryProps {
  onExportImage: AnyActionFn,
  // TODO: add other props
}

export interface ShareButton {
  label: string;
  icon: React.Component;
  key: string;
  onClick: (props: ShareButtonsHandlerFactoryProps) => AnyFn,
}

export interface UiOverwrites {
  sidePanel?: {
    header?: {
      share?: {
        dropdown?: {
          buttons?: Array<ShareButton>;
        };
      };
    };
  };
}

/**
 * Function to create kepler gl react component.
 *
 * Kepler gl could component could be extended by config
 *
 * @param uiOverwrites - overwrites for ui, allows to extend kepler UI
 */
export const createKeplerGl = (uiOverwrites: UiOverwrites) => {
  const SaveExportDropdown = SaveExportDropdownFactory(PanelHeaderDropdownFactory());
  const SaveExportDropdownWithState = withState([], () => ({
    items: uiOverwrites?.sidePanel?.header?.share?.dropdown?.buttons,
  }), {})(SaveExportDropdown);

  const KeplerComponent = injectComponents([
    [SaveExportDropdownFactory, () => SaveExportDropdownWithState],
  ]);

  return KeplerComponent;
};
