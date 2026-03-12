import { type StyleProp, type ViewStyle } from 'react-native';

/**
 * Enum representing different severity levels for tasks.
 */
export enum TaskSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

/**
 * Interface representing a task item's data.
 */
export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: Date | string;
  severity: TaskSeverity;
}

/**
 * Props for the TaskItem component.
 */
export interface TaskItemProps {
  task: Task;
  onPress?: (task: Task) => void;
  style?: StyleProp<ViewStyle>;
}
