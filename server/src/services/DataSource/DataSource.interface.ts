import { User } from "../../components/users/models/Users";

// export interface DataSourceConfig {
//   type: string;
//   host: string;
//   port: string;
//   username: string;
//   password: string;
//   database: string;
//   entities: User[];
//   synchronize: boolean;
//   logging: boolean;
//   initialize(): Promise<void>;
// }
export interface EnvVariables {
  DB_HOST: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_NAME: string;
  DB_PORT: number;
}
