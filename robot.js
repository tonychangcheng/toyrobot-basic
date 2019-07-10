
function onCommandRight() {
    var mapCells = document.querySelectorAll('.map-cell');
    var currentRobotLocation = 0;
    for (var i = 0; i < mapCells.length; i++) {
        if (mapCells[i].innerHTML.length > 0) {
            currentRobotLocation = i;
            break;
        }
    }
    mapCells[currentRobotLocation].innerHTML = '';
    // todo check the available of the target position
    mapCells[currentRobotLocation + 1].innerHTML = 'R';
}

function onCommandLeft() {
    var mapCells = document.querySelectorAll('.map-cell');
    var currentRobotLocation = 0;
    for (var i = 0; i < mapCells.length; i++) {
        if (mapCells[i].innerHTML.length > 0) {
            currentRobotLocation = i;
            break;
        }
    }
    mapCells[currentRobotLocation].innerHTML = '';
    // todo check the available of the target position
    mapCells[currentRobotLocation - 1].innerHTML = 'R';
}
