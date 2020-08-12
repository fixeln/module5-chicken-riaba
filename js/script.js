const putToDOC = function(data) {
    const render = `
        <div class="content">
            <p> ${data.text[0]}</p>
            <p>${data.text[1]}</p>
            <p>${data.text[2]}</p>
            <p>${data.text[3]}</p>
            <p>${data.text[4]}</p>
            <p>${data.text[5]}</p>
            <p>${data.text[6]}</p>
            <p>${data.text[7]}</p>
        </div>
        `
    const $render = $(render);
    $render.appendTo($(".blockquote"));
};

const workObject = function(data, inputs) {
    const text = data.text;
    // let var1 = text[0].replace("{var1}", inputs[0]);
    // console.log(var1);
    for (let i = 0; i<text.length; i++) {
        text[i] = text[i].replace("{var1}", inputs[0])
        text[i] = text[i].replace("{var2}", inputs[1])
        text[i] = text[i].replace("{var3}", inputs[2])
        text[i] = text[i].replace("{var4}", inputs[3])
        text[i] = text[i].replace("{var5}", inputs[4])
        text[i] = text[i].replace("{var6}", inputs[5])
        text[i] = text[i].replace("{speach}", inputs[6])
    };
    let newData = {
        text:text
    };
    putToDOC(newData);
};

const putJSON = function(){
    $.getJSON("https://api.jsonbin.io/b/5f1759b5c1edc466175baf5f",
        function (data) {
            putToDOC(data)
            //  workObject(data)
        });
};

const changeJSON = function(inputs){
    $.getJSON("https://api.jsonbin.io/b/5f1759b5c1edc466175baf5f",
        function (data) {
            workObject(data, inputs)
        });
};


$(document).ready(function () {
    $(".create-text").click(function () {
        $(".blockquote").empty();
        putJSON()
    })
    $(".change-text").click(function () {
        $(".blockquote").empty();
        const var1 = $("#var1").val();
        const var2 = $("#var2").val();
        const var3 = $("#var3").val();
        const var4 = $("#var4").val();
        const var5 = $("#var5").val();
        const var6 = $("#var6").val();
        const speach = $("#speach").val();
        const array_input = [var1, var2, var3, var4, var5, var6, speach];
        changeJSON(array_input);
    })
})