import actionTypes from "../actions/actionTypes";

const initContentOfConfirmModal = {
  isOpen: false,
  messageId: "",
  handleFunc: null,
  dataFunc: null,
};

const initialState = {
  started: true,
  language: "vi",
  systemMenuPath: "/system/user-manage",
  contentOfConfirmModal: {
    ...initContentOfConfirmModal,
  },
  genders: [],
  roles: [],
  positions: [],
  isLoadingGender: false,
};

const appReducer = (state = initialState, action) => {
  let copyState = { ...state };
  switch (action.type) {
    case actionTypes.APP_START_UP_COMPLETE:
      return {
        ...state,
        started: true,
      };
    case actionTypes.SET_CONTENT_OF_CONFIRM_MODAL:
      return {
        ...state,
        contentOfConfirmModal: {
          ...state.contentOfConfirmModal,
          ...action.contentOfConfirmModal,
        },
      };
    case actionTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };
    case actionTypes.FETCH_GENDER_START:
      copyState.isLoadingGender = true; 
      return {
        ...copyState
      }
    case actionTypes.FETCH_GENDER_SUCCESS:
      copyState.genders = action.data;
      copyState.isLoadingGender = false;
      return {
        ...copyState,
      };
    case actionTypes.FETCH_GENDER_FAILED:
      copyState.isLoadingGender = false;
      return {
        ...copyState,
      };
    case actionTypes.FETCH_ROLE_SUCCESS:
      copyState.roles = action.data;
      return {
        ...copyState,
      };
    case actionTypes.FETCH_ROLE_FAILED:
      return {
        ...copyState,
      };
    case actionTypes.FETCH_POSITION_SUCCESS:
      copyState.positions = action.data;
      return {
        ...copyState,
      };
    case actionTypes.FETCH_POSITION_FAILED:
      return {
        ...copyState,
      };
    default:
      return state;
  }
};

export default appReducer;
