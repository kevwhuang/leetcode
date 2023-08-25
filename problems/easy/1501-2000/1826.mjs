// 1826 - Faulty Sensor

function badSensor(sensor1, sensor2) {
    for (let i = 0; i < sensor1.length - 1; i++) {
        if (sensor1[i] !== sensor2[i]) {
            if (sensor1[i] === sensor2[i + 1]
                && sensor2[i] !== sensor1[i + 1]) return 1;
            if (sensor2[i] === sensor1[i + 1]
                && sensor1[i] !== sensor2[i + 1]) return 2;
        }
    }
    return -1;
}
