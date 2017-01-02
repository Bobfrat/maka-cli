Package.describe({
  name: "<%= name %>",
  summary: "What this does",
  version: "0.0.1",
  git: "https://github.com/<username>/<%= fileName %>.git",
});

Npm.depends({
    "babel-runtime": "6.20.0",
    "react": "15.4.1",
    "react-dom": "15.4.1",
    "react-router": "3.0.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2');

  api.use(['ecmascript', 'templating', 'modules']);

  var packages = [
    'maka:rest'
  ];

  api.use(packages);
  api.imply(packages);

  api.mainModule('server/<%= fileName %>.jsx', 'server');
  api.mainModule('client/<%= fileName %>.jsx', 'client');

  api.addFiles('lib/<%= fileName %>.jsx', ['client', 'server']);

  api.export('<%= className %>');
});

Package.onTest(function(api) {
  api.use('<%= name %>');
  api.use('ecmascript');
  api.use('sanjo:jasmine@1.0.0');
  api.use('velocity:html-reporter@0.10.0');
  api.addFiles('tests/server/<%= fileName %>.jsx', 'server');
  api.addFiles('tests/client/<%= fileName %>.jsx', 'client');
});