import * as React from "react";
import { CbrPpProps, CbrPp } from "mx-wolf-cbr-pp";
import {StateInfo} from "./state-info";
import {getStateInfo} from "./get-state-info"

const ppInit = undefined as (Partial<CbrPpProps> | undefined);

const accessTokenInit = undefined as (string | undefined);

const siInit = undefined as (StateInfo | undefined);
export const PpContoller: React.FC = () => {
  const search = window.location.search;
  const [si, setSi] = React.useState(siInit);
  const [pp, setPp] = React.useState(ppInit);
  const [at, setAt] = React.useState(accessTokenInit)
  const { СуммаПрописью: sp, Сумма: s } = typeof pp === "undefined" ? { СуммаПрописью: undefined, Сумма: undefined } : pp;

  React.useEffect(async () => {
    if (typeof si === "undefined") {
      setSi(getStateInfo(search));
      return;
    }
    if (typeof at === "undefined") {
      const {otp, xid} = si;
      setAt(await getUserAutorization({otp,xid}))
      return;
    }
    if (typeof pp === "undefined") {
      return;
    }
    if (typeof sp === "undefined") {
      return;
    }
    return;
  }, [si,setSi, pp, setPp, at, setAt,search]);

  if (typeof si === "undefined") {
    return (<div>...инициализация сессии</div>);
  }
  if (typeof at === "undefined") {
    return (<div>...авторизация доступа</div>);
  }
  if (typeof pp === "undefined") {
    return (<div>...получение данных</div>);
  }
  if (typeof sp === "undefined") {
    return (<div>...сумма прописью</div>);
  }
  return (<CbrPp {...pp} />);



};