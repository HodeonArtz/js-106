import { ReactNode } from 'react';
import { Box, Stack, Switch } from '@mantine/core';

export interface JunoSwitchProps {
  sections?: {
    topSection?: ReactNode | string;
    bottomSection?: ReactNode | string;
  };
}

const JunoSwitch = ({ sections }: JunoSwitchProps) => {
  return (
    <Stack>
      <Box>{sections?.topSection}</Box>
      <Switch style={{ rotate: '90deg' }} />
      <Box>{sections?.bottomSection}</Box>
    </Stack>
  );
};

export default JunoSwitch;
