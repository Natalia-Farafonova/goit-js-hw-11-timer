class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.refs = {
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      mins: document.querySelector('[data-value="mins"]'),
      secs: document.querySelector('[data-value="secs"]'),
      timerOver: document.querySelector('[data-value="over"]'),
    };
  }
  dateTimer() {
    setInterval(() => {
      const endDate = this.targetDate.getTime();

      let nowTime = Date.now();
      let time = endDate - nowTime;

      if (time > 0) {
        const day = Math.floor(time / (1000 * 60 * 60 * 24));
        const hour = Math.floor(
          (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const sec = Math.floor((time % (1000 * 60)) / 1000);

        this.updateTimer(this.refs.secs, sec);
        this.updateTimer(this.refs.mins, min);
        this.updateTimer(this.refs.hours, hour);
        this.updateTimer(this.refs.days, day);
      } else {
        this.refs.timerOver.textContent = `Timer is over`;
      }
    }, 1000);
  }
  updateTimer(nums, num) {
    if (num <= 9) {
      nums.textContent = '0' + num;
    } else {
      nums.textContent = num;
    }
  }
}

const start = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2031'),
});

start.dateTimer();