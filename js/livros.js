const json = '{"livro1": {"titulo": "Corte de espinhos e rosas", "autor": "Sarah J. Maas","genero": "Fantasia" , "editora": "Bloomsbury Publishing"}, "livro2": {"titulo": "A hipótese do amor", "autor": "Ali Hazelwood" ,"genero": "Romance" , "editora": "Arqueiro"},"livro3": {"titulo": "Half bad", "autor": "Sally Green","genero": "Fantasia" , "editora": "Intrinseca"},"livro4": {"titulo": "É assim que acaba", "autor": "Coleen Hoover","genero": "Ficção" , "editora": "Record"},"livro5": {"titulo": "O príncipe cruel", "autor": "Holly Black", "genero": "Fantasia" , "editora": "Record"},"livro6": {"titulo": "A seleção", "autor": "Kiera Cass", "genero": "Romance" , "editora": "Grupo Companhia das Letras."}}';

const data = JSON.parse(json);


console.log(data);

function exibir1(){
    
    document.getElementById("titulo").innerHTML = ('Titulo: ' + data.livro1.titulo);
    document.getElementById("imagem").innerHTML = ('<img id="imagem" src="imagens/capa-acotar.jpg" alt="" >');
    document.getElementById("autor").innerHTML = ('Autor(a): ' + data.livro1.autor);
    document.getElementById("genero").innerHTML = ('Gênero literário: ' + data.livro1.genero);
    document.getElementById("editora").innerHTML = ('Editora: ' + data.livro1.editora);
    document.getElementById("sinopse").innerHTML = ('Sinopse:<br>O livro Corte de Espinhos e Rosas (Acotar) traz uma envolvente história fictícia entre duas espécies, humanos e seres místicos chamados feéricos. Há muitos anos na história, uma guerra entre ambas as espécies foi declarada e por fim, os humanos conseguiram se libertar.' );
}


function exibir2 (){
    document.getElementById("titulo").innerHTML = ('Titulo: ' + data.livro2.titulo);
    document.getElementById("imagem").innerHTML = ('<img id="imagem" src="imagens/capa-hipotese.jpg" alt="" >');
    document.getElementById("autor").innerHTML = ('Autor(a): ' + data.livro2.autor);
    document.getElementById("genero").innerHTML = ('Gênero literário: ' + data.livro2.genero);
    document.getElementById("editora").innerHTML = ('Editora: ' + data.livro2.editora);
    document.getElementById("sinopse").innerHTML = ('Sinopse: <br> Olive Smith, aluna do doutorado em Biologia da Universidade Stanford, acredita na ciência, não em algo incontrolável como o amor. Depois de sair algumas vezes com Jeremy, ela percebe que sua melhor amiga gosta dele e decide juntá-los.' );
}

function exibir3(){
    document.getElementById("titulo").innerHTML = ('Titulo: ' + data.livro3.titulo);
    document.getElementById("imagem").innerHTML = ('<img id="imagem" src="imagens/capa-halfBad.jpg" alt="" >');
    document.getElementById("autor").innerHTML = ('Autor(a): ' + data.livro3.autor);
    document.getElementById("genero").innerHTML = ('Gênero literário: ' + data.livro3.genero);
    document.getElementById("editora").innerHTML = ('Editora: ' + data.livro3.editora);
    document.getElementById("sinopse").innerHTML = ('Sinopse: <br> Em meio a uma guerra entre clãs, o filho do bruxo responsável pelo massacre mais cruel de todos os tempos tenta encontrar seus poderes e seu lugar no mundo.' );
}
function exibir4 (){
    document.getElementById("titulo").innerHTML = ('Titulo: ' + data.livro4.titulo);
    document.getElementById("imagem").innerHTML = ('<img id="imagem" src="imagens/capa-éAssimQueAcaba.jpg" alt="" >');
    document.getElementById("autor").innerHTML = ('Autor(a): ' + data.livro4.autor);
    document.getElementById("genero").innerHTML = ('Gênero literário: ' + data.livro4.genero);
    document.getElementById("editora").innerHTML = ('Editora: ' + data.livro4.editora);
    document.getElementById("sinopse").innerHTML = ('Sinopse: <br> Um romance sobre a força necessária para fazer as escolhas corretas nas situações mais difíceis. Da autora das séries Slammed e Hopeless. Lily nem sempre teve uma vida fácil, mas isso nunca a impediu de trabalhar arduamente para conquistar a vida tão sonhada.' );
}

function exibir5(){
    document.getElementById("titulo").innerHTML = ('Titulo: ' + data.livro5.titulo);
    document.getElementById("imagem").innerHTML = ('<img id="imagem" src="imagens/capa-OPrincipeCruel.jpg" alt="" >');
    document.getElementById("autor").innerHTML = ('Autor(a): ' + data.livro5.autor);
    document.getElementById("genero").innerHTML = ('Gênero literário: ' + data.livro5.genero);
    document.getElementById("editora").innerHTML = ('Editora: ' + data.livro5.editora);
    document.getElementById("sinopse").innerHTML = ('Sinopse: <br> Envolvida em intrigas e traições do palácio, Jude descobre sua própria capacidade para truques e derramamento de sangue. Mas, com a ameaça de uma guerra civil e o Reino das Fadas por um fio, Jude precisará arriscar sua vida em uma perigosa aliança para salvar suas irmãs, e o próprio Reino.' );
}

function exibir6(){
    document.getElementById("titulo").innerHTML = ('Titulo: ' + data.livro6.titulo);
    document.getElementById("imagem").innerHTML = ('<img id="imagem" src="imagens/capa-ASelecao.jpg" alt="" >');
    document.getElementById("autor").innerHTML = ('Autor(a):' + data.livro6.autor);
    document.getElementById("genero").innerHTML = ('Gênero literário: ' + data.livro6.genero);
    document.getElementById("editora").innerHTML = ('Editora: ' + data.livro6.editora);
    document.getElementById("sinopse").innerHTML = ('Sinopse: <br> Para trinta e cinco garotas, a Seleção é a chance de uma vida. É a oportunidade de ser alçada a um mundo de vestidos deslumbrantes e joias valiosas. De morar em um palácio, conquistar o coração do belo príncipe Maxon e um dia ser a rainha. America Singer, no entanto, estar entre as Selecionadas é um pesadelo.' );
}


console.log(json);
