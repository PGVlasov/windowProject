const timer = (id, deadLine) => {
  const getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hour = Math.floor(minutes % 60);
  };
};

export default timer;
