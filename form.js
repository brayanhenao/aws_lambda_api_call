function f() {
    $.ajax({
        type: "GET",
        url: 'https://ob8ifavq7l.execute-api.us-west-2.amazonaws.com/prod/resource',
        data: {
            text: document.getElementById('text').value
        },
        dataType: 'json',
        success: function (response) {
            $("#modal_text").empty().append("EL TEXTO QUE ESCRIBISTE TIENE <b><u> " + response + " </u> </b> VOCALES");
            $("#myModal").modal();
        }
    });
}

function f2() {
    window.location.href = "rickroll.html";
}