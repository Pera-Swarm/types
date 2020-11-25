/**
 * @type CoordinateType
 */
type CoordinateType = {
    id: number;
    heading: number;
    x: number;
    y: number;
};

/**
 * @class Coordinate
 */
class Coordinate {
    protected _id: number;
    protected _heading: number;
    protected _x: number;
    protected _y: number;

    constructor(id: number, heading: number, x: number, y: number) {
        this._id = id;
        this._heading = heading;
        this._x = x;
        this._y = y;
    }

    /**
     * the coordinate id
     */
    get id() {
        return this._id;
    }

    /**
     * the coordinate values
     */
    get values(): CoordinateType {
        return {
            id: this._id,
            heading: this._heading,
            x: this._x,
            y: this._y
        };
    }

    /**
     * reset coordinates
     */
    reset() {
        this._heading = 0;
        this._x = 0;
        this._y = 0;
    }

    /**
     * set coordinates
     * @param {number} heading heading coordinate
     * @param {number} x x coordinate
     * @param {number} y y coordinate
     */
    setCoordinates(heading: number, x: number, y: number) {
        this._heading = heading;
        this._x = x;
        this._y = y;
    }
}

/**
 * method for validating a coordinate object.
 * returns true if valid or -1 if not.
 * @param {coordinate} coordinate
 */
function validateCoordinate(coordinate: CoordinateType): boolean | number {
    var validity: boolean | number;
    var i: number;
    i = -1;
    if (Object.prototype.hasOwnProperty.call(coordinate, 'id')) {
        i += 1;
    }
    if (Object.prototype.hasOwnProperty.call(coordinate, 'heading')) {
        i += 1;
    }
    if (Object.prototype.hasOwnProperty.call(coordinate, 'x')) {
        i += 1;
    }
    if (Object.prototype.hasOwnProperty.call(coordinate, 'y')) {
        i += 1;
    }
    if (i === 4) {
        validity = true;
    }
    return validity;
}

class CoordinateZ extends Coordinate {}

export { CoordinateType, Coordinate, CoordinateZ, validateCoordinate };
