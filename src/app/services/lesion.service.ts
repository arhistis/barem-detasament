import { Victim } from './../types/victim.d';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from '../../../node_modules/rxjs';
import { Lesion } from '../types/lesion';

@Injectable()
export class LesionService {

  victim: Victim = {
    nume: "",
    varsta: null,
    context: "",
    leziuni: []
  };

  constructor(
    private http: HttpClient
  ) {}

  // getLesions(): Observable<Lesion[]> {
  //   return this.http.get<Lesion[]>(`${environment.apiUrl}/api/lesions`);
  // }

  setVictimInfo(nume: String, varsta: Number, context: String){
    this.victim.nume = nume;
    this.victim.varsta = varsta;
    this.victim.context = context;
  }

  getVictimInfo() {
    return {nume: this.victim.nume, varsta: this.victim.varsta, context: this.victim.context};
  }

  setVictimLesions(lesions: {lesion: Lesion, location: String}[]){
    this.victim.leziuni = lesions;
  }

  getVictimLesions(){
    return this.victim.leziuni;
  }

  getLesions2(){
    return this.lesions;
  }

  getGeneralLesions() {
    return this.generalLesions;
  }

  getLiderLesions() {
    return this.liderBarem;
  }

  getVictim(){
    return this.victim;
  }

  resetVictim(){
    this.victim = {
      nume: "",
      varsta: null,
      context: "",
      leziuni: []
    };
  }

  generalLesions: Lesion[] = [
    {
      "nume": "Managementul situatiei si abordarea victimei",
      "manevre": [
        {
          "descriere": "Calm si increzator",
          "punctajMaxim": 2,
          "punctajPartial": 1
        },
        {
          "descriere": "Realizarea unei zone sigure",
          "punctajMaxim": 2,
          "punctajPartial": 1
        },
        {
          "descriere": "Initierea contactului verbal cu victima",
          "punctajMaxim": 2,
          "punctajPartial": 1
        },
        {
          "descriere": "Prezentare ca salvator",
          "punctajMaxim": 2
        },
        {
          "descriere": "Cere informatii despre ce s-a intamplat",
          "punctajMaxim": 2,
          "punctajPartial": 1
        }
      ]
    },
    {
      "nume": "Examinare si tratament specific",
      "manevre": [
        {
          "descriere": "Incurajarea victimei de a sta jos",
          "punctajMaxim": 2
        },
        {
          "descriere": "Intreaba ce o doare",
          "punctajMaxim": 2,
          "punctajPartial": 1
        },
        {
          "descriere": "Examinarea victimei",
          "punctajMaxim": 2,
          "punctajPartial": 1
        },
        {
          "descriere": "Localizeaza si recunoaste leziunea / ile",
          "punctajMaxim": 2,
          "punctajPartial": 1
        }
      ]
    },
    {
      "nume": "Tratament general",
      "manevre": [
        {
          "descriere": "Pastrarea pozitiei confortabile pentru victima",
          "punctajMaxim": 2
        },
        {
          "descriere": "Verificarea respiratiei si frecventa acesteia",
          "punctajMaxim": 2,
          "punctajPartial": 1
        },
        {
          "descriere": "Verificarea circulatiei si frecventa cardiaca",
          "punctajMaxim": 2,
          "punctajPartial": 1
        },
        {
          "descriere": "Evaluarea secundara",
          "punctajMaxim": 2,
          "punctajPartial": 1
        },
        {
          "descriere": "Protejarea victimei de conditiile meteo",
          "punctajMaxim": 2,
          "punctajPartial": 1
        },
        {
          "descriere": "Desfacerea articolelor vestimentare stramte",
          "punctajMaxim": 2,
          "punctajPartial": 1
        },
        {
          "descriere": "Reevaluarea manevrelor efectuate",
          "punctajMaxim": 1
        },
        {
          "descriere": "Folosirea corecta a componentelor trusei",
          "punctajMaxim": 2,
          "punctajPartial": 1
        },
        {
          "descriere": "Folosirea corecta a manusilor",
          "punctajMaxim": 2,
          "punctajPartial": 1
        }
      ]
    },
    {
      "nume": "Suportul psihologic",
      "manevre": [
        {
          "descriere": "Tratarea cu respect a victimei",
          "punctajMaxim": 2,
          "punctajPartial": 1
        },
        {
          "descriere": "Explicarea tratamentului efectuat",
          "punctajMaxim": 2,
          "punctajPartial": 1
        },
        {
          "descriere": "Linistirea eficienta a victimei",
          "punctajMaxim": 2,
          "punctajPartial": 1
        }
      ]
    }
  ]

