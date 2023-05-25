// Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.

async function sleep(millis) {
    return new Promise(delayresolve => setTimeout(delayresolve, millis));
  }