Vue.component('navegacion', {
    template: //html
        `<div>

         <nav class="navbar navbar-expand-lg navbar-light fixed-top p-4">
                <a class="navbar-brand" href="#"><img src="imgs/5.png" width="30" height="30" alt="favicon">&nbsp;&nbsp;
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
                        <li class="nav-item">
                            <div class="nav-link accordion">Contatto</div>
                        </li>
                       <div class="collapse" id="cont">
                            <div class="card card-body">
                               <address class="texto-chico"> 
                            <div >
                                C.so Francia 131 - 1.138, Torino
                            </div>    
                            <div >    
                               370 37 08 297
                            </div>
                            <div >
                                <a href="mailto:ampia.torino@gmail.com">ampia.torino@gmail.com</a>
                             </div>    
                        </address>
  </div>
</div>
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



