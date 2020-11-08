class Query {
  constructor (prefix = '>', raw = '') {
    this.raw = raw
    this.prefix = prefix
    this.content = raw.split(prefix)[1]
    this.splted = this.content.split(' ')
    this.cmd = this.splted[0]
    this.args = this.splted.splice(1)
  }
}

module.exports = Query
