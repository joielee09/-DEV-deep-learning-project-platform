"use strict";

var mysql = require('mysql');

var _require = require('prop-types'),
    func = _require.func;

var connection = mysql.createConnection({
  host: 'database-12.rds.amazonaws.com',
  user: '',
  password: '',
  port: ,
  database: ''
});

var getCategory = function getCategory(cat_name) {
  return new Promise(function (resolve, reject) {
    connection.query( // sql
    "SELECT * FROM PROJECT WHERE CATEGORY='".concat(cat_name, "'"), // function
    function (err, rows, field) {
      if (err) throw err;
      resolve(rows);
    });
  });
};

var getOneProjects = function getOneProjects(id) {
  return new Promise(function (resolve, reject) {
    connection.query( // sql
    "SELECT * FROM PROJECT WHERE ID=".concat(id), // function
    function (err, rows, field) {
      if (err) throw err;
      resolve(rows);
    });
  });
};

var getAllProjects = function getAllProjects() {
  return new Promise(function (resolve, reject) {
    connection.query( // sql
    "SELECT * FROM PROJECT ORDER BY ID DESC", // function
    function (err, rows, field) {
      if (err) throw err;
      resolve(rows);
    });
  });
};

var makeProjects = function makeProjects(insertSql) {
  return new Promise(function (resolve, reject) {
    connection.query( //sql
    insertSql, // function
    function (err, rows, field) {
      if (err) throw err;else console.log("insert record successfully");
    });
  });
};

var deleteProject = function deleteProject(deleteSql) {
  return new Promise(function (resolve, reject) {
    connection.query(deleteSql, //sql
    function (err, rows, field) {
      //function
      if (err) throw err;else console.log("deleted record successfully");
    });
  });
};

var updateProject = function updateProject(insertSql) {
  return new Promise(function (resolve, reject) {
    connection.query(insertSql, //sql
    function (err, rows, field) {
      //function
      if (err) throw err;else console.log("updated record successfully");
    });
  });
};

module.exports = {
  getAllProjects: getAllProjects,
  makeProjects: makeProjects,
  deleteProject: deleteProject,
  updateProject: updateProject,
  getOneProjects: getOneProjects,
  getCategory: getCategory
};
