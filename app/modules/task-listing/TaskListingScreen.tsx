import React, { type FC, useCallback } from 'react';
import { FlatList, RefreshControl, View, Pressable } from 'react-native';
import { TaskItem } from '../../components';
import { Spinner } from '../../components/spinner';
import { type Task } from '../../components/task-item/TaskItemTypes';
import { Text } from '../../components/text';
import { useTheme } from '../../hooks';
import styleSheet from './TaskListingStyles';
import { type TaskListingProps } from './TaskListingTypes';
import { useTaskListing } from './useTaskListing';

/**
 * TaskListingScreen component displays a list of tasks.
 * Uses FlatList for optimal performance and TaskItem component for rendering individual tasks.
 * @param {TaskListingProps} props - The props for the TaskListing component.
 * @returns {React.ReactElement} A React element displaying the task list.
 */
const TaskListingScreen: FC<TaskListingProps> = ({ onTaskPress }): React.ReactElement => {
  const { styles } = useTheme(styleSheet);
  const { tasks, isLoading, error, refreshTasks } = useTaskListing();

  /**
   * Handle task item press.
   */
  const handleTaskPress = useCallback(
    (task: Task) => {
      onTaskPress?.(task);
    },
    [onTaskPress]
  );

  /**
   * Render individual task item.
   */
  const renderTaskItem = useCallback(
    ({ item }: { item: Task }) => <TaskItem task={item} onPress={handleTaskPress} />,
    [handleTaskPress]
  );

  /**
   * Extract unique key for each task.
   */
  const keyExtractor = useCallback((item: Task) => item.id, []);

  /**
   * Render separator between task items.
   */
  const renderSeparator = useCallback(() => <View style={styles.taskItemSeparator} />, [styles]);

  /**
   * Render empty state when no tasks are available.
   */
  const renderEmptyComponent = useCallback(() => {
    if (isLoading) {
      return null;
    }

    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>📝</Text>
        <Text style={styles.emptyText}>No tasks available</Text>
      </View>
    );
  }, [isLoading, styles]);

  /**
   * Render error state.
   */
  if (error && !isLoading) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>❌</Text>
        <Text style={styles.errorText}>{error}</Text>
        <Pressable style={styles.retryButton} onPress={refreshTasks}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </Pressable>
      </View>
    );
  }

  /**
   * Render loading state.
   */
  if (isLoading && tasks.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <Spinner />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={renderEmptyComponent}
        contentContainerStyle={tasks.length > 0 ? styles.contentContainer : { flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={isLoading && tasks.length > 0} onRefresh={refreshTasks} />
        }
      />
    </View>
  );
};

export default TaskListingScreen;
