import Client from './classes/Client'
import onReady from './events/onReady'
import onMessage from './events/onMessage'

const CreatedClient = new Client()

CreatedClient.start()
CreatedClient.regist('ready', onReady)
CreatedClient.regist('message', onMessage)
