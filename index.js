let flow = require('./flow-runner')
let test = require('./test')

flow(test.rules, test.data)