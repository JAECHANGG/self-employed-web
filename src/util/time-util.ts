import moment from "moment";

export const HHmmTime = (time: string) => {
  return moment(time).format("HH:mm");
};
