Vue.component('chisiamo', {
    template://html
        `
    <div>
        <div classs="">
            <h2 class="titulo-seccion">Chi Siamo
            </h2>
        </div>

        <div class="elem"> 
            <h3 class="titulo-secundario">
                {{chiSiamo[0].titulo}}
            </h3>
            
           <p class="texto-chico p1">
            <span><img src="./imgs/iconmonstr-mail-thin-240.png"></span>
               &nbsp;&nbsp;{{chiSiamo[0].tel}}
            </p>
            <p class="texto-chico p1">
                <span><img src="./imgs/iconmonstr-phone-1-240.png"></span>
               &nbsp;{{chiSiamo[0].mail}}
            </p>
            <p style="white-space:pre-line;" class="texto-normal ">
                {{chiSiamo[0].texto1}}
            </p>        
            <p style="white-space:pre-line;" class="collapse texto-normal mostrar0">
                {{chiSiamo[0].texto2}}
            </p>
             <button type="button" class="btn btn-secondary " data-toggle="collapse" data-target=".mostrar0" @click= "leerMas0=!leerMas0">
                <span v-if="leerMas0">Leggere&nbsp; -</span>
                <span v-else>Leggere &nbsp; +</span>
            </button> 
        </div>
        <div class="elem"> 
            <h3 class="titulo-secundario">
                {{chiSiamo[1].titulo}}
            </h3>
            <p class="texto-chico p1">
            <span><img src="./imgs/iconmonstr-mail-thin-240.png"></span>
               &nbsp;&nbsp;{{chiSiamo[1].tel}}
            </p>
            <p class="texto-chico p1">
                <span><img src="./imgs/iconmonstr-phone-1-240.png"></span>
               &nbsp;{{chiSiamo[1].mail}}
            </p>
             
            <p style="white-space:pre-line;" class="texto-normal mt-n3">
                {{chiSiamo[1].texto1}}
            </p>        
            <p style="white-space:pre-line;" class="collapse texto-normal mostrar1">
                {{chiSiamo[1].texto2}}
            </p>
            <button type="button" class="btn btn-secondary" data-toggle="collapse" data-target=".mostrar1" @click= "leerMas1=!leerMas1">
                <span v-if="leerMas1">Leggere&nbsp; -</span>
                <span v-else>Leggere&nbsp; +</span>
            </button> 
        </div>
        <div class="elem"> 
            <h3 class="titulo-secundario">
                {{chiSiamo[2].titulo}}
            </h3>
             <p class="texto-chico p1">
            <span><img src="./imgs/iconmonstr-mail-thin-240.png"></span>
               &nbsp;&nbsp;{{chiSiamo[2].tel}}
            </p>
            <p class="texto-chico p1">
                <span><img src="./imgs/iconmonstr-phone-1-240.png"></span>
               &nbsp;{{chiSiamo[2].mail}}
            </p>

            <p style="white-space:pre-line;" class="texto-normal mt-n3">
                {{chiSiamo[2].texto1}}
            </p>        
            <p style="white-space:pre-line;" class="collapse texto-normal mostrar2">
                {{chiSiamo[2].texto2}}
            </p>
            <button type="button" class="btn btn-secondary" data-toggle="collapse" data-target=".mostrar2" @click= "leerMas2=!leerMas2">
                <span v-if="leerMas2">Leggere&nbsp; -</span>
                <span v-else>Leggere&nbsp; +</span>
            </button> 
        </div>
        <div class="elem"> 
            <h3 class="titulo-secundario">
                {{chiSiamo[3].titulo}}
            </h3>
           <p class="texto-chico p1">
            <span><img src="./imgs/iconmonstr-mail-thin-240.png"></span>
               &nbsp;&nbsp;{{chiSiamo[3].tel}}
            </p>
            <p class="texto-chico p1">
                <span><img src="./imgs/iconmonstr-phone-1-240.png"></span>
               &nbsp;{{chiSiamo[3].mail}}
            </p>
            <p style="white-space:pre-line;" class="texto-normal mt-n3">
                {{chiSiamo[3].texto1}}
            </p>        
            <p style="white-space:pre-line;" class="collapse texto-normal mostrar3">
                {{chiSiamo[3].texto2}}
            </p>
             <button type="button" class="btn btn-secondary" data-toggle="collapse" data-target=".mostrar3" @click= "leerMas3=!leerMas3">
                <span v-if="leerMas3">Leggere&nbsp; -</span>
                <span v-else>Leggere&nbsp; +</span>
            </button> 
        </div>
      
        
    </div>
    `,

    data() {
        return {
            leerMas0: false,
            leerMas1: false,
            leerMas2: false,
            leerMas3: false,

            chiSiamo: [
                {
                    titulo: 'Dott.ssa Federica Lavista',
                    tel: '345 403 4188',
                    mail: 'federicalavista@gmail.com',
                    texto1: 'Laureata in Medicina e Chirurgia presso l’Università di Torino nel 2010, con tesi attinente a discipline psico-neuro-biochimiche, unisce da anni competenze pediatriche e psicoterapeutiche, prima in veste di medico frequentatore e tirocinante specializzanda, presso struttura ospedaliera (Neuropsichiatria Infantile, Ospedale Infantile Regina Margherita di Torino) e sul territorio (Torino e provincia), e successivamente in libera professione.',
                    texto2: 'In formazione continua e costante, mediante partecipazione a convegni e seminari di aggiornamento su problematiche di ordine neuropsichiatrico e psicologico in età pediatrica, con particolare attenzione ai disturbi del sonno. Alterna occasioni di formazione e divulgazione, anche e soprattutto nell’ottica di tenere vivace il confronto con la pratica clinica.\n\nColtiva da sempre interesse specifico per la psico-neuro-endocrino-immunologia (PNEI), avendo lavorato col gruppo di ricerca della sezione di Neuroanatomia del Desarrollo dell’Universidad de Buenos Aires, Hospital de Clinicas.\n\nIn corso il Master in PNEI presso il dipartimento di Neuroscienze dell’Ospedale Molinette di Torino. Precedentemente e parallelamente alla formazione psicoterapeutica ad orientamento psicodinamico, ha concluso un lungo percorso di psicoterapia psicanalitica con terapeuta già membro ordinario della Società Gruppoanalitica Italiana. Colloqui anche in lingua spagnola.'
                },
                {
                    titulo: 'Dott.ssa Jessyka Robiolio Bose',
                    tel: '348 290 2829',
                    mail: 'jessykarobiolio@yahoo.it',
                    texto1: 'Laureata in Psicologia dello Sviluppo e dell’Educazione presso l’Università di Torino e specializzata in infanzia e adolescenza ad orientamento psicodinamico. Si forma perlopiù nel campo della Neuropsichiatria Infantile e in ambito comunitario con adolescenti, in situazioni di profondo disagio psichico e sociale.',
                    texto2: 'Accanto alla formazione didattica, porta avanti un percorso di analisi personale ad orientamento lacaniano. \nOltre alla pratica clinica in regime privato, collabora con l’associazione Aliseo Onlus, con la quale svolge interventi di prevenzione all’abuso di alcol con adolescenti, nonché percorsi di trattamento con adulti, in situazioni di alcoldipendenza e doppia diagnosi.\n\n Si occupa altresì della formazione e della supervisione del personale educativo in istituti di diverso ordine e grado, nelle province di Torino, Novara e Alessandria. Svolge inoltre attività psico-educative con il singolo e con il gruppo classe in contesto di scuola primaria, a Torino.'
                },

                {
                    titulo: 'Dott.ssa Martina Comollo',
                    tel: '334 304 0923',
                    mail: 'martina@comollo.it',
                    texto1: 'Laureata in Psicologia Clinica e di Comunità presso l’Università di Torino, specializzata in infanzia, adolescenza e genitorialità, secondo orientamento psicodinamico. Ha ultimato recentemente il Corso di Psicologia dell’Emergenza, organizzato e patrocinato da Psicologi per i Popoli Torino e 118 Piemonte, inerente all’intervento di primo soccorso psicologico in situazione di crisi ed emergenza.',
                    texto2: 'Porta avanti un percorso di analisi personale ad orientamento psicoanalitico. Si forma ed esercita in contesto ospedaliero, presso il reparto di Neuropsichiatria Infantile dell’Ospedale Infantile Regina Margherita di Torno, con attenzione alla presa in carico di pazienti affetti da patologia complessa e cronica, anche organica. \n\nUnitamente al percorso di specializzazione in psicoterapia psicodinamica e alla libera professione, collabora da anni con istituzioni scolastiche e associazioni di volontariato, presso cui svolge attività educative, sia col gruppo classe che col singolo, di formazione rivolte al personale scolastico e di sostegno a bambini e ragazzi all’interno di progetti di psicologia scolastica.'
                },

                {
                    titulo: 'Dott. Giampaolo Rigliaco',
                    tel: '333 238 4030',
                    mail: 'giampaolo.rigliaco@yahoo.it',
                    texto1: 'Laureato in Psicologia Clinica e di Comunità presso l’Università degli Studi di Firenze e successivamente presso la Facoltà di Psicologia di Torino. Specializzato in infanzia, adolescenza e genitorialità, secondo orientamento psicodinamico. Si forma, prima in veste di studente tirocinante e poi come specializzando, presso il reparto di Neuropsichiatria Infantile dell’Ospedale Infantile Regina Margherita di Torino. Porta avanti un percorso di analisi personale ad indirizzo psicoanalitico.',
                    texto2: 'Ha maturato esperienza pluriennale in ambito scolastico, relativamente al sostegno e all’accompagnamento terapeutico di minori affetti da disturbi pervasivi dello sviluppo; ha inoltre operato nell’accoglienza di cittadini stranieri richiedenti protezione internazionale. Esercita in libera professione e opera in contesto comunitario e in regime di domiciliarità con pazienti adulti psichiatrici sul territorio piemontese. Parallelamente si occupa di attività formative rivolte a personale educativo.'
                }
            ]
        }
    },
   
   
});