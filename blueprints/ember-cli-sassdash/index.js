/* eslint-env node */
module.exports = {
  description: '',

  afterInstall(/*options*/) {
    return this.addPackagesToProject(
      [
        { name: 'ember-cli-sass', target: '~6.2.0' }
      ]
    );
  }
};
