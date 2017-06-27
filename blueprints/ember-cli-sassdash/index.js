/* eslint-env node */
module.exports = {
  description: '',

  normalizeEntityName() {
    // this prevents an error when the entityName is
    // not specified
  },

  afterInstall(/*options*/) {
    return this.addPackagesToProject(
      [
        { name: 'ember-cli-sass', target: '~6.2.0' }
      ]
    );
  }
};
