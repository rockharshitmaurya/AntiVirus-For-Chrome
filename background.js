// // // fetch('https://icanhazdadjoke.com/slack')
// // //     .then(data=>data.json())
// // //     .then(jokeData =>{
// // //         const jokeText=jokeData.attachments[0].text;
// // //         console.log(jokeText);
// // //     })
// let active_tab_id= 0;

// chrome.tabs.onActivated.addListener(tab => {
// chrome.tabs.get(tab.tabId, current_tab_info => {
// let active_tab_id = tab.tabId;
// if (/^https:\/\/*/.test(current_tab_info.url)) {
// chrome.tabs.insertCSS(null, { file: './mystyles.css' });
// chrome.tabs.executeScript(null, { file: './foreground.js' }, () => console.log('i injected'))
// }
// });
// });



chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    var msg_full=request.message;
    var msg=msg_full.substring(0,12);
    // var domain=msg_full.substring(12);
    if (msg === 'fetch_for_me') {
$.ajax({
url: "https://api.github.com/users/rockharshitmaurya",
// https://ipqualityscore.com/api/json/url/jbk58LjgPEW1LxTYrkEYpr0wpJZybbU3/www.google.com
method: "GET",
success: function (data, status, jqxhr) {
console.log("Successfully fetched...");
// chrome.runtime.sendMessage({ message: data}, () => console.log('cool..BG'));
console.log(data);
},
error: function (jqxhr, status, error) {
console.log("There was a problem fetching...");
console.log(error);
}
});

// fetch('https://www.yahoo.com')
// .then(res => console.log(res))
// .catch(err => console.log("Could not fetch..."));
}
});
