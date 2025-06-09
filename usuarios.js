
// Inicializa o banco de dados de usuários com um padrão, se necessário
if (!localStorage.getItem("usuarios")) {
    const usuariosPadrao = [
        { nome: "Gabriel Marques", email: "gabriel@gmail.com", senha: "senha123" }
    ];
    localStorage.setItem("usuarios", JSON.stringify(usuariosPadrao));
}

function adicionarUsuario(nome, email, senha) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica se o email já está registrado
    const usuarioExistente = usuarios.find((usuario) => usuario.email === email);

    if (usuarioExistente) {
        return { sucesso: false, mensagem: "Usuário já registrado com este email." };
    }

    // Adiciona o novo usuário ao array
    usuarios.push({ nome, email, senha });
    localStorage.setItem("usuarios", JSON.stringify(usuarios)); // Salva no LocalStorage
    return { sucesso: true, mensagem: "Usuário registrado com sucesso!" };
}

// Função para definir o usuário logado
function setUsuarioLogado(usuario) {
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
}

// Função para obter o usuário logado
function getUsuarioLogado() {
    return JSON.parse(localStorage.getItem("usuarioLogado"));
}


// Exporta os dados e a função para uso em outros arquivos
export { adicionarUsuario, setUsuarioLogado, getUsuarioLogado };
