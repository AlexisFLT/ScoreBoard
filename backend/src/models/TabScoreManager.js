const AbstractManager = require("./AbstractManager");

class TabScoreManager extends AbstractManager {
  constructor() {
    super({ table: "TabScore" });
  }

  insert(TabScore) {
    return this.connection.query(
      `insert into ${this.table} (score) values (?)`,
      [TabScore.score]
    );
  }

  update(TabScore) {
    return this.connection.query(
      `update ${this.table} set score = ?, idPlayer = ?, where idGame = ?`,
      [TabScore.idGame, TabScore.idPlayer, TabScore.score]
    );
  }
}

module.exports = TabScoreManager;
