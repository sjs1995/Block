var local = function() {
    var game;
    var start = function() {
        var doms = {
            gameDiv: document.getElementById('game'),
            nextDiv: document.getElementById('next')
        }
        game = new Game();
        game.init(doms);
    }
    this.start = start;
}