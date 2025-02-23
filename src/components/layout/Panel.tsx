import { Grid } from '@mantine/core';
import DCOModule from './synth-mode-and-patches/DCOModule';
import LFOModule from './synth-mode-and-patches/LFOModule';

const Panel = () => {
  return (
    <Grid gutter="xs" style={{ backgroundColor: 'var(--mantine-color-dark-7)' }}>
      <Grid.Col span="content">
        <LFOModule />
      </Grid.Col>
      <Grid.Col span="content">
        <DCOModule />
      </Grid.Col>
    </Grid>
  );
};

export default Panel;
