import React from 'react';
import renderer from 'react-test-renderer';

import ProjectLink from './component';

it('renders', () => {
  const tree = renderer.create(
    <ProjectLink name="name" description="description" url="url" />,
  );
  expect(tree.toJSON()).toMatchSnapshot();
});
