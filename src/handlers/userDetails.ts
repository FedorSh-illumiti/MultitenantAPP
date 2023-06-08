import jwtDecode from "jwt-decode";
import { type } from "os";
import { IUserDetails } from "src/types/service.tscompany1.forecasting";

export default class userDetails {
  public async handleGet(req: any): Promise<IUserDetails> {
    const token = req.req.tokenInfo.getTokenValue();
    const tokenDecoded = jwtDecode(token) as any;

    return {
      email: tokenDecoded.email,
      familyName: tokenDecoded.family_name,
      givenName: tokenDecoded.given_name,
      logonName: req.req.user.id,
      initials: (
        tokenDecoded.given_name[0] + tokenDecoded.family_name[0]
      ).toUpperCase(),
    };
  }
}
