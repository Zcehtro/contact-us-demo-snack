import { Alert as NativeAlert } from 'react-native';

export const Alert = (...args: any[]) => {
  NativeAlert.alert('Alerta', ...args);
  Log(true, ...args);
};

export const Log = (inScreen: boolean, ...args: any[]) => {
  inScreen
    ? console.log('%c[DEBUG] %c[IN-SCREEN]', 'color: #FFDA1B', 'color: #00E3FF', ...args)
    : console.log('%c[DEBUG]', 'color: #FFDA1B', ...args);
};
