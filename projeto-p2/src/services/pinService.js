/**
 * 
 * getFolders()
 * saveFolder()
 * savePinInFolder
 * 
 */


// Cria id de forma dinâmica (retorna uma string)
const generateId = () => {
    return `${(Math.floor(Math.random() * 100_000)).toString(16)}-${(Math.floor(Math.random() * 100_000)).toString(16)}`
}

// Utilizado para salvar as pastas no localStorage
const saveFolders = async (folders) => {
    // Salvar novamente no LocalStorage - Necessário colocar o JSON.stringify(), pois só aceita string
    localStorage.setItem('folders', JSON.stringify(folders));
}


// Pega os dados (array) referente as pastas salvas no localStorage
export const getFolders = async () => {
    // Faz requisição: Caso não localize, retorna array vazio.
    return JSON.parse(localStorage.getItem('folders')) || []
}



// parâmetro folderName = Nome da pasta a ser criada
export const saveFolder = async (folderName) => {
    /** 
     * PASSOS
     * 
     * * Pegar a lista/array de pastas -> getFolders()
     * * Adicionar a pasta dentro desse array
     * * Salvar novamente no LocalStorage
     * 
     */


    // Pega a lista
    const folders = await getFolders();


    // Adiciona pasta à lista
    const newFolder = {
        id: generateId(), // Invoca função que gera id de forma dinâmica
        name: folderName, // Nome da pasta passado via parâmetro
        pins: []
    };

    folders.push(newFolder);


    // Salvar novamente no LocalStorage
    await saveFolders(folders);


    // console.log('folders', folders);
    return newFolder;

}



// Salva o pin na pasta com base no Id dela
export const savePinInFolder = async (folderId, pinId) => {
    /**
     * PASSOS
     * 
     * Listar coleção/array de pastas do Storage
     * Encontrar a pasta que queremos adicionar o pin
     * Adicionar o pinId na pasta
     * Salvar pastas no Storage novamente
     * 
    */


    // Lista as pastas
    const folders = await getFolders();

    // Itera as pastas procurando pelo Id dela
    // findIndex() Busca um valor dentro do array e retorna a sua posição
    const folderIndex = folders.findIndex(function(folder) {
        // a cada iteração retorna o folder
        return folder.id === folderId;
    });

    // Caso localize a pasta, adiciona o pin
    if (folderIndex !== -1) {
        folders[folderIndex].pins.push(pinId);
    }

    // Salva as pastas no LocalStorage novamente
    await saveFolders(folders);


    // Retorna a pasta com o novo pin
    return { ...folders[folderIndex] };

}