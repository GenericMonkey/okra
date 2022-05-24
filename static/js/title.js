function toggleTitle(title, alt_title) {
    let currtitle = document.getElementById("webtitle").innerHTML;
    if (currtitle === title) {
        document.getElementById("webtitle").innerHTML = alt_title;
    } else {
        document.getElementById("webtitle").innerHTML = title;
    }
}