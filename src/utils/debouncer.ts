export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  waitFor: number,
) => {
  let timeout: NodeJS.Timeout = null;
  const debounced = (...args: Parameters<F>) => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
};

export const throttler = <F extends (...args: any[]) => any>(
  func: F,
  waitFor: number,
) => {
  let throttleCheck: NodeJS.Timeout;
  const throttled = (...args: Parameters<F>) => {
    if (!throttleCheck) {
      throttleCheck = setTimeout(() => {
        func(...args);
        throttleCheck = null;
      }, waitFor);
    }
  };

  return throttled as (...args: Parameters<F>) => ReturnType<F>;
};
