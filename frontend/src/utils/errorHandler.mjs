export const errorHandler = (error) => {
    if (error.response) {
        //casos diferentes de 200 ok e 201 created
        console.log("API error:",error.response.data);
        return error.response.data.error || 'Ocorreu um erro inesperado';
    } else if (error.request) {
        //caso não haja resposta após uma requisição
        console.log("Network error:",error.request);
        return 'Network error, please try again later';
    } else{
        //qualquer outro erro
        console.log("Error:",error.message);
        return error.message;
    }
};