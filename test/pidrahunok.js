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
}

$.when(getMentions ('yu'), getMentions('ya'))
  .done(function (data1, data2) {
    var yu = data1[0], ya = data2[0];

    renderMentions(ya, 'ya');
    renderMentions(yu, 'yu');

    renderResults(yu, ya);
  })