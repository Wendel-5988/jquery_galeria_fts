//$ serve para chamar o JQuery. Já o reay indica que quando td tiver pronto, executar essa função.
$(document).ready(function(){

//Função usando o 'CallBack':
  /* document.querySelector('header button').addEventListener('click', function(){
  });*/

//Mesmo CallBack simplificado pelo JQuery:
//$ chama o JQuery para procurar o elemento informado no parentese a seguir. logo depois vem o evento que você quer observar. Em seguinda a funçao.
  $('header button').click(function() {  
    $('form').slideDown();
  })

  $('#btnCancel').click(function(){
    $('form').slideUp();
  })
//Podemos adicionar eventos tambem usando o 'on'.
  $('form').on('submit', function(e) {
    e.preventDefault();
//criando constantes para os elementos html:    
    const urlNewImg = $('#newImg').val(); //val é o 'value' do js puro.
    const newItem = $('<li style= "display: none" ></li>');
//criando um codigo html dentro da li usando o valor do input:   
    $(`<img src="${urlNewImg}" />`).appendTo(newItem);
//mesma coisa que o de cima, mas fazendo a div com o valor do input:
    $(`
      <div class="overLay-img-link">
        <a href="${urlNewImg}" title="Ver imagem em tamanho real" target="_blank">
          Ver imagem em tamanho real
        </a>
      </div>
    `).appendTo(newItem);
//adicionando a nossa nova li (newItem) dentro da ul html:    
    $(newItem).appendTo('ul');
//criando animação na adição de imagem:
    $(newItem).fadeIn(1000);
//limpando campo do form:    
    $('#newImg').val('');
  })
})

