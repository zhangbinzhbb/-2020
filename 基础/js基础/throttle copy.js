function throttle(fn, interval) {
    let last = 0
    return function () {
        let context = this
        let args = arguments
        let now = +new Date()

        if (now - last >= interval) {
            // 如果时间间隔大于我们设定的时间间隔阈值，则执行回调
            last = now;
            fn.apply(context, args);
        }
    }
}