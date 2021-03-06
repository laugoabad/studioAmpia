Vue.component('aree', {
    template: //html
        `
        <div class="mb-5">
            <div classs="mx-3">
                <h2 class="titulo-seccion">Aree d'Interesse
                </h2>
            </div>
            <div v-if="!leerMas" class="container-aree">
                <ul>
                    <li v-for= "(item, index) of items" >
                        <h3 class="mt-5 font-weight-bold">
                            {{item.titulo}}
                        </h3>
                        <div class="texto-normal">
                            <p style="white-space:pre-line;" class="mt-n3">
                                {{item.texto1}}
                            </p>
                                <a href="#aree"><button class="btn btn-secondary" @click= "checkLeerMas(index)">
                                   <span v-if="leerMas">Leggere -</span>
                                   <span v-else>Leggere +</span>
                                </button> </a>
                            
                        </div>
                    </li>
                </ul>
            </div>

            <template v-else>
            <h3 class="mt-5 font-weight-bold">
                {{items[i].titulo}}
            </h3>
            <p style="white-space:pre-line;" class="texto-normal mt-n3">
                {{items[i].texto1}}
                {{items[i].texto2}}  
            </p>   
            <button class="btn btn-secondary" @click= "leerMas=!leerMas">
                <span v-if="leerMas">Leggere -</span>
                <span v-else>Leggere +</span>
            </button>
                      
           
        </template>
        </div>
        `,

    data() {
        return {
            leerMas: false,
            items: [
                {
                    titulo: 'La Genitorialità',
                    texto1: 'La Genitorialità è la disposizione emotiva e comportamentale che accompagna la funzione del genitore, la condizione di chi sente di doversi prendere cura, di chi sente la responsabilità di preoccuparsi e occuparsi di un figlio: diventare genitori significa creare uno spazio mentale di disponibilità, di attenzione amorevole e di sollecitudine costante.  La funzione genitoriale prende forma sin da che il figlio è soltanto pensato, quando l’idea di un bambino inizia a farsi strada nella mente, e si struttura per tutto l’arco della vita futura, chiedendo una ridefinizione continua.',
                    texto2:'La nascita di un bambino porta ad avere a che fare con le proprie esperienze infantili, con i propri modelli genitoriali e i conflitti che attorno vi si creano.Ciascun genitore mette in campo aspetti del proprio mondo interno, costituitosi attorno ad esperienze di vita, progetti, risorse, fragilità del tutto personali.Diventare genitori implica una riorganizzazione interna, oltre che esterna, notevole.L’arrivo di un bambino produce un cambiamento radicale: si tratta di un nuovo incontro e della perdita della situazione precedente.Si fanno strada aspettative e timori, sul bambino e su di sé, come singoli e come coppia, tenuto conto - peraltro - che l’esperienza può rivelarsi non egualmente rilevante per i membri della coppia o che non coincidano i tempi del desiderio.\n\nEssere genitori comporta adottare atteggiamenti e modalità comunicative differenti a seconda dell’età e dello sviluppo del figlio, reinventandosi continuamente.Significa imparare a sostenere alternanza ed equilibrio tra la funzione di cura, protezione e accudimento e la spinta all’autonomia e alla separazione. La genitorialità rappresenta una crisi evolutiva, che può rivelarsi continua e costante, nella sua mutevolezza, nel corso della crescita del figlio. Essere genitore significa anche entrare in contatto con sentimenti di inadeguatezza, frustrazione, senso di colpa, che possono produrre talora fantasie di fuga dalle responsabilità, timori di abbandono e di rifiuto.\n\nConsentire un dialogo tra i bisogni di un figlio di qualunque età e i bisogni profondi del genitore è spesso faticoso.L’esigenza di un sostegno non è sempre soddisfatta tra le risorse personali e familiari.Talvolta può essere necessario e utile un percorso che traghetti verso una comprensione maggiore di sé, del proprio figlio e della relazione.Quale che sia l’approccio, la quantità e la qualità delle informazioni e la disponibilità di uno spazio che orienti, contenga e rassicuri, può rivelarsi un aiuto prezioso.'
                },
                {
                    titulo: 'La Fase Perinatale e Neonatale',
                    texto1: 'Attorno alla fase Perinatale e per tutto l’arco del periodo Neonatale del figlio, la famiglia attraversa esperienze tumultuose e profondamente ambivalenti. Ogni nuova nascita si accompagna ad un turbinio di vissuti del tutto nuovi. Le emozioni si affastellano nella mente, disordinate e ingovernabili. La sensazione di una felicità fluida, non ancora organizzata attorno ad un pensiero preciso, si confonde con uno stato di allerta costante e grande.',
                    texto2:'Il puerperio rende la madre tanto energica e sollecita, quanto fragile e disorientata.Le preoccupazioni si dilatano, le percezioni si deformano, il tempo scorre a ritmo incostante, talora rapidissimo, talora invece sin troppo lento.La dimensione dell’allattamento si rende spesso faticosa, col passare delle settimane, più di quanto molte donne abbiano avuto occasione di immaginare prima.Il sonno disorganizzato, l’ansia di far bene, le voci di chi porta aiuto ed esperienza che si sovrappongono le une alle altre e che, a tratti, mettono a tacere l’istinto, ancor troppo grezzo per essere ascoltato; la difficoltà del padre nel proteggere la diade mamma- neonato e – prima ancora – di legittimarsi un ruolo così complesso; la stanchezza, la sfiducia nelle proprie competenze, l’ansia rispetto all’irrequietezza del neonato e alla sua spasmodica ricerca di contenimento, la mancanza di ritmo, la necessità insaziabile di conferme, la discrepanza tra la genitorialità pensata e quella vissuta, sono solo alcuni degli aspetti cui le madri e i padri fanno fronte in questa fase.\n\nLo sconquasso - che si stempera solo a momenti - di una trasformazione radicale e rapida, dagli aspetti istintivi, mai troppo semplici da comprendere e assecondare, fa sì che tutto vada ricalibrato, persino uno spostamento minimo va riorganizzato secondo strategie nuove.\n\nAnche la consapevolezza delle competenze sempre più complesse e fondamentali che il bambino acquisisce nei primi mesi di vita e l’importanza del proprio ruolo nella sua maturazione mentale e nella costruzione di un sano senso di sicurezza e di apertura verso l’ambiente, spaventa non poco i neogenitori.\n\nOffrire uno spazio di consulenza nel periodo perinatale e neonatale, sia esso in forma di osservazione, assistenza all’allattamento o sostegno alla neogenitorialità, equivale a mettere a disposizione della famiglia uno strumento fondamentale di prevenzione, a garanzia della salute del piccolo nucleo e del futuro individuo.'
                },
                {
                    titulo: "L'Infanzia",
                    texto1: 'L’Infanzia si inscrive nel periodo della vita che conduce sino alla comparsa delle prime avvisaglie della pubertà. Il bambino, nel complesso della sua esperienza soggettiva, transita attraverso fondamentali trasformazioni.La crescita del bambino riguarda gli aspetti più vari e molteplici, non solo lo sviluppo e l’acquisizione di abilità, di qualsivoglia natura e ordine.Le caratteristiche personali, temperamentali anzitutto, incontrano infatti lo sviluppo del pensiero e  della competenza emotiva: il bambino impara a pensare e a riconoscere e nominare le emozioni, proprie e di chi ha attorno, competenze che hanno radice nella relazione con i genitori e si costituiscono e caratterizzano nei contesti – via via più numerosi – nei quali sperimenta la propria socialità: la scuola, le attività ludiche e sportive, il gruppo dei pari, tra gli altri.',
                    texto2:'Già nella primissima infanzia, attraverso gli scambi con gli adulti di riferimento, il bambino fa esperienza di relazioni fondamentali per la strutturazione della propria identità, per quello che diventerà il proprio modo di rapportarsi agli altri, nonchè di percepire se stesso e la realtà che lo circonda, presente e futura.Il bambino, infatti, incontra sempre le fantasie, le proiezioni, le aspettative dei propri genitori, e questo dà ai suoi comportamenti un significato che è importante saper ascoltare, comprendere e decifrare in una prospettiva familiare.\n\nDi seguito, l’esperienza scolastica permetterà al bambino di sperimentare una certa discontinuità di relazione, declinata questa volta al di fuori del ristretto contesto familiare.Gli incontri regolari con i coetanei, i ruoli e le regole del tutto nuovi dell’istituzione pubblica, offrono la possibilità di apprendere e affinare abilità e conoscenze essenziali al vivere sociale.Leggere, scrivere, far di conto, stare all’interno di un gruppo di persone, imparando a rispettarne norme, limiti e valori, sono solo alcune delle competenze che il contesto scolastico garantisce al bambino.\n\nL’infanzia è dunque una fase estremamente plastica e i bisogni evolutivi dei bambini si modificano velocemente.In quest’ottica, è bene che anche prevenzione e intervento siano centrati sui singoli passaggi, così da sostenere le competenze genitoriali, continuamente in costruzione, e - unitamente - dar valore alle caratteristiche personali del bambino, avendo sempre in mente l’importanza di un angolo di visuale più ampio possibile e di un approccio che tenga conto del contesto familiare e sociale in cui ciascun soggetto si muove.'
                },
                {
                    titulo: "L'Adolescenza",
                    texto1: 'L’Adolescenza rappresenta la stagione della vita più incerta e problematica, un periodo delicatissimo che è, nel contempo, di verifica e di esplorazione. La crisi, il travaglio interiore, in questo faticoso processo di acquisizione di autonomia, muove il ragazzo a rinnegare la propria identità infantile e lo spinge verso la ricerca di un’immagine di sé differente, adulta.I punti di riferimento vacillano, talora crollano del tutto, per ridefinirsi velocemente, fuori dalla famiglia.Alcune forme di disagio si acutizzano e si fanno strada stati d’animo di incertezza e ribellione.',
                    texto2:'Intorno al corpo dell’adolescente e alla metamorfosi cui va incontro in modo massiccio e globale, in questo nuovo contesto di maturità sessuale si concentrano dubbi e timori.Possono facilmente generarsi sentimenti di imbarazzo, di eccessivo pudore, se non addirittura di vergogna e di rifiuto per una fisicità che, nel suo sviluppo, segue ritmi propri, quasi sempre troppo veloci rispetto ai tempi di maturazione del pensiero e della consapevolezza del ragazzo. La turbolenza fisica si accompagna dunque ad un tumulto psichico ed emotivo che produce confusione, instabilità e spesso angoscia.\n\nLa regolazione degli affetti è complessa, per il ragazzo e per gli adulti che gli sono accanto: tutte le parti si scoprono costrette a ridefinire i reciproci ruoli.Di importanza cardinale sono proprio le espressioni di conflittualità nei riguardi dell’adulto ed elettivamente delle figure genitoriali, sino ad ora concepite come forti e capaci di cura, verso cui il ragazzo adotta ora un atteggiamento ipercritico, che spesso esita in comportamenti provocatori e oppositivi.È il momento in cui inizia a costruire attorno a sé una comunità di pari con cui condividere un bagaglio di conoscenze che gli permetta di identificarsi con una nuova dimensione sociale e affettiva.È grande per il genitore la preoccupazione che ne deriva.L’intero sistema di valori intorno al quale si strutturano esperienze e relazioni familiari, sino ad ora, viene messo in discussione.Il limite diventa tanto necessario quanto scomodo e insostenibile per entrambe le parti.\n\nIn questa lunga partita, fatta di negoziazioni continue ed equilibri fluttuanti, tutti gli attori devono poter accettare di perdere qualcosa per poter accogliere il nuovo.La confusione e i timori sono condizioni costanti e può sorgere la necessità di trovare uno spazio entro cui portare dubbi e preoccupazioni, ma anche rabbia e frustrazione.Può rendersi opportuno uno sguardo esterno, attento, esperto e dedicato, perché si abbia la possibilità di provare a comprendere, se non le risposte, quantomeno le domande da porsi per consentire e accogliere il cambiamento del legame.'
                },
                {
                    titulo: "L’Età Adulta",
                    texto1: 'L’Età Adulta è l’età del pensiero maturo. L’arco della vita, tuttavia, è naturalmente scandito da momenti differenti, caratterizzati da situazioni e da legami in continuo mutamento e divenire. Spesso ci si trova ad affrontare periodi di grande fatica, instabilità, sconforto, talvolta di vera e propria solitudine.Può accadere di sentirsi disorientati di fronte a scelte importanti e cambiamenti significativi.Si può avvertire una sensazione di insoddisfazione, di incompletezza, spesso senza che la ragione del malessere sia di agevole comprensione. Il lutto, le separazioni, la perdita di un posto di lavoro, sono eventi profondamente angoscianti; il dolore per una perdita può destabilizzare la vita di tutti i giorni e le relazioni, presenti e future.Avere a che fare con sentimenti di questa portata, non di rado, allontana dalla consapevolezza delle proprie risorse.',
                    texto2:'Un evento traumatico o il protrarsi nel tempo di una situazione difficile hanno certamente un forte impatto sulla psiche, ma quando anche il corpo si fa portavoce del disagio, la sintomatologia che ne deriva non sempre è facilmente decifrabile.\n\nMolto spesso la sofferenza è tale da generare la sensazione netta di essere “poco attrezzati”, sia nel riconoscere che nel dare significato a quanto accade, in modo da potervi far fronte.\n\nTalora i meccanismi di difesa, consolidatisi così faticosamente nel tempo e grazie ai quali si è sempre mantenuto un buono stato di equilibrio, non si rendono più sufficientemente efficaci.Spesso, in occasione di eventi particolarmente stressanti, si ha una sensazione di vulnerabilità e di sopraffazione.Il vissuto si amplifica ed è proprio in questi frangenti che si incorre nel rischio di invorticarsi in stati depressivi o ansiosi, in condizioni di faticoso rimuginio, che rendono complesse e insostenibili anche le piccole azioni del vivere quotidiano, minando legami affettivi e lavorativi.\n\nDiventa pertanto essenziale riuscire a dar voce al complesso di stati d’animo attraverso cui si transita, per periodi più o meno lunghi, trovando uno spazio nel quale darsi la possibilità di mettere in parola quel che di più scomodo affligge, uno spazio nel quale dare significato ad un sintomo che si fa via via più gravoso e intollerabile e di cui ci si vorrebbe soltanto liberare, acquisendo una consapevolezza maggiore, che consenta di riscoprire le proprie risorse e costruirne di nuove.'
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