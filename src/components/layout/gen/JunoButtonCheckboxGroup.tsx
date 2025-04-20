import { Checkbox, Group, Stack, Text } from '@mantine/core';
import JunoButtonCheckbox from '@/components/gen/JunoButtonCheckbox';

export type CheckboxData = {
  label: string;
  value: string;
};

interface Props {
  data: CheckboxData[];
  groupLabel?: string;
}

const JunoButtonCheckboxGroup = ({ data, groupLabel }: Props) => {
  return (
    <Stack align="center">
      <Text size="xs" h={28}>
        {groupLabel?.toUpperCase()}
      </Text>
      <Checkbox.Group>
        <Group h="100%" gap={4}>
          {data.map((checkbox) => {
            return (
              <JunoButtonCheckbox
                label={checkbox.label}
                value={checkbox.value}
                key={`${crypto.randomUUID()}${checkbox.value}`}
              />
            );
          })}
        </Group>
      </Checkbox.Group>
    </Stack>
  );
};

export default JunoButtonCheckboxGroup;
