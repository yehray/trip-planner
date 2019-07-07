
export const childReducer = (state = {}, action) => {

  let newState;

  switch (action.type) {
   case 'ADD_TEXT':
     newState = Object.assign({}, state, { text: action.text});
     return newState;
   case 'ADD_TEXT_2':
     newState = Object.assign({}, state, { text2: action.text});
     return newState;
   default:
     return state;
 }
};
                            
export default childReducer