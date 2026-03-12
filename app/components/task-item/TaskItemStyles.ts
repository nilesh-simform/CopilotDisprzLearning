import { StyleSheet } from 'react-native';
import { Colors, scale, type ThemeMode } from '../../theme';
import { TaskSeverity } from './TaskItemTypes';

/**
 * Returns severity-specific colors based on the task severity level.
 * @param {TaskSeverity} severity - The severity level of the task.
 * @param {ThemeMode} theme - The current theme mode.
 * @returns An object containing border and background colors for the severity level.
 */
export const getSeverityColors = (severity: TaskSeverity, theme: ThemeMode) => {
  const colors = Colors[theme];

  switch (severity) {
    case TaskSeverity.LOW:
      return {
        borderColor: colors.green,
        backgroundColor: `${colors.green}15`,
        textColor: colors.green
      };
    case TaskSeverity.MEDIUM:
      return {
        borderColor: colors.orange,
        backgroundColor: `${colors.orange}15`,
        textColor: colors.orange
      };
    case TaskSeverity.HIGH:
      return {
        borderColor: colors.red,
        backgroundColor: `${colors.red}15`,
        textColor: colors.red
      };
    case TaskSeverity.CRITICAL:
      return {
        borderColor: colors.error,
        backgroundColor: `${colors.error}15`,
        textColor: colors.error
      };
    default:
      return {
        borderColor: colors.gray,
        backgroundColor: `${colors.gray}15`,
        textColor: colors.gray
      };
  }
};

/**
 * Creates the styles for the TaskItem component based on the current theme.
 * @param {ThemeMode} theme - The current theme mode.
 * @param {boolean} isDark - Whether the current theme is dark.
 * @returns StyleSheet object for the TaskItem component.
 */
export const taskItemStyles = (theme: ThemeMode, isDark?: boolean) => {
  const colors = Colors[theme];

  return StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      borderColor: isDark ? colors.gray : `${colors.gray}30`,
      borderRadius: scale(12),
      borderWidth: 1,
      elevation: 3,
      marginBottom: scale(12),
      padding: scale(16),
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.1,
      shadowRadius: 4
    },
    description: {
      color: colors.gray,
      fontSize: scale(14, true),
      lineHeight: scale(20, true),
      marginBottom: scale(12)
    },
    dueDate: {
      color: colors.gray,
      fontSize: scale(13, true),
      fontWeight: '500'
    },
    dueDateContainer: {
      alignItems: 'center',
      flexDirection: 'row'
    },
    dueDateIcon: {
      color: colors.gray,
      fontSize: scale(14, true),
      marginRight: scale(6)
    },
    footer: {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: scale(8)
    },
    header: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: scale(8)
    },
    pressable: {
      opacity: 0.7
    },
    severityBadge: {
      borderRadius: scale(12),
      borderWidth: 1,
      paddingHorizontal: scale(12),
      paddingVertical: scale(6)
    },
    severityText: {
      fontSize: scale(12, true),
      fontWeight: '600',
      textTransform: 'capitalize'
    },
    title: {
      color: colors.black,
      fontSize: scale(16, true),
      fontWeight: '600',
      marginBottom: scale(4)
    },
    titleContainer: {
      flex: 1,
      marginRight: scale(12)
    }
  });
};
