import { Plante } from "./plante";
import { TypeDeSol } from "./type-de-sol";
import { Utilisateur } from "./utilisateur";

export class Terrain {
    private _id: number|undefined;
    private _surface:number|undefined;
    private _localisation:string|undefined;
    private _dureeExpoSoleil:number|undefined;
    private _decoupageTerrainLongueur:number|undefined;
    private _decoupageTerrainLargeur:number|undefined;
    private _typeDeSol:TypeDeSol|undefined;
    private _utilisateur:Utilisateur|undefined;
    private _plante:Plante|undefined;




	constructor(id?: number, surface?: number, localisation?: string, dureeExpoSoleil?: number, decoupageTerrainLongueur?: number, decoupageTerrainLargeur?: number, typeDeSol?: TypeDeSol, utilisateur?: Utilisateur, plante?: Plante) {
		this._id = id;
		this._surface = surface;
		this._localisation = localisation;
		this._dureeExpoSoleil = dureeExpoSoleil;
		this._decoupageTerrainLongueur = decoupageTerrainLongueur;
		this._decoupageTerrainLargeur = decoupageTerrainLargeur;
		this._typeDeSol = typeDeSol;
		this._utilisateur = utilisateur;
		this._plante = plante;
	}


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number | undefined  {
		return this._id;
	}

    /**
     * Getter surface
     * @return {number}
     */
	public get surface(): number | undefined  {
		return this._surface;
	}

    /**
     * Getter localisation
     * @return {string}
     */
	public get localisation(): string | undefined {
		return this._localisation;
	}

    /**
     * Getter dureeExpoSoleil
     * @return {number}
     */
	public get dureeExpoSoleil(): number| undefined {
		return this._dureeExpoSoleil;
	}

    /**
     * Getter decoupageTerrainLongueur
     * @return {number}
     */
	public get decoupageTerrainLongueur(): number | undefined {
		return this._decoupageTerrainLongueur;
	}

    /**
     * Getter decoupageTerrainLargeur
     * @return {number}
     */
	public get decoupageTerrainLargeur(): number | undefined {
		return this._decoupageTerrainLargeur;
	}

    /**
     * Getter typeDeSol
     * @return {TypeDeSol}
     */
	public get typeDeSol(): TypeDeSol | undefined {
		return this._typeDeSol;
	}

    /**
     * Getter utilisateur
     * @return {Utilisateur}
     */
	public get utilisateur(): Utilisateur | undefined {
		return this._utilisateur;
	}

    /**
     * Getter plante
     * @return {Plante}
     */
	public get plante(): Plante | undefined {
		return this._plante;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number | undefined ) {
		this._id = value;
	}

    /**
     * Setter surface
     * @param {number} value
     */
	public set surface(value: number | undefined ) {
		this._surface = value;
	}

    /**
     * Setter localisation
     * @param {string} value
     */
	public set localisation(value: string | undefined ) {
		this._localisation = value;
	}

    /**
     * Setter dureeExpoSoleil
     * @param {number} value
     */
	public set dureeExpoSoleil(value: number | undefined ) {
		this._dureeExpoSoleil = value;
	}

    /**
     * Setter decoupageTerrainLongueur
     * @param {number} value
     */
	public set decoupageTerrainLongueur(value: number | undefined ) {
		this._decoupageTerrainLongueur = value;
	}

    /**
     * Setter decoupageTerrainLargeur
     * @param {number} value
     */
	public set decoupageTerrainLargeur(value: number | undefined ) {
		this._decoupageTerrainLargeur = value;
	}

    /**
     * Setter typeDeSol
     * @param {TypeDeSol} value
     */
	public set typeDeSol(value: TypeDeSol | undefined ) {
		this._typeDeSol = value;
	}

    /**
     * Setter utilisateur
     * @param {Utilisateur} value
     */
	public set utilisateur(value: Utilisateur | undefined ) {
		this._utilisateur = value;
	}

    /**
     * Setter plante
     * @param {Plante} value
     */
	public set plante(value: Plante| undefined ) {
		this._plante = value;
	}
    

}