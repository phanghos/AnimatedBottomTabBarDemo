import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import type { BottomTabBarProps as ReactNavigationBottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { ScreenValue } from '@app/navigation/types';
import { toBottomBarRouteName } from '@app/navigation/utils';
import TabBarIndicator from './TabBarIndicator';
import TabBarItem from './TabBarItem';

const { width } = Dimensions.get('window');

type BottomTabBarProps = ReactNavigationBottomTabBarProps;

const BottomTabBar = ({
  state: { routeNames, index: selectedTab },
  navigation,
}: BottomTabBarProps) => {
  const tabWidth = width / routeNames.length;
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(tabWidth * selectedTab) }],
  }));
  const { bottom } = useSafeAreaInsets();

  return (
    <>
      <TabBarIndicator
        tabCount={routeNames.length}
        animatedStyle={animatedStyle}
      />
      <View style={[styles.tabsContainer, { paddingBottom: bottom }]}>
        {routeNames.map((routeName, index) => (
          <TabBarItem
            key={routeName}
            title={toBottomBarRouteName(routeName as ScreenValue)}
            isSelected={selectedTab === index}
            onPress={() => navigation.navigate(routeName)}
          />
        ))}
      </View>
    </>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  tabsContainer: { flexDirection: 'row' },
});
