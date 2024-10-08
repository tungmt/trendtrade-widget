import dayjs from "dayjs";

export function convertDateTime(timestamp) {
    const seconds = timestamp._seconds;

    const date = new Date(seconds * 1000);
  
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
}

export function convertDateTimeFromNow(timestamp) {
    const seconds = timestamp._seconds;

    const date = new Date(seconds * 1000);
  
    return dayjs(date).fromNow();
}