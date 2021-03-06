import { appActionsConstants } from '../../../constants/redux-store';
import { Action } from 'redux';

export interface ShowUiLoaderAction extends Action {
  type: typeof appActionsConstants.SHOW_APP_LOADER;
  payload: boolean;
}

export interface HideUiLoaderAction extends Action {
  type: typeof appActionsConstants.HIDE_APP_LOADER;
  payload: boolean;
}

export interface ChangeAppIsInBackgroundState extends Action {
  type: typeof appActionsConstants.CHANGE_APP_IS_IN_BACKGROUND_STATE;
  payload: boolean;
}

export type AppActions = ShowUiLoaderAction | HideUiLoaderAction | ChangeAppIsInBackgroundState;
