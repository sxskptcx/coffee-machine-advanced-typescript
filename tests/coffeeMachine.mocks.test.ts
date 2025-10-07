import { CoffeeMachine } from '../src/coffeeMachine';
import { Drink } from '../src/drink';

import * as notifications from '../src/utils/notifications';

describe('CoffeeMachine notifications (mocks)', () => {
beforeEach(() => {
    jest.clearAllMocks();
});

    it('should notify user when serving a drink', () => {
        const machine = new CoffeeMachine();
        const drink: Drink = { name: 'coffee', size: 'small', sugar: 0, milk: false, basePrice: 2 };
        const notifyUserSpy = jest.spyOn(notifications, 'notifyUser').mockImplementation(jest.fn());

        machine.serve(drink, 4, false, 10);

        expect(notifyUserSpy).toHaveBeenCalled();
        expect(notifyUserSpy).toHaveBeenCalledWith(expect.stringContaining('Serving coffee'));
        expect(notifyUserSpy).toHaveBeenCalledTimes(1);
    });

    it('should notify user when serving other drink', () => {
        const machine = new CoffeeMachine();
        const drink: Drink = { name: 'coffee other', size: 'small', sugar: 0, milk: false, basePrice: 2 };
        const notifyUserSpy = jest.spyOn(notifications, 'notifyUser').mockImplementation(jest.fn());

        machine.serve(drink, 4, false, 10);

        expect(notifyUserSpy).toHaveBeenCalled();
        expect(notifyUserSpy).toHaveBeenCalledWith(expect.stringContaining('Serving coffee other'));
        expect(notifyUserSpy).toHaveBeenCalledTimes(1);
    });
});
