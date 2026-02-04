const otpExpireTimer = (setstate) => {
  let seconds = 120; 
  let second = 0;
  const timer = setInterval(() => {
    let minutes = Math.floor(seconds / 60);
    second = seconds % 60;
    setstate({ minutes, second });
    if (seconds <= 0) {
      clearInterval(timer);
      setstate(timer=>({...timer,stop:true}));
    }
    seconds--;
  }, 1000);
};

export { otpExpireTimer };
