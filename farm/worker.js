module.exports = function (x, callback) {
// callback(null, inp + ' BAR (' + process.pid + ')')s

console.log('starting!', process.pid, x)
// for (var i = JOBS.length - 1; i >= 0; i--) {
	// x = JOBS.pop()
while(x < 1 ){
	x += 0.000000001
}
// process.stdout.write(i+',')
callback(null,process.pid)

}