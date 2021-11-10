// var link=document.domain;
// var main_url='https://ipqualityscore.com/api/json/url/jbk58LjgPEW1LxTYrkEYpr0wpJZybbU3/'+link;
// fetch(main_url)
//     .then(data=>data.json())
//     .then(jokeData =>{
//         const jokeText=jokeData.attachments[0].text;
//         const joke=document.getElementById('meme');
//         console.log(jokeText);
// })
// let request = new XMLHttpRequest();
//       request.open("GET", "https://ipqualityscore.com/api/json/url/jbk58LjgPEW1LxTYrkEYpr0wpJZybbU3/www.google.com");
//       request.send();
//       request.onload = () => {
//         console.log(request);
//         if (request.status === 200) {
//           console.log(JSON.parse(request.response));
//         } else {
//           console.log(`error ${request.status} ${request.statusText}`);
//         }
//       };

// chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
//     alert(tabs[0].url);
// })
// chrome.runtime.sendMessage( //goes to bg_page.js
//     url,
//     data => dataProcessFunction(data)
// ); 