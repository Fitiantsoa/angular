
export class FicheRavageur {
  private _id: number | undefined;
  private _nom: string | undefined;
  private _description: string | undefined;
  private _solution: string | undefined;

  constructor(
    id?: number,
    nom?: string,
    description?: string,
    solution?: string,
  ) {
    this._id = id;
    this._nom = nom;
    this._description = description;
    this._solution = solution;
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
     * Getter description
     * @return {string }
     */
	public get description(): string | undefined  {
		return this._description;
	}

    /**
     * Getter solution
     * @return {string }
     */
	public get solution(): string | undefined  {
		return this._solution;
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
     * Setter description
     * @param {string } value
     */
	public set description(value: string | undefined ) {
		this._description = value;
	}

    /**
     * Setter solution
     * @param {string } value
     */
	public set solution(value: string | undefined ) {
		this._solution = value;
	}


}
