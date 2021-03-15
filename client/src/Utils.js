const submitHandler = url => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json",
    },
    body: JSON.stringify({
      url: url,
    }),
  }
  fetch("http://localhost:3000/", options)
    .then((res) => res.json())
    .then((data) => {
      let wordsDb = localStorage.getItem("wordsDb") || "{}"
      let records = JSON.parse(wordsDb)

      const date = new Date().toLocaleString()
      records[date] = { url: url, result: data }
      localStorage.setItem("wordsDb", JSON.stringify(records))
    })
}

export { submitHandler }
