const times = require("./times");

function sumTimes(times) {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  times.forEach((time) => {
    const parts = time.split(/[:\s]/);
    // console.log("parts :>> ", parts);
    if (parts.length === 3) {
      hours += Number(parts[0].split("h")[0]);
      console.log("hours :>> ", hours);
      minutes += Number(parts[1].split("m")[0]);
      console.log("minutes :>> ", minutes);

      seconds += Number(parts[2].split("s")[0]);
      console.log("seconds :>> ", seconds);
    } else {
      minutes += Number(parts[0].split("m")[0]);
      seconds += Number(parts[1].split("s")[0]);
    }
  });

  // handle minutes and seconds carrying over to the next hour
  hours += Math.floor(minutes / 60);
  minutes = (minutes % 60) + Math.floor(seconds / 60);
  seconds = (seconds % 60) + Math.floor(minutes / 60);

  const result = `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  return result;
}

console.log(sumTimes(times));

// function convertTimeArray(times) {
//   let totalSeconds = 0;

//   for (const time of times) {
//     const [hours, minutes, seconds] = time
//       .split(":")
//       .map((str) => parseInt(str, 10));
//     totalSeconds += hours * 60 * 60 + minutes * 60 + seconds;
//   }

//   const totalMinutes = totalSeconds / 60;
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = Math.floor(totalMinutes % 60);
//   const seconds = Math.round(totalSeconds % 60);

//   if (seconds >= 60) {
//     minutes += Math.floor(seconds / 60);
//     seconds = seconds % 60;
//   }

//   if (minutes >= 60) {
//     hours += Math.floor(minutes / 60);
//     minutes = minutes % 60;
//   }

//   return `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
// }

// console.log(convertTimeArray(times));
