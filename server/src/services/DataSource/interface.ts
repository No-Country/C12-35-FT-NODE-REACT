export interface EnvVariables {
  DB_HOST: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_NAME: string;
  DB_PORT: string;
}

export interface DBInterface {
  getAll(): any;
  getById(id: number): any;
  findBy(data: any): any;
  findOne(data: any): any;
  save(entity: any): any;
  update(id: number, data: any): any;
  delete(id: number): any;
}
