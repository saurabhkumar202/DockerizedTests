// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
 // specs: ['spec.js'],
   // directConnect:true,
   multiCapabilities: [ {
    'browserName': 'chrome',
   shardTestFiles: true,
    maxInstances: 1,
    specs: 'spec/spec.js' // Capacity specific specs
  },
       {
           'browserName': 'firefox',
           shardTestFiles: true,
           maxInstances: 1,
           specs: 'spec/spec2.js' // Capacity specific specs
       }],
}