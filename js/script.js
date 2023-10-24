/*
SNACK 1
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
nome del tavolo, (tableName)
nome dell'ospite,  (guestName)
posto occupato. (place)
Generiamo e stampiamo in console la lista per i segnaposto.
 
usare map o array.forEach(element => {
    
});*/

//creo arrey vip.
let vips = [ 'Brad Pitt', 
            'Johnny Depp', 
            'Lady Gaga', 
            'Cristiano Ronaldo', 
            'Georgina Rodriguez', 
            'Chiara Ferragni', 
            'Fedez', 
            'George Clooney', 
            'Amal Clooney', 
            'Maneskin'];

//creo arrey per i posti.
let placeVip = [];

//aggiungo tavolo-posto e stampo.
vips.forEach((element, index) => {
    placeVip.push({
        guestName: element,
        tableName: 'Tavolo Vip',
        place: index + 1,
    });
});
console.log(placeVip);     

/*
SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

usare filter.
*/

//creo arrey degli studenti.
const studenti = [
    {
        Id: 213,
        Name: 'Marco della Rovere',
        Grades: 78,
    },
    {
        Id: 110,
        Name: 'Paola Cortellessa',
        Grades: 96,
    },
    {
        Id: 250,
        Name: 'Andrea Mantegna',
        Grades: 48,
    },
    {
        Id: 145,
        Name: 'Gaia Borromini',
        Grades: 74,
    },
    {
        Id: 196,
        Name: 'Luigi Grimaldello',
        Grades: 68,
    },
    {
        Id: 102,
        Name: 'Piero della Francesca',
        Grades: 50,
    },
    {
        Id: 120,
        Name: 'Francesca da Polenta',
        Grades: 84,
    },
]
//targa studente (prendo l'arrey studenti e lo modifico con map).
const targaStudente = studenti.map((studente) => {
    return studente.Name.toUpperCase();
})
console.log(targaStudente);

//filtro gli studenti con le opzioni richieste.
const over70 = studenti.filter((studente) => studente.Grades > 70);
console.log(over70);
const over120 = studenti.filter((studente) => studente.Grades > 70 && studente.Id > 120);
console.log(over120);