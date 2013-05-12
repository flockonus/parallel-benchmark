var cluster = require('cluster')
var numCPUs = require('os').cpus().length - 1
var RUNS = 50

// this is just to fix an anchtecture problem, because I am lazy
RUNS += numCPUs

if( cluster.isMaster ){
	var master = cluster
	var worker
	var d0
	var x

	console.log('creating %s jobs', RUNS)
	var JOBS = []
	for (var i = RUNS-1; i >= 0; i--) {
		// just to swing the number a bit
		JOBS.push( 0-( i/10000000 ) )
	};
	d0 = Date.now()

	console.log('creating %s workers', numCPUs)
	for (var i = 0; i < numCPUs; i++){
		// create workers, be able to listen to them
		worker = cluster.fork();
		worker.on('message', function( msg ) {
			console.log('master hear:', msg)
			var job = JOBS.pop()
			if( job != undefined ){
				worker.send( job )
			} else {
				process.stdout.write('\n\n')
				console.log( 'took '+ (Date.now() - d0) )
				process.exit()
			}
		})
	}
} else {
	var worker = cluster
	process.on('message', function( x ) {
		console.log('worker hear:', x)
		while(x < 1 )
			x += 0.000000001
		process.send('moarrrr')
	})
	// setInterval(function() { process.send('need work!') }, 0)
	process.send('need work!')
}

