import { useCallback, useEffect, useState } from 'react';
import { type Task, TaskSeverity } from '../../components/task-item/TaskItemTypes';
import { type TaskListingState } from './TaskListingTypes';

/**
 * Custom hook for TaskListing module logic.
 * Manages task data fetching, loading state, and error handling.
 * @returns {TaskListingState & { refreshTasks: () => void }} - The task listing state and refresh function.
 */
export const useTaskListing = (): TaskListingState & { refreshTasks: () => void } => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetch tasks from the API or data source.
   * This is a mock implementation that should be replaced with actual API calls.
   */
  const fetchTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Mock API call - Replace this with actual API call
      await new Promise<void>((resolve) => setTimeout(resolve, 1000));

      // Mock task data
      const mockTasks: Task[] = [
        {
          id: '1',
          title: 'Complete project documentation',
          description: 'Finish writing the project documentation for the new feature',
          dueDate: new Date(2026, 2, 15),
          severity: TaskSeverity.HIGH
        },
        {
          id: '2',
          title: 'Review pull requests',
          description: 'Review and approve pending pull requests from team members',
          dueDate: new Date(2026, 2, 12),
          severity: TaskSeverity.MEDIUM
        },
        {
          id: '3',
          title: 'Update dependencies',
          description: 'Update project dependencies to latest stable versions',
          dueDate: new Date(2026, 2, 20),
          severity: TaskSeverity.LOW
        },
        {
          id: '4',
          title: 'Fix critical bug',
          description: 'Fix the critical bug in the authentication module',
          dueDate: new Date(2026, 2, 11),
          severity: TaskSeverity.CRITICAL
        },
        {
          id: '5',
          title: 'Implement new feature',
          description: 'Implement the new task management feature as per requirements',
          dueDate: new Date(2026, 2, 18),
          severity: TaskSeverity.HIGH
        }
      ];

      setTasks(mockTasks);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch tasks';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Refresh tasks list.
   */
  const refreshTasks = useCallback(() => {
    fetchTasks();
  }, [fetchTasks]);

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return {
    tasks,
    isLoading,
    error,
    refreshTasks
  };
};
