import { CoffeeMachine } from '../src/coffeeMachine';
import { Drink } from '../src/drink';

describe('CoffeeMachine basic', () => {
  it('serves small coffee with exact money', () => {
    const coffeeMachine = new CoffeeMachine();
    const drink = new Drink('coffee', 5, false, 0, 'small');

    const result = coffeeMachine.serve(drink, 5, false, 14);

    expect(result).toBe('Serving coffee (small)');
  });

  it('serves tea and returns change', () => {
    const coffeeMachine = new CoffeeMachine();
    const drink = new Drink('tea', 5, false, 0, 'small');

    const result = coffeeMachine.serve(drink, 7, false, 14);

    expect(result).toBe('Serving tea (small) with change 2.00');
  });

  it('applies milk surcharge', () => {
    const coffeeMachine = new CoffeeMachine();
    const drink = new Drink('coffee', 5, true, 0, 'small');

    const result = coffeeMachine.serve(drink, 5.2, false, 14);

    expect(result).toBe('Serving coffee (small)');
  });

  it('applies sugar surcharge above 2 cubes', () => {
    const coffeeMachine = new CoffeeMachine();
    const drink = new Drink('coffee', 5, false, 3, 'small');

    const result = coffeeMachine.serve(drink, 5.1, false, 14);

    expect(result).toBe('Serving coffee (small)');
  });
});
