import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, scale, type ThemeMode } from '../../theme';

/**
 * Create a custom style sheet for the given theme.
 * @param {StyleSheetOption} theme - The theme mode to use for generating the style sheet.
 * @returns A custom style sheet that can be injected into the component.
 */
const styles = (theme: ThemeMode) =>
  StyleSheet.create({
    ...ApplicationStyles(theme),
    contentContainerStyle: {
      backgroundColor: Colors[theme]?.white,
      borderRadius: scale(16),
      padding: scale(16)
    },
    modalStyle: {
      justifyContent: 'center'
    }
  });

export default styles;
