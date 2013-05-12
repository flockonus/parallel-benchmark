
var d0
var RUNS = 50
var x

console.log('creating %s jobs', RUNS)
JOBS = []
for (var i = RUNS-1; i >= 0; i--) {
	// just to swing the number a bit
	JOBS.push(  0-( i/10000000 ) )
};

d0 = Date.now()

console.log('starting!')
for (var i = JOBS.length - 1; i >= 0; i--) {
	x = JOBS.pop()
	while(x < 1 ){
		x += 0.000000001
	}
	process.stdout.write(i+',')
};

process.stdout.write('\n\n')
console.log( 'took '+ (Date.now() - d0) )
