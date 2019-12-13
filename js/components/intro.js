Vue.component('intro', {
    template: //html
        `<div>
            <div class="d-flex justify-content-center">
                <img src="imgs/logo.png" class="logo m-1" alt="logo">
            </div>
             <div class="titulo-principal d-flex justify-content-center"> 
                    STUDIO AMPIA
            </div>
            <h5 class=" text-center titulo-secundario d-flex justify-content-center mb-5 ">
                    Medici &nbsp;|&nbsp; Psicologi &nbsp; | &nbsp; Psicoterapeuti<br>
                    Specializzati in Infanzia ed Adolescienza
            </h5>
           <hr class="mb-5">
            <div>
                <ul>
                    <li v-for= "intr of intro" class="text-center">
                        <p class="texto-normal">
                            {{intr.texto}}
                        </p> 
                    </li>
                </ul>
            </div>
        </div>
    `,

    data() {
        return {

            intro: [
                {
                    texto: 'Lo studio AMPIA nasce per iniziativa di un’équipe specializzata di medici, psicologi, psicoterapeuti, di formazione psicodinamica ed esperienza consolidata in età evolutiva e genitorialità.'
                },
                {
                    texto: 'L’équipe rivolge la propria attenzione all’età pediatrica, dalla primissima infanzia all’adolescenza, nonché alle famiglie di neonati, bambini e ragazzi che abbiano necessità di un’attenzione specifica, competente e scrupolosa alla propria funzione genitoriale e non solo.'
                },
                {
                    texto: 'I professionisti, ciascuno con specificità professionale particolare, si avvalgono costantemente della collaborazione, del confronto e della supervisione di colleghi - in contesti istituzionali e non - e di altre figure operanti in ambito pediatrico, allo scopo di perseguire un approccio completo, complesso e multidisciplinare nella presa in carico dei pazienti.Pazienti e famiglie hanno pertanto occasione di essere seguiti adeguatamente in tutte le fasi della crescita: dalla gravidanza all’età neonatale, dalla prima infanzia all’età adolescenziale, all’età adulta.'
                },
                {
                    texto: 'I servizi dello studio AMPIA prevedono percorsi di intervento clinico di breve e lungo corso, nonché proposte di informazione e formazione, dedicate a famiglie e ad operatori impegnati in ambito infantile ed evolutivo, in contesti scolastici, sportivi, ludico-ricreativi e sanitari, tra gli altri,anche in considerazione delle richieste degli utenti. '
                },
            ]
            
        }
    }
})

