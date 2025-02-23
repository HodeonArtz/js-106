import { Button, ButtonProps, PolymorphicComponentProps } from '@mantine/core';

const buttonColors = {
  default: '#F4FCE3',
  cyan: 'cyan',
  orange: '#ffbe0d',
};

interface Props extends PolymorphicComponentProps<'div', ButtonProps> {
  junoColor?: keyof typeof buttonColors;
}

const JunoButton: React.FC<Props> = ({ junoColor = 'default', ...props }) => {
  return <Button component="div" {...props} color={buttonColors[junoColor]} />;
};

export default JunoButton;
