/**
 * @param {import('../classes/Client')} client
 */
function onReady(client) {
  // eslint-disable-next-line no-console
  console.log(
    `${client.user.username} is now online!\n`
    + `prefix: ${client.settings.prefix}`,
  );
}

module.exports = onReady;
