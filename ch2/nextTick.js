const EventEmitter = require('events').EventEmitter;

function complexOperations() {
  const events = new EventEmitter();

  process.nextTick(function () {
    events.emit('success');
  });

  return events;
}

complexOperations().on('success', function () {
  console.log('success!');
});

