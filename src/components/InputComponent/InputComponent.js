import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {LIGHTTHEME} from '../../contants';
import styles from './styles';
import Theme from '../../theme';

const InputComponent = ({
  label,
  placeholder,
  onChangeText,
  keyboardType,
  inputStyle = {},
  secureTextEntry,
  value,
  onBlur
}) => {
  return (
    <View>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        allowFontScaling
        selectionColor={LIGHTTHEME.HOMEPAGE_PRIMARY}
        style={{...styles.inputStyle, ...inputStyle}}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        onBlur={onBlur}
      />
    </View>
  );
};
const styless = StyleSheet.create({
  inputStyle: {
    borderBottomWidth: 1,
  },
});
export default InputComponent;