  lesions: Lesion[] = [
    {
      "nume": "Agitatie",
      "manevre": [
        {
          "descriere": "Indepartarea victimei de sursa de neliniste",
          "punctajMaxim": 8,
          "punctajPartial": 4
        },
        {
          "descriere": "Incurajarea victimei sa stea asezata",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Reuniune mama-copil",
          "punctajMaxim": 8
        }
      ]
    },
    {
      "nume": "Amputatie",
      "locatie": [
        "Mana stanga",
        "Mana dreapta",
        "Antebrat stang",
        "Antebrat drept",
        "Brat stang",
        "Brat drept",
        "Glezna stanga",
        "Glezna dreapta",
        "Gamba stanga",
        "Gamba dreapta",
        "Coapsa stanga",
        "Coapsa dreapta"
      ],
      "manevre": [
        {
          "descriere": "Controlarea rapida a hemoragiei prin compresie directa la nivelul bontului",
          "punctajMaxim": 8,
          "punctajPartial": 4
        },
        {
          "descriere": "Controlarea hemoragiei prin bandaj compresiv repetat daca este cazul",
          "punctajMaxim": 8
        },
        {
          "descriere": "Improvizare turniquet/garou proximal pe bont",
          "punctajMaxim": 8
        },
        {
          "descriere": "Elevare membru deasupra nivelului inimii",
          "punctajMaxim": 4
        },
        {
          "descriere": "Recuperarea partii amputate",
          "punctajMaxim": 8
        },
        {
          "descriere": "Conservarea partii amputate",
          "punctajMaxim": 8
        },
        {
          "descriere": "Notarea timpului la care a fost gasit",
          "punctajMaxim": 4
        },
        {
          "descriere": "Predarea partii amputate catre arbitru",
          "punctajMaxim": 8
        }
      ]
    },
    {
      "nume": "Arsuri",
      "locatie": [
        "Mana stanga",
        "Mana dreapta",
        "Antebrat stang",
        "Antebrat drept",
        "Brat stang",
        "Brat drept",
        "Glezna stanga",
        "Glezna dreapta",
        "Gamba stanga",
        "Gamba dreapta",
        "Coapsa stanga",
        "Coapsa dreapta",
        "Fata",
        "Spate",
        "Torace",
        "Abdomen"
      ],
      "manevre": [
        {
          "descriere": "Racire cu apa rece/repetat",
          "punctajMaxim": 8,
          "punctajPartial": 4
        },
        {
          "descriere": "Protejarea zonei arse cu comprese sterile/folie",
          "punctajMaxim": 4
        },
        {
          "descriere": "Stabilizarea lejera a protectiei cu triunghiuri sau fasa",
          "punctajMaxim": 4
        },
        {
          "descriere": "Chimice - Spalare si colectare spalatura",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Soc - elevare membre inferioare",
          "punctajMaxim": 4
        }
      ]
    },
    {
      "nume": "Alergie",
      "manevre": [
        {
          "descriere": "Chestionarea victimei asupra alergiilor prezente",
          "punctajMaxim": 4
        },
        {
          "descriere": "Indepartarea victimei din mediul alergizant",
          "punctajMaxim": 4
        },
        {
          "descriere": "Incurajarea automedicatiei victimei",
          "punctajMaxim": 4
        },
        {
          "descriere": "Ameliorarea simptomelor victimei cu coprese reci",
          "punctajMaxim": 4
        }
      ]
    },
    {
      "nume": "ASTM",
      "manevre": [
        {
          "descriere": "Chestionarea victimei asupra astmului preexistent",
          "punctajMaxim": 4
        },
        {
          "descriere": "Incurajarea automedicatiei victimei",
          "punctajMaxim": 4
        },
        {
          "descriere": "Consilierea miscarilor respiratorii",
          "punctajMaxim": 4
        }
      ]
    },
    {
      "nume": "AVC",
      "manevre": [
        {
          "descriere": "Incurajarea victimei sa stea asezata",
          "punctajMaxim": 6,
          "punctajPartial": 3
        },
        {
          "descriere": "Manevra specifica de recunoastere - Propozitii simple",
          "punctajMaxim": 4
        },
        {
          "descriere": "Manevra specifica de recunoastere - Sa zambeasca",
          "punctajMaxim": 4
        },
        {
          "descriere": "Manevra specifica de recunoastere - Sa ridice mainile",
          "punctajMaxim": 4
        },
        {
          "descriere": "Incurajarea victimei sa nu faca efort inutil",
          "punctajMaxim": 8,
          "punctajPartial": 4
        }
      ]
    },
    {
      "nume": "Entorsa",
      "locatie": [
        "Mana stanga",
        "Mana dreapta",
        "Cot stang",
        "Cot drept",
        "Glezna stanga",
        "Glezna dreapta",
        "Genunchi stang",
        "Genunchi drept"
      ],
      "manevre": [
        {
          "descriere": "Sustinerea si protejarea articulatiei afectate",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Bandaj elastic in pozitie neutra",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Aplicare gheata/comprese reci pe zona afectata",
          "punctajMaxim": 4
        },
        {
          "descriere": "Elevarea si sustinerea articulatiei afectate",
          "punctajMaxim": 4,
          "punctajPartial": 2
        }
      ]
    },
    {
      "nume": "Epilepsie",
      "manevre": [
        {
          "descriere": "Eliminarea potentialelor pericole prezente",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Protejarea capului victimei",
          "punctajMaxim": 4
        },
        {
          "descriere": "Sustinerea victimei",
          "punctajMaxim": 4
        },
        {
          "descriere": "PLS la incetarea convulsiilor - in caz de inconstienta",
          "punctajMaxim": 8,
          "punctajPartial": 4
        },
        {
          "descriere": "Notarea duratei crizei",
          "punctajMaxim": 4
        }
      ]
    },
    {
      "nume": "Evisceratie",
      "manevre": [
        {
          "descriere": "Pozitia orizontala (pe spate) a victimei",
          "punctajMaxim": 4
        },
        {
          "descriere": "Flexarea membrelor inferioare",
          "punctajMaxim": 4
        },
        {
          "descriere": "Bandaj umezit pentru sustinerea intestinelor",
          "punctajMaxim": 8,
          "punctajPartial": 4
        },
        {
          "descriere": "Reumezirea bandajului aplicat",
          "punctajMaxim": 4
        }
      ]
    },
    {
      "nume": "Fractura deschisa membru superior",
      "locatie": [
        "Antebrat stang",
        "Antebrat drept",
        "Brat stang",
        "Brat drept",
        "Clavicula"
      ],
      "manevre": [
        {
          "descriere": "Controlarea hemoragiei masive daca este cazul prin bandaj compresiv",
          "punctajMaxim": 8
        },
        {
          "descriere": "Protectie plaga prin comprese sterile",
          "punctajMaxim": 4
        },
        {
          "descriere": "Stabilizarea protectiei prin bandaje cu fasa sau triunghiuri",
          "punctajMaxim": 4
        },
        {
          "descriere": "Sustinerea/ protejarea fracturii pentru membrele superioare si centura scapulohumerala imobilizare cu triunghiuri de panza",
          "punctajMaxim": 8
        },
        {
          "descriere": "In caz de soc, ridicati si sustineti membrul neafectat",
          "punctajMaxim": 4
        }
      ]
    },
    {
      "nume": "Fractura deschisa membru inferior",
      "locatie": [
        "Gamba stanga",
        "Gamba dreapta",
        "Coapsa stanga",
        "Coapsa dreapta"
      ],
      "manevre": [
        {
          "descriere": "Controlarea hemoragiei masive daca este cazul prin bandaj compresiv",
          "punctajMaxim": 8
        },
        {
          "descriere": "Protectie plaga prin comprese sterile",
          "punctajMaxim": 4
        },
        {
          "descriere": "Stabilizarea protectiei prin bandaje cu fasa sau triunghiuri",
          "punctajMaxim": 4
        },
        {
          "descriere": "Mentinerea membrului afectat in pozitia in care a fost gasit",
          "punctajMaxim": 8
        },
        {
          "descriere": "In caz de soc, ridicati si sustineti membrul neafectat",
          "punctajMaxim": 4
        }
      ]
    },
    {
      "nume": "Fractura inchisa membru superior",
      "locatie": [
        "Antebrat stang",
        "Antebrat drept",
        "Brat stang",
        "Brat drept",
        "Clavicula"
      ],
      "manevre": [
        {
          "descriere": "Sa dea indicatii victimei sa-si sustina mana",
          "punctajMaxim": 4
        },
        {
          "descriere": "Sustinerea/ protejarea fracturii pentru membrele superioare si centura scapulohumerala imobilizare cu triunghiuri de panza",
          "punctajMaxim": 8,
          "punctajPartial": 4
        },
        {
          "descriere": "Interpunere material moale intre membru si torace",
          "punctajMaxim": 4
        },
        {
          "descriere": "Aplicare ghiata/comprese reci pe zona afectata",
          "punctajMaxim": 4
        }
      ]
    },
    {
      "nume": "Fractura inchisa membru inferior",
      "locatie": [
        "Gamba stanga",
        "Gamba dreapta",
        "Coapsa stanga",
        "Coapsa dreapta"
      ],
      "manevre": [
        {
          "descriere": "Sustinerea si protejarea fracturii in pozitia in care a fost gasita",
          "punctajMaxim": 16,
          "punctajPartial": 8
        },
        {
          "descriere": "Aplicare gheata/comprese reci pe zona afectata",
          "punctajMaxim": 4
        },
        {
          "descriere": "In caz de soc, ridicati si sustineti membrul neafectat",
          "punctajMaxim": 4
        }
      ]
    },
    {
      "nume": "Hemoragie interna abdominala",
      "manevre": [
        {
          "descriere": "Asezarea victimei la orizontala",
          "punctajMaxim": 4
        },
        {
          "descriere": "Ridicarea membrelor inferioare",
          "punctajMaxim": 8
        },
        {
          "descriere": "Sustinerea membrelor inferioare",
          "punctajMaxim": 8
        }
      ]
    },
    {
      "nume": "Hemoragie interna toracica",
      "manevre": [
        {
          "descriere": "Asezarea victimei la orizontala",
          "punctajMaxim": 4
        },
        {
          "descriere": "Ridicarea membrelor inferioare",
          "punctajMaxim": 8
        },
        {
          "descriere": "Ridicarea oblica a trunchiului",
          "punctajMaxim": 8
        },
        {
          "descriere": "Sustinerea membrelor inferioare",
          "punctajMaxim": 8
        },
        {
          "descriere": "Sustinerea oblica a trunchiului",
          "punctajMaxim": 8
        }
      ]
    },
    {
      "nume": "Hemoragie",
      "locatie": [
        "Mana stanga",
        "Mana dreapta",
        "Antebrat stang",
        "Antebrat drept",
        "Brat stang",
        "Brat drept",
        "Glezna stanga",
        "Glezna dreapta",
        "Gamba stanga",
        "Gamba dreapta",
        "Coapsa stanga",
        "Coapsa dreapta"
      ],
      "manevre": [
        {
          "descriere": "Presiune directa pe locul hemoragiei",
          "punctajMaxim": 8,
          "conditiePunctajMaxim": '<15"',
          "punctajPartial": 4,
          "conditiePunctajPartial": '15"-30"',
        },
        {
          "descriere": "Bandaj compresiv",
          "punctajMaxim": 8,
          "conditiePunctajMaxim": "<2'",
          "punctajPartial": 4,
          "conditiePunctajPartial": ">2'",
        },
        {
          "descriere": "Cel de-al doilea bandaj compresiv daca este cazul",
          "punctajMaxim": 8,
          "punctajPartial": 4
        },
        {
          "descriere": "Elevare membru",
          "punctajMaxim": 8
        },
        {
          "descriere": "Verificarea circulatiei sub bandaj",
          "punctajMaxim": 8
        }
      ]
    },
    {
      "nume": "Hipertermie",
      "manevre": [
        {
          "descriere": "Scoaterea victimei din mediul cald",
          "punctajMaxim": 8,
          "punctajPartial": 4
        },
        {
          "descriere": "Indepartarea hainelor groase daca este cazul",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Racirea trepatata a corpului",
          "punctajMaxim": 4
        },
        {
          "descriere": "Daca victima este constienta - administrare lichida (apa) la temperatura optima",
          "punctajMaxim": 4,
          "punctajPartial": 2
        }
      ]
    },
    {
      "nume": "Hipoglicemie",
      "manevre": [
        {
          "descriere": "Incurajarea victimei sa stea asezata",
          "punctajMaxim": 4
        },
        {
          "descriere": "Administrare bautura indulcita/alimente dulci",
          "punctajMaxim": 4
        },
        {
          "descriere": "PLS - daca lesina",
          "punctajMaxim": 8,
          "punctajPartial": 4
        }
      ]
    },
    {
      "nume": "Hipotermie",
      "manevre": [
        {
          "descriere": "Scoaterea victimei din mediul rece",
          "punctajMaxim": 8,
          "punctajPartial": 4
        },
        {
          "descriere": "Schimbarea/indepartarea hainelor ude",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Incalzirea treptata a corpului",
          "punctajMaxim": 4
        },
        {
          "descriere": "Daca victima este constienta - se dau lichide calde si/sau alimente energizante",
          "punctajMaxim": 4,
          "punctajPartial": 2
        }
      ]
    },
    {
      "nume": "Infarct - IMA",
      "manevre": [
        {
          "descriere": "Incurajarea victimei sa stea asezata/intr-o pozitie confortabila",
          "punctajMaxim": 8,
          "punctajPartial": 4
        },
        {
          "descriere": "Limitarea efortului fizic",
          "punctajMaxim": 8,
          "punctajPartial": 4
        },
        {
          "descriere": "Incurajarea automedicatiei de criza",
          "punctajMaxim": 4
        }
      ]
    },
    {
      "nume": "Intoxicatie cu gaze",
      "manevre": [
        {
          "descriere": "Indepartarea din zona afectata",
          "punctajMaxim": 8,
          "punctajPartial": 4
        },
        {
          "descriere": "Daca victima respira cu greutate, incurajarea tusei",
          "punctajMaxim": 2
        },
        {
          "descriere": "Sustinerea victimei in pozitia favorabila respiratiei",
          "punctajMaxim": 2
        }
      ]
    },
    {
      "nume": "Intoxicatie cu lichide (etanol)",
      "manevre": [
        {
          "descriere": "Victima constienta: chestionarea acesteia asupra substantei ingerate",
          "punctajMaxim": 4
        },
        {
          "descriere": "Victima inconstienta: Cautarea indiciilor care sugereaza sursa intoxicatiei",
          "punctajMaxim": 4
        },
        {
          "descriere": "Atentie la inhalare in caz de voma",
          "punctajMaxim": 4
        },
        {
          "descriere": "Daca a vomitat, conservati voma",
          "punctajMaxim": 4
        },
        {
          "descriere": "Conservare flacoane/recipiente",
          "punctajMaxim": 4
        }
      ]
    },
    {
      "nume": "Intoxicatie cu solide",
      "manevre": [
        {
          "descriere": "Victima constienta: chestionarea acesteia asupra substantei ingerate",
          "punctajMaxim": 4
        },
        {
          "descriere": "Victima inconstienta: Cautarea indiciilor care sugereaza sursa intoxicatiei",
          "punctajMaxim": 4
        },
        {
          "descriere": "Atentie la inhalare in caz de voma",
          "punctajMaxim": 4
        },
        {
          "descriere": "Daca a vomitat, conservati voma",
          "punctajMaxim": 4
        },
        {
          "descriere": "Conservare flacoane/recipiente",
          "punctajMaxim": 4
        }
      ]
    },
    {
      "nume": "Intepatura de insecta",
      "manevre": [
        {
          "descriere": "Chestionarea victimei despre insecta/alergii",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Aplicare comprese reci/ghiata si mentinerea acestora",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Evaluarea semnelor de soc/alergii",
          "punctajMaxim": 4
        }
      ]
    },
    {
      "nume": "Luxatie",
      "locatie": [
        "Mana stanga",
        "Mana dreapta",
        "Cot stang",
        "Cot drept",
        "Umar stang",
        "Umar drept",
        "Glezna stanga",
        "Glezna dreapta",
        "Genunchi stang",
        "Genunchi drept",
        "Sold"
      ],
      "manevre": [
        {
          "descriere": "Sustinerea si protejarea articulatiei afectate pentru membrele superioare si imobilizare cu triunghiuri de panza",
          "punctajMaxim": 8,
          "punctajPartial": 4
        },
        {
          "descriere": "Sustinerea si protejarea membrelor inferioare in pozitia in care au fost gasite",
          "punctajMaxim": 8,
          "punctajPartial": 4
        },
        {
          "descriere": "Aplicare gheata/comprese reci pe zona afectata",
          "punctajMaxim": 4
        },
        {
          "descriere": "In caz de soc: Elevarea si sustinerea membru neafectat",
          "punctajMaxim": 4,
          "punctajPartial": 2
        }
      ]
    },
    {
      "nume": "Obstructia de cai aeriene",
      "manevre": [
        {
          "descriere": "Daca victima respira cu greutate, incurajati tusea",
          "punctajMaxim": 4
        },
        {
          "descriere": "Daca corpul strain nu este eliminat, 5 lovituri intre omoplati, sprijinind partea superioara a victimei",
          "punctajMaxim": 8,
          "punctajPartial": 4
        },
        {
          "descriere": "Urmarirea eliminarii corpului strain dupa fiecare manevra",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Daca corpul strain nu este inca eliminat, 5 compresiuni abdominale",
          "punctajMaxim": 8,
          "punctajPartial": 4
        }
      ]
    },
    {
      "nume": "Traumatisme craniene",
      "manevre": [
        {
          "descriere": "Incurajarea victimei sa stea asezata",
          "punctajMaxim": 8
        },
        {
          "descriere": "Mentinerea capului victimei",
          "punctajMaxim": 8,
          "punctajPartial": 4
        },
        {
          "descriere": "Racirea contuziei",
          "punctajMaxim": 8
        },
        {
          "descriere": "Bandajarea plagii",
          "punctajMaxim": 12,
          "punctajPartial": 6
        }
      ]
    },
    {
      "nume": "Plaga impuscata",
      "locatie": [
        "Mana stanga",
        "Mana dreapta",
        "Antebrat stang",
        "Antebrat drept",
        "Brat stang",
        "Brat drept",
        "Glezna stanga",
        "Glezna dreapta",
        "Gamba stanga",
        "Gamba dreapta",
        "Coapsa stanga",
        "Coapsa dreapta"
      ],
      "manevre": [
        {
          "descriere": "Controlarea hemoragiei prin compresii",
          "punctajMaxim": 8,
          "punctajPartial": 4
        },
        {
          "descriere": "Controlarea hemoragiei prin bandaj compresiv",
          "punctajMaxim": 8,
          "punctajPartial": 4
        },
        {
          "descriere": "Elevare membru daca este cazul",
          "punctajMaxim": 4
        }
      ]
    },
    {
      "nume": "Plaga cu corp strain",
      "locatie": [
        "Mana stanga",
        "Mana dreapta",
        "Antebrat stang",
        "Antebrat drept",
        "Brat stang",
        "Brat drept",
        "Glezna stanga",
        "Glezna dreapta",
        "Gamba stanga",
        "Gamba dreapta",
        "Coapsa stanga",
        "Coapsa dreapta"
      ],
      "manevre": [
        {
          "descriere": "Curatarea plagii cu apa pentru eventualii corpi straini mici",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Controlarea hemoragiei",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Imobilizarea corpului strain cu fese, comprese etc",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Stabilizarea corpului strain cu fasa sau triunghiuri",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Elevare/sustinere membru",
          "punctajMaxim": 4,
          "punctajPartial": 2
        }
      ]
    },
    {
      "nume": "Plagi superficiale",
      "locatie": [
        "Mana stanga",
        "Mana dreapta",
        "Antebrat stang",
        "Antebrat drept",
        "Brat stang",
        "Brat drept",
        "Glezna stanga",
        "Glezna dreapta",
        "Gamba stanga",
        "Gamba dreapta",
        "Coapsa stanga",
        "Coapsa dreapta"
      ],
      "manevre": [
        {
          "descriere": "Curatarea plagii cu apa/dezinfectare",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Protejarea plagii cu comprese sterile",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Fixarea adeziva sau prin bandajare a protectiei (pansamentului)",
          "punctajMaxim": 4,
          "punctajPartial": 2
        }
      ]
    },
    {
      "nume": "Stare de inconstienta",
      "manevre": [
        {
          "descriere": "Asezarea victimei in PLS",
          "punctajMaxim": 8,
          "punctajPartial": 4
        },
        {
          "descriere": "Reevaluarea periodica a semnelor vitale",
          "punctajMaxim": 8,
          "punctajPartial": 4
        }
      ]
    }
  ]

