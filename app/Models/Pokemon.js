
export default class Pokemon {
    constructor({ name, img, weight, height, types}){
        this.name = name,
        this.img = img || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.id}.svg', 
        this.weight = weight, 
        this.height = height, 
        this.types = types
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