function fn (client, msg) {
  msg.channel.send(
    'pong!\n' +
    client.ws.ping + 'ms'
  )
}

module.exports = fn
module.exports.aliases = ['ping', '핑', 'pong']
