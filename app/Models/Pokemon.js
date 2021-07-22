
export default class Pokemon {
    constructor({ name, sprites, weight, height, types}){
        this.name = name,
        //we refer to it as img, and it's sprites in the API
        this.img = sprites.other.dream_world.front_default
        this.weight = weight, 
        this.height = height, 
        this.types = types

        //this is to resolve the way the data was put in to the sandbox
        if (typeof this.types[0] != 'string'){
           this.types = this.types.map(elem => elem.type.name)
        }
    }

    get Template(){
        return`
         <div class="col mx-5 p-5">
            <div class="card mt-5" style="width: 50vh;">
                <img class="" src="${this.img}" alt="${this.name}">
                <div class="card-body">
                    <h3 class="card-title display-flex text-center">${this.name}</h3>
                    <span class="card-text">
                        <p>height: ${this.height}</p>
                        <p>weight: ${this.weight}</p>
                        <p>type: ${this.types}</p>
                    </span>
                    <button type="button" class="btn btn-success">Catch</button>
                </div>
                </div>
        </div>`
    }
}