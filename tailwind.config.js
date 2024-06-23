import { basePreset, elementPlusPreset, miniprogramBasePreset } from 'tailwind-extensions';
import { isMp, isQuickapp } from '@uni-helper/uni-env';

const presets = [basePreset];
if (isMp || isQuickapp) {
  presets.push(
    elementPlusPreset({
      baseSelectors: [':root', 'page'],
    }),
    miniprogramBasePreset,
  );
} else {
  presets.push(elementPlusPreset());
}

const theme= {};
if (isMp || isQuickapp) theme.screens = {};

const config = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  presets,
  theme,
};

export default config;