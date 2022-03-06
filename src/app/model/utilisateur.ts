import { Adresse } from './adresse';
import { Civilite } from './civilite';
export class Utilisateur {
  private _id: number | undefined;
  private _civilite: Civilite | undefined;
  private _adresse: Adresse | undefined;
  private _login: string | undefined;

  constructor(
    id?: number,
    adresse?: Adresse,
    login?: string,
    civilite?: Civilite
  ) {
    this._id = id;
    this._adresse = adresse;
    this._login = login;
    this._civilite = civilite;
  }

  /**
   * Getter id
   * @return {number }
   */
  public get id(): number | undefined {
    return this._id;
  }

  /**
   * Getter adresse
   * @return {Adresse }
   */
  public get adresse(): Adresse | undefined {
    return this._adresse;
  }

  /**
   * Getter login
   * @return {string}
   */
  public get login(): string | undefined {
    return this._login;
  }

  /**
   * Setter id
   * @param {number } value
   */
  public set id(value: number | undefined) {
    this._id = value;
  }

  /**
   * Setter adresse
   * @param {Adresse } value
   */
  public set adresse(value: Adresse | undefined) {
    this._adresse = value;
  }

  /**
   * Setter login
   * @param {string} value
   */
  public set login(value: string | undefined) {
    this._login = value;
  }

  /**
   * Getter civilite
   * @return {Civilite }
   */
  public get civilite(): Civilite | undefined {
    return this._civilite;
  }

  /**
   * Setter civilite
   * @param {Civilite } value
   */
  public set civilite(value: Civilite | undefined) {
    this._civilite = value;
  }
}
