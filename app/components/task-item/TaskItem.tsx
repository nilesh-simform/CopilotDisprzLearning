import React, { useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { useTheme } from '../../hooks';
import { Text } from '../text';
import { getSeverityColors, taskItemStyles } from './TaskItemStyles';
import { type TaskItemProps } from './TaskItemTypes';

/**
 * TaskItem component displays a task with its title, description, due date, and severity level.
 * @param {TaskItemProps} props - The props for the TaskItem component.
 * @param {Task} props.task - The task data to display.
 * @param {Function} [props.onPress] - Optional callback when the task item is pressed.
 * @param {StyleProp<ViewStyle>} [props.style] - Additional custom styles for the container.
 * @returns {JSX.Element} A styled TaskItem component.
 */
const TaskItem = ({ task, onPress, style }: TaskItemProps) => {
  const { styles, theme } = useTheme(taskItemStyles);

  // Get severity-specific colors
  const severityColors = useMemo(
    () => getSeverityColors(task.severity, theme),
    [task.severity, theme]
  );

  // Format the due date
  const formattedDueDate = useMemo(() => {
    const date = typeof task.dueDate === 'string' ? new Date(task.dueDate) : task.dueDate;
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }, [task.dueDate]);

  const handlePress = () => {
    onPress?.(task);
  };

  const content = (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text variant="title" style={styles.title}>
            {task.title}
          </Text>
        </View>
        <View
          style={[
            styles.severityBadge,
            {
              backgroundColor: severityColors.backgroundColor,
              borderColor: severityColors.borderColor
            }
          ]}
        >
          <Text style={[styles.severityText, { color: severityColors.textColor }]}>
            {task.severity}
          </Text>
        </View>
      </View>

      {task.description ? (
        <Text variant="caption" style={styles.description} numberOfLines={2}>
          {task.description}
        </Text>
      ) : null}

      <View style={styles.footer}>
        <View style={styles.dueDateContainer}>
          <Text style={styles.dueDateIcon}>📅</Text>
          <Text variant="caption" style={styles.dueDate}>
            {formattedDueDate}
          </Text>
        </View>
      </View>
    </View>
  );

  if (onPress) {
    return (
      <Pressable style={({ pressed }) => pressed && styles.pressable} onPress={handlePress}>
        {content}
      </Pressable>
    );
  }

  return content;
};

export default TaskItem;
