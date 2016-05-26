function inputTextChange(text, str) {
    text.onfocus = (function () {
        if (this.value == str) {
            this.value = '';
        }
    });
    text.onblur = (function () {
        if (this.value == '') {
            this.value = str;
        }
    });
}

function clearText() {
    if (!document.getElementsByClassName) return false;

    var text = document.getElementsByClassName('text');
    for (var i = 0; i < text.length; i++) {
        inputTextChange(text[i], text[i].value);
    }
}

window.onload = (function () {
    clearText();
});
