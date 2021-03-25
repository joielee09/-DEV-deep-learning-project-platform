const mysql = require('mysql');
const { func } = require('prop-types');

const connection = mysql.createConnection({
  host: 'database-1.cso5uhd7wven.ap-northeast-2.rds.amazonaws.com',
  user: 'admin',
  password: 'qpio9023',
  port: 3306,
  database:'dpp',
})

const getCategory = (cat_name) => {
  return new Promise(
    function (resolve, reject) {
      connection.query(
        // sql
        `SELECT * FROM PROJECT WHERE CATEGORY='${cat_name}'`,
        // function
        function (err, rows, field) {
          if (err) throw err;
          resolve(rows);
        }
      );
    }
  )
}

const getOneProjects = (id) => {
  return new Promise(
    function (resolve, reject) {
      connection.query(
        // sql
        `SELECT * FROM PROJECT WHERE ID=${id}`,
        // function
        function (err, rows, field) {
          if (err) throw err;
          resolve(rows);
        }
      );
    },
  )
};


const getAllProjects = () => {
  return new Promise(
    function (resolve, reject) {
      connection.query(
        // sql
        `SELECT * FROM PROJECT ORDER BY ID DESC`,
        // function
        function (err, rows, field) {
          if (err) throw err;
          resolve(rows);
        }
      );
    },
  )
};

const makeProjects = (insertSql) => {
  return new Promise(
    function (resolve, reject) {
      connection.query(
        //sql
        insertSql,
        // function
        function (err, rows, field) {
          if (err) throw err;
          else console.log("insert record successfully");
        }
      )
    }
  )
};

const deleteProject = (deleteSql) => {
  return new Promise(
    function (resolve, reject) {
      connection.query(
        deleteSql, //sql
        function (err, rows, field) { //function
          if (err) throw err;
          else console.log("deleted record successfully");
        }
      )
    }
  )
};

const updateProject = (insertSql) => {
  return new Promise(
    function (resolve, reject) {
      connection.query(
        insertSql, //sql
        function (err, rows, field) { //function
          if (err) throw err;
          else console.log("updated record successfully");
        }
      )
    }
  )
};

module.exports = {
  getAllProjects,
  makeProjects,
  deleteProject,
  updateProject,
  getOneProjects,
  getCategory
}