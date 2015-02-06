Package.describe({
  summary: "Let you work with some GPS trackers that connects through tcp. Also saves the data on your mongodb database ;)",
  version: '0.2.0',
  name: "solo999:gps-tracking",
  git: "https://github.com/solo999/meteor-gps-tracking"
});

Npm.depends({
  "gps-tracking": "0.2.5", 
});

Package.onUse(function (api) {

  api.add_files([
    'lib/gps-tracking.js',
  ], ['server']);
  
  api.export([
    'gps'
  ], ['server']);
});
