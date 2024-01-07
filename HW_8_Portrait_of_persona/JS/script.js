let birthYear = prompt("Введите год рождения:");
let city = prompt("Введите город проживания:");
let favoriteSport = prompt("Введите ваш любимый вид спорта:");

if (birthYear && city && favoriteSport) {
  let age = new Date().getFullYear() - parseInt(birthYear);
  let message = "Ваш возраст: " + age + "\n";

  if (city === "Киев" || city === "Вашингтон" || city === "Лондон") {
    let country;
    switch (city) {
      case "Киев":
        country = "Украины";
        break;
      case "Вашингтон":
        country = "США";
        break;
      case "Лондон":
        country = "Великобритании";
        break;
    }
    message += "Ты живешь в столице " + country + "\n";
  } else {
    message += "Ты живешь в городе " + city + "\n";
  }

  let champion;
  switch (favoriteSport) {
    case "Гольф":
      champion = "Скотти Шеффлер";
      break;
    case "Бокс":
      champion = "Александр Усик";
      break;
    case "Бильярд":
      champion = "Денис Колосов";
      break;
  }

  if (champion) {
    message += "Круто! Хочешь стать " + champion + "?";
  }

  alert(message);
} else {
  let notProvided = "";
  if (!birthYear) {
    notProvided += "дату рождения";
  }
  if (!city) {
    if (notProvided) {
      notProvided += ", ";
    }
    notProvided += "город";
  }
  if (!favoriteSport) {
    if (notProvided) {
      notProvided += ", ";
    }
    notProvided += "вид спорта";
  }
  let infoProvided = "";
  if (birthYear) {
    infoProvided += "Дата рождения: " + birthYear + "\n";
  }
  if (city) {
    infoProvided += "Город: " + city + "\n";
  }
  if (favoriteSport) {
    infoProvided += "Любимый вид спорта: " + favoriteSport + "\n";
  }
  alert("Жаль, что Вы не захотели ввести свой(ю) " + notProvided + "\n" + infoProvided);
}