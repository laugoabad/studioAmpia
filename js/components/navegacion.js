Vue.component('navegacion', {
    template: //html
        `<div>

         <nav class="navbar navbar-expand-lg navbar-dark fixed-top px-5 py-3">
                <a class="navbar-brand" href="#"><img src="imgs/logo.png" width="35" height="35" alt="favicon">&nbsp;&nbsp;
                    Studio Ampia</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarNavDropdownNav" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto text-center">
                        <li class="nav-item active">
                            <a class=" nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#chi-siamo">Chi Siamo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#servizi" >Servizi</a>
                        </li>
                         <li class="nav-item">
                            <a class="nav-link" href="#aree">Aree d'Interesse</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#eventi">Eventi</a>
                        </li>
                        <li class="nav-item dropdown">
                           <a class="nav-link dropdown-toggle" href="#" id="contatto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Contatto
                            </a>
                            <div class="dropdown-menu dropdown-menu-right texto-chico p-5" aria-labelledby="contatto">
                                <a href="mailto:ampia.torino@gmail.com" class="dropdown-item text-center">ampia.torino@gmail.com</a>
                                <div class="dropdown-item text-center" >+39 370 37 08 297</div>
                                <div class="dropdown-item text-center" >C.so Francia 131 - 1.138, Torino</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav> 
      </div>
    `,

    data() {
        return {
            
        }
    }
});



