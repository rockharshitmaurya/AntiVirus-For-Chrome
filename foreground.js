// document.addEventListener('click', () => {
    chrome.runtime.sendMessage({ message: 'fetch_for_me'+document.domain}, () => console.log('cool..'));
        
    // });
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    
    });
    