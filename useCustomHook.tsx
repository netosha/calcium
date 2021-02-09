import React from 'react';

let listeners = [];
let state;

const setState = (newState) => {
  state = newState;

  listeners.forEach((l) => l(state));
};

const useCustomHook = () => {
  const newListener = React.useState()[1];
  React.useEffect(() => {
    listeners.push(newListener);
    return () => {
      listeners = listeners.filter((l) => l !== newListener);
    };
  }, []);
  return [state, setState];
};

export default useCustomHook;
