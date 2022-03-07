import { Emplacement } from "./emplacement";
import { Terrain } from "./terrain";
import { TypePlante } from "./type-plante";

export class Plante {
    private _id: number| undefined;
    private _terrain: Terrain| undefined;
    private _emplacement: Emplacement| undefined;
    private _typePlante: TypePlante| undefined;
    private _croissance: number|undefined;
    private _datePlantation: Date|undefined;
    private _arrosageOk: boolean|undefined;
    private _dateRecolte: Date|undefined;



	constructor(id?: number, terrain?: Terrain, emplacement?: Emplacement, typePlante?: TypePlante, croissance?: number, datePlantation?: Date, arrosageOk?: boolean, dateRecolte?: Date) {
		this._id = id;
		this._terrain = terrain;
		this._emplacement = emplacement;
		this._typePlante = typePlante;
		this._croissance = croissance;
		this._datePlantation = datePlantation;
		this._arrosageOk = arrosageOk;
		this._dateRecolte = dateRecolte;
	}


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number | undefined  {
		return this._id;
	}

    /**
     * Getter terrain
     * @return {Terrain}
     */
	public get terrain(): Terrain | undefined {
		return this._terrain;
	}

    /**
     * Getter emplacement
     * @return {Emplacement}
     */
	public get emplacement(): Emplacement | undefined {
		return this._emplacement;
	}

    /**
     * Getter typePlante
     * @return {TypePlante}
     */
	public get typePlante(): TypePlante | undefined {
		return this._typePlante;
	}

    /**
     * Getter croissance
     * @return {number}
     */
	public get croissance(): number | undefined {
		return this._croissance;
	}

    /**
     * Getter datePlantation
     * @return {Date}
     */
	public get datePlantation(): Date | undefined {
		return this._datePlantation;
	}

    /**
     * Getter arrosageOk
     * @return {boolean}
     */
	public get arrosageOk(): boolean | undefined {
		return this._arrosageOk;
	}

    /**
     * Getter dateRecolte
     * @return {Date}
     */
	public get dateRecolte(): Date | undefined {
		return this._dateRecolte;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number | undefined ) {
		this._id = value;
	}

    /**
     * Setter terrain
     * @param {Terrain} value
     */
	public set terrain(value: Terrain | undefined ) {
		this._terrain = value;
	}

    /**
     * Setter emplacement
     * @param {Emplacement} value
     */
	public set emplacement(value: Emplacement | undefined ) {
		this._emplacement = value;
	}

    /**
     * Setter typePlante
     * @param {TypePlante} value
     */
	public set typePlante(value: TypePlante | undefined ) {
		this._typePlante = value;
	}

    /**
     * Setter croissance
     * @param {number} value
     */
	public set croissance(value: number | undefined ) {
		this._croissance = value;
	}

    /**
     * Setter datePlantation
     * @param {Date} value
     */
	public set datePlantation(value: Date | undefined ) {
		this._datePlantation = value;
	}

    /**
     * Setter arrosageOk
     * @param {boolean} value
     */
	public set arrosageOk(value: boolean | undefined ) {
		this._arrosageOk = value;
	}

    /**
     * Setter dateRecolte
     * @param {Date} value
     */
	public set dateRecolte(value: Date | undefined ) {
		this._dateRecolte = value;
	}

	
	
}
