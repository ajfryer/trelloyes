import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card component', () => {
  //Smoke Test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // Snapshot test
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card id="id" title='title' content='content'/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});