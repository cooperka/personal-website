// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import SocialLink from './component';

it('renders', () => {
  const tree = renderer.create(
    <SocialLink
      name="name"
      url="url"
      Icon={() => 'icon'}
      HoverIcon={() => 'hoverIcon'}
    />,
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
