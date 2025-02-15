import { ReactNode } from 'react';
import { Stack, Text } from '@mantine/core';

interface Props {
  title: string;
  children: ReactNode;
}

const ModuleBox = ({ title, children }: Props) => {
  return (
    <Stack align="stretch" gap="xs">
      <Stack bg="red" align="center">
        <Text size="xl" fw="bold">
          {title}
        </Text>
      </Stack>
      <Stack align="center" p="xs">
        {children}
      </Stack>
    </Stack>
  );
};

export default ModuleBox;
