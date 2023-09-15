interface Ac {
    brand: string,
    tonnage: number
}

interface Car {
    name: string,
    company: string,
    weight: number,
    ac: Ac, 
    testing: string[]
}

const myCar : Car = {
    name: 'swift',
    company: 'tata',
    weight: 1.5,
    ac: {
        brand: 'voltas',
        tonnage: 2
    },
    testing: ['test', 'test1']
}

console.log(myCar);
