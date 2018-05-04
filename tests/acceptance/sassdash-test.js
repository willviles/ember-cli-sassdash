import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import { visit, find } from 'ember-native-dom-helpers';

moduleForAcceptance('Acceptance | sassdash test');

test('Sassdash is working', async function(assert) {
  await visit('/');

  let pseudoElemContent = window
    .getComputedStyle(find('.test'), ':before')
    .getPropertyValue('content')
    .replace(/"/g, '');

  assert.equal(pseudoElemContent, 'sassdash is cool!');
});
