import { useState } from 'react';
import { Group, Radio, Stack, Text } from '@mantine/core';
import JunoButtonRadio from '@/components/gen/JunoButtonRadio';

export type RadioController = {
  label: string;
  value: string | number | undefined;
};

interface Props<T extends readonly RadioController[]> {
  controllers: T;
  groupLabel?: string;
  defaultValue: T[number]['value'];
}

const JunoButtonRadioGroup = <T extends readonly RadioController[]>({
  controllers,
  groupLabel,
  defaultValue,
}: Props<T>) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <Stack align="center">
      <Text size="xs">{groupLabel?.toUpperCase()}</Text>
      <Radio.Group
        h="100%"
        name="favoriteFramework"
        defaultValue={`${defaultValue}`}
        value={`${value}`}
        onChange={setValue}
      >
        <Group h="100%" gap={4}>
          {controllers.map((controller) => {
            return (
              <JunoButtonRadio
                key={controller.value}
                {...controller}
                isChecked={value?.toString() === controller.value?.toString()}
              />
            );
          })}
        </Group>
      </Radio.Group>
    </Stack>
  );
};

export default JunoButtonRadioGroup;
