//  let request = new XMLHttpRequest();
//  request.onreadystatechange = handleStateChange;     
//  request.open("GET", "https://ipqualityscore.com/api/json/url/jbk58LjgPEW1LxTYrkEYpr0wpJZybbU3/www.google.com");
//       request.send();
//       request.onload = () => {
//         console.log(request);
//         if (request.status === 200) {
//           console.log(JSON.parse(request.response));
//         } else {
//           console.log(`error ${request.status} ${request.statusText}`);
//         }
//       };
chrome.runtime.sendMessage({ message: 'fetch_for_me'+document.domain}, () => console.log('cool..'));
        
// });
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

});