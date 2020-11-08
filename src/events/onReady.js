/**
 * @param {import('../classes/Client')} client
 */
function onReady (client) {
  console.log(
    client.user.username + ' is now online!\n' +
    'prefix: ' + client.settings.prefix
  )
}

module.exports = onReady
