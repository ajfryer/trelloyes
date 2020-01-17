import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

const list = (
  <List header="header" cards={[{ id:'test_id', title: 'title', content: 'content'}]} />
); 

describe('List component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(list, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(list)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});