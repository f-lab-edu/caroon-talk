export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  waitFor: number,
) => {
  //   let timeout: ReturnType<typeof setTimeout> | null = null;

  let timeout: NodeJS.Timeout = null;
  const debounced = (...args: Parameters<F>) => {
    if (timeout !== null) {
      // timeout이 null이 아닐 경우 즉, timeout이 끝난 경우
      clearTimeout(timeout); // 기존의 E를 삭제한 후
      timeout = null;
    }
    timeout = setTimeout(() => func(...args), waitFor); // 시간이 지나기 전에 호출이 한번 더 될 경우 할당 or 재할당을 한다.
  }; // 하지만 이렇게 한 경우... 시간이 자나고 시도가 되는데...

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
    // if (timeout !== null) {
    //   // timeout이 null이 아닐 경우 즉, timeout이 끝난 경우
    //   clearTimeout(timeout); // 기존의 E를 삭제한 후
    //   timeout = null;
    // }
    // timeout = setTimeout(() => func(...args), waitFor); // 할당 or 재할당을 한다.     // 처음 시도할 경우 timeout에 설정이 될 것이다. 그 후 시간이 되기 전에 시도하면 timeout은 null인 상태로 있을 것이기에 다시 해야하지만...
  }; // 하지만 이렇게 한 경우... 시간이 자나고 시도가 되는데...

  return throttled as (...args: Parameters<F>) => ReturnType<F>;
};
