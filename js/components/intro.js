Vue.component('intro', {
    template: //html
        `<div>
            <div class="d-flex justify-content-center">
                <img src="imgs/logo.png" class="logo m-1" alt="logo" width="80" height="80">
            </div>
             <div class="titulo-principal d-flex justify-content-center"> 
                    STUDIO AMPIA
            </div>
            <h5 class=" text-center titulo-secundario d-flex justify-content-center  ">
                    Medici &nbsp;|&nbsp; Psicologi &nbsp; | &nbsp; Psicoterapeuti<br>
                    Specializzati in Infanzia ed Adolescienza
            </h5>
            
            <div class="row justify-content-center">
                <div class="col-12 col-lg-5 caja-izquierda">
                    
                </div>
                <div class="col-12 col-lg-5 caja-derecha">
                    <ul class="row">
                        <li v-for= "intr of intro" class="col-12 text-center">
                            <p>
                               {{intr.texto}}
                            </p> 
                        </li>
                    </ul>
               </div>
            </div>
        </div>
    `,

    data() {
        return {
            intro: [
                {
                    texto: 'Lo studio offre un servizio qualificato di psicodiagnosi, sostegno e psicoterapia, dedicato a famiglie, genitori, adolescenti, bambini e adulti, in un contesto protetto, inclusivo ed accogliente.'
                },
                {
                    texto: 'L’équipe, che si avvale di collaborazioni multidisciplinari, valuta e progetta interventi di cura specifici e pensati per ciascun paziente.'
                }
            ]
        }
    }
})

