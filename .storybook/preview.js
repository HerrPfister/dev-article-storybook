import React from 'react';

import { CssBaseline } from '@material-ui/core';

export const decorators = [
  (Story) => (
    <>
      <CssBaseline />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
