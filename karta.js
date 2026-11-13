
const mjesta = {
  "banja-luka": {
    naziv: "Banja Luka",
    broj: "01 / VRBAS",
    slika: "banja-luka.jpg",
    kadar: "Banja Luka · pogled na Vrbas",
    pjesma: "Otkako je Banja Luka postala",
    izvodjac: "Divanhana · Live in Mostar",
    opis: "Banja Luka ulazi u pjesmu već u naslovu. Ovdje je poslušaj u koncertnoj izvedbi Divanhane: pjesma o jednom gradu snimljena je pred publikom u drugom, u Mostaru.",
    snimak: "https://www.youtube.com/watch?v=JlsGyJs40FQ"
  },

  jajce: {
    naziv: "Jajce i Pliva",
    broj: "02 / PLIVA",
    slika: "pliva.jpg",
    kadar: "Jajce · Plivski vodopad",
    pjesma: "S one strane Plive",
    izvodjac: "Divanhana i hor Pontanima",
    opis: "Pliva je ovdje više od riječnog prizora. Pjesma prelazi u čežnju za porodicom iz tuđine. Uz glas Divanhane čuje se hor Pontanima, pa lična priča dobija zvuk zajedničkog pjevanja.",
    snimak: "https://www.youtube.com/watch?v=R2O4LHq4m-Y"
  },

  sarajevo: {
    naziv: "Sarajevo",
    broj: "03 / MILJACKA",
    slika: "bentbasa.jpg",
    kadar: "Sarajevo · Miljacka kod Bentbaše",
    pjesma: "Kad ja pođoh na Bentbašu",
    izvodjac: "Amira Medunjanin",
    opis: "Jedan susret uz Miljacku pokrene priču: djevojka pozove dragog da dođe navečer, ali on stigne tek sutradan. Bentbaša tako postaje mjesto propuštene prilike. Amira pjesmu izvodi na albumu Damar.",
    snimak: "https://www.youtube.com/watch?v=_Il75WcNNtc"
  },

  visegrad: {
    naziv: "Višegrad",
    broj: "04 / DRINA",
    slika: "visegrad.jpg",
    kadar: "Višegrad · most Mehmed-paše Sokolovića",
    pjesma: "U lijepom starom gradu Višegradu",
    izvodjac: "Himzo Polovina",
    opis: "Višegrad i Drina daju okvir ovoj pjesmi koju izvodi Himzo Polovina. Iza pjesme stoji poznato autorsko ime: Dragiša Nedović. U našoj zbirci zato se susreću i tradicionalne i autorske pjesme.",
    snimak: "https://www.youtube.com/watch?v=pHpS2Dll9lk"
  },

  mostar: {
    naziv: "Mostar",
    broj: "05 / HERCEGOVINA",
    slika: "mostar.jpg",
    kadar: "Mostar · Neretva i Stari most",
    pjesma: "Emina",
    izvodjac: "Himzo Polovina",
    opis: "„Emina“ vodi u mostarsku avliju. U stihovima Alekse Šantića jedan pogled, ruže i miris jasmina postaju cijela priča o čežnji.",
    snimak: "https://www.youtube.com/watch?v=hkhnzxnYfNI"
  },

  tuzla: {
    naziv: "Tuzla",
    broj: "06 / SJEVEROISTOČNA BOSNA",
    slika: "tuzla-karta.jpg",
    kadar: "Tuzla · trg Kapija",
    pjesma: "Ječam žele Tuzlanke djevojke",
    izvodjac: "Tradicionalna sevdalinka",
    opis: "Dok žanju ječam, Tuzlanke razmišljaju o udaji i svatovima. Kratak razgovor sa žitom otkriva njihove želje i iščekivanje, a ime grada ostaje sačuvano u pjesmi.",
    snimak: "https://www.youtube.com/results?search_query=Je%C4%8Dam+%C5%BEele+Tuzlanke+djevojke",
    pretraga: true,
    fotoAutor: "Deanza7 · javno vlasništvo",
    fotoIzvor: "https://commons.wikimedia.org/wiki/File:Tuzla,_Kapija_place.jpg"
  },

  travnik: {
    naziv: "Travnik",
    broj: "07 / SREDNJA BOSNA",
    slika: "travnik-karta.jpg",
    kadar: "Travnik · panorama grada",
    pjesma: "Što se ono Travnik zamaglio",
    izvodjac: "Tradicionalna sevdalinka",
    opis: "Pjesma počinje pitanjem o gradu pod maglom. Odgovor vodi prema djevojci čiji pogled, slikovito, zapali čitav Travnik. Grad i njegova atmosfera postaju dio ljubavne priče.",
    snimak: "https://www.youtube.com/results?search_query=%C5%A0to+se+ono+Travnik+zamaglio",
    pretraga: true,
    fotoAutor: "Julian Nyča · CC BY-SA 3.0",
    fotoIzvor: "https://commons.wikimedia.org/wiki/File:Travnik_Panorama_1.JPG"
  },

  trebinje: {
    naziv: "Trebinje",
    broj: "08 / TREBIŠNJICA",
    slika: "trebinje-karta.jpg",
    kadar: "Trebinje · stari grad",
    pjesma: "U Trebinju gradu",
    izvodjac: "Tradicionalna sevdalinka",
    opis: "Pjesma govori o smrti mlade Zlate i njenim posljednjim riječima majci. Trebinje iz prvog stiha postaje mjesto zajedničke tuge i sjećanja.",
    snimak: "https://www.youtube.com/results?search_query=U+Trebinju+gradu+sevdalinka",
    pretraga: true,
    fotoAutor: "Alekscg · CC BY-SA 4.0",
    fotoIzvor: "https://commons.wikimedia.org/wiki/File:Trebinje_Altstadt.jpg"
  }
};

function prikaziMjesto(ime) {
    var mjesto = mjesta[ime];
    var slika = document.getElementById("grad-slika");

    document.getElementById("grad").textContent = mjesto.naziv;
    document.getElementById("grad-broj").textContent = mjesto.broj;
    document.getElementById("grad-opis").textContent = mjesto.opis;
    document.getElementById("grad-pjesma").textContent = mjesto.pjesma;
    document.getElementById("grad-izvodjac").textContent = mjesto.izvodjac;
    document.getElementById("grad-kadar").textContent = mjesto.kadar;

    slika.src = "images/" + mjesto.slika;
    slika.alt = mjesto.kadar;
    document.getElementById("grad-slusaj").href = mjesto.snimak;
    document.getElementById("grad-slusaj").textContent = mjesto.pretraga ? "Pronađi izvedbu ↗" : "▶ Poslušaj ↗";
    document.getElementById("izbor-grada").value = ime;
    var fotoIzvor = document.getElementById("grad-foto-izvor");
    fotoIzvor.hidden = !mjesto.fotoIzvor;
    fotoIzvor.textContent = mjesto.fotoAutor || "";
    if (mjesto.fotoIzvor) fotoIzvor.href = mjesto.fotoIzvor;
    document.getElementById("odabrano-mjesto").textContent = "Odabrano: " + mjesto.naziv + " · " + mjesto.pjesma;

    var dugmad = document.getElementsByClassName("pin");

    for (var i = 0; i < dugmad.length; i++) {
        dugmad[i].className = "pin";
        dugmad[i].setAttribute("aria-pressed", "false");
    }

    var izabranoDugme = document.getElementById(ime);
    izabranoDugme.className = "pin odabrano";
    izabranoDugme.setAttribute("aria-pressed", "true");
}

prikaziMjesto("mostar");
