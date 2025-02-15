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
      <Stack
        gap={0}
        pos="absolute"
        bottom={0}
        h={SLIDER_HEIGHT}
        w="100%"
        py={SLIDER_PADDING}
        justify="space-between"
      >
        {Array.from(Array(10).keys()).map((k) => {
          return <hr key={k} style={{ margin: 0 }} />;
        })}
      </Stack>
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
