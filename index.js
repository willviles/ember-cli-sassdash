/* eslint-env node */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-sassdash',

  treeForStyles(styleTree) {
    let trees = [];

    if (styleTree) {
      trees.push(styleTree);
    }

    const sassdash = moduleToFunnel('sassdash', {
      destDir: 'ember-cli-sassdash'
    });

    trees.push(sassdash);

    return mergeTrees(trees);
  }

};

function moduleToFunnel(moduleName, opts) {
  return new Funnel(resolveModulePath(moduleName), opts);
}

function resolveModulePath(moduleName) {
  return path.dirname(require.resolve(moduleName));
}
