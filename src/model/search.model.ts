import { State } from "../store";

export class SearchModel {
  changePattern(searchPattern: string) {
    State.search = searchPattern;
  }

  getPattern(searchPattern: string | null) {
    return searchPattern ? decodeURIComponent(searchPattern) : "";
  }
}
