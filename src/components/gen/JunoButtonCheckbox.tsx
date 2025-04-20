import { useState } from 'react';
import { Box, Checkbox, Stack, Text } from '@mantine/core';
import JunoButton from './JunoButton';

interface Props {
  label?: string;
  value: string;
}

const JunoButtonCheckbox = ({ label, value }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox.Card h="100%" w="fit-content" bd={0} value={value}>
      <Stack align="center" h="100%" justify="center" gap="sm">
        <Text size="xs">{label}</Text>
        <Stack align="center" justify="center">
          <Box pos="relative">
            <Checkbox.Indicator
              onChange={() => setIsChecked((checked) => !checked)}
              radius="xl"
              size="xs"
              color="red"
              iconColor="red"
              className={`${isChecked && 'drop-shadow-[0_0px_7px_rgba(224,49,49,0.5)]'}`}
            />
          </Box>
          <JunoButton />
        </Stack>
      </Stack>
    </Checkbox.Card>
  );
};

export default JunoButtonCheckbox;
