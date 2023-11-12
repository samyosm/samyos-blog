import { DocumentTypes } from "contentlayer/generated";
import moment from "moment";

export function sortDocument(a: DocumentTypes, b: DocumentTypes) {
  return moment(b.date, "YYYY-MM-DD").unix() -
    moment(a.date, "YYYY-MM-DD").unix();
}
