const enToGloss = (event) => {
  event.preventDefault();

  const english = document.getElementById("english-input").value;
  if (!english) {
    alert("Please enter an English sentence before converting!");
    return;
  }

  const ENDPOINT = "https://hf.space/embed/ganning/asl-gloss/+/api/predict";

  const options = {
    method: "POST",
    body: JSON.stringify({
      data: [english],
    }),
    headers: { "Content-Type": "application/json" },
  };

  console.log(options);

  fetch(ENDPOINT, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const gloss = eval(data.data[0]);
      const lst = gloss[0].split(" ");

      var filtered = lst.filter(function (el) {
        return el != null && el != "";
      });

      const final_gloss = filtered.join(" ").toUpperCase();
      document.getElementById("gloss-output").innerHTML = final_gloss;
    });
  console.log(english);
};
