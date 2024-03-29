import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import { Button, Welcome } from '@storybook/react/demo';
import App  from "../App";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
 .add('with text', () => <Button onClick={action('clicked')}>My Button</Button>)
 .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯 </Button>);

storiesOf('App', module)
  .add('default 1', () => <App />)
  .add('with title 2', () => <App title='My World' />);

storiesOf('Artists', module)
.add('default 1', () => <App />)
.add('with title 2', () => <App title='My World' />);
