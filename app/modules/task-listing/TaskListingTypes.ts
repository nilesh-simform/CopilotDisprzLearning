import { type Task } from '../../components/task-item/TaskItemTypes';

/**
 * Props for the TaskListing component.
 */
export interface TaskListingProps {
  onTaskPress?: (task: Task) => void;
}

/**
 * State interface for TaskListing module.
 */
export interface TaskListingState {
  tasks: Task[];
  isLoading: boolean;
  error: string | null;
}
