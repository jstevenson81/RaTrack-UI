import moment from "moment";

export default interface IEntry {
  time: moment.Moment;
  feeling: string;
  id: string;
}
