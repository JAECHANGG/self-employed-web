import moment from "moment";

export const HHmmTime = (time: string) => {
  return moment(time).format("HH:mm");
};

export const MMDDHHmmTime = (time: string) => {
  return moment(time).format("MM/DD HH:mm");
};
