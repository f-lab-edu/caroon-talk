import { throttler, debounce } from '../src/utils/debouncer';

describe('throttle test', () => {
  it('call 5 times when throttle time sleep 100ms during 500ms', () => {
    jest.useFakeTimers();
    const throttledSpy = jest.fn();
    const debounceSpy = jest.fn();
    const throttledFunc = throttler(throttledSpy, 100);
    const debounceFunc = debounce(debounceSpy, 100);

    for (let index = 0; index < 100; index++) {
      throttledFunc(); // 500ms동안 5번
      debounceFunc(); // 매번 새로 갱신되기 때문에 1번
      jest.advanceTimersByTime(5);
    }

    jest.advanceTimersByTime(1000);

    expect(throttledSpy).toHaveBeenCalledTimes(5);
    expect(debounceSpy).toHaveBeenCalledTimes(1);
  });
});
