/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';
<<<<<<< HEAD
import test from 'node:test';
=======
>>>>>>> 4d02a9435da824bce90b35f4c06a38f35a1201c4

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});
