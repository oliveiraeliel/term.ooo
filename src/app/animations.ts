import {
  trigger,
  transition,
  animate,
  style,
  state,
} from '@angular/animations';

export const animateStatus = trigger('status', [
  state(
    'success',
    style({
      backgroundColor: 'green',
    })
  ),
  state(
    'fail',
    style({
      backgroundColor: 'red',
    })
  ),
  state(
    'none',
    style({
      backgroundColor: 'transparent',
    })
  ),
]);

export const animateInput = trigger('focus', [
  state(
    'on',
    style({
      boxShadow: '0 0 0 5px brown inset',
    })
  ),
  state(
    'right',
    style({
      backgroundColor: 'green',
      color: 'white',
    })
  ),
  state(
    'wrong',
    style({
      backgroundColor: 'red',
      color: 'white',
    })
  ),
  state(
    'partially-right',
    style({
      backgroundColor: 'yellow',
    })
  ),
  state('non-initialized', style({})),
  state('disabled', style({})),
  transition('*<=>*', [animate('0.1s')]),
]);
