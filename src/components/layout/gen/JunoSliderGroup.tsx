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
    <Group align="end" justify="center" gap={0} pos="relative" mx="sm">
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
      align="center"
    >
      {Array.from(Array(11).keys())
        .sort((a, b) => b - a)
        .map((k) => {
          const isLineHighLighted = boldLines.includes(k);
          return (
            <div
              key={k}
              style={{
                height: isLineHighLighted ? 3 : 1,
                backgroundColor: 'var(--mantine-color-gray-5)',
                width: '100%',
              }}
              className="m-0 relative w-full flex items-center justify-center"
            >
              <div
                style={{ width: `${125 + 15 * (k.toString().length - 1)}%` }}
                className="flex absolute items-center justify-between"
              >
                {isLineHighLighted ? (
                  <>
                    <Text size="xs">{k}</Text>
                    <Text size="xs">{k}</Text>
                  </>
                ) : (
                  ''
                )}
              </div>
            </div>
          );
        })}
    </Stack>
  );
};
