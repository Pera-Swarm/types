/// <reference path="./global.d.ts" />

import { SensorType, RobotType } from './lib/index';

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
    // function validateCoordinate(coorinate: CoordinateType): boolean;

    interface Sensor {}
    class GeneralColorSensor implements Sensor {}
    class GeneralCompassSensor implements Sensor {}
    class GeneralDistanceSensor implements Sensor {}
    class GeneralProximitySensor implements Sensor {}

    class CustomColorSensor implements Sensor {}
    class CustomCompassSensor implements Sensor {}
    class CustomDistanceSensor implements Sensor {}
    class CustomProximitySensor implements Sensor {}
    function validateSensor(sensor: SensorType): boolean;

    interface Robot {}
    class GeneralRobot implements Robot {}
    class CustomRobot implements Robot {}
    function validateRobot(robot: Robot): boolean;
}
