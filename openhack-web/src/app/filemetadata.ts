import { ErrorData } from './errordata';

export interface Filemetadata {
  id: string;
  jsonData: string;
  fileName: string;
  createdDate: Date;
  updatedDate: Date;
  validateStatus: string;
  errorDataList: Array<ErrorData>;
}
