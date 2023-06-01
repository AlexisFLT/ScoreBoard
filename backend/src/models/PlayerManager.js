const AbstractManager = require("./AbstractManager");

class playerManager extends AbstractManager {
  constructor() {
    super({ table: "player" });
  }

  insert(player) {
    return this.connection.query(
      `insert into ${this.table} (nickname) values (?)`,
      [player.nickname]
    );
  }

  update(player) {
    return this.connection.query(
      `update ${this.table} set nickname = ? where id = ?`,
      [player.nickname, player.id]
    );
  }
}

module.exports = playerManager;
