angular.module('tictactoe')
    .controller('TicTacController', TicTacController);
  // Get a reference to the Firebase
 function TicTacController($scope) {

    $scope.cells =['','','','','','','','',''];
    $scope.currentMark = 'o';
    $scope.empty = true;
    $scope.moves = 1;
    $scope.gameover = false;
    $scope.leftScore = 0;
    $scope.rightScore = 0;


    $scope.drawMark = function(index) {
        if ($scope.gameover === false && $scope.cells[index] === '') {
            if ($scope.currentMark === 'o') {
                $scope.cells[index] = 'x';
                $scope.currentMark = 'x';
                document.getElementsByClassName("cell").innerHTML = $scope.cells[index];
            } else {
                $scope.cells[index] = 'o';
                $scope.currentMark = 'o';
                document.getElementsByClassName("cell").innerHTML = $scope.cells[index];
            }
        }
        console.log($scope.cells)
        if ($scope.gameover === false) evaluateWin();
    };

    var evaluateWin = function() {
        if ($scope.cells[0] == "x" && $scope.cells[1] == "x" && $scope.cells[2] == "x") {
            xwin();
        } else if ($scope.cells[3] == "x" && $scope.cells[4] == "x" && $scope.cells[5] == "x") {
            xwin();
        } else if ($scope.cells[6] == "x" && $scope.cells[7] == "x" && $scope.cells[8] == "x") {
            xwin();
        } else if ($scope.cells[0]== "x" && $scope.cells[3]== "x" && grid[6] == "x") {
            xwin();
        } else if ($scope.cells[1] == "x" && $scope.cells[4] == "x" && $scope.cells[7] == "x") {
            xwin();
        } else if ($scope.cells[2] == "x" && $scope.cells[5] == "x" && $scope.cells[8] == "x") {
            xwin();
        } else if ($scope.cells[0] == "x" && $scope.cells[4] == "x" && $scope.cells[8] == "x") {
            xwin();
        } else if ($scope.cells[2] == "x" && $scope.cells[4] == "x" && $scope.cells[6] == "x") {
            xwin();
        } else if ($scope.cells[0] == "o" && $scope.cells[1] == "o" && $scope.cells[2] == "o") {
            owin();
        } else if ($scope.cells[3] == "o" && $scope.cells[4] == "o" && $scope.cells[5] == "o") {
            owin();
        } else if ($scope.cells[6] == "o" && $scope.cells[7] == "o" && $scope.cells[8] == "o") {
            owin();
        } else if ($scope.cells[0]== "o" && $scope.cells[3]== "o" && grid[6] == "o") {
            owin();
        } else if ($scope.cells[1] == "o" && $scope.cells[4] == "o" && $scope.cells[7] == "o") {
            owin();
        } else if ($scope.cells[2] == "o" && $scope.cells[5] == "o" && $scope.cells[8] == "o") {
            owin();
        } else if ($scope.cells[0] == "o" && $scope.cells[4] == "o" && $scope.cells[8] == "o") {
            owin();
        } else if ($scope.cells[2] == "o" && $scope.cells[4] == "o" && $scope.cells[6] == "o") {
            owin();
        } else if ($scope.moves == 9) {
            var messagebox = document.getElementById('message');
            $scope.leftMessage = "draw...";
            $scope.rightMessage = "draw...";
        } else {
            $scope.moves += 1;
        }
    };

    $scope.setName1 = function(player1Name) {
        $scope.player1Name = '';
    };

    $scope.setName2 = function(player2Name) {
        $scope.player2Name = '';
    };

    $scope.removeFocus1 = function(key) {
        if (key.keyCode == 13) {
            key.target.blur();
        }
    };

    $scope.removeFocus2 = function(key) {
        if (key.keyCode == 13) {
            key.target.blur();
        }
    };

    var xwin = function () {
        $scope.leftMessage = $scope.player1Name + " wins!";
        gameover = true;
        $scope.leftScore += 1;
    };

    var owin = function () {
        $scope.rightMessage = $scope.player2Name + " wins!";
        $scope.gameover = true;
        $scope.rightScore += 1;
    };

    $scope.clearBoard = function() {
        console.log('you tried to clear the board');
        for (var j = 0; j < $scope.cells.length; j++) {
            $scope.cells[j] = "";
        }
        $scope.leftMessage = "";
        $scope.rightMessage = "";
        $scope.currentMark = 'o';
        $scope.empty = true;
        $scope.moves = 1;
        $scope.gameover = false;
    };

}
