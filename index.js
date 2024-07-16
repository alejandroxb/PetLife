var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function(duvida) { 
    duvida.addEventListener('click', function() { //dentro dessa função vamos adicionar para cada elemento de duvida um evento de click
        duvida.classList.toggle('ativa') 
    })
})

