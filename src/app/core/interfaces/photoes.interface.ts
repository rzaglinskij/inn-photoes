import {Timestamp} from "rxjs/internal/types";

export interface PhotoesInterface {
  name: string;
  url: string;
  size: number;
  modified: Timestamp<number>;
}
