function checkMagazine(magazine, note) {
    magazine = magazine.toString()
    let n = note.length
    for(let i = 0; i < n; i++) {
        if(!magazine.includes(note[i])) {
            console.log('No')
            return
        }
        magazine = magazine.replace(note[i],'')
    }
    console.log('Yes')
}