import React, { type FC, type ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import Modal, { type ModalProps } from 'react-native-modal';
import { useTheme } from '../../hooks';
import { screenHeight } from '../../theme';
import styleSheet from './CustomModalStyles';
import type { CustomModalPropsType } from './CustomModalTypes';

/**
 * The custom modal component.
 * @param {CustomModalPropsType} props - the props for the custom modal component.
 * @param {StyleProp<ViewStyle>} [props.modalStyle] - Optional styles for the modal.
 * @param {StyleProp<ViewStyle>} [props.contentContainerStyle] - Optional styles for the content container.
 * @param {() => void} [props.onBackdropPress] - Optional callback function invoked when the backdrop is pressed.
 * @param {boolean} props.isVisible - Whether the modal is visible or not.
 * @returns {React.ReactElement} A React Element.
 */
const CustomModal: FC<CustomModalPropsType & Partial<ModalProps>> = ({
  modalStyle,
  contentContainerStyle,
  onBackdropPress = () => {},
  isVisible,
  children,
  ...rest
}): ReactElement => {
  const { styles } = useTheme(styleSheet);

  return (
    <Modal
      useNativeDriverForBackdrop
      avoidKeyboard
      statusBarTranslucent
      isVisible={isVisible}
      deviceHeight={screenHeight}
      style={StyleSheet.flatten([styles.modalStyle, modalStyle])}
      onBackdropPress={onBackdropPress}
      {...rest}
    >
      <View style={StyleSheet.flatten([styles.contentContainerStyle, contentContainerStyle])}>
        {children}
      </View>
    </Modal>
  );
};

export default CustomModal;
