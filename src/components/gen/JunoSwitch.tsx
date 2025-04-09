import { ReactNode } from 'react';
import { Box, Stack, Switch, Text } from '@mantine/core';

type SectionElement = ReactNode | string;

export interface JunoSwitchProps {
  sections?: {
    topSection?: SectionElement;
    bottomSection?: SectionElement;
  };
}

const JunoSwitch = ({ sections }: JunoSwitchProps) => {
  return (
    <Stack align="center">
      <JunoSwitchSection>{sections?.topSection}</JunoSwitchSection>
      <Switch style={{ rotate: '90deg' }} />
      <JunoSwitchSection>{sections?.bottomSection}</JunoSwitchSection>
    </Stack>
  );
};

const JunoSwitchSection = ({ children }: { children?: SectionElement }) => {
  return <Box>{typeof children === 'string' ? <Text size="sm">{children}</Text> : children}</Box>;
};

export default JunoSwitch;
