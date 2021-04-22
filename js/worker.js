worker.postMessage('Hello World');
worker.postMessage({method: 'echo', args: ['Work']});