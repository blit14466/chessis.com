document.getElementById('startGame').addEventListener('click', function() {
    alert('Game starting soon...');
});
document.addEventListener('DOMContentLoaded', function() {
    var board = Chessboard('#board');
    var startBtn = document.getElementById('startGameBtn');
    
    // Start the game when the button is clicked
    startBtn.addEventListener('click', function() {
        board.start();
    });
});
