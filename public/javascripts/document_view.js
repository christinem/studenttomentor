$(document).ready(function () {

    var text = '';

    var paragraphs = getParagraphs().filter(function(paragraph) {
        return paragraph.dID === 1;
    });

    paragraphs.forEach(function(paragraph) {
        text += addHighlight(paragraph) + '<br><br>';
    })

    $('#content').html(text);

});
