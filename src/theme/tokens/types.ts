export enum Tokens {
  fontFamily = 'Nunito',
  backgroundBase = '#121212',
  backgroundPress = '#000000',
  backgroundSkeleton = '#272727',
  colorTextBase = '#FFFFFF',
  colorTextSubdued = '#a7a7a7',
}

export interface ITokens {
  fontFamily: Tokens.fontFamily;
  backgroundBase: Tokens.backgroundBase;
  backgroundPress: Tokens.backgroundPress;
  colorTextBase: Tokens.colorTextBase;
  backgroundSkeleton: Tokens.backgroundSkeleton;
  colorTextSubdued: Tokens.colorTextSubdued;
}
