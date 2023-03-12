# To-do-App

https://janiphone5-to-do-app.netlify.app/

  Elsősorban a HTML dokumentum által definiált elemekre történő hivatkozásokat állítjuk elő. Megjelöljük az input mezőt, a gombokat és az app leírását tartalmazó elmeket.

  Létrehozunk egy addTask nevű függvényt, melyben először kreálunk egy változót (task), amibe a beviteli mező értékét definiáljuk.
  Ezután egy feltételben megnézzük hogy a bevitt szöveg nem egyenlő-e üres mezővel, ha nem egyenlő, akkor egy li változóba a document.createElement metódussal előállítunk egy "li" elemet.
  Aztán az li változó által hivatkozott HTML elem belső szöveges tartalmát (innerText) állítja be a task változóban tárolt értékre.
  Majd hozzáadjuk az li változó által hivatkozott HTML elemet a taskList változó által hivatkozott HTML elemhez, mint gyerekelem.
  S az input mező értékét üresre állítjuk.
  Még itt hozzáadjuk a decorateTask(li) és deleteTask(li) függvényeket, azért itt mert itt van az li változónak a hatóköre. S az li azért kerül paraméterként a függvénybe mert azon az elemen végzi el a feladatát.
  
  Létrehozzuk a decorateTask nevű függvényt li paraméterekkel. A függvényben az li elemre egy eseménykezelőt állítunk, mely egy kattintásra fog figyelni. Elágazást alkalmazunk, ha nincs az li elemen style.textDecoration, akkor áthúzott szöveg lesz az li elemből, ha van rajta, akkor ne legyen semmi.

  Következő függvényünk a deleteTask(li) nevű lesz, melyet szintén egy eseményfigyelővel kezdünk, ami dupla kattintásra eltávolítja az li elemet.

  Ezután az empty függvény következik, itt is egy változóban az input mező értékét elmentjük, majd egy elágazással megnézzük hogy ha a hosszának az értéke 0, akkor jelenjen meg az errorMsg div-ben egy  üzenet, mely szerint nem lehet üres, más esetben ne jelenjen meg üzenet.

  A clearTheList függvényünk annyit tesz hogy a taskList div teljes HTML tartalmát üressé teszi.

  A showTheFaq függvény a faqText szövegét írja át az alábbira:
    "Enter the new task in the input field, then press the Add new task button. \nTo delete the entire list, press the Clear all tasks button. \nClick once on a task to mark it as completed. \nDouble-click on a task to delete that specific task.\nJános Lestár";

  Végül az egy kattintásos eseménykezelőket hívjuk meg hogy mely gomb lenyomása esetén mely függvény végezze el a feladatát.
