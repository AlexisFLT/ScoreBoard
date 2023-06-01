const AbstractManager = require("./AbstractManager");

class gameManager extends AbstractManager {
  constructor() {
    super({ table: "game" });
  }

  insert(game) {
    return this.connection.query(
      `insert into ${this.table} (name) values (?)`,
      [game.name]
    );
  }

  update(game) {
    return this.connection.query(
      `update ${this.table} set name = ? where id = ?`,
      [game.name, game.id]
    );
  }
}

module.exports = gameManager;
