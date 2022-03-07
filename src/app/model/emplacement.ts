export class Emplacement {
    private _positionx: number| undefined;
    private _positiony: number| undefined;



	constructor(positionx?: number, positiony?: number) {
		this._positionx = positionx;
		this._positiony = positiony;
	}


    /**
     * Getter positionx
     * @return {number}
     */
	public get positionx(): number | undefined {
		return this._positionx;
	}

    /**
     * Getter positiony
     * @return {number}
     */
	public get positiony(): number | undefined {
		return this._positiony;
	}

    /**
     * Setter positionx
     * @param {number} value
     */
	public set positionx(value: number | undefined) {
		this._positionx = value;
	}

    /**
     * Setter positiony
     * @param {number} value
     */
	public set positiony(value: number | undefined) {
		this._positiony = value;
	}

	
}