  liderBarem: Lesion[] = [
    {
      "nume": "Prezentarea echipei si masuri de securitate",
      "manevre": [
        {
          "descriere": "Impresie generala",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Asigurare rapida asupra sigurantei zonei",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Comportament preventiv",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Realizarea unei zone sigure pentru victime ",
          "punctajMaxim": 4,
          "punctajPartial": 2
        }
      ]
    },
    {
      "nume": "Apelul de urgenta",
      "manevre": [
        {
          "descriere": "Apel precoce ( in mai putin de 2 minute )",
          "punctajMaxim": 3
        },
        {
          "descriere": "Cine cheama ?",
          "punctajMaxim": 1
        },
        {
          "descriere": "Ce s-a intamplat (tip accident) ?",
          "punctajMaxim": 2,
          "punctajPartial": 1
        },
        {
          "descriere": "Numarul victimelor si afectiuni",
          "punctajMaxim": 2,
          "punctajPartial": 1
        },
        {
          "descriere": "Locatia si numarul de telefon. ",
          "punctajMaxim": 2,
          "punctajPartial": 1
        }
      ]
    },
    {
      "nume": "Activitatea sefului de echipaj",
      "manevre": [
        {
          "descriere": "Calm si increzator",
          "punctajMaxim": 2,
          "punctajPartial": 1
        },
        {
          "descriere": "Pastreaza controlul situatiei",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Conducerea grupului",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Incurajare echipaj",
          "punctajMaxim": 2,
          "punctajPartial": 1
        },
        {
          "descriere": "Ajuta membrii echipei",
          "punctajMaxim": 2,
          "punctajPartial": 1
        },
        {
          "descriere": "Colaborarea cu unitatile de interventie si politie",
          "punctajMaxim": 6,
          "punctajPartial": 3
        },
        {
          "descriere": "Apel de reactualizare a raportului",
          "punctajMaxim": 2
        }
      ]
    },
    {
      "nume": "Activitatea echipei",
      "manevre": [
        {
          "descriere": "Organizarea si colaborarea in echipa",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Folosirea corecta a materialelor si echipamentului",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Initiativa si creativitate",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Incadrarea in timp (10 min)",
          "punctajMaxim": 2
        },
        {
          "descriere": "Truse prim ajutor ",
          "punctajMaxim": 2
        }
      ]
    },
    {
      "nume": "Raportul final",
      "manevre": [
        {
          "descriere": "Numarul victimelor cu afectiuni si PA acordat",
          "punctajMaxim": 4,
          "punctajPartial": 2
        },
        {
          "descriere": "Aprecierea corecta a gravitatii victimelor si triajul pentru transport",
          "punctajMaxim": 6,
          "punctajPartial": 3
        }
      ]
    }
  ]
}
