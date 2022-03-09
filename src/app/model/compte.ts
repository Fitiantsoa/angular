export class Compte {
  private _login: string | undefined;
  private _role: string | undefined;

  constructor(login?: string, role?: string) {
    this._login = login;
    this._role = role;
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

  get role(): string | undefined {
    return this._role;
  }

  set role(value: string | undefined) {
    this._role = value;
  }
}
