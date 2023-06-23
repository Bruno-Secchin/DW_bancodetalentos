// Função para adicionar uma nova tag com imagem de remoção
function adicionarTag(event) {
    if (event.key === 'Enter') {
        event.preventDefault();

        const input = event.target;
        const tagContent = input.value.trim();

        if (tagContent !== '') {
            const newTag = document.createElement('h5');
            newTag.classList.add('tag');

            const removeIcon = document.createElement('img');
            removeIcon.src = 'imagens/delete.png';
            removeIcon.alt = 'Remover';
            removeIcon.classList.add('delete');
            removeIcon.addEventListener('click', () => {
                newTag.remove();
            });

            newTag.textContent = "#" + tagContent;
            newTag.appendChild(removeIcon);

            const tagsSection = input.parentNode.nextElementSibling;
            tagsSection.appendChild(newTag);

            input.value = '';
        }

        input.remove();
    }
}

// Função para mostrar o campo de input ao clicar na imagem "add"
function mostrarInput(event) {
    const figure = event.target.parentNode;
    const input = document.createElement('input');
    input.type = 'text';
    input.addEventListener('keypress', adicionarTag);

    const addImage = event.target;
    figure.replaceChild(input, addImage);
    input.focus();

    // Adiciona um evento para remover o input e retornar a imagem ao perder o foco
    input.addEventListener('blur', () => {
        figure.replaceChild(addImage, input);
    });
}

// Adicionando o evento de clique nas imagens com a classe "add"
const addImages = document.querySelectorAll('.add');
addImages.forEach((image) => {
    image.addEventListener('click', mostrarInput);
});

// Função para remover o elemento profile
function removeProfile() {
    // Obtém o elemento profile a ser removido
    var profile = this.parentNode.parentNode;

    // Remove o elemento profile
    profile.parentNode.removeChild(profile);
}

// Obtém todas as imagens com a classe "remove"
var removeButtons = document.querySelectorAll('.remove');

// Adiciona um ouvinte de eventos de clique a cada botão
removeButtons.forEach(function (button) {
    button.addEventListener('click', removeProfile);
});

function alterarImagem() {
    var img = document.getElementById("stare");

    if (img.src.endsWith("star_empty.png")) {
        img.src = "imagens/star.png";
    } else {
        img.src = "imagens/star_empty.png";
    }
}

var imgElement = document.getElementById("stare");
imgElement.addEventListener("click", alterarImagem);
