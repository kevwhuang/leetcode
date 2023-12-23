// 1279 - Traffic Light Controlled Intersection

class TrafficLight {
    private int greenRoad = 1;
    public void carArrived(
        int carId,
        int roadId,
        int direction,
        Runnable turnGreen,
        Runnable crossCar
    ) {
        synchronized(this) {
            if (this.greenRoad != roadId) {
                turnGreen.run();
                this.greenRoad = roadId;
            }
            crossCar.run();
        }
    }
}
