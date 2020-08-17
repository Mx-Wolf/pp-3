import {StateInfo} from "./state-info";
import {UserManager, UserManagerSettings} from "oidc-client"

export async function getUserAutorization(p:Pick<StateInfo,"otp"|"xid">):Promise<string>{
  return new Promise(async (resolve, reject)=>{
    //todo: положить значение настроек - где авторизоваться и куда ходить за данными в отдельный модуль
    //todo: получить авторизацию с extra
  });
}