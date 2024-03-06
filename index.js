import crypticTyping from 'cryptic-typing';


const titles = document.getElementsByClassName('project-title')
const descs = document.getElementsByClassName('project-desc')
const dates = document.getElementsByClassName('project-date')


if(titles && descs) {

    for (var i = 0; i < titles.length; i++) {
        const item = titles.item(i)
        const content = item.textContent 
        // titles.item(i).textContent = "_"
        crypticTyping(content, (gen) => {
            item.textContent = gen
        })
    }

    for (var i = 0; i < descs.length; i++) {
        const item = descs.item(i)
        const content = item.textContent 
        // titles.item(i).textContent = "_"
        crypticTyping(content, (gen) => {
            item.textContent = gen
        })
    }

    for (var i = 0; i < dates.length; i++) {
        const item = dates.item(i)
        const content = item.textContent 
        // titles.item(i).textContent = "_"
        crypticTyping(content, (gen) => {
            item.textContent = gen
        },true,90)
    }
}