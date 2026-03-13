import type { StyleProp, ViewStyle } from 'react-native';
import type { ReactNode } from 'react';

export interface CustomModalPropsType {
  modalStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  onBackdropPress?: () => void;
  isVisible: boolean;
  children: ReactNode;
}
