const mysql = require('mysql');
const { func } = require('prop-types');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'qpio9023',
  port: 3306,
  database:'dpp',
})

const getAllProjects = () => {
  return new Promise(
    function (resolve, reject) {
      connection.query(
        // sql
        `SELECT * FROM PROJECTS ORDER BY ID DESC`,
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
          else console.log("deleted record successfully");
        }
      )
    }
  )
};

module.exports = {
  getAllProjects,
  makeProjects,
  deleteProject,
  updateProject
}