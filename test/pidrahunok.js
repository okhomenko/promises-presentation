function getMentions (candidate, callback) {
  return $.getJSON(candidate + '.json', callback);
}

function renderMentions (mentions, candidate) {
  var content = mentions.map(function (mention) {
    return $('<li>', { text: mention.tweet, 'class': colors[candidate] });
  });
  $('#mentions').append(content);
}

function renderResults (yu, ya) {
  $('.score.yu').text(yu);
  $('.score.ya').text(ya);

  if (yu > ya) {
    $('#yu').addClass('winner');
    $('#ya').addClass('looser');
  }
  if (yu < ya) {
    $('#ya').addClass('winner');
    $('#yu').addClass('looser');
  }
}

$.when(
  getMentions('yu'),
  getMentions('ya')
).done(function (data1, data2) {
  var yu = data1[0], ya = data2[0];

  if (yu.length > ya.length) { yu.length = ya.length - 1; }

  renderMentions(yu, 'yu');
  renderMentions(ya, 'ya');

  renderResults(yu.length, ya.length)
}).fail(function () {
  $('#ya, #yu').addClass('looser small');

  $('.hooligans').fadeIn();
});