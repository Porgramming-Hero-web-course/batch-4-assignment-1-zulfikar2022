
type Circle = {
    shape: "circle";
    radius: number
}

type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
}

type CircleAndRectangle = Circle | Rectangle;

const circle: CircleAndRectangle = {
    shape: "circle",
    radius: 5
}
const rectangle: CircleAndRectangle = {
    shape: "rectangle",
    width: 4,
    height: 6
}

function calculateShapeArea(obj: CircleAndRectangle): number {
    if (obj.shape === 'circle') {
        return Math.PI * obj.radius * obj.radius;
    }
    else {
        return obj.height * obj.width;
    }
}



