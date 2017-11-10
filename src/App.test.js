import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer'; 
import App from './App';

describe('app', () => {

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
it('renders correctly for App', () => {
	const testRenderer = TestRenderer.create(<App />);
	const testInstance = testRenderer.root;
	expect(testInstance.findByProps({className: "App-title"}).children).toEqual(['Welcome to EC Dev Web App...']);
});

});
