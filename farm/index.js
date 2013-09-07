
var d0
var RUNS = 50
var x

console.log('creating %s jobs', RUNS)
JOBS = []
for (var i = RUNS-1; i >= 0; i--) {
	// just to swing the number a bit
	JOBS.push(  0-( i/10000000 ) )
};

console.log('jobs created!')


d0 = Date.now()


var workerFarm = require('worker-farm')
  , workers    = workerFarm(require.resolve('./worker'))
  , ret        = 0

for (var i = 0; i < JOBS.length-1; i++) {
  workers(JOBS[i], function (err, byPid) {
    console.log("done", ret)
    if (++ret == JOBS.length-1){
      workerFarm.end(workers)
      console.log( 'took '+ (Date.now() - d0), ret )
    }
  })
}

