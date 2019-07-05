export const childReducer = (state = {}, action) => {

  let newState;

  switch (action.type) {
   case 'ADD_TEXT':
     newState = Object.assign({}, { text: action.text});
     return newState;
   default:
     return state;
 }
};
                            
export default childReducer