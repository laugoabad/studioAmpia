Vue.component('chisiamo', {
    template://html
        `
    <div>
        <div classs="">
            <h2 class="titulo-seccion">Chi Siamo
            </h2>
        </div>
        <div v-if="!leerMas"> 
            <ul>
                <li v-for= "(item, index) of chiSiamo" >
                    <h3 class="titulo-secundario">
                        {{item.titulo}}
                    </h3>
                   
                    <p style="white-space:pre-line;" class="texto-normal mt-n3">
                        {{item.texto1}}
                             
                        <a href="#chi-siamo"><button class="btn btn-secondary btn-lg" @click= "checkLeerMas(index)">
                        <span v-if="leerMas">Leggere -</span>
                        <span v-else>Leggere +</span>
                        </button></a>
                    </p> 
                </li>
            </ul>
        </div>
        <template v-else>
            <h3 class="titulo-secundario mt-5 ml-5">
                {{chiSiamo[i].titulo}}
            </h3>
            <div style="white-space:pre-line;" class="texto-normal">
                {{chiSiamo[i].texto1}}
                {{chiSiamo[i].texto2}}    
                <button class="btn btn-secondary btn-lg" @click= "leerMas=!leerMas">
                    <span v-if="leerMas">Leggere -</span>
                    <span v-else>Leggere +</span>
                </button>       
            </div> 
        </template>
    </div>
    `,


    data() {
        return {
            leerMas: false,
            chiSiamo: [
                {
                    titulo: 'Dott.ssa Federica Lavista',
                    texto1: 'Laureata in Medicina e Chirurgia presso l’Università di Torino nel 2010, con tesi attinente a discipline psico-neuro-biochimiche, unisce da anni competenze pediatriche e psicoterapeutiche, prima in veste di medico frequentatore e tirocinante specializzanda, presso struttura ospedaliera (Ospedale Infantile Regina Margherita di Torino) e sul territorio (Torino e provincia), e successivamente in libera professione.',
                    texto2: 'In formazione continua e costante, mediante partecipazione a convegni e seminari di aggiornamento su problematiche di ordine neuropsichiatrico e psicologico in età pediatrica, con particolare attenzione ai disturbi del sonno. Alterna occasioni di formazione e divulgazione, anche e soprattutto nell’ottica di tenere vivace il confronto con la pratica clinica.\n\nColtiva da sempre interesse specifico per la psico-neuro-endocrino-immunologia (PNEI), avendo lavorato col gruppo di ricerca della sezione di Neuroanatomia del Desarrollo dell’Universidad de Buenos Aires.Precedentemente e parallelamente alla formazione psicoterapeutica, ha concluso un lungo percorso di psicoterapia ad orientamento psicodinamico con terapeuta già membro ordinario della Società Gruppoanalitica Italiana.\n\nColloqui anche in lingua spagnola.'
                },
                {
                    titulo: 'Dott.ssa Jessyka Robiolio Bose',
                    texto1: 'Laureata in Psicologia dello Sviluppo e dell’Educazione presso l’Università di Torino e specializzata in infanzia e adolescenza ad orientamento psicodinamico. Si forma perlopiù nel campo della Neuropsichiatria Infantile e in ambito comunitario con adolescenti, in situazioni di profondo disagio psichico e sociale.',
                    texto2: 'Accanto alla formazione didattica, porta avanti un percorso di analisi personale ad orientamento lacaniano.\n\nOltre alla pratica clinica in regime privato, collabora con l’associazione Aliseo Onlus, con la quale svolge interventi di prevenzione all’abuso di alcol con adolescenti e percorsi di trattamento con adulti in situazioni di alcoldipendenza e doppia diagnosi.\n\nSi occupa inoltre della formazione del personale educativo nelle province di Torino, Novara e Alessandria, e svolge attività psico-educative con il singolo e con il gruppo classe in scuola primaria, a Torino.'
                },

                {
                    titulo: 'Dott.ssa Martina Comollo',
                    texto1: 'Laureata in Psicologia Clinica e di Comunità presso l’Università di Torino, specializzata in infanzia, adolescenza e genitorialità, secondo orientamento psicodinamico. Ha ultimato recentemente il Corso di Psicologia dell’Emergenza, organizzato e patrocinato da Psicologi per i Popoli Torino e 118 Piemonte, inerente all’intervento di primo soccorso psicologico in situazione di crisi ed emergenza.',
                    texto2: 'Porta avanti un percorso di analisi personale ad orientamento psicoanalitico. Si forma ed esercita in contesto ospedaliero, presso il reparto di Neuropsichiatria Infantile dell’Ospedale Infantile Regina Margherita di Torno, con attenzione alla presa in carico di pazienti affetti da patologia complessa e cronica, anche organica.\n\nUnitamente al percorso di specializzazione in psicoterapia psicodinamica e alla libera professione, collabora da anni con istituzioni scolastiche e associazioni di volontariato, presso cui svolge attività educative, sia col gruppo classe che col singolo, di formazione rivolte al personale scolastico e di sostegno a bambini e ragazzi all’interno di progetti di psicologia scolastica.'
                },

                {
                    titulo: 'Dott. Giampaolo Rigliaco',
                    texto1: 'Laureato in Psicologia Clinica e di Comunità presso l’Università degli Studi di Firenze e successivamente presso la Facoltà di Psicologia di Torino. Specializzato in infanzia, adolescenza e genitorialità, secondo orientamento psicodinamico.\n\nSi forma, prima in veste di studente tirocinante e poi come specializzando, presso il reparto di Neuropsichiatria Infantile dell’Ospedale Infantile Regina Margherita di Torino. Porta avanti un percorso di analisi personale ad indirizzo psicoanalitico.',
                    texto2: 'Ha maturato esperienza pluriennale in ambito scolastico, relativamente al sostegno e all’accompagnamento terapeutico di minori affetti da disturbi pervasivi dello sviluppo; ha inoltre operato nell’accoglienza di cittadini stranieri richiedenti protezione internazionale.\n\nEsercita in libera professione e opera in contesto comunitario e in regime di domiciliarità con pazienti adulti psichiatrici sul territorio piemontese. Parallelamente si occupa di attività formative rivolte a personale educativo.'
                }
            ]
        }
    },
    methods: {
        checkLeerMas(index) {
            this.leerMas = !this.leerMas;
            this.i = index
        }
    }
});