const mergeTwoArrays = (arr1, arr2) => {
  // create a results array
  let results = [];
  // create left and right pointers to each array's starting index
  let i = 0;
  let j = 0;
  // loop over both array while there is still an element to check for
  while (i < arr1.length && j < arr2.length) {
    // if the array at index of arr1 is less than the array at index of arr2 push arr1[i] into the results array
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    }
    // if the array at index of arr2 is less than the array at index of arr1, push arr2[j] into the results array
    else {
      results.push(arr2[j]);
      j++;
    }
  }
  // if either of both arrays have been exhausted, push the remaining elements into the results array
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  // return results array
  return results;
};

const mergeSortAscending = (arr) => {
  const mergeTwoArrays = (arr1, arr2) => {
    // create a results array
    let results = [];
    // create left and right pointers to each array's starting index
    let i = 0;
    let j = 0;
    // loop over both array while there is still an element to check for
    while (i < arr1.length && j < arr2.length) {
      // if the array at index of arr1 is less than the array at index of arr2 push arr1[i] into the results array
      if (arr1[i] < arr2[j]) {
        results.push(arr1[i]);
        i++;
      }
      // if the array at index of arr2 is less than the array at index of arr1, push arr2[j] into the results array
      else {
        results.push(arr2[j]);
        j++;
      }
    }
    // if either of both arrays have been exhausted, push the remaining elements into the results array
    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      results.push(arr2[j]);
      j++;
    }
    // return results array
    return results;
  };
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return mergeTwoArrays(mergeSortAscending(left), mergeSortAscending(right));
};

const mergeSortDescending = (arr) => {
  const mergeTwoArrays = (arr1, arr2) => {
    // create a results array
    let results = [];
    // create left and right pointers to each array's starting index
    let i = 0;
    let j = 0;
    // loop over both array while there is still an element to check for
    while (i < arr1.length && j < arr2.length) {
      // if the array at index of arr1 is less than the array at index of arr2 push arr1[i] into the results array
      if (arr1[i] > arr2[j]) {
        results.push(arr1[i]);
        i++;
      }
      // if the array at index of arr2 is less than the array at index of arr1, push arr2[j] into the results array
      else {
        results.push(arr2[j]);
        j++;
      }
    }
    // if either of both arrays have been exhausted, push the remaining elements into the results array
    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      results.push(arr2[j]);
      j++;
    }
    // return results array
    return results;
  };

  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return mergeTwoArrays(mergeSortDescending(left), mergeSortDescending(right));
};
console.log(mergeSortAscending([2, 5, 13, 34, 9, 10, 36, 51, 6, 7, 8]));
console.log(mergeSortDescending([2, 5, 13, 34, 9, 10, 36, 51, 6, 7, 8]));

const resume = {
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@doe.com",
  funFact: "Im fake!",
  bio: "Not much to say about me since I don't exist!",
  hobbies: ["impersonating a personsss, Going hikings, happiness"],
  pastJobs: [
    {
      company: "Fake Inc.",
      startDate: "2019-11-14T23:41:24.104Z",
      endDate: "2019-11-14T23:41:24.104Z",
      accomplishments: ["Get a job without being alive!"],
      languagesUsed: ["JAVASCRIPT"],
      technologiesUsed: ["REACT"],
    },
  ],
};

console.log({
  ...resume,
  ...resume.pastJobs.map((job) => {
    job.company = "Real Inc.";
    return job;
  }),
});
// console.log(resume);
