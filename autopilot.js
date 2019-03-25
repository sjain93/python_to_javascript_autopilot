cars = [];

let get_new_car = function() {
  return {
    'city': 'Toronto',
    'passengers': 0,
    'gas': 100,
  };
};
//subfunction of 1
let add_car = function(cars, new_car){
  cars.push(new_car);
  let tot_len = cars.length;
  return `Adding new car to fleet. Fleet size is now ${tot_len}`;
};

let pick_up_passenger = function(car){
  car.passengers ++;
  car.gas -= 10;
  return `Picked up passenger. Car now has ${car.passengers}.`;
};

let get_destination = function(car){
  if(car.city == 'Toronto'){
    return 'Mississauga';
  }
  else if (car.city == 'Mississauga'){
    return 'London';
  }
  else if (car.city == 'London'){
    return 'Toronto';
  }
};

let fill_up_gas = function(car){
  old_gas = car.gas;
  y = get_gas_display(old_gas);
  car.gas = 100;
  return `Filled up to ${car.gas} on gas from ${y}`;
};

let get_gas_display = function(gas_amount){
  return `${gas_amount}%`;
};

//sub subfunction of 2
let drive = function(car, city_distance){
  if (car.gas < city_distance) {
    return fill_up_gas();
  }
  car.city = get_destination(car);
  car.gas -= city_distance;
  let x = get_gas_display(car.gas);
  return `Drove to ${car.city}. Remaining gas: ${x}`;
};

//subfunction of 2
let drop_off_passengers = function(car){
  let previous_passengers = car.passengers;
  car.passengers = 0;
  return `Dropped off ${previous_passengers}.`;
};

//subfunction of 2
let act = function(car){
  let distance_between_cities = 50;

  if (car.gas < 20) {
    return fill_up_gas(car);
  }
  else if (car.passengers < 3) {
    return pick_up_passenger(car);
  }
  else {
    if (car.gas < distance_between_cities){
      return fill_up_gas(car);
    }
    let drove_to = drive(car, distance_between_cities);
    passengers_dropped = drop_off_passengers(car);
    return `${drove_to} ${passengers_dropped}`;
  }
};
//parent function 2
let command_fleet = function(cars) {
  i = 1;
  for (c = 0; c < cars.length; c++) {
    let action = act(cars[c]);
    console.log(`Car ${i}: ${action}`);
    i++;
  }
  console.log('---');
};

//super function
let add_one_car_per_day = function(cars, num_days) {
  for (day=0; day<num_days; day++){
    let new_car = get_new_car();
    console.log(add_car(cars, new_car));
    command_fleet(cars);
  }
};

add_one_car_per_day(cars, 10);
// console.log(cars);
