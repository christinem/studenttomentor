function getDocuments() {
    var documents = null;

    $.ajax({
        type: 'GET',
        url: '/documents',
        async: false,
        success: function(data) {
            documents = data;
        },
        error: function () {
            throw 'Oops something went wrong';
        }
    });

    return documents;
};

function getAnnotations() {
    var annotations = null;

    $.ajax({
        type: 'GET',
        url: '/annotations',
        async: false,
        success: function(data) {
            annotations = data;
        },
        error: function () {
            throw 'Oops something went wrong';
        }
    });  

    return annotations;  
};

function getParagraphs() {
    var paragraphs = null;

    $.ajax({
        type: 'GET',
        url: '/paragraphs',
        async: false,
        success: function(data) {
            paragraphs = data;
        },
        error: function () {
            throw 'Oops something went wrong';
        }
    }); 

    return paragraphs;   
};

function getUserInfo() {
    var user = null;

    $.ajax({
        type: 'GET',
        url: '/user_info',
        async: false,
        success: function(data) {
            user = data;
        },
        error: function () {
            throw 'Oops something went wrong';
        }
    }); 

    return user;   
};

function addHighlight(paragraph) {

    var newText = paragraph.content;
    var user = getUserInfo();

    var annotations = getAnnotations().filter(function(annotation) {
        return annotation.pID === paragraph.pID && annotation.uID === user.uID;
    });

    annotations.forEach(function(annotation) {
    	var start = annotation.start;
    	var end = annotation.start + annotation.length;
    	
        if (annotation.visible) {
            newText = newText.substring(0, start) + '<span class=highlight>' +
                      newText.substring(start, end) + '</span>' +
                      newText.substring(end, newText.length);
        }
    });

    return newText;
};
