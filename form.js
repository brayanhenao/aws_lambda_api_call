function f() {
    $.ajax({
        type: "GET",
        url: 'https://ob8ifavq7l.execute-api.us-west-2.amazonaws.com/prod/resource',
        data: {
            text: document.getElementById('text').value,
            lang: document.getElementById('language').value
        },
        dataType: 'json',
        success: function (response) {
            $("#modal_text").empty().append("EL TEXTO QUE ESCRIBISTE TIENE <b><u> " + response + " </u> </b> VOCALES");
            $("#myModal").modal();
        }
    });
}

function f2() {
    window.location.href = "foreign_visitor.html";
}

function f3() {

    let file = document.getElementById("file").files[0];

    let language = document.getElementById("lang").value;

    console.log(language);

    let reader = new FileReader();

    reader.onload = function (e) {
        let text = e.target.result;

        $.ajax({
            type: "POST",
            url: 'https://9gyivkula0.execute-api.us-west-2.amazonaws.com/prod2',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            data: {
                text: text,
                lang: language
            },
            dataType: 'json',
            success: function (response) {
                if (response === "Error") {
                    f2();
                }
            }
        });
        console.log(text);
    };
    reader.readAsText(file);
}
