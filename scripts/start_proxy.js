var exec = require('child_process').exec;
var os = require('os');

var bin_path = "";
// Run command depending on the OS
if (os.type() === 'Linux')
    bin_path = "bin/grpcwebproxy-v0.13.0-linux-x86_64";
    //exec("node build-linux.js", puts);
else if (os.type() === 'Darwin')
    bin_path = "bin/grpcwebproxy-v0.13.0-osx-x86_64";
    //exec("node build-mac.js", puts);
else if (os.type() === 'Windows_NT')
    bin_path = "bin/grpcwebproxy-v0.13.0-win64.exe";
    //exec("node build-windows.js", puts);
else
    throw new Error("Unsupported OS found: " + os.type());

var proc = exec(bin_path + " --backend_addr='[::]:9090' --run_tls_server=false --use_websockets --allow_all_origins --server_http_debug_port 9001");

proc.stdout.on('data', function(data) {
  process.stdout.write(data);
});

proc.stderr.on('data', function(data) {
  process.stderr.write(data);
});
