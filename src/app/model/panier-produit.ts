import { Produit } from "./produit";

export class PanierProduit {
  private _produit: Produit | undefined;
  private _quantite: number | undefined;

  constructor(produit?: Produit, quantite?: number) {
    this._produit = produit;
    this._quantite = quantite;
  }

  get produit(): Produit | undefined {
    return this._produit;
  }

  set produit(value: Produit | undefined) {
    this._produit = value;
  }

  get quantite(): number | undefined {
    return this._quantite;
  }

  set quantite(value: number | undefined) {
    this._quantite = value;
  }
}
