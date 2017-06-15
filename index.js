/* eslint-env node */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const BroccoliDebug = require('broccoli-debug');

module.exports = {
  name: 'ember-cli-sassdash',

  treeForStyles(styleTree) {
    let debugTree = BroccoliDebug.buildDebugCallback(`ember-cli-sassdash:${this.name}`);
    let trees = [];

    // the /app/styles/ tree
    if (styleTree) {
      trees.push(debugTree(styleTree, 'styleTree'));
    }

    // the complete sassdash scss source tree
    let sassdash = moduleToFunnel('sassdash', {
      destDir: 'ember-cli-sassdash'
    });
    trees.push(debugTree(sassdash, 'sassdash'));

    return debugTree(mergeTrees(trees), 'mergedTrees');
  }
};

let moduleToFunnel = (moduleName, opts) => new Funnel(resolveModulePath(moduleName), opts);

let resolveModulePath = (moduleName) => path.dirname(require.resolve(moduleName));
