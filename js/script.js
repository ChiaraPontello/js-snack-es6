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

//creo arrey vip
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

//creo arrey per i posti
let placeVip = [];

//aggiungo tavolo-posto e stampo
vips.forEach((element, index) => {
    placeVip.push({
        guestName: element,
        tableName: 'Tavolo Vip',
        place: index + 1,
    });
});
console.log(placeVip);     
