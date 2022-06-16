
const btnMixedMessages = document.querySelector('.buttonMixedMessages');

btnMixedMessages.addEventListener(
    "click",
    toggleMixedMessages = (e) => {
        console.log(e);
        let linksToAppear = document.querySelector('.linksMixedMessages');
        let textToDisappear = document.querySelector('.describeMixedMessages');

        if (linksToAppear.style.display == 'none') {
            linksToAppear.style.display = 'block';
            linksToAppear.style.position = 'relative';
            textToDisappear.style.display = 'none';
            textToDisappear.style.position = 'absolute';
            btnMixedMessages.innerHTML = "The description!"
        } else {
            linksToAppear.style.display = 'none';
            linksToAppear.style.position = 'absolute';
            textToDisappear.style.display = 'block';
            textToDisappear.style.position = 'relative';
            btnMixedMessages.innerHTML = "The links!"
        }
    }
)
