Vue.component('chisiamo', {
    template: //html
    `
    <div>
        <div classs="mx-3">
            <h2 class="titulo-seccion">Chi Siamo
            </h2>
        </div>
        <div>
            <ul>
                <li v-for= "(chi, index) of chiSiamo" >
                    <h3 class="titulo-secundario show">
                        {{chi.titulo}}<span>&nbsp;&nbsp;<img src="imgs/iconmonstr-arrow-80-240.png" alt="" data-toggle="collapse" :data-target="'#cv'+index"> </span>
                    </h3>
                    <div class="collapse texto-normal" :id="'cv'+index">
                    <p style="white-space:pre-line;">
                        {{chi.texto}}
                    </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    `,
        
    
    data() {
        return {

            chiSiamo: [
                {
                    titulo: 'Dott.ssa Federica Lavista',
                    texto: 'Laureata in Medicina e Chirurgia presso l’Università di Torino nel 2010, con tesi attinente a discipline psico-neuro-biochimiche,unisce da anni competenze pediatriche e psicoterapeutiche,prima in veste di medico frequentatore e tirocinante specializzanda,presso struttura ospedaliera (Ospedale Infantile Regina Margherita di Torino) e sul territorio (Torino e provincia), e successivamente in libera professione.\n\n\In formazione continua e costante, mediante partecipazione a convegni e seminari di aggiornamento su problematiche di ordine neuropsichiatrico e psicologico in età pediatrica, con particolare attenzione ai disturbi del sonno. Alterna occasioni di formazione e divulgazione, anche e soprattutto nell’ottica di tenere vivace il confronto con la pratica clinica.\n\n\nColtiva da sempre interesse specifico per la psico-neuro-endocrino-immunologia (PNEI), avendo lavorato col gruppo di ricerca della sezione di Neuroanatomia del Desarrollo dell’Universidad de Buenos Aires.Precedentemente e parallelamente alla formazione psicoterapeutica, ha concluso un lungo percorso di psicoterapia ad orientamento psicodinamico con terapeuta già membro ordinario della Società Gruppoanalitica Italiana.\n\nColloqui anche in lingua spagnola.'
                },
                {
                    titulo: 'Dott.ssa Jessyka Robiolio Bose',
                    texto: 'Laureata in Psicologia dello Sviluppo e dell’Educazione presso l’Università di Torino e specializzata in infanzia e adolescenza ad orientamento psicodinamico. Si forma perlopiù nel campo della Neuropsichiatria Infantile e in ambito comunitario con adolescenti, in situazioni di profondo disagio psichico e sociale.\n\nAccanto alla formazione didattica, porta avanti un percorso di analisi personale ad orientamento lacaniano.\n\nOltre alla pratica clinica in regime privato, collabora con l’associazione Aliseo Onlus, con la quale svolge interventi di prevenzione all’abuso di alcol con adolescenti e percorsi di trattamento con adulti in situazioni di alcoldipendenza e doppia diagnosi.\n\nSi occupa inoltre della formazione del personale educativo nelle province di Torino, Novara e Alessandria, e svolge attività psico-educative con il singolo e con il gruppo classe in scuola primaria, a Torino.'
                 },

                {
                    titulo: 'Dott.ssa Martina Comollo',
                    texto: 'Laureata in Psicologia Clinica e di Comunità presso l’Università di Torino, specializzata in infanzia, adolescenza e genitorialità, secondo orientamento psicodinamico. Ha ultimato recentemente il Corso di Psicologia dell’Emergenza, organizzato e patrocinato da Psicologi per i Popoli Torino e 118 Piemonte, inerente all’intervento di primo soccorso psicologico in situazione di crisi ed emergenza.\n\nPorta avanti un percorso di analisi personale ad orientamento psicoanalitico. Si forma ed esercita in contesto ospedaliero, presso il reparto di Neuropsichiatria Infantile dell’Ospedale Infantile Regina Margherita di Torno, con attenzione alla presa in carico di pazienti affetti da patologia complessa e cronica, anche organica.\n\nUnitamente al percorso di specializzazione in psicoterapia psicodinamica e alla libera professione, collabora da anni con istituzioni scolastiche e associazioni di volontariato, presso cui svolge attività educative, sia col gruppo classe che col singolo, di formazione rivolte al personale scolastico e di sostegno a bambini e ragazzi all’interno di progetti di psicologia scolastica.'
                },

                {
                    titulo: 'Dott. Giampaolo Rigliaco',
                    texto: 'Laureato in Psicologia Clinica e di Comunità presso l’Università degli Studi di Firenze e successivamente presso la Facoltà di Psicologia di Torino. Specializzato in infanzia, adolescenza e genitorialità, secondo orientamento psicodinamico.\n\nSi forma, prima in veste di studente tirocinante e poi come specializzando, presso il reparto di Neuropsichiatria Infantile dell’Ospedale Infantile Regina Margherita di Torino. Porta avanti un percorso di analisi personale ad indirizzo psicoanalitico.\n\nHa maturato esperienza pluriennale in ambito scolastico, relativamente al sostegno e all’accompagnamento terapeutico di minori affetti da disturbi pervasivi dello sviluppo; ha inoltre operato nell’accoglienza di cittadini stranieri richiedenti protezione internazionale.\n\nEsercita in libera professione e opera in contesto comunitario e in regime di domiciliarità con pazienti adulti psichiatrici sul territorio piemontese. Parallelamente si occupa di attività formative rivolte a personale educativo.'
                }
            ]
            } 
    }
})