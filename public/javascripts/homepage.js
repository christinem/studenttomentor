$(document).ready(function () {

    newData = null;

    $.ajax({
        type: 'GET',
        url: '/documents',
        async: false,
        success: function(data) {
            newData = data;
        },
        error: function () {
            throw 'Oops something went wrong';
        }
    });

    $('#document').html(newData[0].title);

});

function openNewPage(id){
    setTimeout(function() { 
        window.location.href = "http://localhost:3000/" + id; 
    }, 5);
}

