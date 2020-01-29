Vue.component('eventi', {
    template: //html
        `<div>
            <div> 
                <h2 class="titulo-seccion text-center">Eventi</h2>
            </div>
            <h2 class="sub-titulo"> Calendario</h2>
            <div class="row calendario mx-auto">
                <article v-for="(fecha, index) of fechas" class="col-12 mx-auto">
                    <div v-if="fecha.giorno!=='' ">
                    <div :class="{'row-striped-grey': index % 2 === 0, 'row-striped-white': index % 2 !== 0}">
                        <div class="row">
                            <div class="col-3 text-center">
                                <h2 class="display-4"><span class="badge badge-secondary">{{fecha.giorno}}</span></h2>
                                <h3><strong>{{fecha.mese}}</strong></h3>
                            </div>
                            <div class="col-9">
                                <h4 class="text-uppercase"><strong>{{fecha.titulo}}</strong></h4>
                                
                                <div class="fecha texto-chico" ><img src="imgs/iconmonstr-time-3-240.png" alt="" width="10" height="10"><strong> {{fecha.ora}}  </strong></div> 
                              
                                <div class="fecha texto-chico"><img src="imgs/iconmonstr-location-1-240.png" alt="" width="10" height="10"> {{fecha.luogo}}</div> 
                            </div>
                        </div>
                        </div>
                    </div>
                </article>
            </div>
         
<h2 class="sub-titulo"> Tematiche</h2>
            <div v-if="!leerMas" class="mt-5">
                <div class="row d-flex justify-content-center mx-3">
                    <article v-for="(item, index) of items" class="card col-10 col-md-5 col-xl-3" @click="checkLeerMas(index)">
                        <div class="card-img-top">
                           <img v-bind:src="item.imagen" alt="">
                        </div> 
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title text-center mb-1">
                            {{item.titulo}}
                            </h5>
                        </div> 
                            
                        <div class="info">
                            +info
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
            
            items: [
                {
                    titulo: 'I Disturbi dell Sonno nell’Infanzia',
                    imagen: 'imgs/eventi1.png',
                    texto: 'Il sonno disordinato e discontinuo, in un periodo della vita nel quale siamo portati ad immaginarlo sereno e indisturbato, è ormai motivo di consultazione frequente, in quest’epoca di ritmi frenetici, di luci artificiali diffuse e persistenti, di strumenti elettronici sempre più precocemente a disposizione dei piccoli. \nUn’occasione per esplorare e condividere aspetti organici e aspetti di ordine più squisitamente psicologico, ma anche e soprattutto per comprendere lo sviluppo naturale dell’autonomia dell’addormentamento, uno dei traguardi fondamentali nella crescita dei nostri bambini.'
                },
                {
                    titulo: 'L’Adolescente e la Paura del Mondo',
                    imagen: 'imgs/eventi2.jpg',
                    texto: 'Un momento di confronto e di scambio in cui riflettere sull’adolescenza, sulle sfide e sui mutamenti del sistema relazionale che vede protagonisti i ragazzi e le loro famiglie, in un’epoca dominata da un’iperconnessione che troppo spesso si traduce in profonda solitudine e paura del mondo.\n\nI nuovi adolescenti tra reale e virtuale: uno spazio ignoto in cui cercare incessantemente un equilibrio mai scontato, in cui cercare risposte e tentare automedicazioni; un terreno sconosciuto alle famiglie e agli educatori, che genera dubbi e angosce e che ci interroga sulla funzione dell’adulto.\nL’incontro ha l’obiettivo di creare un dialogo, una connessione, tra mondi non così distinti.'
                },
                {
                    titulo: 'DSA - Il Punto di Vista del Bambino',
                    imagen: 'imgs/eventi3.jpg',
                    texto: 'Un incontro formativo e informativo per fare chiarezza sui Disturbi Specifici dell’Apprendimento(DSA). Ripercorrendo ciascuna delle fasi dal percorso diagnostico, sino alla formulazione di strategie di compensazione, ci si soffermerà in special modo sui vissuti dei bambini e dei ragazzi.'
                },
                {
                    titulo: 'I Famigerati Terribili Due',
                    imagen: 'imgs/eventi4.jpg',
                    texto: 'I due anni, terribili e deliziosi, sono il territorio di confine in cui massimamente si incontrano l’imitazione e la limitazione. I tentativi costanti del piccolo di svalicare i limiti e le negoziazioni continue sembrano non trovare soluzione.\n\Improvvisamente anche il bambino dal temperamento più mite affina l’arte delle urla, dei pianti inconsolabili e delle reazioni inaspettate. L’autonomia che sboccia, la personalità che brilla, sono aspetti straordinari da osservare, ma spesso si è stanchi per prestare l’attenzione che si vorrebbe e che il bambino si aspetta.\n\nRivolgiamo lo sguardo al loro atteggiamento oppositivo come tentativo iniziale, talora maldestro, senz’altro confuso, di comprendere e sperimentare la propria posizione nel mondo.\n\nConsideriamo gli aspetti fondamentali della genitorialità, in un’epoca della crescita in cui il paradigma - benché declinato nella maniera più varia e molteplice - è l stesso per tutti: il compito dell’adulto è di porre limiti, il compito del piccolo è di oltrepassarli …un No contro No, che fa scintille!'

                },
               
                {
                    titulo: 'Il Tempo di Svezzare',
                    imagen: 'imgs/eventi5.png',
                    texto: 'L’idea di approdare finalmente allo svezzamento può sollevare non poche preoccupazioni. È un momento del tutto rivoluzionario, ma è anche un traguardo cui naturalmente si guarda con sentimenti ambivalenti. Per la madre rappresenta una delle prime occasioni per riconoscere l’individualità del proprio bambino, con le sue preferenze, competenze, con il suo temperamento e tendenza più o meno spontanea ad abbracciare l’autonomia.\n\nParliamo di una delle prime, importanti, fasi di acquisizione di autonomia, che anticipa e in certa misura condiziona le successive, accompagnandosi, non di rado, alla sensazione di perdere l’equilibrio perfetto di cui si fa esperienza durante l’allattamento, traghettando tuttavia l’intera famiglia ad una nuova vivacissima dimensione. Sapori, consistenze, odori e colori cambiano e si moltiplicano rapidamente, tra lo stupore del piccolo e il divertimento di tutti.'
                }
            ],
            fechas: [
                {
                    titulo: 'Disordini del Sonno in Età Pediatrica',
                    giorno: '18',
                    mese: 'APR',
                    ora: '10:30 - 12',
                    luogo: 'Studio Pediatrico Parella - via Crevacuore 37, Torino'
                },
                {
                    titulo: 'I Famigerati Terribili Due',
                    giorno: '16',
                    mese: 'MAG',
                    ora: '10:30 - 12',
                    luogo: ' Studio Pediatrico Parella - via Crevacuore 37, Torino'
                },
                {
                    titulo:'DSA - Il Punto di Vista del Bambino',
                    giorno: '6',
                    mese: 'GIU',
                    ora: '10:30 - 12',
                    luogo: ' Studio Pediatrico Parella - via Crevacuore 37, Torino'
                },
            ]
        }
    },

    methods: {
        checkLeerMas(index) {
            this.leerMas = !this.leerMas;
            this.i = index;
        }
    }   

})

