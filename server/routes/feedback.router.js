const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  console.log('GET /api/feedback');
  pool.query(`SELECT * FROM "feedback";`).then( result => {
    res.send(result.rows);
  }).catch( err => {
    console.log('Error in GET request', err);
    res.sendStatus(500);
  });
})

router.post('/', (req, res) => {
  console.log('POST /api/feedback:', req.body);
  const dataBody = req.body;
  // const queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`;

  const queryText = `INSERT INTO "feedback" (feeling, understanding, support, comments) 
            VALUES (${dataBody.feeling}, ${dataBody.understanding}, ${dataBody.support}, '${dataBody.comments}');`;
  // queryString, [dataBody.feeling, dataBody.understanding, dataBody.support, dataBody.comments]
  
  pool.query( queryText )
  .then(() => {
    res.sendStatus(201);
  })
  .catch( err => {
    console.log('ERROR in writing feedback to DB:', err);
    res.sendStatus(500);
  })
})

module.exports = router;



