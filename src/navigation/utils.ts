import type { ScreenValue } from './types';

const bottomTabBarRoutesMap: Record<ScreenValue, string> = {
  HOME_SCREEN: 'Home',
  NOTIFICATIONS_SCREEN: 'Notifications',
  PROFILE_SCREEN: 'Profile',
};

export const toBottomBarRouteName = (
  screen: ScreenValue,
  routesMap = bottomTabBarRoutesMap,
) => routesMap[screen] ?? '';
