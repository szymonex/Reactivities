let data: number | string = 10;


data = 'kotek';

export interface ICar {
    color: string,
    model: string,
    topSpeed?: number
}

const car1: ICar = {
    color: "blue",
    model: "BMW",
}

const car2: ICar = {
    color: "red",
    model: "Mercedes",
    topSpeed: 210
}

const multiply = (x: number, y: number): string => {
    return (x*y).toString();
} 

export const cars = [car1, car2];

