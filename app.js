// This is just a simple sample code to show you the usage of the api
// Feel free to rewrite and improve or delete and start from scratch

(async () => {
  const processStory = (story) => {
    const list = document.querySelector(".list");
    const storyItem = document.createElement("li");
    // TODO => add rest of meta data
    storyItem.innerText = story.title;
    storyItem.addEventListener("click", () => {
      window.open(story.url, "_blank");
    });
    list.appendChild(storyItem);
  };
  const renderStory = async (storyId) => {
    const storyResponse = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
    );
    const story = await storyResponse.json();
    processStory(story);
  };
  const response = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const storiesIds = await response.json();
  storiesIds.map((storyId) => renderStory(storyId));
  const button = document.getElementById("button-id");
  button.addEventListener("click", () => {
    alert("hola");
  });
})();
