export class Adresse {
  private _numero: string | undefined;
  private _voie: string | undefined;
  private _ville: string | undefined;
  private _cp: string | undefined;

  constructor(
    _numero?: string,
    _voie?: string,
    _ville?: string,
    _cp?: string
  ) {}

  /**
   * Getter numero
   * @return {string }
   */
  public get numero(): string | undefined {
    return this._numero;
  }

  /**
   * Getter voie
   * @return {string }
   */
  public get voie(): string | undefined {
    return this._voie;
  }

  /**
   * Getter ville
   * @return {string }
   */
  public get ville(): string | undefined {
    return this._ville;
  }

  /**
   * Getter cp
   * @return {string }
   */
  public get cp(): string | undefined {
    return this._cp;
  }

  /**
   * Setter numero
   * @param {string } value
   */
  public set numero(value: string | undefined) {
    this._numero = value;
  }

  /**
   * Setter voie
   * @param {string } value
   */
  public set voie(value: string | undefined) {
    this._voie = value;
  }

  /**
   * Setter ville
   * @param {string } value
   */
  public set ville(value: string | undefined) {
    this._ville = value;
  }

  /**
   * Setter cp
   * @param {string } value
   */
  public set cp(value: string | undefined) {
    this._cp = value;
  }
}
