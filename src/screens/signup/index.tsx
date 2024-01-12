import React from 'react';
import {View, StyleSheet, GestureResponderEvent} from 'react-native';

import {Card, Button, Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import SignupForm from '@modules/signup/SignupForm';
import usePostSignup from '@modules/signup/usePostSignup';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});

const Index = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const formik = usePostSignup();
  const {isSubmitting, handleSubmit} = formik;

  return (
    <View style={styles.view}>
      <Card>
        <Card.Title>Signup</Card.Title>

        <Card.Divider />

        <SignupForm {...formik} />

        <Button
          type="solid"
          loading={isSubmitting}
          onPress={handleSubmit as (e?: GestureResponderEvent) => void}>
          <Icon type="material" name="add-link" color="white" />
          Sign up
        </Button>

        <Button
          title="Login"
          type="outline"
          color="secondary"
          onPress={() => navigation.navigate('login')}
        />
      </Card>
    </View>
  );
};

export default Index;
