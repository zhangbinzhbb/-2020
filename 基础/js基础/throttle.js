// fn是我们需要包装的事件回调, interval是时间间隔的阈值
function throttle(fn, interval) {
    // last为上一次触发回调的时间
    let last = 0
    
    // 将throttle处理结果当作函数返回
    return function () {
        // 保留调用时的this上下文
        let context = this
        // 保留调用时传入的参数
        let args = arguments
        
        // 记录本次触发回调的时间
        let now = +new Date()
        
        // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
        if (now - last >= interval) {
        // 如果时间间隔大于我们设定的时间间隔阈值，则执行回调
            last = now;
            fn.apply(context, args);
        }
      }
  }
  // 用throttle来包装scroll的回调
  const better_scroll = throttle(() => console.log('触发了滚动事件'), 1000)
  document.addEventListener('scroll', better_scroll)

  //  scroll 事件，resize 事件、鼠标事件（比如 mousemove、mouseover 等）、键盘事件（keyup、keydown 等）都存在被频繁触发的风险

  // throttle 的中心思想在于：在某段时间内，不管你触发了多少次回调，我都只认第一次，并在计时结束时给予响应。