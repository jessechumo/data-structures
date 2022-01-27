
function timeConversion(s) {
    const typeTime = s.replace(/[^a-z]/gi, '')
    const formatter = s.replace(/[a-z]/gi, '').split(':')
    let firstIndex = formatter[0]

    let time = 12
    let time1 = ""
    let time2 = ""
    let timeResponse = ""

    for (let i = 0; i < +formatter.length; i++) {

        if (i == 0 && firstIndex < 12 && typeTime == 'PM') {
            time += +formatter[0]
            time1 += String(time)
        }

        if (i == 0 && firstIndex > 11 && typeTime === 'AM') {
            time -= +formatter[0]
            time1 += String(Math.abs(time)).repeat(2)
        }

        if (i !== 0) {
            time2 += " " + formatter[i]
        }

    }

    if (time1 !== "") {
        timeResponse = time1.concat(time2).replace(/[\s]/g, ':')
    } else {
        time1 += String(firstIndex)
        timeResponse = time1.concat(time2).replace(/[\s]/g, ':')
    }

    return timeResponse
}