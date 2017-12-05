function LifeBar(hearts) {
    var body = "<div class='life-bar'>";
    var div = document.createElement('div');
    for (var i = 0; i < hearts; i++) {
        body += Heart();
    }
    body += "</div>";
    div.innerHTML = body;
    return div;
}
