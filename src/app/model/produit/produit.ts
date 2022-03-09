import { Utilisateur } from '../utilisateur';

export class Produit {
  private _id: number | undefined;
  private _nom: string | undefined;
  private _prix: number | undefined;
  private _stock: number | undefined;
  private _utilisateur: Utilisateur | undefined;

  constructor(
    id: number,
    nom: string,
    prix: number,
    stock: number,
    utilisateur: Utilisateur
  ) {
    this._id = id;
    this._nom = nom;
    this._prix = prix;
    this._stock = stock;
    this._utilisateur = utilisateur;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number | undefined {
    return this._id;
  }

  /**
   * Getter nom
   * @return {string}
   */
  public get nom(): string | undefined {
    return this._nom;
  }

  /**
   * Getter prix
   * @return {number}
   */
  public get prix(): number | undefined {
    return this._prix;
  }

  /**
   * Getter stock
   * @return {number}
   */
  public get stock(): number | undefined {
    return this._stock;
  }

  /**
   * Getter utilisateur
   * @return {Utilisateur}
   */
  public get utilisateur(): Utilisateur | undefined {
    return this._utilisateur;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number | undefined) {
    this._id = value;
  }

  /**
   * Setter nom
   * @param {string} value
   */
  public set nom(value: string | undefined) {
    this._nom = value;
  }

  /**
   * Setter prix
   * @param {number} value
   */
  public set prix(value: number | undefined) {
    this._prix = value;
  }

  /**
   * Setter stock
   * @param {number} value
   */
  public set stock(value: number | undefined) {
    this._stock = value;
  }

  /**
   * Setter utilisateur
   * @param {Utilisateur} value
   */
  public set utilisateur(value: Utilisateur | undefined) {
    this._utilisateur = value;
  }
}
