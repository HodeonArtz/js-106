import { ReactNode } from 'react';
import { Group, GroupProps } from '@mantine/core';

export interface JunoSwitchContainerProps extends GroupProps {
  children?: ReactNode;
}

const JunoSwitchContainer = ({ children, ...props }: JunoSwitchContainerProps) => {
  return <Group {...props}>{children}</Group>;
};

export default JunoSwitchContainer;
