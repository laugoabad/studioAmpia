Vue.component('servizi', {
    template: //html
        `
    <div class="container-fluid my-5 py-5">
        <div class= "container-servizi">
           <h2 class="titulo-seccion text-center">Servizi</h2>
           <div class="row">
                <div class="col-12 col-lg-7 d-flex justify-content-center">
                    <img src="imgs/97cfd816-9b0e-4c61-ac4b-206075bb7a81-r.jpg" alt="">
                </div>    
               
                <div class="col-12 col-lg-5 mt-5">
                    <p class="d-flex justify-content-center texto-grande font-weight-bold" style="white-space:pre-wrap;">{{intro1}}</p>
                    <p class="d-flex justify-content-center texto-grande font-weight-bold" style="white-space:pre-wrap;">{{intro2}}</p>
                </div>
            </div>
        </div>
        <div v-if="!leerMas" class="mt-5">
            <div class="row d-flex justify-content-center mx-5">
              <article v-for="(item, index) of items" class="card col-8 col-md-3 col-xl-3" @click="checkLeerMas(index)">
                 <div class="card-img-top">
                 <img v-bind:src="item.imagen"  alt="">
                </div> 
                 <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-center mb-1">
                     {{item.titulo}}
                    </h5>
                 </div> 
                 <div class="info float-right">+info
                 </div>   
              </article>
            </div> 
        </div>
      
        <template v-else>
            <article class="row d-flex justify-content-center m-5">
                <div class="card servizi-esteso col-12">
                    <div class="card-body">
                        <h5 class="card-title text-center">{{items[i].titulo}}</h5>
                           <p class="p-1" style="white-space:pre-line;">
                           {{items[i].texto}}
                           </p>
                    </div>
                    <div class="d-flex justify-content-center">
                       <div class="boton text-center" @click="leerMas = !leerMas">Torna indietro</div>
                     </div> 
                </div>
              
            </article>
        </template>
    </div>
    `,

    data() {
        return {
            leerMas: false,
            intro1: 'Lo studio offre un servizio qualificato di psicodiagnosi, sostegno e psicoterapia, dedicato a famiglie, genitori, adolescenti, bambini e adulti, in un contesto protetto, inclusivo ed accogliente.',
            intro2:'L’équipe, che si avvale di collaborazioni multidisciplinari, valuta e progetta interventi di cura specifici e pensati per ciascun paziente.',

            items: [
                { 
                    titulo: 'Sostegno e Trattamento Individuale per bambini, giovani e adulti',
                    imagen: 'imgs/0-r.png',
                    texto: 'Il Sostegno Psicologico Individuale ha come obiettivo il miglioramento della qualità della vita ed è indirizzato a coloro che attraversano un periodo di disagio o sofferenza psichica; si tratta di un intervento volto ad accogliere le difficoltà, nel quale il paziente ha occasione di sperimentare insieme al terapeuta una modalità di adattamento più efficace. Il sostegno è declinato differentemente in base alle caratteristiche individuali di ciascuno e lo strumento principe è il colloquio clinico. In caso di lavoro con minori, dal momento che gioco e disegno rappresentano un canale espressivo ricchissimo, vengono comunemente utilizzati colori, materiali di gioco e di manipolazione libera.\n\nnAttraverso la Psicoterapia Individuale il terapeuta accompagna il paziente in un percorso di conoscenza di sè, di acquisizione di consapevolezza del proprio modo di pensare e di agire. Il terapeuta lavora con il paziente avvalendosi anzitutto sulle sue capacità individuali, in modo da rafforzare, sviluppare, promuovere le risorse interne che gli sono necessarie per superare le tappe evolutive e gli eventi critici dell’esistenza. Chi soffre, quindi, scorge nuove possibilità di dirimere i propri conflitti profondi, durante un percorso psicoterapeutico, che si contraddistingue proprio per la qualità dell’esperienza relazionale che viene vissuta insieme al terapeuta. Accogliere e riconoscere l’altro anche nella sua sofferenza, specie quando non abbia trovato sufficiente ascolto altrove, è prerogativa fondamentale di questo lavoro.\n\nLa stanza di terapia per bambini e adolescenti è allestita in modo peculiare, allo scopo di predisporre un’atmosfera che faciliti l’espressione dei vissuti dei giovani pazienti. I professionisti dell’équipe hanno pluriennale esperienza nella tecnica dell’interpretazione del gioco, strumento indispensabile per lavorare con bambini anche molto piccoli.\n\nCosì come per gli adulti e per gli adolescenti, l’obiettivo della psicoterapia infantile è rendere possibile la comprensione delle fantasie e delle angosce dei piccoli pazienti e aiutarli a sviluppare gli strumenti necessari ad affrontare la crescita e le difficoltà ad essa connesse. Laddove si renda opportuno sarà possibile collaborare con altre figure professionali in un’ottica di presa in carico multidisciplinare.'
                },

                {
                    titulo: 'Psicodiagnosi, Valutazioni Cognitive, Testistica',
                    imagen: 'imgs/1-r.png',
                    texto: 'La Psicodiagnosi si organizza in un ciclo di incontri finalizzato ad una descrizione dinamica delle specifiche modalità di funzionamento individuale, con particolare attenzione a risorse e capacità, ma anche agli elementi di conflitto, siano essi all’origine del disagio che porta il paziente all’attenzione del terapeuta o meno percettibili.\n\nÈ fondamentale che il terapeuta riconosca, dapprima, ed interpreti correttamente, poi, gli elementi che rimandano alla sofferenza mentale del paziente, al fine di delineare un percordo di presa in carico mirato, attraverso cui sia possibile accompagnare il paziente stesso ad avvicinarsi ai propri sintomi, a coglierne i significati e ad imparare a formulare attorno ad essi un pensiero.\n\nGli strumenti di cui il professionista si avvale, in un percorso psicodiagnostico, includono l’osservazione partecipe e qualificata, i colloqui clinici, ma anche gioco, disegno e testistica, proiettiva e/o cognitiva.\n\nNel percorso psicodiagnostico in età evolutiva è molto importante il coinvolgimento delle figure genitoriali e di chi si prende cura del minore, allo scopo di comprendere al meglio le dinamiche familiari e progettare insieme la presa in carico più idonea.'
                },

                {
                    titulo: 'Percorsi di Sostegno alla Genitorialità',
                    imagen: 'imgs/2-r.png',
                    texto: 'Il Sostegno alla Genitorialità è destinato a genitori in difficoltà per ragioni che hanno a che fare con la complessità del ruolo e dei continui adattamenti che esso richiede, a fronte dei cambiamenti fisiologici, emotivi e relazionali che la nascita e la crescita di un figlio implicano. La complessità della funzione genitariale si struttura intorno ad aspetti individuali, alle dinamiche di coppia e alle competenze relazionali di ciascuno. Comporta la capacità di adattare in modo dinamico il proprio stile educativo ai bisogni evolutivi del figlio, pur quando si modificano velocemente.\n\nI percorsi di sostegno genitoriale sono volti a sostenere il ruolo di ciascun genitore nel proprio specifico contesto e a rafforzarne le competenze educative, la qual cosa non può prescindere dalla loro possibilità di comprensione delle esigenze, delle ansie, delle paure e dei desideri del figlio, nonchè delle sue modalità comunicative, ma deve tener conto altresì della capacità che il genitore ha di guardare a se stesso e al sistema di relazioni intrafamiliari del quale è parte.'
                },

                {
                    titulo: 'Osservazione Perinatale e Neonatale, Sostegno all’Allattamento e al Puerperio',
                    imagen: 'imgs/3-r.png',
                    texto: 'Le sedute di Osservazione Mamma-Bambino, rappresentano uno strumento prezioso di consultazione, attraverso cui rivolgere uno sguardo attento ed empatico alla relazione tra una madre e il suo bambino, in età anche precocissima. Si tratta di un percorso utile a favorire la comprensione, da parte dei genitori, dei significati profondi dei segnali che il bambino invia, talvolta difficilmente decifrabili, specie quando si è direttamente coinvolti.\n\nUn vero e proprio lavoro di traduzione da un livello comunicativo preverbale, che è veicolo di espressione di qualsivoglia stato d’animo del neonato, ad un linguaggio adulto, chiaro, significativo e diretto, accessibile ai genitori. I bambini per manifestare disagi, preoccupazioni e angosce utilizzano sintomi e atteggiamenti corporei, spesso fraintendibili e di difficile comprensione.\n\nLa possibilità di sintonizzarsi emotivamente e rispondere in maniera sufficientemente buona alle richieste del bambino è una condizione necessaria e fondamentale a favorire un suo sviluppo psicofisico, mentale ed emotivo armonioso. È importante provare ad accedere al significato autentico di un disturbo del sonno, di una difficoltà in corso di svezzamento, di un sintomo che si manifesta in occasione dell’inserimento al nido – tra il resto - ed intervenire in modo sintonico.\n\nL’équipe dello Studio AMPIA ha una comprovata esperienza clinica nell’ambito di detta tipologia di intervento, poiché tutti i professionisti, nel loro percorso formativo, di orientamento psicodinamico, hanno condotto esperienze pluriennali di osservazione, con bambini in fascia d’età 0-5, in contesto familiare e scolastico.'
                },

                {
                    titulo: 'Incontri di Formazione, Approfondimento e Discussione',
                    imagen: 'imgs/4-r.png',
                    texto: 'Gli incontri di Formazione, che lo studio AMPIA propone, siano essi seminari, conferenze o eventi occasionali di approfondimento, vengono organizzati in collaborazione con enti, istituti scolastici, associazioni pubbliche e private del territorio piemontese, per fornire servizi di informazione e discussione su tematiche riguardanti la funzione genitoriale, la neonatalità, l’infanzia e l’adolescenza, negli aspetti più complessi delle tappe evolutive. Vengono altresì trattate le dinamiche relazionali e di gruppo, in contesto familiare ed extrafamiliare, l’orientamento scolastico e molto altro.\n\nAlcune proposte sono specificatamente rivolte a figure professionali che lavorano in ambito sociosanitario e psicoeducativo: infermieri, psicologi, medici, OSS, educatori, insegnati, logopedisti, tra gli altri.Molti incontri sono invece pensati per chi abbia curiosità e desiderio di approfondire aspetti chiave che possono eventualmente risultare preziosi nella vita quotidiana, domestica, familiare e sociale.'
                },

                {
                    titulo: 'Laboratori e Progetti Psicoeducativi',
                    imagen: 'imgs/5-r.png',
                    texto: 'I Laboratori Scolastici ed Extrascolastici, si organizzano in attività di gruppo, mediate da un esperto, e si rivelano spesso occasione di confronto e crescita per i bambini e i ragazzi cui sono rivolti. Il clima degli incontri è di ascolto empatico e attento, ciascuno è incoraggiato ad offrire il proprio contributo e vengono scelti argomenti che possano stimolare le curiosità giovanili che non di rado restano inespresse per paura, pudore, vergogna.\n\nTematiche ricorrenti sono l’educazione all’affettività, la gestione e l’espressione delle emozioni e dei conflitti, la sensibilizzazione verso le disabilità, ma anche l’educazione stradale e l’abuso di sostanze.\n\nAlcuni degli interventi, in contesto scolastico, vengono proposti sulla base di una specifica richiesta da parte del corpo docente, laddove siano state rilevate difficoltà di gestione del singolo o del gruppo classe.\n\nDurante gli incontri, a partire da un livello informativo, si lavora affinché i ragazzi possano imparare a collaborare tra loro, cooperando in maniera efficace, promuovendo, pertanto, competenze indispensabili al vivere sociale. A tale scopo si ricorre all’utilizzo di tecniche di conduzione del gruppo, tra cui il cirle time, la peer education, lo psicodramma.\n\nLo studio AMPIA organizza laboratori e incontri presso associazioni territoriali e scuole di ogni ordine e grado.'
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
    })