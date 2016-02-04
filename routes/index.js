var express = require('express');
const FeedParser = require('feedparser')
  , request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const reqst = request('https://osgux.tumblr.com/rss')
    , feedparser = new FeedParser({feedurl: 'https://osgux.tumblr.com/rss'});

  reqst.on('error', function (error) {
    // handle any request errors
  });
  reqst.on('response', function (res) {
    var stream = this;

    if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));

    stream.pipe(feedparser);
  });


  feedparser.on('error', function(error) {
    // always handle errors
  });

  var titles = []
  var chunk;

    feedparser.on('readable', function() {
    // This is where the action is!
    var stream = this
      , meta = this.meta
      , item;


    while (chunk = stream.read()) {

      titles.push(chunk.title)
    }

  });

  feedparser.on('end', function() {
    res.render('index', { title: 'Express', data: titles });
  });

});

module.exports = router;
