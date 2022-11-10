class Empresa{
    constructor(name){
        this.name = name;
    }

    factoryName(){
        return `The company name is ${this.name}`;
    }
}

module.exports = {
    Empresa
}