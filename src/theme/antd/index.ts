import { AliasToken } from 'antd/es/theme/internal';
import { tokens } from '../tokens';

const antTokens: Partial<AliasToken> = {
  fontFamily: tokens.fontFamily,
};

const antComponents = {
  Tooltip: {
    colorBgSpotlight: tokens.backgroundPress,
  },
  Dropdown: {
    colorBgElevated: tokens.backgroundPress,
    colorText: tokens.colorTextBase,
    controlItemBgHover: tokens.backgroundBase,
  },
};

export const antTheme = {
  token: antTokens,
  components: antComponents,
};
