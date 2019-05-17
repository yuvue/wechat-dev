function filterTime(msgTimestamp) {
  let _time = new Date(msgTimestamp);
  let msgTime = {
    year: _time.getFullYear(),
    month: _time.getMonth() + 1,
    date: _time.getDate(),
    day: _time.getDay(),
    hour: _time.getHours(),
    minite: _time.getMinutes(),
    getHourMinite() {
      let minite = this.minite;
      if (minite < 10) {
        minite = `0${minite}`;
      }
      if (this.hour >= 13) {
        return `下午${this.hour - 12}:${minite}`;
      } else {
        return `上午${this.hour}:${minite}`;
      }
    },
    getYearMonthDay() {
      return `${this.year}/${this.month}/${this.date}`;
    }
  };
  let date = new Date();
  let todayTimestamp = Date.parse(
    `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
  );
  if (msgTimestamp > todayTimestamp) {
    return msgTime.getHourMinite();
  } else if (msgTimestamp > todayTimestamp - 1000 * 60 * 60 * 24) {
    return "昨天";
  } else if (msgTimestamp > todayTimestamp - 1000 * 60 * 60 * 24 * 7) {
    let day = ["一", "二", "三", "四", "五", "六", "日"];
    return `星期${day[msgTime.day]}`;
  } else {
    return msgTime.getYearMonthDay();
  }
}

export default filterTime;
