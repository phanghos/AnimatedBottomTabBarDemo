export const enum Screen {
  Home = 'HOME_SCREEN',
  Notifications = 'NOTIFICATIONS_SCREEN',
  Profile = 'PROFILE_SCREEN',
}

export type ScreenValue = typeof Screen[keyof typeof Screen];
