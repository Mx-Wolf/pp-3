import { StateInfo } from "./state-info";
import { UserManager, UserManagerSettings } from "oidc-client"
import { authority, silent_redirect_uri, post_logout_redirect_uri } from "./config";

export async function getUserAutorization(p: Pick<StateInfo, "otp" | "xid">): Promise<string> {
  const { otp, xid } = p;
  return new Promise(async (resolve, reject) => {
    //todo: положить значение настроек - где авторизоваться и куда ходить за данными в отдельный модуль
    //todo: получить авторизацию с extra
    const settings: UserManagerSettings = {
      authority,
      client_id: "mice-pts",
      silent_redirect_uri,
      response_type: "code",
      scope: "openid one-es",
      post_logout_redirect_uri,
      extraQueryParams: { otp, xid },
    }
    const mgr = new UserManager(settings);
    const user = await mgr.getUser();
    if(user === null){
      reject(new Error("no user authorization"));
      return;
    }
    resolve(user.access_token);
  });
}