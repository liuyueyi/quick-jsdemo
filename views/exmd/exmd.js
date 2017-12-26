$(function () {
    var text = $('#txt').text();

    var html = marked(text);
//    console.log(html);

    $('#mkcontent').html(html);

    var codeEls = document.getElementsByTagName('code');
    for (var i = 0, ii = codeEls.length; i < ii; i++) {
        var codeEl = codeEls[i];
        var lang = codeEl.className;
        codeEl.className = 'prettyprint lang-' + lang;
    }
    prettyPrint();

    // Style tables
    var tableEls = document.getElementsByTagName('table');
    for (var i = 0, ii = tableEls.length; i < ii; i++) {
        var tableEl = tableEls[i];
        tableEl.className = 'table table-striped table-bordered';
    }


    
    // 上面是markdown渲染
    $(".md-style").find("h2,h3,h4,h5,h6").each(function (i, item) {
        var tag = $(item).get(0).localName;
        console.log($(item), tag, $(item).text());
        
        $(item).attr("id", "wow" + i);
        $("#AnchorContent").append('<li><a class="new' + tag + ' anchor-link" onclick="return false;" href="#" link="#wow' + i + '">'  + $(this).text() + '</a></li>');
        $(".newh2").css("margin-left", 0);
        $(".newh3").css("margin-left", 20);
        $(".newh4").css("margin-left", 40);
        $(".newh5").css("margin-left", 60);
        $(".newh6").css("margin-left", 80);
    });
    $("#AnchorContentToggle").click(function () {
        var text = $(this).html();
        if (text == "目录[-]") {
            $(this).html("目录[+]");
            $(this).attr({
                "title": "展开"
            });
        } else {
            $(this).html("目录[-]");
            $(this).attr({
                "title": "收起"
            });
        }
        $("#AnchorContent").toggle();
    });


    // 平滑的移动到目录对应的位置
    $(".anchor-link").click(function () {
        $("html,body").animate({
            scrollTop: $($(this).attr("link")).offset().top
        }, 1000);
    });
});