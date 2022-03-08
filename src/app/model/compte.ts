export class Compte {
  private _login: string | undefined;

  constructor(login?: string) {
    this._login = login;
  }

  /**
   * Getter login
   * @return {string}
   */
  public get login(): string | undefined {
    return this._login;
  }

  /**
   * Setter login
   * @param {string} value
   */
  public set login(value: string | undefined) {
    this._login = value;
  }
}
