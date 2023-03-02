//Método fetch() para buscar o arquivo dados.json ou qualquer API, transformando o resultado em um obejeto usando o método response.json.

fetch('dados.json').then(response => response.json()).then(corpo =>{

    document.getElementById('imagem').innerHTML = corpo.produto1.image;
    document.getElementById('nome').innerHTML = "Título: " + corpo.produto1.name;
    document.getElementById('editora').innerHTML = "Editora: " + corpo.produto1.album;
    document.getElementById('estilo').innerHTML = "Gênero:" + corpo.produto1.style;
    document.getElementById('preco').innerHTML = corpo.produto1.price;
    
 
    document.getElementById('imagem2').innerHTML = corpo.produto2.image;
    document.getElementById('nome2').innerHTML = "Título: " +corpo.produto2.name;
    document.getElementById('editora2').innerHTML = "Editora: " + corpo.produto2.album;
    document.getElementById('estilo2').innerHTML = "Gênero:" +corpo.produto2.style;
    document.getElementById('preco2').innerHTML = corpo.produto2.price;

    document.getElementById('imagem3').innerHTML = corpo.produto3.image;
    document.getElementById('nome3').innerHTML = "Título: " +corpo.produto3.name;
    document.getElementById('editora3').innerHTML = "Editora: " + corpo.produto3.album;
    document.getElementById('estilo3').innerHTML ="Gênero:" +corpo.produto3.style;
    document.getElementById('preco3').innerHTML = corpo.produto3.price;
 
})