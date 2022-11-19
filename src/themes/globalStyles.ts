import { StyleSheet } from 'react-native';

/* Text Pallete */
const textPalette = {
  primary: '#FFFFFF',
  secondary: '#173E87',
  tertiary: '#212529',
  error: '#FF0000',
};

/* Background Palette */
const backgroundPalette = {
  primary: '#173e87',
  secondary: '#f5f5f5',
  tertiary: '#DEE2E6',
  outline: 'grey',
  white: '#fff',
  black: '#000',
  whiteTransparent: 'rgba(255,255,255,0.875)',
};

/* All Colors Palette */
export const globalPalette = {
  text: textPalette,
  ...backgroundPalette,
};

export const globalStyles = StyleSheet.create({
  textInputLine: {
    height: 40,
    borderBottomWidth: 2,
    borderColor: globalPalette.outline,
    borderBottomColor: globalPalette.tertiary,
    paddingHorizontal: 12,
    marginTop: 4,
    marginBottom: 2,
  },
});
