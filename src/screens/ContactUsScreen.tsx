import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { CustomButton, Spacer } from '../components';
import { globalPalette, globalStyles } from '../themes';
import { submitContactUs } from '../services';
import { IFormContactUs } from '../types';
import { Alert } from '../util';
import { EMAIL_REGEX, PHONE_REGEX } from '../constants/regex';

export const ContactUs = () => {
  const { control, handleSubmit, reset } = useForm<IFormContactUs>({
    defaultValues: {
      name: '',
      surname: '',
      phone: '',
      email: '',
      message: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<IFormContactUs> = async (data) => {
    const res = await submitContactUs(data);

    if (res.request.status >= 200 && res.request.status <= 399) {
      Alert('Your feedback has been submitted.');
      reset();
    } else {
      Alert('Error. Please try again..');
    }
  };

  const onError = (error: any) => {
    const errorMsg = Object.keys(error)
      .reduce(
        (a: string, field: string) => (error[field] ? a + '\n' + error[field].message : a),
        ''
      )
      .trim();

    Alert('Error. Fix the following errors:\n\n' + errorMsg);
  };

  const handleCancel = () => {
    Alert('Pressed cancel.');
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <View style={styles.ContactFormView}>
            <Controller
              control={control}
              rules={{ required: { value: true, message: 'Name is required.' } }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Name"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  style={globalStyles.textInputLine}
                />
              )}
              name="name"
            />

            <Controller
              control={control}
              rules={{ required: { value: true, message: 'Surname is required' } }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Last Name"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  style={globalStyles.textInputLine}
                />
              )}
              name="surname"
            />

            <Controller
              control={control}
              rules={{
                pattern: { value: PHONE_REGEX, message: 'Invalid phone number' },
                required: { value: true, message: 'Phone is required' },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Telephone"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  style={globalStyles.textInputLine}
                  keyboardType="phone-pad"
                />
              )}
              name="phone"
            />

            <Controller
              control={control}
              rules={{
                pattern: { value: EMAIL_REGEX, message: 'Invalid email' },
                required: { value: true, message: 'Email is required' },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Email"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  style={globalStyles.textInputLine}
                  keyboardType="email-address"
                />
              )}
              name="email"
            />

            <Controller
              control={control}
              rules={{ required: { value: true, message: 'Message is required.' } }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  multiline
                  numberOfLines={4}
                  placeholder="Message"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  style={styles.textInputLarge}
                />
              )}
              name="message"
            />
            <Spacer />
            <CustomButton
              label="Send"
              theme="primary"
              onPress={handleSubmit(onSubmit, (error) => onError(error))}
            />
            <CustomButton label="Cancel" theme="secondary" onPress={() => handleCancel()} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ContactFormView: {
    marginHorizontal: 18,
    marginTop: 4,
    marginBottom: 20,
  },
  textInputLarge: {
    height: 100,
    borderWidth: 2,
    borderColor: globalPalette.tertiary,
    borderRadius: 6,
    paddingHorizontal: 12,
    marginTop: 16,
    marginBottom: 8,
  },
});
