import { Group, Stack, Text } from '@mantine/core';
import JunoSlider from '@/components/gen/JunoSlider';
import { SLIDER_HEIGHT, SLIDER_Y_PADDING } from '@/components/Sizes';

export type SliderController = {
  label: string;
  allowNegativeValues?: boolean;
};

interface Props {
  controllers: SliderController[];
}

const JunoSliderGroup = ({ controllers }: Props) => {
  return (
    <Group align="end" justify="center" gap={0} pos="relative">
      <Lines />
      {controllers.map(({ label, allowNegativeValues = false }, i) => {
        return (
          <Stack align="center" key={i}>
            <Text size="xs" fw="normal" w={42} ta="center" lh="1.2">
              {label.toUpperCase()}
            </Text>
            <JunoSlider allowNegativeValues={allowNegativeValues} />
          </Stack>
        );
      })}
    </Group>
  );
};

export default JunoSliderGroup;

const Lines = () => {
  const boldLines = [0, 5, 10];
  return (
    <Stack
      gap={0}
      pos="absolute"
      bottom={0}
      w="100%"
      justify="space-between"
      h={SLIDER_HEIGHT}
      py={SLIDER_Y_PADDING}
    >
      {Array.from(Array(11).keys()).map((k) => {
        return (
          <div
            key={k}
            style={{
              height: boldLines.includes(k) ? 3 : 1,
              backgroundColor: 'var(--mantine-color-gray-5)',
            }}
            className="m-0 w-full"
          />
        );
      })}
    </Stack>
  );
};
