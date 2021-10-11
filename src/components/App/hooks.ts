import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import selectors from '../../store/test/selectors';
import { changeTestValue } from '../../store/test/actions';

export const useApp = () => {
  const dispatch = useDispatch();
  const testValue = useSelector(selectors.getTestValue);

  const [newValue, setNewValue] = useState('');

  const onChangeNewValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event?.target?.value || '';
    setNewValue(value);
  };

  const onChangeTestValue = () => {
    dispatch(changeTestValue(newValue));
  };

  return {
    testValue,
    onChangeNewValue,
    onChangeTestValue,
  };
};

export default useApp;
