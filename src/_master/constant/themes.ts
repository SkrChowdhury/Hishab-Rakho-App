import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const SIZES = {
  h1: 24,
  h2: 20,
  h3: 18,
  p1: 16,
  p2: 14,
  p3: 10,
  width,
  height,
};

export const COLORS = {
  gray: '#1b4332',
  grayLight: '#57cc99',
  placeholder: '#94a3b8',
  white: 'white',
  borderColor: '#cbd5e1',
  borderColorLight: '#e2e8f0',
  borderColorDark: '#475569',
  modalUnderBgColor: '#1b4332',
};

const appTheme = {COLORS, SIZES};

export default appTheme;
