/// <reference path="./global.d.ts" />

export = PeraSwarm;
export as namespace PeraSwarm;

// High Level API
declare namespace PeraSwarm {
    interface Coordinate {}
    interface CoordinateZ extends Coordinate {}
    interface GeneralCoordinate extends Coordinate {}
    interface GeneralCoordinateZ extends CoordinateZ {}
    interface CustomCoordinate extends Coordinate {}
    interface CustomCoordinateZ extends CoordinateZ {}
    function validateCoordinate(coorinate: CoordinateType): boolean;

    interface Sensor {}
    interface GeneralColorSensor extends Sensor {}
    interface GeneralCompassSensor extends Sensor {}
    interface GeneralDistanceSensor extends Sensor {}
    interface GeneralProximitySensor extends Sensor {}

    interface CustomColorSensor extends Sensor {}
    interface CustomCompassSensor extends Sensor {}
    interface CustomDistanceSensor extends Sensor {}
    interface CustomProximitySensor extends Sensor {}
    function validateSensor(sensor: SensorType): boolean;

    interface Robot {}
    interface GeneralRobot extends Robot {}
    interface CustomRobot extends Robot {}
    function validateRobot(robot: Robot): boolean;
}
