export class ProfileImage {
  id?: number;
  filename: string;
  filetype: string;
  base64?: string;
  url?: string;
  sort: number;
  isShow: boolean = false;


  constructor(id: number = 0, filename: string, filetype: string, value: string) {
      this.id = id;
      this.filename = filename;
      this.filetype = filetype;
      this.base64 = value;
  }
}
