var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': 'QoNm9NJcUaRHe8nNLSDzUb39Q2SC3CNicYUrz2SI', 'X-Parse-REST-API-Key': 'Qrk4rfLUqliOYZOoXmxTCWz6j85IfVH5zhXAL30R'}
      return config;
    }
  };
});
