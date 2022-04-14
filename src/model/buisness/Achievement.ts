import { BaseModel } from "../BaseModel";

export class Achievement extends BaseModel {
    name: string;
    description: string;
    base64: string;
    childrenCount: number;
  
    constructor(id: number = 0, name: string, description: string, base64: string, childrenCount: number) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
        this.base64 = base64;
        this.childrenCount = childrenCount;
    }

    public static map(v: any) { 
        return new Achievement(v.id, v.name, v.description, v.base64, v.childrenCount);
    }
  }