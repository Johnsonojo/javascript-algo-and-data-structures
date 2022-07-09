const generateWithZeroOTP = (otp_length) => {
  let digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < otp_length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

// otp without 0
const generateOTP = (otp_length) => {
  let digits = "1234567891";
  let OTP = "";
  for (let i = 0; i < otp_length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
    // console.log(OTP);
  }
  return OTP;
};

setInterval(() => {
  console.log(generateOTP(6));
}, 1000);
