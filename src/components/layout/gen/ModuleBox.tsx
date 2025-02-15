import { Box, Center, Stack, Text } from '@mantine/core';

const ModuleBox = () => {
  return (
    <Stack align="stretch">
      <Box bg="red">
        <Center>
          <Text size="xl" fw="bold">
            LFO
          </Text>
        </Center>
      </Box>
    </Stack>
  );
};

export default ModuleBox;
