import { Group, Stack, Text } from '@mantine/core';
import JunoSlider from '@/components/gen/JunoSlider';

export type SliderController = {
  label: string;
};

interface Props {
  controllers: SliderController[];
}

const JunoSliderGroup = ({ controllers }: Props) => {
  return (
    <Group align="end" gap={0}>
      {controllers.map(({ label }) => {
        return (
          <Stack align="center">
            <Text size="xs" fw="normal" w={42} ta="center" lh="1.2">
              {label.toUpperCase()}
            </Text>
            <JunoSlider />
          </Stack>
        );
      })}
    </Group>
  );
};

export default JunoSliderGroup;
