enum Tokens {
  fontFamily = 'Nunito',
  backgroundBase = '#121212',
  backgroundPress = '#000000',
  colorTextBase = '#FFFFFF',
}

interface ITokens {
  fontFamily: Tokens.fontFamily;
  backgroundBase: Tokens.backgroundBase;
  backgroundPress: Tokens.backgroundPress;
  colorTextBase: Tokens.colorTextBase;
}

export const tokens: ITokens = {
  fontFamily: Tokens.fontFamily,
  backgroundBase: Tokens.backgroundBase,
  backgroundPress: Tokens.backgroundPress,
  colorTextBase: Tokens.colorTextBase,
};
