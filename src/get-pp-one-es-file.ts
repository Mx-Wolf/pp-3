import { CbrPpProps } from "mx-wolf-cbr-pp";
import { api_url } from "./config";
import { parseOneEs } from "mx-wolf-cbr-pp";

export async function getPpOneEsFile(attachmentDataId: number, access_token: string): Promise<Partial<CbrPpProps>> {
  const rs = await fetch(`${api_url}/one-es/${attachmentDataId}`, {
    headers: {
      autorization: `Bearer ${access_token}`,
    }
  });
  if (rs.ok) {
    const txt = await rs.text();
    const result = parseOneEs(txt);
    if (result.СекцияДокумент === "Платежное поручение") {
      return result;
    }
    console.log(result)
    throw new Error('invalid PP parsed');
  }
  throw new Error(`${rs.status} - ${rs.statusText}`);
}