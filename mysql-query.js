'use strict';

function mysqlQuery (mySqlConnection, query, resolveHandler = () => true) {
  return new Promise(
    (resolve, reject) => {
      mySqlConnection.query(
        query,
        (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(resolveHandler(rows));
          }
        }
      )
    }
  )
}

module.exports = mysqlQuery;
