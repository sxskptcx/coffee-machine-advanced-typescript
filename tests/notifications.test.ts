import fetch from 'node-fetch';
import { notifyUser } from '../src/utils/notifications';

jest.mock('node-fetch', () => jest.fn());

jest.useFakeTimers({ now: new Date('2000-01-01') });

describe('notifyUser', () => {
    it('calls fetch with correct URL, method and payload', async () => {
        const message = 'Hello World';
        const fetchSpy = jest.mocked(fetch);
        fetchSpy.mockResolvedValue({ ok: true } as any);

        await notifyUser(message);

        expect(fetchSpy).toHaveBeenCalledWith("https://example.com/api/notify", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: 'Hello World', timestamp: new Date().toISOString() }),
        });
    });
});
