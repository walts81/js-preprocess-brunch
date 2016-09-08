proc = require("brunch-preprocessor")

class FilePreprocessor
  brunchPlugin: yes
  pattern: /\.(?:coffee|js)$/
  type: 'javascript'

  constructor: (@config) ->
    null

  compile: (params) ->
    processor = new proc()
    params.data = processor.process(params.data, @config)
    return Promise.resolve(params)

module.exports = FilePreprocessor
