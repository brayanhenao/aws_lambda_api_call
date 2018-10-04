function f() {

    let file = document.getElementById("file").files[0];

    let language = document.getElementById("lang").value;

    console.log(language);

    let reader = new FileReader();

    reader.onload = function (e) {
        let text = e.target.result;
        $.ajax({
            type: "GET",
            url: 'https://hw2m72bc78.execute-api.us-west-2.amazonaws.com/prod',
            data: {
                text: text,
                lang: language
            },
            dataType: 'json',
            success(response) {
                if (response === "Error") {
                    f2();
                } else {
                    console.log(response);
                }
            }
        });
    };
    reader.readAsText(file);
}

function f2() {
    window.location.href = "foreign_visitor.html";
}