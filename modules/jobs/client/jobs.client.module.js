(function (app) {
  'use strict';

  app.registerModule('jobs');
  app.registerModule('jobs.services');
  app.registerModule('jobs.routes', ['ui.router', 'jobs.services']);
})(ApplicationConfiguration);
