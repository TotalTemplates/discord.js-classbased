import path from "path"
import { Client } from "discord.js"
import { existsSync, readJSONSync } from "fs-extra"
import { readRecursively } from "../utils/readFiles"

interface TempSettingInterface {
    settingPath: string
    settingExists: boolean
    commandsPath: string
    commandsHas: boolean
}

export default class eClient extends Client {
    SettingTemp: TempSettingInterface
    Setting: any
    Commands: Array<any> = []

    constructor() {
        super()
        const Path = path.join(__dirname, "./../../settings.json")
        this.SettingTemp = {
            settingPath: Path,
            settingExists: existsSync(Path),
            commandsPath: path.join(__dirname, "./../commands"),
            commandsHas: existsSync(path.join(__dirname, "./../commands"))
        }

        if (this.SettingTemp.settingExists) {
            const {
                token = process.env.TOKEN,
                prefix = (process.env.PREFIX || '>'),
                ...settings
            } = readJSONSync(this.SettingTemp.settingPath)

            if (!token) throw new Error('Token not provided')
            this.Setting = { token, prefix, ...settings }
        } else throw new Error('./settings.json not exists')

        if (this.SettingTemp.commandsHas) {
            var Commands: Array<any> = readRecursively(this.SettingTemp.commandsPath)
                .map((command) => {
                    if (!command.endsWith('.js')) return
                    return require(command)
                })
            this.Commands = Commands
        } else throw new Error('./commands/ folder not exists')
    }

    start(token = this.Setting.token) {
        this.login(token)
    }

    regist(event = 'ready', exec: any) {
        this.on(event, (...args) => {
            exec(this, ...args)
        })
    }

}