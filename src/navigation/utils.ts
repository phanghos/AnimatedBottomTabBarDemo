import { ScreenValue } from './types';

type BottomTabRouteMap = Record<ScreenValue, string>;

const bottomTabBarRoutesMap: BottomTabRouteMap = {
  HOME_SCREEN: 'Home',
  NOTIFICATIONS_SCREEN: 'Notifications',
  PROFILE_SCREEN: 'Profile',
};

export const toBottomBarRouteName = (
  screen: ScreenValue,
  routesMap: Partial<BottomTabRouteMap> = bottomTabBarRoutesMap,
) => routesMap[screen] ?? '';
