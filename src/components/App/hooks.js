import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import selectors from '../../store/selector';
import action from '../../store/actionTypes';

export const useApp = () => {
  const dispatch = useDispatch();
  const testValue = useSelector(selectors.selectorsTest.getTestValue);

  const [newValue, setNewValue] = useState('');

  const onChangeNewValue = (event) => {
    const value = event?.target?.value || '';
    setNewValue(value);
  };

  const onChangeTestValue = () => {
    dispatch(action.changeTestValue(newValue));
  };

  return {
    testValue,
    onChangeNewValue,
    onChangeTestValue,
  };
};

export default useApp;
