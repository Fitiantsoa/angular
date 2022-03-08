import { Utilisateur } from "./utilisateur";
import { CommandeProduit } from "./commande-produit";
import { CommandeStatut } from "./commande-statut";

export class Commande {
  private _id: number | undefined;
  private _utilisateur: Utilisateur | undefined;
  private _dateCreation: Date | undefined;
  private _commandeProduits: CommandeProduit[] | undefined;
  private _prixTotal: number | undefined;
  private _statut: CommandeStatut | undefined;

  constructor(id?: number,
              utilisateur?: Utilisateur,
              dateCreation?: Date,
              commandeProduits?: CommandeProduit[],
              prixTotal?: number,
              statut?: CommandeStatut) {
    this._id = id;
    this._utilisateur = utilisateur;
    this._dateCreation = dateCreation;
    this._commandeProduits = commandeProduits;
    this._prixTotal = prixTotal;
    this._statut = statut;
  }

  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get utilisateur(): Utilisateur | undefined {
    return this._utilisateur;
  }

  set utilisateur(value: Utilisateur | undefined) {
    this._utilisateur = value;
  }

  get dateCreation(): Date | undefined {
    return this._dateCreation;
  }

  set dateCreation(value: Date | undefined) {
    this._dateCreation = value;
  }

  get commandeProduits(): CommandeProduit[] | undefined {
    return this._commandeProduits;
  }

  set commandeProduits(value: CommandeProduit[] | undefined) {
    this._commandeProduits = value;
  }

  get prixTotal(): number | undefined {
    return this._prixTotal;
  }

  set prixTotal(value: number | undefined) {
    this._prixTotal = value;
  }

  get statut(): CommandeStatut | undefined {
    return this._statut;
  }

  set statut(value: CommandeStatut | undefined) {
    this._statut = value;
  }
}
