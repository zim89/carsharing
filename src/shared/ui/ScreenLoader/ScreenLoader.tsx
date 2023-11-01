import { LoadingOverlay, MantineProvider } from '@mantine/core';
import { FC } from 'react';

const ScreenLoader: FC = () => {
  return (
    <MantineProvider>
      <LoadingOverlay visible />
    </MantineProvider>
  );
};

export default ScreenLoader;
