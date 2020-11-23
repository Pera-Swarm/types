interface Coordinate {}
interface CoordinateZ extends Coordinate {}

interface GeneralCoordinate extends Coordinate {}
interface GeneralCoordinateZ extends CoordinateZ {}
interface CustomCoordinate extends Coordinate {}
interface CustomCoordinateZ extends CoordinateZ {}

interface Sensor {}
interface GeneralColorSensor extends Sensor {}
interface GeneralCompassSensor extends Sensor {}
interface GeneralDistanceSensor extends Sensor {}
interface GeneralProximitySensor extends Sensor {}

interface CustomColorSensor extends Sensor {}
interface CustomCompassSensor extends Sensor {}
interface CustomDistanceSensor extends Sensor {}
interface CustomProximitySensor extends Sensor {}

interface Robot {}
interface GeneralRobot extends Robot {}
interface CustomRobot extends Robot {}
