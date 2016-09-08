var FilePreprocessor, proc;

proc = require("brunch-preprocessor");

FilePreprocessor = (function() {
  FilePreprocessor.prototype.brunchPlugin = true;

  FilePreprocessor.prototype.pattern = /\.(?:coffee|js)$/;

  FilePreprocessor.prototype.type = 'javascript';

  function FilePreprocessor(config) {
    this.config = config;
    null;
  }

  FilePreprocessor.prototype.compile = function(params) {
    var processor;
    processor = new proc();
    params.data = processor.process(params.data, this.config);
    return Promise.resolve(params);
  };

  return FilePreprocessor;

})();

module.exports = FilePreprocessor;
