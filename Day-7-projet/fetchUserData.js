
async function fetchUserData() {
  try {
    const response = await fetch('https://dummyjson.com/users');
    const userData = await response.json(); // <-- ici le await manquant
    return userData.users;
  } catch (err) {
    console.log('Erreur de fetch : ' + err);
  }
}
export  {fetchUserData}


