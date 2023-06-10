import { StyleSheet } from 'react-native';

// Define some font families
export const FONT_FAMILY_REGULAR = 'OpenSans-Regular';
export const FONT_FAMILY_BOLD = 'OpenSans-Bold';
export const FONT_FAMILY_ITALIC = 'OpenSans-Italic';

// Define some font weights
export const FONT_WEIGHT_LIGHT = '300';
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';

// Define some font sizes for headings
export const HEADING_1 = StyleSheet.create({
  fontSize: 32,
  lineHeight: 40,
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
});

export const HEADING_2 = StyleSheet.create({
  fontSize: 24,
  lineHeight: 32,
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
});

export const HEADING_3 = StyleSheet.create({
  fontSize: 20,
  lineHeight: 28,
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
});

// Define some font sizes for body text
export const BODY_1 = StyleSheet.create({
  fontSize: 16,
  lineHeight: 24,
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
});

export const BODY_2 = StyleSheet.create({
  fontSize: 14,
  lineHeight: 20,
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
});

// Define some font sizes for captions and labels
export const CAPTION = StyleSheet.create({
  fontSize: 12,
  lineHeight: 16,
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
});

export const LABEL = StyleSheet.create({
  fontSize: 10,
  lineHeight: 12,
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_LIGHT,
});