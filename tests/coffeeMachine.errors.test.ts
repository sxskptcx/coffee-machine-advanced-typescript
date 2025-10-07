import { CoffeeMachine } from '../src/coffeeMachine';
import { Drink } from '../src/drink';

describe('CoffeeMachine errors', () => {
    it('throw too much sugar error (6+)', async () => {
        const machine = new CoffeeMachine();
        const drink = new Drink('coffee', 5, false, 6, 'small');

        const wrapper = () => machine.serve(drink, 10, false, 14);

        expect(wrapper).toThrow('Too much sugar');
    });
    
    it('throws on too much sugar (6+)', async () => {
        const machine = new CoffeeMachine();
        const drink = new Drink('latte', 3.5, true, 6, 'medium');

        try {
            machine.serve(drink, 2, false, 10);
        } catch (error) {
            expect(error).toEqual(new Error('Too much sugar'));
        }
    });

    it('throws not anough money error', async () => {
        const machine = new CoffeeMachine();
        const drink = new Drink('coffee', 5, false, 0, 'small');

        try {
            machine.serve(drink, 3, false, 14);
        } catch (error) {
            expect(error).toEqual(new Error('Not enough money'));
        }
    });
});
