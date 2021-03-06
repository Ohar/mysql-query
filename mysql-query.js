'use strict';

function mysqlQuery (mySqlConnection, query, resolveHandler = rows => rows, rejectHandler = err => err) {
  return new Promise(
    (resolve, reject) => {
      mySqlConnection.query(
        query,
        (err, rows) => {
          if (err) {
            reject(rejectHandler(err));
          } else {
            resolve(resolveHandler(rows));
          }
        }
      )
    }
  )
}

module.exports = mysqlQuery;
