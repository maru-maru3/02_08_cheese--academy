function randomCharactor(c) {

    //跳ねさせる要素をすべて取得
    var randomChar = document.getElementsByClassName(c);

    //for で総当たり
    for (var i = 0; i < randomChar.length; i++) {

        //クロージャー
        (function (i) {

            //i 番目の要素、テキスト内容、文字列の長さを取得
            var randomCharI = randomChar[i];
            var randomCharIText = randomCharI.textContent;
            var randomCharLength = randomCharIText.length;

            //何番目の文字を跳ねさせるかをランダムで決める
            var Num = ~~(Math.random() * randomCharLength);

            //跳ねさせる文字を span タグで囲む、それ以外の文字と合わせて再び文字列を作る
            var newRandomChar = randomCharIText.substring(0, Num) + "<span>" + randomCharIText.charAt(Num) + "</span>" + randomCharIText.substring(Num + 1, randomCharLength);
            randomCharI.innerHTML = newRandomChar;

            //アニメーションが終わったら再び関数を発火させる
            document.getElementsByClassName(c)[0].children[0].addEventListener("animationend", function () {
                randomCharactor(c)
            }, false)
        })(i)
    }
}

//クラス名が pyonpyon のクラスを跳ねさせる
randomCharactor("pyonpyon");






//ピザはねさせるscript
// ID値「mitarashi」に対してCSSアニメ―ション「poyooon」を600ミリ秒の間隔を空けてループ再生
looopAnimation("mitarashi", "poyooon", 300);







