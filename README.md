# Inspecting Text

## Descrizione

Applicazione Node.js scritta in typescript che permette all'utente di estrarre informazioni da un testo contenuto all'interno di un file.

I dati estratti sono:
- il numero totale di parole nel file
- il numero di lettere nel file
- il numero di spazi nel file
- le parole che si ripetono più di 10 volte e indicare il numero di volte in cui si ripete.

Nel progetto sono state usate diverse librerie node, tra cui fs per leggere il contenuto del file ed express per esporre le api. 

Sono stati inseriti test unitari sviluppati con jest. 

Ho creato un decorator per gestire la verifica del token passato come header nella richiesta GET.


## Indice

- [Installazione](#installazione)
- [Uso](#uso)
- [Swagger](#swagger)

## Installazione


### Prerequisiti

- Docker
- Node.js
- npm

### Istruzioni

1. Su terminale eseguire il comando 
   ```sh
   docker-compose up --build
   ```

## Uso
Il servizio espone un api che necessita di un token per essere utilizzata. Il token si trova nel file /src/config/Secrets.ts

Va inserito come path param il nome del file del quale si vuole analizzare il contenuto, in questo progetto il file si trova nella cartella resources/example.txt

Il file contiene un testo generato randomicamente dal sito https://www.lipsum.com/feed/html


## Swagger
http://localhost:3000/api-docs/
