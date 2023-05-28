const fetchData = async () => {
    const date = new Date()

    const dd = date.getDate()
    const mm = date.getMonth() + 1
    const yyyy = date.getFullYear()

    const formattedDate = `${dd}-${mm}-${yyyy}`

    const res = await fetch(`https://api.aladhan.com/v1/timingsByCity/${formattedDate}?city=Dhaka&country=Bangladesh&method=1`)

    const data = await res.json()

    const timings = data.data.timings

    document.getElementById("date").textContent = formattedDate
    document.getElementById("time").textContent = date.toLocaleTimeString()


    document.getElementById("fajar").textContent = timings.Fajr
    document.getElementById("dhuhr").textContent = timings.Dhuhr
    document.getElementById("asr").textContent = timings.Asr
    document.getElementById("maghrib").textContent = timings.Maghrib
    document.getElementById("isha").textContent = timings.Isha
    

    console.log("data", data);
}

fetchData()