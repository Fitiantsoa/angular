export class CommandeProduit {
  private _quantite: number | undefined;
  // TODO: Complete

  constructor(quantite?: number) {
    this._quantite = quantite;
  }

  get quantite(): number | undefined {
    return this._quantite;
  }

  set quantite(value: number | undefined) {
    this._quantite = value;
  }
}
