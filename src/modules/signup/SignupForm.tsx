import React from 'react';

import {Input} from '@rneui/themed';
import {FormikProps} from 'formik';

const SignupForm = (props: FormikProps<UserModel>) => {
  const {setFieldValue, values} = props;
  const {firstName, lastName, email, password} = values;

  return (
    <React.Fragment>
      <Input
        placeholder="First Name"
        onChangeText={value => setFieldValue('firstName', value)}
        autoCapitalize="none"
        value={firstName}
      />

      <Input
        placeholder="Last Name"
        onChangeText={value => setFieldValue('lastName', value)}
        autoCapitalize="none"
        value={lastName}
      />

      <Input
        placeholder="Email"
        onChangeText={value => setFieldValue('email', value)}
        value={email}
        inputMode="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoCapitalize="none"
      />

      <Input
        placeholder="Password"
        onChangeText={value => setFieldValue('password', value)}
        autoCapitalize="none"
        value={password}
        secureTextEntry
      />
    </React.Fragment>
  );
};

export default SignupForm;
