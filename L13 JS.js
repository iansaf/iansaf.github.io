// 創造一個函式指令 hello：
function $hello () {
    // 讓網頁跳出文字訊息：
    alert('叩叮：\n嗨你好～ 讓我們一起加油寫出漂漂亮亮的網頁唄！');
}

// $("button").css()

$("button").click(function () {
    $hello()
});
