import http from 'http';
import os from 'os'; 

const server = http.createServer((req, res) => {
    
    const data = {
        platform: os.platform(),
        cpu: os.cpus()[0].model,
        arch: os.arch(),
        freeMemory: (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + " GB",
        totalMemory: (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " GB"
    };

   
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    
    res.end(JSON.stringify(data, null, 2));
});

server.listen(5000, () => {
    console.log("Server tracking system stats on http://localhost:5000");
});