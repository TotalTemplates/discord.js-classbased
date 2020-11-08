import Client from "../classes/Client"
import { Query } from "./../classes/Query"
import { Message } from "discord.js"

/**
 * @param {import('../classes/Client')} client
 * @param {import('discord.js').Message} msg
 */
export default function onMessage (client:Client, msg:Message) {
  const { prefix } = client.Setting
  const { author, content } = msg

  if (author.bot) return
  if (!content.startsWith(prefix)) return

  const query = new Query(prefix, content)
  const target = client.Commands.find(
    (command = { aliases: [] }) =>
      typeof command.default === 'function' &&
      command.aliases.includes(query.cmd)
  )

  if (!target) return
  target.default(client, msg)
}