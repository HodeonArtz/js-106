import { Group, Stack, Text } from '@mantine/core';
import JunoSlider from '@/components/gen/JunoSlider';
import { SLIDER_HEIGHT, SLIDER_PADDING } from '@/components/Sizes';

export type SliderController = {
  label: string;
};

interface Props {
  controllers: SliderController[];
}

const JunoSliderGroup = ({ controllers }: Props) => {
  return (
    <Group align="end" justify="center" gap={0} pos="relative">
      <Lines />
      {controllers.map(({ label }, i) => {
        return (
          <Stack align="center" key={i}>
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

const Lines = () => {
  const boldLines = [1, 6, 11];
  return (
    <Stack
      gap={0}
      pos="absolute"
      bottom={0}
      h={SLIDER_HEIGHT}
      w="100%"
      py={SLIDER_PADDING}
      justify="space-between"
    >
      {Array.from(Array(12).keys()).map((k) => {
        return (
          <div
            key={k}
            style={{
              margin: 0,
              width: '100%',
              height: boldLines.includes(k) ? 3 : 1,
              backgroundColor: 'var(--mantine-color-gray-4)',
            }}
          />
        );
      })}
    </Stack>
  );
};
