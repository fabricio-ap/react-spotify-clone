import { MappingAlgorithm, OverrideToken } from 'antd/es/theme/interface';
import { AliasToken } from 'antd/es/theme/internal';
import { tokens } from '../tokens/js';

type ComponentsConfig = {
  [key in keyof OverrideToken]?: OverrideToken[key] & {
    algorithm?: boolean | MappingAlgorithm | MappingAlgorithm[];
  };
};

const antTokens: Partial<AliasToken> = {
  fontFamily: tokens.fontFamily,
};

const antComponents: ComponentsConfig = {
  Tooltip: {
    colorBgSpotlight: tokens.backgroundPress,
  },
  Dropdown: {
    colorBgElevated: tokens.backgroundPress,
    colorText: tokens.colorTextBase,
    controlItemBgHover: tokens.backgroundBase,
  },
  Table: {
    headerBg: 'rgba(0, 0, 0, 0)',
    headerSplitColor: 'rgba(0, 0, 0, 0)',
    colorBgContainer: 'rgba(0, 0, 0, 0)',
    rowHoverBg: 'hsla(0, 0%, 100%, .1)',
    headerColor: tokens.colorTextSubdued,
    colorText: tokens.colorTextSubdued,
    padding: 8,
  },
};

export const antTheme = {
  token: antTokens,
  components: antComponents,
};
