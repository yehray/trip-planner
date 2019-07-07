export const secondReducer = (state = {}, action) => {

  let newState;

  switch (action.type) {
   case 'SET_ACTION_TYPE':
     newState = Object.assign({}, state, { itemId: action.itemId});
     return newState;
   default:
     return state;
 }
};
                            
export default secondReducer