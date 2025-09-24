/*let num1 = 1200;
let num2 = 34;

console.log(calc.div(num1, num2));

let block = $(".block");

if (block) {
    block.style.width = "300px";
    block.style.height = "200px";
    block.style.backgroundColor = "red";
}*/

/*$(window).on('load', function(){
    alert("Вся страница загрузилась");
});*/

$(document).ready(function(){
    $(".block").html("<h1>Я добавлен при помощи jquery</h1>").css({
        width: "300px",
        height: "200px",
        backgroundColor: "red"
    });

    $("#hide").click(function(){
        $(".block").slideToggle(1000, () => {
            if($(this).html() == "Скрыть блок") {
                $(this).html("Открыть блок");
            } else {
                $(this).html("Скрыть блок");
            }
        });
    });

    let a = $("<a href='https://google.com'></a>");

    a.text("Это ссылка");

    $("body").append(a);

    //a.remove();
    $('div').remove(".block");
});




