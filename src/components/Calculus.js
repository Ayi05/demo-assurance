
let calculPrime = (agex, genrex, experiencex) => {
  
  let age = agex;
  let genre = genrex;
  let experience = experiencex;

  switch (age) {
    case '16 à 20':
        if (genre === 'M.') {
          if (experience === '1') {
            return Number(920);
          }
          if (experience === '2') {
            return Number(1246);
          }
          if (experience === '3 et +') {
            return Number (1514);
          }
          else {
            return Number(850);
          }
          
        }
        if (genre === 'Mme') {
          if (experience === '1') {
            return Number(905);
          }
          if (experience === '2') {
            return Number(1096);
          }
          if (experience === '3 et +') {
            return Number(1364);
          } else {
            return Number(630);
          }
        }
      break;

    case '21 à 24':
    if (genre === 'M.') {
      return Number(631);
    }
    if (genre === 'Mme') {
      return Number(470);
    }
    break;

    case '25 à 29':
    if (genre === 'M.') {
      return Number(475);
    }
    if (genre === 'Mme') {
      return Number(379);
    }
    break;

    case '30 à 44':
    if (genre === 'M.') {
      return Number(336);
    }
    if (genre === 'Mme') {
      return Number(303);
    }
    break;

    case '45 à 64':
    if (genre === 'M.') {
      return Number(250);
    }
    if (genre === 'Mme') {
      return Number(239);
    }
    break;

    case '65 à 74':
    if (genre === 'M.') {
      return Number(242);
    }
    if (genre === 'Mme') {
      return Number(238);
    }
    break;

    case '75 et plus':
    if (genre === 'M.') {
      return Number(308);
    }
    if (genre === 'Mme') {
      return Number(298);
    }
    break;
  
    default:
      break;
  }
  
}
export default calculPrime;
