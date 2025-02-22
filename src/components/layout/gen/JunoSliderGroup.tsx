import { ReactNode } from 'react';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { Group, Stack, Text } from '@mantine/core';
import JunoSlider from '@/components/gen/JunoSlider';
import { SLIDER_HEIGHT, SLIDER_Y_PADDING } from '@/components/Sizes';

export type SliderController = {
  label: string;
  allowNegativeValues?: boolean;
};

type HighlightedLine = {
  label: string | ReactNode;
  position: number;
};

interface Props {
  controllers: SliderController[];
  allowNegativeValues?: boolean;
}

const JunoSliderGroup = ({ controllers, allowNegativeValues = false }: Props) => {
  return (
    <Group align="end" justify="center" gap={0} pos="relative" mx="sm">
      <Lines centeredRange={allowNegativeValues} />
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

const Lines = ({ centeredRange }: { centeredRange: boolean }) => {
  const fullRangeLines: HighlightedLine[] = [
    { label: <Text>0</Text>, position: 0 },
    { label: <Text>5</Text>, position: 5 },
    { label: <Text>10</Text>, position: 10 },
  ];
  const centeredRangeLines: HighlightedLine[] = [
    {
      label: <IconMinus size={14} stroke={2} />,
      position: 0,
    },
    { label: <Text>0</Text>, position: 5 },
    {
      label: <IconPlus size={14} stroke={2} />,
      position: 10,
    },
  ];
  const boldLines = centeredRange ? centeredRangeLines : fullRangeLines;
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
          const highLightedLine = boldLines.find((line) => line.position === k);
          return (
            <div
              key={k}
              style={{
                height: highLightedLine ? 3 : 1,
                backgroundColor: 'var(--mantine-color-gray-5)',
                width: '100%',
              }}
              className="relative m-0 flex w-full items-center justify-center"
            >
              <div
                style={{ width: `${128 + 15}%` }}
                className="absolute flex items-center justify-between"
              >
                {highLightedLine ? (
                  <>
                    <Group w={14} justify="end" ta="right">
                      {highLightedLine.label}
                    </Group>
                    <Group w={14} ta="left">
                      {highLightedLine.label}
                    </Group>
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
