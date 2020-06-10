const INITIAL_STATE = {
  CurrentImage: {},
};

export default function changeImage(state = INITIAL_STATE, action) {
  if (action.type === "CHANGE_IMAGE") {
    return {
      ...state,
      CurrentImage: action.image,
    };
  }

  return state;
}
