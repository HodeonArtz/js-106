import { Button, ButtonProps, PolymorphicComponentProps } from '@mantine/core';

const buttonColors = {
  default: '#F4FCE3',
  cyan: 'cyan',
  orange: '#ffbe0d',
};

interface Props extends PolymorphicComponentProps<'button', ButtonProps> {
  junoColor?: keyof typeof buttonColors;
}

const JunoButton: React.FC<Props> = ({ junoColor = 'default', ...props }) => {
  return <Button {...props} color={buttonColors[junoColor]} />;
};

export default JunoButton;
