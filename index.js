

function distanceFromHqInBlocks(streetNumber) {
    return Math.abs(streetNumber - 42);
}

function distanceFromHqInFeet(streetNumber) {
    return distanceFromHqInBlocks(streetNumber) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
    const distance = Math.abs(start - destination) * 264
    let fare;

    if (distance < 400) {
        fare = 0
    } else if (400 < distance && distance < 2000) {
        fare = (distance - 400) *0.02
    } else if (distance > 2000 && distance < 2500) {
        fare = 25
    } else if (distance >= 2500) {
        fare = 'cannot travel that far'
    }

    return fare
}