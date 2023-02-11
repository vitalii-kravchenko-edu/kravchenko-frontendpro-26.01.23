const yearBirth = prompt('Рік твого народження?', '');
const cityLive = prompt('В якому місті ти живеш?', '');
const sport = prompt('Твій улюблений вид спорту?', '');

let userAge;
if (yearBirth === null || !yearBirth.trim()) {
    alert('Шкода, що Ви не захотіли ввести свій рік народження');
} else {
    userAge = `Тобі ${2023 - yearBirth} років`;
}

let userCity;
if (cityLive === null || !yearBirth.trim()) {
    alert('Шкода, що Ви не захотіли ввести своє місто');
} else {
    switch(cityLive) {
        case 'Київ' || 'київ':
            userCity = 'Ти живеш у столиці України!';
            break;
        case 'Вашингтон' || 'вашингтон':
            userCity = 'Ти живеш у столиці США!';
            break;
        case 'Лондон' || 'лондон':
            userCity = 'Ти живеш у столиці Великої Британії!';
            break;
        default:
            userCity = `Ти живеш у місті ${cityLive}`;
    }
}

let userSport;
if (sport === null || !yearBirth.trim()) {
    alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту');
} else {
    switch(sport) {
        case 'бокс':
            userSport = ('Круто! Хочеш стати як Кличко?');
            break;
        case 'біг':
            userSport = ('Круто! Хочеш стати як Усейн Болт?');
            break;
        case 'шахи':
            userSport = ('Круто! Хочеш стати як Каспаров?');
            break;
        default:
            userSport = `Твій улюблений спорт - ${sport}`;
    }
}

if (userAge === undefined || userAge === undefined || userAge === undefined) {
    alert ('Ви ввели не всі дані');
} else {
    alert (`${userAge}\n${userCity}\n${userSport}`);
}





