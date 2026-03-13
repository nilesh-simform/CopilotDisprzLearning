import type { StyleProp, ViewStyle } from 'react-native';

export interface CustomModalPropsType {
  modalStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  onBackdropPress?: () => void;
  isVisible: boolean;
  children: React.ReactNode;
}
