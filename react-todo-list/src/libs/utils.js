function _addZero(value) {
  return value < 10 ? '0' + value : value;
}

export function formatTime(timestamp) {
  const t = new Date(timestamp);

  const y = t.getFullYear(),
    m = t.getMonth() + 1,
    d = t.getDate(),
    h = _addZero(t.getHours()),
    mm = _addZero(t.getMinutes()),
    s = _addZero(t.getSeconds());

  return `${y}年${m}月${d}日${h}时${mm}分${s}秒`;
}
