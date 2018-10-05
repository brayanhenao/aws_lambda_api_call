function f() {
    let file = document.getElementById("file").files[0];

    let language = document.getElementById("lang").value;

    let filename = file.name;

    let reader = new FileReader();

    reader.onload = function (e) {
        let text = e.target.result;
        $.ajax({
            type: "GET",
            url: 'https://hw2m72bc78.execute-api.us-west-2.amazonaws.com/prod',
            data: {
                text: text,
                lang: language,
                filename: filename
            },
            dataType: 'json',
            success(response) {
                if (response === "Error") {
                    f2();
                } else {
                    setTimeout(6000);
                    window.location.href = "results.html";
                }
            }
        });
    };
    reader.readAsText(file);
}

function f2() {
    window.location.href = "foreign_visitor.html";
}