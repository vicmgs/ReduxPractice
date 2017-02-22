export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
    console.log('here')
      return undefined;
    } else {
      return JSON.parse(serializedState);
    }
  } catch(err) {
    return undefined
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(err) {
    console.log('problem with serializing state to local storage')
  }
}