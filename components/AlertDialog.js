import React, { Fragment } from 'react';
import { Alert } from 'react-native';

const AlertDialog = (props) => {
  const { alertButtons, title } = props;
  return <Fragment>{Alert.alert(``, title, alertButtons, { cancelable: false })}</Fragment>;
};

export default AlertDialog;
