export const setActionTemplate = (itemId) => (
  {
   type: 'SET_ACTION_TYPE',
   itemId: itemId
  });
  

  export function addText(text) {
    return {
      type: 'ADD_TEXT',
      text: text
    }
  }

  export function addText2(text) {
    return {
      type: 'ADD_TEXT_2',
      text: text
    }
  }


  
  
  // Redux also suggest defining constants for your action types.
  export const setActionTypes = {
   SET_ACTION_TYPE: 'SET_ACTION_TYPE'
  };