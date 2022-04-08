import { BaseModel } from "../BaseModel";

export class Classes extends BaseModel{
    name: string;
    description: string;
    disciplines: Disciplines [];
  
    constructor(id: number = 0, name: string, description: string, disciplines: Disciplines []) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
        this.disciplines = disciplines;
    }

    public static map(v: any) { 
        return new Classes(v.id, v.name, v.description, v.disciplines?.map(Disciplines.map));
    }
}

export class Disciplines extends BaseModel{
    name: string;
    description: string;
  
    constructor(id: number = 0, name: string, description: string) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public static map(v: any) { 
        return new Disciplines(v.id, v.name, v.description);
    }
  }