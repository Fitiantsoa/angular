import { Produit } from "./produit";
import { CommandeProduitKey } from "./commande-produit-key";

export class CommandeProduit {
  private _id: CommandeProduitKey | undefined;
  private _quantite: number | undefined;
  private _prixTotal: number | undefined;
  // TODO: Complete

  constructor(id?: CommandeProduitKey, quantite?: number, prixTotal?: number) {
    this._id = id;
    this._quantite = quantite;
    this._prixTotal = prixTotal;
  }

  get id(): CommandeProduitKey | undefined {
    return this._id;
  }

  set id(value: CommandeProduitKey | undefined) {
    this._id = value;
  }

  get quantite(): number | undefined {
    return this._quantite;
  }

  set quantite(value: number | undefined) {
    this._quantite = value;
  }

  get prixTotal(): number | undefined {
    return this._prixTotal;
  }

  set prixTotal(value: number | undefined) {
    this._prixTotal = value;
  }
}
