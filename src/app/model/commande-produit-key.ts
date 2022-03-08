import { Produit } from "./produit";

export class CommandeProduitKey {
  private _produit: Produit | undefined;

  constructor(produit?: Produit) {
    this._produit = produit;
  }

  get produit(): Produit | undefined {
    return this._produit;
  }

  set produit(value: Produit | undefined) {
    this._produit = value;
  }
}
