/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, Text } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { bottomTabBarData } from './BottomTabData';
import { StyleComponentBottomTabs } from './StyleComponentBottomTabs';
import { vh } from '../../common/Dimensions';
import StudentDashboard from '../../screens/StudentDashboard';
import SvgIcon from '../../common/SvgIcon';
import { ThemeContext } from '../../common/ThemeProvider';
import { LANGUAGE_ENGLISH, LocalizationContext } from '../../common/LocalizationProvider';

const Tab = createBottomTabNavigator();

function ComponentBottomTabs() {
  const { appTheme, darkMode } = useContext(ThemeContext);
  const styles = StyleComponentBottomTabs();
  const { appLanguage } = useContext(LocalizationContext);
  const english = LANGUAGE_ENGLISH === appLanguage;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ focused }) => {
          const filteredItems = bottomTabBarData.filter((item) => item.name === route.name);
          // const selectedImageMargin = focused ? vh(15) : 0;
          if (filteredItems.length > 0) {
            const darkIconName = focused ? filteredItems[0].iconSelected
              : filteredItems[0].darkIcon;
            const iconName = focused ? filteredItems[0].iconSelected : filteredItems[0].icon;
            const { isFree } = filteredItems[0];
            const tabIcon = darkMode ? darkIconName : iconName;
            // const iconCircle = focused ? filteredItems[0].iconCircle : null;
            return (
              <View>
                <View
                  style={[styles.tabButtonContainer, focused ? styles.activeTabContainer : null]}
                >
                  <Image resizeMode="contain" source={tabIcon} style={styles.iconStyle} />
                </View>
                {isFree && (
                  <View style={styles.freeIconStyle}>
                    <SvgIcon.FreeIcon />
                  </View>
                )}
              </View>
            );
          }
          return null;
        },
        tabBarStyle: {
          height: vh(70),
          backgroundColor: appTheme.PRIMARY_BACKGROUND_01,
          borderTopColor: appTheme.PRIMARY_BACKGROUND_01,
        },
        tabBarLabelStyle: appTheme.TEXT_COLOR_01,
      })}
    >
      {bottomTabBarData.map((item) => {
        const { name, eTitle, tTitle } = item;
        return (
          <Tab.Screen
            key={item.name}
            name={name}
            component={item.component}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarLabel: ({ focused }) => {
                return (
                  <Text
                    style={[
                      styles.textLabel,
                      focused ? { color: appTheme.ASK_DOUBT_PRIMARY_BACKGROUND_07 }
                        : { color: appTheme.TEXT_COLOR_HEADING_09 },
                    ]}
                  >
                    {english ? eTitle : tTitle}
                  </Text>
                );
              },
              header: () => null,
              tabBarActiveTintColor: ColorTheme.GREEN_BG,
              tabBarInactiveTintColor: ColorTheme.dark03,
            }}
          />
        );
      })}
      <Tab.Screen
        name="StudentDashboard"
        component={StudentDashboard}
        options={{
          headerShown: false,
          tabBarItemStyle: { display: 'none' },
        }}
      />
    </Tab.Navigator>
  );
}
export default ComponentBottomTabs;
