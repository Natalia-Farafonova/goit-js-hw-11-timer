// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.selector = selector;
//     this.targetDate = targetDate;
    

//     this.refs = {
//       days: document.querySelector('[data-value="days"]'),
//       hours: document.querySelector('[data-value="hours"]'),
//       mins: document.querySelector('[data-value="mins"]'),
//       secs: document.querySelector('[data-value="secs"]'),
//       timerOver: document.querySelector('[data-value="over"]'),
//     };

    
//   }
//   dateTimer() {
//     setInterval(() => {
//       const endDate = this.targetDate.getTime();

//       let nowTime = Date.now();
//       let time = endDate - nowTime;

//       if (time > 0) {
//         const day = Math.floor(time / (1000 * 60 * 60 * 24));
//         const hour = Math.floor(
//           (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
//         );
//         const min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//         const sec = Math.floor((time % (1000 * 60)) / 1000);

//         this.updateTimer(this.refs.secs, sec);
//         this.updateTimer(this.refs.mins, min);
//         this.updateTimer(this.refs.hours, hour);
//         this.updateTimer(this.refs.days, day);
//       } else {
//         this.refs.timerOver.textContent = `Timer is over`;
//       }
//     }, 1000);
//   }
//   updateTimer(nums, num) {
//     if (num <= 9) {
//       nums.textContent = '0' + num;
//     } else {
//       nums.textContent = num;
//     }
//   }
// }


// const start = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Dec 31, 2031'),
// });



// start.dateTimer();

class CountdownTimer {
    constructor(selector,targetDate) {
        this.element = document.querySelector(selector);
        this.targetDate = Date.parse(targetDate);
        this.start()
    }

    start(){
        setInterval(() =>{
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const {days , hours , mins , secs} = this.getTimeComponents(deltaTime);
            this.updateClock(this.getTimeComponents(deltaTime))
        },1000)
    }

    updateClock({days, hours, mins, secs}){
        this.element.querySelector("[data-value = 'days']").innerHTML = days;
        this.element.querySelector("[data-value='hours']").innerHTML = hours;
        this.element.querySelector("[data-value='mins']").innerHTML = mins;
        this.element.querySelector("[data-value='secs']").innerHTML = secs;
    }

    pad(value){
        return String(value).padStart(2,'0');
    }

    getTimeComponents (time){
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return {days , hours , mins , secs}
    }
}

const start = new CountdownTimer('#timer-1',"Dec 31, 2031");

const startNewYear = new CountdownTimer('#timer-2',"Dec 31, 2021");


