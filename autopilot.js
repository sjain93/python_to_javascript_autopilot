cars = [];

let get_new_car = function() {
  return {
    'city': 'Toronto',
    'passengers': 0,
    'gas': 100,
  };
};

let add_car = function(cars, new_car){
  cars.push(new_car);
  let tot_len = cars.length;
  return `Adding new car to fleet. Fleet size is now ${tot_len}`;
};

let add_one_car_per_day = function(cars, num_days) {
  for (day=0; day<num_days; day++){
    let new_car = get_new_car();
    console.log(add_car(cars, new_car));
  }
};

add_one_car_per_day(cars, 10);
console.log(cars);
