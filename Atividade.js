let estoque = [];
lertenis();
cadastrartenis("preto", 35, "nike", "boa", 400.0);
cadastrartenis("azul", 40, "ous", "otima", 1000.0);
cadastrartenis("branco", 39, "tesla", "ruim", 500.0);
cadastrartenis("rosa", 41, "puma", "boa", 100.0);
cadastrartenis("verde", 32, "adidas", "ruim", 200.0);

//const ordenadoCor = ordenar(perucas, "cor");
const ordenadoPreco = ordenar(tenis, "preco");

// MOSTRA AS PERUCAS ORDENADAS NA TELA
console.log("## TENIS ORDENADAS POR PRECO ##")
ordenadoPreco.forEach(tenis => {
    console.log("tenis:" + tenis.cor
                + ", " + tenis.tamanho 
                + "cm, " + tenis.marca
                + ", " + tenis.qualidade
                + ", R$ " + tenis.preco)
});

function lertenis(){
    tenis = require("./tenis.json");
}

function cadastrartenis(cor, tamanho, marca, qualidade, preco){
    const encontrado = encontrar(estoque, "marca", marca);
    if (typeof encontrado === "undefined"){
        const tenis = {
            cor: cor,
            tamanho: tamanho,
            marca: marca,
            qualidade: qualidade,
            preco: preco
        }
        estoque.push(tenis);

        // PERSISTINDO OS DADOS:
        const fs = require('fs');

        estoqueJSON = JSON.stringify(estoque);
        fs.writeFileSync("tenis.json", estoqueJSON);
        console.log("Dados foram adicionados com sucesso!");
    }
}

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave] === valor);
}

function ordenar(lista, chave){
    return lista.sort((a, b) => {
        if(a[chave] < b[chave]){
            return -1;
        }
        if(a[chave] > b[chave]){
            return 1;
        }
        return 0;
    });
}