/*jshint node:true, indent:2, curly:false, eqeqeq:true, immed:true, latedef:true, newcap:true, noarg:true,
regexp:true, undef:true, strict:true, trailing:true, white:true */
/*global X:true, XM:true */

(function () {
  "use strict";

  /**
    Keep track of all of the routes and register them under a single file
   */

  var auth = require('./auth'),
    email = require('./email'),
    extensions = require('./extensions'),
    file = require('./file'),
    maintenance = require('./maintenance'),
    redirector = require('./redirector'),
    report = require('./report');

  exports.login = auth.login;
  exports.loginForm = auth.loginForm;
  exports.logout = auth.logout;
  exports.scope = auth.scope;
  exports.scopeForm = auth.scopeForm;
  exports.email = email.email;
  exports.extensions = extensions.extensions
  exports.file = file.file;
  exports.maintenance = maintenance.maintenance;
  exports.redirect = redirector.redirect;
  exports.report = report.report;

}());
