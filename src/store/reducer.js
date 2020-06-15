function reducer(state = initState, action) {
  switch (action.type) {
    case "INIT":
    return {
      firstName: state.firstName,
      lastName: state.lastName,
      emailText: state.emailText,
      email: state.email,
      txtTitle: state.txtTitle,
      txtTitle2: state.txtTitle2,
      signUpTxt: state.signUpTxt,
      signUpTxt2: state.signUpTxt2,
      signUpTxt3: state.signUpTxt3
    }
    case "SAVE_EMAIL":
      return {
        ...state,
        email: action.email
      }
    case "SAVE_NAME":
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName
      }
    case "UPDATE_NAME":
      return {
        ...state,
        firstName: action.firstName || state.firstName,
        lastName: action.lastName || state.lastName
      }
    default:
      return state;
  }
}