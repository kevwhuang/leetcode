// 2739 - Total Distance Traveled

function distanceTraveled(mainTank, additionalTank) {
    let km = 0;
    while (true) {
        if (mainTank < 5) {
            km += mainTank;
            break;
        } else {
            km += 5;
            mainTank -= 5;
            if (additionalTank) {
                additionalTank--;
                mainTank++;
            }
        }
    }
    return km * 10;
}
