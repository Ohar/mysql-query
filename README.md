# mysql-query

NodeJS wrapper for MySQL query, based on “[mysql](https://npmjs.org/package/mysql)” package

[![NPM](https://nodei.co/npm/mysql-query.png)](https://npmjs.org/package/mysql-query)

# How to use

Let`s say you have MySQL connection as separated module like this

```javascript
'use strict';

const mysql = require('mysql');

let mySqlConnection = mysql.createConnection(
    {
      host:     'http://example.com',
      port:     80,
      user:     'user',
      password: 'password',
      database: 'database',
      timezone: 'UTC',
    }
);

module.exports = mySqlConnection;

```

Then you can use `mysql-query` like this

```javascript
'use strict';

const mysqlQuery      = require('mysql-query'),
      mysqlConnection = require('./mysql-connection');

function foo () {
  const handler = rows => rows,
        query = `
          SELECT *
          FROM test 
          WHERE answer = 42
        `;

  return mysqlQuery(mysqlConnection, query, handler)
    .then(rows => console.log);
}


```