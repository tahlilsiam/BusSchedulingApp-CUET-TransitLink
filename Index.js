import 'react-native-gesture-handler';
import { View, Text, Image, Pressable } from 'react-native';
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  DrawerItemList,
  createDrawerNavigator,
  DrawerItem,
} from '@react-navigation/drawer';
import User from './src/assets/user.png';
import Schedule from './src/Schedule';
import Notices from './src/Notices';
import Profile from './src/Profile';

const Drawer = createDrawerNavigator();

export default function Index() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 200,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomColor: '#f4f4f4',
                borderBottomWidth: 1,
              }}
            >
              <Image
                source={User}
                style={{
                  height: 130,
                  width: 130,
                  borderRadius: 65,
                }}
              />
              <Text
                style={{
                  fontSize: 22,
                  marginVertical: 6,
                  fontWeight: 'bold',
                  color: '#111',
                }}
              >
                Estiak Sazid
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#111',
                }}
              >
                Student
              </Text>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 250,
        },
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerLabelStyle: {
          color: '#111',
        },
      }}
    >
      <Drawer.Screen
        name="Schedule"
        options={{
          drawerLabel: 'Schedule',
          title: 'Schedule',
          drawerIcon: () => (
            <MaterialIcons name="schedule" size={20} color="#808080" />
          ),
        }}
        component={Schedule}
      />
      <Drawer.Screen
        name="Notices"
        options={{
          drawerLabel: 'Notices',
          title: 'Notice Board',
          drawerIcon: () => (
            <MaterialIcons
              name="notifications-none"
              size={20}
              color="#808080"
            />
          ),
        }}
        component={Notices}
      />
      {/* <Drawer.Screen
        name="Comments"
        options={{
          drawerLabel: 'Commnents',
          title: 'Commnents',
          drawerIcon: () => (
            <FontAwesome name="comments-o" size={20} color="#808080" />
          ),
        }}
        component={Comments}
      /> */}

      <Drawer.Screen
        name="Profile"
        options={{
          drawerLabel: 'Profile',
          title: 'Profile',
          drawerIcon: () => (
            <FontAwesome name="user-circle-o" size={20} color="#808080" />
          ),
        }}
        component={Profile}
      />

      {/* <Drawer.Screen
        name="Settings"
        options={{
          drawerLabel: 'Settings',
          title: 'Settings',
          drawerIcon: () => (
            <SimpleLineIcons name="settings" size={20} color="#808080" />
          ),
        }}
        component={Settings}
      /> */}
    </Drawer.Navigator>
  );
}
