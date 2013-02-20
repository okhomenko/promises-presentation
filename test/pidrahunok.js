function getMentions (candidate, callback) {
  return $.getJSON(candidate + '.json', callback);
}

function renderMentions (mentions, candidate) {
  var content = mentions.map(function (mention) {
    return $('<li>', { text: mention.tweet, 'class': colors[candidate] });
  });
  $('#mentions').append(content);
}

$.when(getMentions ('yu'), getMentions ('ya'))
 .done(function (data1, data2) {
   var c1 = data1[0], c2 = data2[0];
   if (c1.length > c2.length) {
     c1.length = c2.length - 1;
   }

   renderMentions(c1, 'yu');
   renderMentions(c2, 'ya');
 })
 .fail(function () {
   console.log('Та-дааам! Хулиганы захватили урны и власть!')
 })