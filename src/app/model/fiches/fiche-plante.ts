
export class FichePlante {
  private _id: number | undefined;
  private _nom: string | undefined;
  private _eau: string | undefined;
  private _exposition: string | undefined;
  private _espacement: string | undefined;
  private _dureeConservationGraine: string | undefined;
  private _calendrierSemer: string | undefined;
  private _calendrierPlanter: string | undefined;
  private _calendrierRecolter: string | undefined;
  private _bonsCopains: string | undefined;
  private _mauvaisCopains: string | undefined;
  private _maladies: string | undefined;
  private _ravageurs: string | undefined;
  private _methodeSemer: string | undefined;
  private _methodePlanter: string | undefined;
  private _methodeEntretien: string | undefined;
  private _methodeRecolte: string | undefined;


	constructor(
    id?: number,
    nom?: string,
    eau?: string ,
    exposition?: string ,
    espacement?: string ,
    dureeConservationGraine?: string ,
    calendrierSemer?: string ,
    calendrierPlanter?: string ,
    calendrierRecolter?: string ,
    bonsCopains?: string ,
    mauvaisCopains?: string ,
    maladies?: string ,
    ravageurs?: string ,
    methodeSemer?: string ,
    methodePlanter?: string ,
    methodeEntretien?: string ,
    methodeRecolte?: string ) {
    this._id = id;
    this._nom = nom;
		this._eau = eau;
		this._exposition = exposition;
		this._espacement = espacement;
		this._dureeConservationGraine = dureeConservationGraine;
		this._calendrierSemer = calendrierSemer;
		this._calendrierPlanter = calendrierPlanter;
		this._calendrierRecolter = calendrierRecolter;
		this._bonsCopains = bonsCopains;
		this._mauvaisCopains = mauvaisCopains;
		this._maladies = maladies;
		this._ravageurs = ravageurs;
		this._methodeSemer = methodeSemer;
		this._methodePlanter = methodePlanter;
		this._methodeEntretien = methodeEntretien;
		this._methodeRecolte = methodeRecolte;
	}


    /**
     * Getter id
     * @return {number }
     */
	public get id(): number | undefined  {
		return this._id;
	}

    /**
     * Getter nom
     * @return {string }
     */
	public get nom(): string | undefined  {
		return this._nom;
	}

    /**
     * Getter eau
     * @return {string }
     */
	public get eau(): string | undefined  {
		return this._eau;
	}

    /**
     * Getter exposition
     * @return {string }
     */
	public get exposition(): string | undefined  {
		return this._exposition;
	}

    /**
     * Getter espacement
     * @return {string }
     */
	public get espacement(): string | undefined  {
		return this._espacement;
	}

    /**
     * Getter dureeConservationGraine
     * @return {string }
     */
	public get dureeConservationGraine(): string | undefined  {
		return this._dureeConservationGraine;
	}

    /**
     * Getter calendrierSemer
     * @return {string }
     */
	public get calendrierSemer(): string | undefined  {
		return this._calendrierSemer;
	}

    /**
     * Getter calendrierPlanter
     * @return {string }
     */
	public get calendrierPlanter(): string | undefined  {
		return this._calendrierPlanter;
	}

    /**
     * Getter calendrierRecolter
     * @return {string }
     */
	public get calendrierRecolter(): string | undefined  {
		return this._calendrierRecolter;
	}

    /**
     * Getter bonsCopains
     * @return {string }
     */
	public get bonsCopains(): string | undefined  {
		return this._bonsCopains;
	}

    /**
     * Getter mauvaisCopains
     * @return {string }
     */
	public get mauvaisCopains(): string | undefined  {
		return this._mauvaisCopains;
	}

    /**
     * Getter maladies
     * @return {string }
     */
	public get maladies(): string | undefined  {
		return this._maladies;
	}

    /**
     * Getter ravageurs
     * @return {string }
     */
	public get ravageurs(): string | undefined  {
		return this._ravageurs;
	}

    /**
     * Getter methodeSemer
     * @return {string }
     */
	public get methodeSemer(): string | undefined  {
		return this._methodeSemer;
	}

    /**
     * Getter methodePlanter
     * @return {string }
     */
	public get methodePlanter(): string | undefined  {
		return this._methodePlanter;
	}

    /**
     * Getter methodeEntretien
     * @return {string }
     */
	public get methodeEntretien(): string | undefined  {
		return this._methodeEntretien;
	}

    /**
     * Getter methodeRecolte
     * @return {string }
     */
	public get methodeRecolte(): string | undefined  {
		return this._methodeRecolte;
	}

    /**
     * Setter id
     * @param {number } value
     */
	public set id(value: number | undefined ) {
		this._id = value;
	}

    /**
     * Setter nom
     * @param {string } value
     */
	public set nom(value: string | undefined ) {
		this._nom = value;
	}

    /**
     * Setter eau
     * @param {string } value
     */
	public set eau(value: string | undefined ) {
		this._eau = value;
	}

    /**
     * Setter exposition
     * @param {string } value
     */
	public set exposition(value: string | undefined ) {
		this._exposition = value;
	}

    /**
     * Setter espacement
     * @param {string } value
     */
	public set espacement(value: string | undefined ) {
		this._espacement = value;
	}

    /**
     * Setter dureeConservationGraine
     * @param {string } value
     */
	public set dureeConservationGraine(value: string | undefined ) {
		this._dureeConservationGraine = value;
	}

    /**
     * Setter calendrierSemer
     * @param {string } value
     */
	public set calendrierSemer(value: string | undefined ) {
		this._calendrierSemer = value;
	}

    /**
     * Setter calendrierPlanter
     * @param {string } value
     */
	public set calendrierPlanter(value: string | undefined ) {
		this._calendrierPlanter = value;
	}

    /**
     * Setter calendrierRecolter
     * @param {string } value
     */
	public set calendrierRecolter(value: string | undefined ) {
		this._calendrierRecolter = value;
	}

    /**
     * Setter bonsCopains
     * @param {string } value
     */
	public set bonsCopains(value: string | undefined ) {
		this._bonsCopains = value;
	}

    /**
     * Setter mauvaisCopains
     * @param {string } value
     */
	public set mauvaisCopains(value: string | undefined ) {
		this._mauvaisCopains = value;
	}

    /**
     * Setter maladies
     * @param {string } value
     */
	public set maladies(value: string | undefined ) {
		this._maladies = value;
	}

    /**
     * Setter ravageurs
     * @param {string } value
     */
	public set ravageurs(value: string | undefined ) {
		this._ravageurs = value;
	}

    /**
     * Setter methodeSemer
     * @param {string } value
     */
	public set methodeSemer(value: string | undefined ) {
		this._methodeSemer = value;
	}

    /**
     * Setter methodePlanter
     * @param {string } value
     */
	public set methodePlanter(value: string | undefined ) {
		this._methodePlanter = value;
	}

    /**
     * Setter methodeEntretien
     * @param {string } value
     */
	public set methodeEntretien(value: string | undefined ) {
		this._methodeEntretien = value;
	}

    /**
     * Setter methodeRecolte
     * @param {string } value
     */
	public set methodeRecolte(value: string | undefined ) {
		this._methodeRecolte = value;
	}



}
