self.addEventListener('message', function (e) {
    self.postMessage('You said: ' + e.data);
}, false);
console.log(11111111111)