var express = require('express');
var router = express.Router();
var connection = require('../services/mysql');





// ==================================================================================


/* GET ALL football. */
router.get('/football', function (req, res, next) {
  connection.query("SELECT * FROM games WHERE category = 'football'", function (err, rows, fields) {
      if (err) throw err
      console.log('The solution is: ', JSON.stringify(rows))
      res.send(rows);
  })
});


/* GET ALL basketball. */
router.get('/basketball', function (req, res, next) {
  connection.query("SELECT * FROM games WHERE category = 'basketball'", function (err, rows, fields) {
      if (err) throw err
      console.log('The solution is: ', JSON.stringify(rows))
      res.send(rows);
  })
});




// ==========================================================================================================

/* GET SINGLE todo . */
router.get('/games/:id', function (req, res, next) {

  var todos;

  connection.query(`SELECT * FROM games WHERE id="${req.params.id}" LIMIT 1`, function (err, rows, fields) {
      if (err) throw err

      // todos = rows[0];
      // connection.query(`SELECT * FROM todos WHERE article_id="${req.params.id}"`, function (err, rows, fields) {
      //     if (err) throw err

      todos = rows;
          console.log('The solution is: ', JSON.stringify(rows))
          res.send(todos);
      // })
  })
});


// ======================================================================================================


module.exports = router;


