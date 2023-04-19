let errorHandlers = {
    handleError(error) {
        document.querySelector('.result').innerHTML = "";

        document.querySelector('.result').innerHTML = `<div class="alert alert-danger" role="alert">
        ${error.message}
    </div>`;
    },
    coughtError(error){
        const err = new Error('Oops... something went wrong.');
        console.log(error);
        document.querySelector('.result').innerHTML = "";

        document.querySelector('.result').innerHTML = `<div class="alert alert-danger" role="alert">
        Oops... something went wrong.
    </div>`;
    }
}


export default errorHandlers;