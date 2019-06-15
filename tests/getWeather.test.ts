import { isPostalCode } from '../src/getWeather'


test('Expects true to be returned as location is a postal code', () =>{
  expect(isPostalCode("94016")).toBeTruthy();
});

test('Expects false because London is a city not postal code', () =>{
  expect(isPostalCode("London")).toBeFalsy();
});
