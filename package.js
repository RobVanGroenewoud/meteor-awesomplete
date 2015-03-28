Package.describe({
  name: 'robvgroenewoud:awesomplete',
  version: '0.0.1',
  summary: 'Awesomplete by Lea Verou packaged for Meteor',
  git: 'https://github.com/RobVanGroenewoud/meteor-awesomplete.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.5');
  api.addFiles('lib/awesomplete/awesomplete.js', 'client');
  api.addFiles('lib/awesomplete/awesomplete.css', 'client');
});
