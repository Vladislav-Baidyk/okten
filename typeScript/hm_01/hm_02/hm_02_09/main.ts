    /*
    – Скласти розклад на тиждень за домопогою switch. Користувач вводить 
    порядковий номер дня тижня і на екрані відображається інфа, 
    що заплановано на цей день (можна замість плану на день, назву дня англійською).
    */
    let promt :string | null = prompt("Введіть номер дня тижня (1-7):")
    let dayNumber:number = Number(promt);

    switch(dayNumber) {
        case 1:
            console.log('Pe');
            console.log('Math');
            console.log('Physics');
            break;
        case 2:
            console.log('Pe');
            console.log('Math');
            console.log('Physics');
            break;
        case 3:
            console.log('Pe');
            console.log('Math');
            console.log('Physics');
            break;
        case 4:
            console.log('Pe');
            console.log('Math');
            console.log('Physics');
            break;
        case 5:
            console.log('Pe');
            console.log('Math');
            console.log('Physics');
            break;
        case 6:
            console.log('Pe');
            console.log('Math');
            console.log('Physics');
            break;
        case 7:
            console.log('Pe');
            console.log('Math');
            console.log('Physics');
            break;
        default:
            console.log("write the day of the week");
            
    } 