importScripts('/gifcorder/js/gif.min.js');
onmessage = (e) => { postMessage(gifmin(e.data.buffer, e.data.colors)); }
onerror   = (e) => { console.error(e.message); }
