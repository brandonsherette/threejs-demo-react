module.exports = function() {
  var isDev = false;
  var buildPath = './build/';
  var devPath = './';

  return {
    "port": 8000,
    "files": ["./**/*.{html,htm,css,js,jsx}"],
    "server": getServerConfig()
  };

  function getServerConfig() {
    var baseDir = (isDev) ? devPath : buildPath;

    return {
      baseDir: baseDir
    };
  }
};
