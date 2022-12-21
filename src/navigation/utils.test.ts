import { Screen } from './types';
import { toBottomBarRouteName } from './utils';

describe('Navigation Utils', () => {
  describe('toBottomTabRouteName', () => {
    describe('when screen is defined', () => {
      it('returns the expected value', () => {
        const expected = 'Home';

        expect(toBottomBarRouteName(Screen.Home)).toEqual(expected);
      });
    });

    describe('when screen is not defined', () => {
      it('returns an empty string', () => {
        const expected = '';

        expect(toBottomBarRouteName(Screen.Home, {})).toEqual(expected);
      });
    });
  });
});
