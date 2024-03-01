import moment from "moment";

export function formatDateTime(date: Date) {
  return moment(date).format("D MMMM, YYYY, h:mm:ss A");
}
