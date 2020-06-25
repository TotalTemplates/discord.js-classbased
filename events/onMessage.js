const Query = require('../classes/Query');

/**
 * @param {*} client
 * @param {*} msg
 */
function onMessage(client, msg) {
  const {prefix} = client.settings;
  const {author, content} = msg;

  if (author.bot) return;
  if (!content.startsWith(prefix)) return;

  const query = new Query(prefix, content);
  const target = client.commands.find(
      (command = {aliases: []}) =>
        typeof command === 'function' &&
      command.aliases.includes(query.cmd),
  );

  if (!target) return;
  target(client, msg);
}

module.exports = onMessage;
