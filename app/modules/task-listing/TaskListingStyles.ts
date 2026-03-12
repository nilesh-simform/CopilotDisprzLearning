import { StyleSheet } from 'react-native';
import { Colors, type ThemeMode } from '../../theme';

/**
 * Styles for the TaskListing module.
 * @param {ThemeMode} theme - The current theme mode.
 * @returns {StyleSheet} The styles for the TaskListing module.
 */
const styleSheet = (theme: ThemeMode) => {
  const colors = Colors[theme];

  return StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      flex: 1
    },
    contentContainer: {
      padding: 16
    },
    emptyContainer: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      padding: 32
    },
    emptyText: {
      color: colors.gray,
      fontSize: 16,
      marginTop: 16,
      textAlign: 'center'
    },
    errorContainer: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      padding: 32
    },
    errorText: {
      color: colors.error,
      fontSize: 16,
      marginBottom: 16,
      textAlign: 'center'
    },
    loadingContainer: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
    },
    retryButton: {
      backgroundColor: colors.primary,
      borderRadius: 8,
      paddingHorizontal: 24,
      paddingVertical: 12
    },
    retryButtonText: {
      color: colors.white,
      fontSize: 16,
      fontWeight: '600'
    },
    taskItemSeparator: {
      height: 12
    }
  });
};

export default styleSheet;
