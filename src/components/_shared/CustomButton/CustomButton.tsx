import { Pressable, StyleSheet, Text } from 'react-native';
import { FC } from 'react';
import { globalPalette } from '../../../themes';

interface ButtonProps {
  theme?: 'primary' | 'secondary';
  label: string;
  onPress: () => void;
}

export const CustomButton: FC<ButtonProps> = ({
  theme = 'primary',
  label = 'New button',
  onPress,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        pressed ? { opacity: 0.8 } : {},
        theme === 'primary'
          ? { ...styles.btn, ...styles.btnPrimary }
          : { ...styles.btn, ...styles.btnSecondary },
      ]}
      onPress={onPress}
    >
      <Text
        style={
          theme === 'primary'
            ? { ...styles.btnText, ...styles.btnTextPrimary }
            : { ...styles.btnText, ...styles.btnTextSecondary }
        }
      >
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginBottom: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    textAlign: 'center',
    padding: 12,
  },
  btnPrimary: {
    backgroundColor: globalPalette.primary,
  },
  btnSecondary: {
    backgroundColor: globalPalette.secondary,
    borderWidth: 1,
    borderColor: globalPalette.primary,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  btnTextPrimary: {
    color: globalPalette.text.primary,
  },
  btnTextSecondary: {
    color: globalPalette.text.secondary,
  },
});
