import { Utilisateur } from 'src/app/model/utilisateur';
import { Plante } from "./plante";

export class Produit {
  private _id: number | undefined;
  private _nom: string | undefined;
  private _stock: number | undefined;
  private _prix: number | undefined;
  private _plante: Plante | undefined;
  private _utilisateur: Utilisateur | undefined;


  constructor(id?: number, nom?: string, stock?: number, prix?: number, plante?: Plante, utilisateur?: Utilisateur) {
    this._id = id;
    this._nom = nom;
    this._stock = stock;
    this._prix = prix;
    this._plante = plante;
    this._utilisateur = utilisateur;
  }

  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get nom(): string | undefined {
    return this._nom;
  }

  set nom(value: string | undefined) {
    this._nom = value;
  }

  get stock(): number | undefined {
    return this._stock;
  }

  set stock(value: number | undefined) {
    this._stock = value;
  }

  get prix(): number | undefined {
    return this._prix;
  }

  set prix(value: number | undefined) {
    this._prix = value;
  }

  get plante(): Plante | undefined {
    return this._plante;
  }

  set plante(value: Plante | undefined) {
    this._plante = value;
  }

  get utilisateur(): Utilisateur | undefined {
    return this._utilisateur;
  }

  set utilisateur(value: Utilisateur | undefined) {
    this._utilisateur = value;
  }
}
