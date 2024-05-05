const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", valideer)
}

const valideer = () => {
    let command = input.value.trim();
    let url = "";
    let title = "";
    let replaceValue = "";
    if (command.startsWith("/g")) {
        url = "http://www.google.com/search?q=";
        title = "Google"
        replaceValue = "+";
    } else if (command.startsWith("/y")) {
        url = "https://www.youtube.com/results?search_query=";
        title = "Youtube";
        replaceValue = "+"
    } else if (command.startsWith("/t")) {
        url = "https://twitter.com/hashtag/";
        title = "Twitter";
    } else if (command.startsWith("/i")) {
        url = "http://www.instagram.com/explore/tags/";
        title = "Instagram";
    }
    if (!url.startsWith("/") && url.indexOf(1 !== "g" || "y" || "t" || "i")){
        window.alert("Unkown command prefix");
    }
    else{
        window.alert("invalid command");
    }
}

const addSearch = (title, parameter, url) => {
    let source = {
        title: title,
        text: parameter,
        url: url
    }
    global.history.push(source);
    window.open(url);
}

const restoreHistory = (json) => {
    if (json === ""){
        global.history = JSON.parse(localStorage.getItem("history"));
    }
    else {
        global.history = JSON.parse(json);
        localStorage.setItem("history", json);
    }
    let historyDiv = document.getElementById("history");
    historyDiv.innerHTML = "";

}

window.addEventListener("load", setup);