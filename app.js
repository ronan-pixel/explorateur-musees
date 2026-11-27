// Project #1 — the display: it reads and writes the page. Checked in the browser, not by the tests.
// The two import lines are already written: they bring the data and the functions of logic.js
// (modules are explained in week 10). Open the page with Live Preview, never with a double click.
import { MUSEUMS } from './data/musees-bretagne.js';
import { museumLabel } from './logic.js';

// US-1 — la liste (live coding du jeudi) :
// TODO 1 : sélectionnez le résumé (#resume) et la liste (#liste).
// TODO 2 : dans le résumé, écrivez « 34 musées » avec MUSEUMS.length et textContent.
// TODO 3 : pour chaque musée (for...of), créez un <li>, mettez-y museumLabel(museum)
//          avec textContent, puis ajoutez-le à la liste (append).

// le résumé de la page
const summary = document.querySelector(`#resume`)
// la liste sur la page, vide pour l'instant
const list =document.querySelector(`#liste`)

// le nombre de musées dans le résumé
summary.textContent = `${MUSEUMS.length} musées`
// for...of: un <li> par musée
for (const museum of MUSEUMS){
    const item = document.createElement(`li`)
    // son texte vient de la logique
    item.textContent = museumLabel(museum)
    //ajoute a la fin de la liste
    list.append(item)
}

