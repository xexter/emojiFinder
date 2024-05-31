let res;
async function getData() {
  try {
    const response = await fetch(
"https://akhil-06.github.io/emoji_project/emojiList.js"
    );
    const scriptText = await response.text();

    const objectText = scriptText.match(
/const emojiList = (\[.*\]);/s
    )[1];
    res = eval(objectText);
    console.log(res);
    res.map((e) => {
const emojiBox = document.createElement("div");
emojiBox.classList.add("emoji");
emojiBox.innerHTML = `<span class="icon">${
  e.emoji
}</span> <span class="title">${e.aliases[0]
  .split("_")
  .join(" ")}</span> <span class="desc">${e.description}</span>`;
document.querySelector(".emojis").appendChild(emojiBox);
    });
  } catch (error) {
    console.error("Error fetching or parsing the script:", error);
  }
}

getData();
document.querySelector("button").addEventListener("click", () => {
  // console.log(res);
  const searchTerm = document.querySelector("input").value.toLowerCase();
  console.log(searchTerm);

  const filterData = res.filter((e) => {
    return (
e.aliases[0].toLowerCase().includes(searchTerm) ||
e.description.toLowerCase().includes(searchTerm)
    );
  });
  document.querySelector(".emojis").innerHTML = "";

  filterData.map((e) => {
    const emojiBox = document.createElement("div");
    emojiBox.classList.add("emoji");
    emojiBox.innerHTML = `<span class="icon">${
e.emoji
    }</span> <span class="title">${e.aliases[0]
.split("_")
.join(" ")}</span> <span class="desc">${e.description}</span>`;
    document.querySelector(".emojis").appendChild(emojiBox);
  });
});
