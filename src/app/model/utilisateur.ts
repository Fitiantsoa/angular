import { Adresse } from './adresse';
import { Civilite } from './civilite';
import { Compte } from './compte';
import { Terrain } from './terrain';
export class Utilisateur {
  private _id: number | undefined;
  private _civilite: Civilite | undefined;
  private _adresse: Adresse | undefined;
  private _compte: Compte | undefined;
  private _terrain: Terrain | undefined;
  private _pseudo: string | undefined;

  constructor(
    id?: number,
    adresse?: Adresse,
    compte?: Compte,
    civilite?: Civilite,
    terrain?: Terrain,
    pseudo?: string
  ) {
    this._id = id;
    this._adresse = adresse;
    this._compte = compte;
    this._civilite = civilite;
    this._terrain = terrain;
    this._pseudo = pseudo;
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
   * Getter compte
   * @return {string}
   */
  public get compte(): Compte | undefined {
    return this._compte;
  }

  /**
   * Setter id
   * @param {number } value
   */
  public set id(value: number | undefined) {
    this._id = value;
  }
  /**
   * Getter terrain
   * @return {Terrain }
   */
  public get terrain(): Terrain | undefined {
    return this._terrain;
  }

  /**
   * Setter terrain
   * @param {Terrain } value
   */
  public set terrain(value: Terrain | undefined) {
    this._terrain = value;
  }

  /**
   * Setter adresse
   * @param {Adresse } value
   */
  public set adresse(value: Adresse | undefined) {
    this._adresse = value;
  }

  /**
   * Setter compte
   * @param {string} value
   */
  public set compte(value: Compte | undefined) {
    this._compte = value;
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

  /**
   * Getter pseudo
   * @return {string }
   */
  public get pseudo(): string | undefined {
    return this._pseudo;
  }

  /**
   * Setter pseudo
   * @param {string } value
   */
  public set pseudo(value: string | undefined) {
    this._pseudo = value;
  }
}
