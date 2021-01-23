const { PubSub } = require('@google-cloud/pubsub')

const pubsub = new PubSub()
pubsub
  .topic('whatever').publish(Buffer.from('hello world'))
  .then(() => console.log('ok'))
  .catch(console.error)
