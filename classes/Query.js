class Query {
  constructor(prefix = '>', raw = '') {
    this.raw = raw;
    this.prefix = prefix;

    const [, content] = raw.split(prefix);
    this.content = content;

    this.splted = this.content.split(' ');

    const [cmd] = this.splted;
    this.cmd = cmd;

    this.args = this.splted.splice(1);
  }
}

module.exports = Query;
