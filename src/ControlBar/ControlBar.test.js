import React from 'react';
import ReactDOM from 'react-dom';
import ControlBar from './ControlBar';

describe('ControlBar', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ControlBar/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
