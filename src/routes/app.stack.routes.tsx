import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Clients} from '../screens/Clients';
import {ClientDetails} from '../screens/ClientDetails';
import {BankSlips} from '../screens/BankSlips';

import {RootStackParamsList} from './types';

const {Navigator, Screen, Group} =
  createNativeStackNavigator<RootStackParamsList>();

export const ClientsStackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Group>
        <Screen name="Clients" component={Clients} />
        <Screen name="ClientDetails" component={ClientDetails} />
        <Screen name="BankSlips" component={BankSlips} />
      </Group>
    </Navigator>
  );
};
