import { ReactNode } from 'react';
import { Box, Stack, Switch, Text } from '@mantine/core';
import ThumbLine from '../styling/ThumbLine';
import thumbClasses from './JunoSwitch.module.css';

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
      <Switch
        classNames={thumbClasses}
        radius="xs"
        style={{ rotate: '90deg' }}
        thumbIcon={<ThumbLine style={{ rotate: '90deg' }} />}
      />
      <JunoSwitchSection>{sections?.bottomSection}</JunoSwitchSection>
    </Stack>
  );
};

const JunoSwitchSection = ({ children }: { children?: SectionElement }) => {
  return <Box>{typeof children === 'string' ? <Text size="sm">{children}</Text> : children}</Box>;
};

export default JunoSwitch;
