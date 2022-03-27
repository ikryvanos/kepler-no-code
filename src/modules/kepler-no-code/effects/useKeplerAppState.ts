import {useSelector} from "react-redux";
import {KeplerReduxState} from "../../kepler-gl/types/state";

export const useKeplerAppState = (keplerComponentId: string): KeplerReduxState => {
  return useSelector((state: KeplerReduxState) => {
    return state.keplerGl[keplerComponentId];
  });
}
