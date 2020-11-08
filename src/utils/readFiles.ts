import { readdirSync, statSync } from "fs-extra"
import path from "path"

// from https://gist.github.com/kethinov/6658166
export function readRecursively (Directory:string, Filelist:Array<string> = []) {
  const files = readdirSync(Directory)
  files.forEach((file) => {
    if (statSync(path.join(Directory, file)).isDirectory()) Filelist = readRecursively(path.join(Directory, file), Filelist)
    else Filelist.push(path.join(Directory, file))
  })

  return Filelist
}
