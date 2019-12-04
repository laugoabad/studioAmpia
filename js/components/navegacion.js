Vue.component('navegacion', {
    template: //html
        `<div>
         <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top mt-3 py-3">
                <a class="navbar-brand" href="#"><img src="imgs/5.png" width="30" height="30" alt="favicon">&nbsp;&nbsp;
                    Studio Ampia</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto text-center">
                        <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="#chi-siamo">Chi Siamo</a>
                        <a class="nav-item nav-link" href="#servizi">Servizi</a>
                        <a class="nav-item nav-link" href="#eventi">Eventi</a>
                        <a class="nav-item nav-link" href="#aree">Aree di Interesse</a>
                    </div>
                </div>
            </nav>   
      </div>
    `,

    data() {
        return {
            
        }
    }
})