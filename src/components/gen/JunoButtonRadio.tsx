import { Box, Radio, Stack, Text } from '@mantine/core';
import JunoButton from './JunoButton';

interface Props {
  label?: string;
  value: string | number | readonly string[] | undefined;
  isChecked?: boolean;
}

const JunoButtonRadio = ({ label, value, isChecked = false }: Props) => {
  return (
    <Radio.Card h="100%" w="fit-content" bd={0} value={`${value}`}>
      <Stack align="center" h="100%" justify="center" gap="sm">
        <Text size="xs">{label}</Text>
        <Stack align="center" justify="center">
          <Box pos="relative">
            <Radio.Indicator
              size="xs"
              color="red"
              iconColor="red"
              className={`${isChecked && 'drop-shadow-[0_0px_7px_rgba(224,49,49,0.5)]'}`}
            />
          </Box>
          <JunoButton />
        </Stack>
      </Stack>
    </Radio.Card>
  );
};

export default JunoButtonRadio;
