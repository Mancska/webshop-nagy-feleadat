let irany = 1;
let alap;

export function Rendezes(lista, kulcs) {
  if (kulcs === "nev") {
    RendezesNevSzerint(lista, kulcs);
  } else if (kulcs === "kor") {
    RendezesKORSSzerint(lista, kulcs);
  } else if (kulcs === "fajta") {
    RendezesFajtaSzerint(lista, kulcs);
  }

  // Azonos kulcsértékre kattintás esetén fordítsd meg a rendezési irányt
  if (alap === kulcs) {
    irany *= -1;
    lista.reverse();
  } else {
    irany = 1;
  }

  alap = kulcs;
}

function RendezesNevSzerint(lista, kulcs) {
  lista.sort(function (a, b) {
    let ertek = 1;
    if (a[kulcs] < b[kulcs]) {
      ertek = -1;
    }
    return irany * ertek;
  });
}

function RendezesKORSSzerint(lista, kulcs) {
  lista.sort(function (a, b) {
    return irany * (a[kulcs] - b[kulcs]);
  });
}

function RendezesFajtaSzerint(lista, kulcs) {
  lista.sort(function (a, b) {
    let ertek = 1;
    if (a[kulcs] < b[kulcs]) {
      ertek = -1;
    }
    return irany * ertek;
  });
}



export function szures(lista, kulcs, szuresfeltetel) {
  const szurtlista = lista.filter(function (a) {
    return a[kulcs].includes(szuresfeltetel);
  });
  return szurtlista;
}