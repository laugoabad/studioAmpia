Vue.component('intro', {
    template: //html
        `<div>
           
               <div class="titulo">
                   <div class="titulo-principal d-flex justify-content-center"> 
                        STUDIO AMPIA
                   </div>
                    <h5 class=" text-center titulo-secundario d-flex justify-content-center mb-4 ">
                          Medici &nbsp;|&nbsp; Psicologi &nbsp; | &nbsp; Psicoterapeuti<br>
                         Specializzati in Infanzia ed Adolescienza
                    </h5>
                    <div class="d-flex justify-content-center">
                        <img src="imgs/logo.png" class="logo m-1" alt="logo">
                    </div>
                    <h3 class="sospensione text-center"> I Professionisti dello Studio Ampia hanno aderito all'iniziativa #psicologionline promossa dall'Ordine degli Psicologi che prevede la possibilità di offrire prestazioni di ascolto e di supporto telefonico oppure on line. 
In linea con la nostra politica, il primo colloquio di teleconsulto è gratuito, come gesto di solidarietà verso la popolazione, in questo momento così complicato e delicato per tutti.<br>

Restano momentaneamente sospesi tutti gli incontri programmati fino ad ora.</h3>
                </div>
                <div class="tarjeta">
                    <div class="card">
                        <p style="white-space:pre-line;">
                            {{texto}}
                        </p> 
                </div>
               
            </div>
        </div>
    `,

    data() {
        return {

            texto: 'Lo studio AMPIA nasce per iniziativa di un’équipe specializzata di medici, psicologi, psicoterapeuti, di formazione psicodinamica ed esperienza consolidata in età evolutiva e genitorialità.\n\nL’équipe rivolge la propria attenzione all’età pediatrica, dalla primissima infanzia all’adolescenza, nonché alle famiglie di neonati, bambini e ragazzi che abbiano necessità di un’attenzione specifica, competente e scrupolosa alla propria funzione genitoriale e non solo.\n\nI professionisti, ciascuno con specificità professionale particolare, si avvalgono costantemente della collaborazione, del confronto e della supervisione di colleghi - in contesti istituzionali e non - e di altre figure operanti in ambito pediatrico, allo scopo di perseguire un approccio completo, complesso e multidisciplinare nella presa in carico dei pazienti. Pazienti e famiglie hanno pertanto occasione di essere seguiti adeguatamente in tutte le fasi della crescita: dalla gravidanza all’età neonatale, dalla prima infanzia all’età adolescenziale, all’età adulta.\n\nI servizi dello studio AMPIA prevedono percorsi di intervento clinico di breve e lungo corso, nonché proposte di informazione e formazione, dedicate a famiglie e ad operatori impegnati in ambito infantile ed evolutivo, in contesti scolastici, sportivi, ludico-ricreativi e sanitari, tra gli altri,anche in considerazione delle richieste degli utenti.'
             }
    }
})

