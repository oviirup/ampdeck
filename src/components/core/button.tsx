import { tw } from '@/components/utils';
import { isFunction } from '@/lib/assertions';
import { cva, VariantProps } from 'class-variance-authority';
import RN, { Pressable, Text } from 'react-native';

export const buttonBaseVariant = cva('flex-row items-center justify-center gap-2 overflow-hidden rounded-lg', {
  variants: {
    intent: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      outline: 'border border-border bg-secondary/25',
      ghost: '',
    },
    size: {
      base: 'h-10 px-4',
      sm: 'h-9 px-2',
      lg: 'h-12 px-8',
      xl: 'h-14 px-10',
    },
  },
  defaultVariants: {
    intent: 'ghost',
    size: 'base',
  },
});

export const buttonLabelVariants = cva('text-center font-medium', {
  variants: {
    intent: {
      primary: 'text-primary-fg',
      secondary: 'text-secondary-fg',
      outline: 'text-secondary-fg',
      ghost: 'text-foreground',
    },
    size: {
      base: 'text-sm',
      sm: 'text-sm',
      lg: 'text-base',
      xl: 'text-base',
    },
  },
  defaultVariants: {
    intent: 'ghost',
    size: 'base',
  },
});

type ButtonRef = React.Ref<RN.View>;

type ButtonProps = RN.PressableProps & {
  /** Button with only icon */
  icon?: boolean;
  /** Inbuilt label text */
  label?: string;
  /** Inbuilt label style */
  labelStyle?: RN.StyleProp<RN.TextStyle>;
  /** Button ref */
  ref?: ButtonRef;
} & VariantProps<typeof buttonBaseVariant>;

function Button({
  icon = false,
  intent = 'ghost',
  size = 'base',
  style,
  label,
  labelStyle,
  disabled,
  children,
  ref,
  ...buttonProps
}: ButtonProps) {
  const baseRippleStyle = {
    borderless: false,
    color: tw.color('gray-500/20'),
    foreground: true,
  };
  return (
    <Pressable
      {...buttonProps}
      ref={ref}
      style={(state) => [
        tw.style(buttonBaseVariant({ intent, size }), disabled && 'opacity-75', icon && 'p-0'),
        isFunction(style) ? style(state) : style,
      ]}
      android_ripple={{ ...baseRippleStyle, ...buttonProps.android_ripple }}>
      {(state) => (
        <Text style={[tw.style(buttonLabelVariants({ intent, size })), labelStyle]}>
          {label ? label : isFunction(children) ? children(state) : children}
        </Text>
      )}
    </Pressable>
  );
}

namespace Button {
  export type Props = ButtonProps;
}

export { Button };
