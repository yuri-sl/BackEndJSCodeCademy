// Here we require in the 'events' module and save a reference to it in an events variable
let events = require('events');

let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}

let destruirCallBack = (data) => {
  console.log('Agora você será destruido, '+data+'!');
}

let myEmitter = new events.EventEmitter();
let beerus = new events.EventEmitter();
myEmitter.on('celebration',listenerCallback);
myEmitter.emit('celebration','Jubaba Roxa')

myEmitter.on('destruir',destruirCallBack);
myEmitter.emit('destruir','Kakarotto')


beerus.on('hakai',destruirCallBack);
beerus.emit('hakai','Zamasu');