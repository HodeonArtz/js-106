import { Group, Stack, Text } from '@mantine/core';
import JunoButtonRadio from '@/components/gen/JunoButtonRadio';

export type Data = {
  label: string;
  value?: string | number;
};

interface Props {
  data: Data[];
  groupLabel?: string;
}

const JunoButtonGroup = ({ data, groupLabel }: Props) => {
  return (
    <Stack align="center">
      <Text size="xs" h={28}>
        {groupLabel?.toUpperCase()}
      </Text>
      <Group h="100%">
        <Group h="100%" gap={4}>
          {data.map(({ label, value }) => {
            return <JunoButtonRadio key={value} value={value} label={label} />;
          })}
        </Group>
      </Group>
    </Stack>
  );
};

export default JunoButtonGroup;
