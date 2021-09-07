let getTime = () => {
    const localDate = new Date();
    const utcOffset = localDate.getTimezoneOffset();
    const cetOffset = utcOffset + 60;
    const cestOffset = utcOffset + 120;
    const cetOffsetInMilliseconds = cetOffset * 60 * 1000;
    const cestOffsetInMilliseconds = cestOffset * 60 * 1000;
    const cestDateStart = new Date();
    const cestDateFinish = new Date();
    const localDateTime = localDate.getTime();
    let cestDateStartTime;
    let cestDateFinishTime;
    cestDateStart.setTime(Date.parse('29 March ' + localDate.getFullYear() + ' 02:00:00 GMT+0100'));
    cestDateFinish.setTime(Date.parse('25 October ' + localDate.getFullYear() + ' 03:00:00 GMT+0200'));
    cestDateStartTime = cestDateStart.getTime();
    cestDateFinishTime = cestDateFinish.getTime();
    let hResult = (localDateTime >= cestDateStartTime && localDateTime <= cestDateFinishTime) ? new Date(localDateTime + cestOffsetInMilliseconds) : new Date(localDateTime + cetOffsetInMilliseconds);
    const hours = hResult.getHours() < 10 ? "0" + hResult.getHours() : hResult.getHours();
    const minutes = hResult.getMinutes() < 10 ? "0" + hResult.getMinutes() : hResult.getMinutes();
    const seconds = hResult.getSeconds() < 10 ? "0" + hResult.getSeconds() : hResult.getSeconds();
    const weekday = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const monthTab = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];
    const month = monthTab[hResult.getMonth()];
    const day = weekday[hResult.getDay()];
    const year = hResult.getFullYear();
    const date = hResult.getDate();

    return {
        day,
        date,
        month,
        year,
        hours,
        minutes,
        seconds
    }
}

exports.getTime = getTime;
