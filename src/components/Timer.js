import React, { useState, useEffect } from "react";

class Counter {
  constructor(maxCount, initialCount, overflowCallback = () => { }) {
    this.count = initialCount;
    this.maxCount = maxCount;
    this.overflowCallback = overflowCallback;
  }

  dec() {
    if (!this.isStopped) {
      if (this.count - 1 < 0) {
        this.overflowCallback();
        return this.count = this.maxCount;
      }
      this.count--;
    }
  }

  get() {
    return this.count;
  }

}

function decTens() {
  tensCounter.dec();
}

function decMinutes() {
  minutesCounter.dec();
}

function decSeconds() {
  secondsCounter.dec();
}

const tensCounter = new Counter(6, 0);
const minutesCounter = new Counter(9, 2, decTens);
const secondsCounter = new Counter(5, 3, decMinutes);
const msHundredsCounter = new Counter(9, 0, decSeconds);

function Timer() {
  const [time, setTime] = useState([tensCounter.get(), minutesCounter.get(), ':', secondsCounter.get(), msHundredsCounter.get()].join(''));
  useEffect(() => {
    if (time !== '00:00') {
      const interval = setInterval(() => {
        msHundredsCounter.dec();
        setTime(() => [tensCounter.get(), minutesCounter.get(), ':', secondsCounter.get(), msHundredsCounter.get()].join(''));
      }, 100);
      return () => clearInterval(interval);
    }
  }, [time]);
  return (
    <div className="timer">{time}</div>
  )
}

export default Timer;