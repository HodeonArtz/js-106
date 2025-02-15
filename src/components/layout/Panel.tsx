import { Grid } from '@mantine/core';
import LFOModule from './synth-mode-and-patches/LFOModule';

const Panel = () => {
  return (
    <Grid style={{ backgroundColor: 'var(--mantine-color-dark-7)' }}>
      <Grid.Col span="content">
        <LFOModule />
      </Grid.Col>
      <Grid.Col>d</Grid.Col>
    </Grid>
  );
};

export default Panel;
