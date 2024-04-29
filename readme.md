Realizzare un carosello interattivo come da screenshot allegato.

Nota: Ricorda che da oggi è richiesto ALMENO un commit per ogni milestone svolta. Per i nomi delle commit:
Cerca di evitare "milestone 1 completata", tanto poi salta fuori che mancava l'ultima modifica :occhiolino:
Usa M1 - creo il layout, poi M1 - sistemo il css e così via
Dare i nomi alle commit diventa più facile se in ogni commit sviluppi una singola funzionalità (es. layout, quel ciclo, gestione eventi, un fix ecc..)
Inoltre nella prima commit deve essere presente un file readme.md dove spieghi a parole, in italiano, come pensate di svolgere l'esercizio per passaggi.

-----------------------------------------------------------

MILESTONE 1
Per prima cosa, creiamo il markup statico. Costruiamo il container e inseriamo le immagini.
Solo una sarà visibile grazie a una sua classe, avremo così la struttura base.

MILESTONE 2
Ora dobbiamo scrivere del codice che al caricamento della pagina sposti la slide attiva da quella corrente alla successiva.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente. 
Creiamo un event listener per gestire il click sul pulsante.
All'interno spostiamo il codice scritto in milestone 2 per far si che la slide non venga cambia al caricamento della pagina, ma al nostro click sul pulsante.

MILESTONE 4
Create un ulteriore pulsante che vi permetta di fare il lavoro inverso: la slide attiva invece di andare avanti torna indietro.

-----------------------------------------------------------

BONUS 1
Gestiamo il ciclo infinito del carosello. Dall'ultima immagine andare avanti ci porta alla prima e viceversa.

BONUS 2
Aggiungere delle piccole miniature (thumbnails) sulla destra, come nel secondo screenshot. Tutte le miniature saranno leggermente più scure, tranne quella che corrisponde all'immagine attiva in carosello. Questa avrà anche un bordo colorato.