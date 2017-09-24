// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import VisitorCounter from '../component';

const APP_CONFIG = {
  id: 'test',
  name: 'Test',
  vendor: 'cooperka',
};

const PERMISSIONS = {
  _public: ['Read'],
};

it('renders', () => {
  const tree = renderer.create(
    <VisitorCounter appConfig={APP_CONFIG} permissions={PERMISSIONS} />,
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
