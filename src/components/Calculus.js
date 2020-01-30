
let calculPrime = (agex, genrex, experiencex) => {

  let sinistre0 = (agex, genrex) => {

    let pr = 900;
    let age = agex;
    let genre = genrex;

    if (genre === 'M.' && age === '16 à 20') { return pr = (1) * pr; }
    if (genre === 'Mme' && age === '16 à 20') { return pr = (0.8) * pr; }

    if (genre === 'M.' && age === '21 à 24') { return pr = (0.75) * pr; }
    if (genre === 'Mme' && age === '21 à 24') { return pr = (0.6) * pr; }

    if (genre === 'M.' && age === '25 à 29') { return pr = (0.57) * pr; }
    if (genre === 'Mme' && age === '25 à 29') { return pr = (0.45) * pr; }

    if (genre === 'M.' && age === '30 à 44') { return pr = (0.4) * pr; }
    if (genre === 'Mme' && age === '30 à 44') { return pr = (0.36) * pr; }

    if (genre === 'M.' && age === '45 à 64') { return pr = (0.29) * pr; }
    if (genre === 'Mme' && age === '45 à 64') { return pr = (0.28) * pr; }

    if (genre === 'M.' && age === '65 à 74') { return pr = (0.27) * pr; }
    if (genre === 'Mme' && age === '65 à 74') { return pr = (0.29) * pr; }

    if (genre === 'M.' && age === '75 et plus') { return pr = (0.36) * pr; }
    if (genre === 'Mme' && age === '75 et plus') { return pr = (0.35) * pr; }

  }

  let experience = experiencex;

  if (experience === '0') {
    return sinistre0(agex, genrex);
  }
  if (experience === '1') {
    return sinistre0(agex, genrex) * 1.5;
  }
  if (experience === '2') {
    return sinistre0(agex, genrex) * 2.1;
  }
  if (experience === '3 et +') {
    return sinistre0(agex, genrex) * 2.9;
  }

}
export default calculPrime;
