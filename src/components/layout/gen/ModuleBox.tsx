import { ReactNode } from 'react';
import { Group, Stack, Text } from '@mantine/core';

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
      <Group justify="center" align="stretch" p="xs" h={205}>
        {children}
      </Group>
    </Stack>
  );
};

export default ModuleBox;
