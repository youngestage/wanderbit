import { Keyboard, TouchableWithoutFeedback, View, ViewProps } from 'react-native';

interface KeyboardDismissViewProps extends ViewProps {
  children: React.ReactNode;
}

export function KeyboardDismissView({ children, style, ...props }: KeyboardDismissViewProps) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={style} {...props}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
} 