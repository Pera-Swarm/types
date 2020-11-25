import { CoordinateType } from './coordinate';

/**
 * @type SensorType
 */
type SensorType = {
    id: number;
    value: number | number[];
};

/**
 * @type RobotType
 */
type RobotType = {
    id: number;
    coordinate: CoordinateType;
    sensors: SensorType[];
};

export { SensorType, RobotType };
