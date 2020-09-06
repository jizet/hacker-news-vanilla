(async () => {
  // Add link to header
  const headerLogo = document.querySelector(".logo");
  headerLogo.addEventListener("click", () =>
    window.open("https://news.ycombinator.com/newest", "_blank")
  );
  const storyResponseParser = (apiResponse) => (apiResponse ? apiResponse : []);

  const fetchStories = () =>
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json").then((res) =>
      res.json(storyResponseParser)
    );

  const fetchStory = (storyId) =>
    fetch(
      `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
    ).then((res) => res.json(storyResponseParser));

  const parseStories = async (storiesIds) => {
    let parsedStories = [];

    for (const storyId of storiesIds) {
      const parsedStory = await fetchStory(storyId);
      parsedStories.push(parsedStory);
    }

    return parsedStories;
  };

  const processStory = (story) => {
    const storyAuthor = document.createElement("span");
    storyAuthor.innerText = `by ${story.by}`;

    const storyScore = document.createElement("span");
    storyScore.className = "story-score";
    storyScore.innerText = `${story.score} points    `;

    const storyDetails = document.createElement("div");
    storyDetails.className = "story-details";
    storyDetails.appendChild(storyScore);
    storyDetails.appendChild(storyAuthor);

    const storyTitle = document.createElement("span");
    storyTitle.className = "story-title";
    storyTitle.innerText = story.title;
    storyTitle.addEventListener("click", () =>
      window.open(story.url, "_blank")
    );

    const storyContainer = document.createElement("div");
    storyContainer.className = "story-container";
    storyContainer.appendChild(storyTitle);
    storyContainer.appendChild(storyDetails);

    return storyContainer;
  };

  const storyParser = async (storiesIds, offsetIndex, offset) => {
    const stories = await parseStories(storiesIds.splice(offsetIndex, offset));
    const storiesList = document.querySelector(".list");
    stories.forEach(async (st) => {
      const story = await processStory(st);
      storiesList.appendChild(story);
    });
  };

  // Start rendering.
  const offset = 30;
  let currentIndex = 0;
  const storiesIds = await fetchStories();
  storyParser(storiesIds, currentIndex, offset);

  // Setup intersection observer
  let options = {
    root: document.querySelector(".content"),
    rootMargin: "100px",
    treshold: 1.0,
  };

  let observer = new IntersectionObserver((entries, observer) => {
    const el = entries[0];
    if (el.isIntersecting) {
      storyParser(storiesIds, currentIndex, currentIndex + offset);
      currentIndex = +offset;
    }
  }, options);

  let target = document.getElementById("observer");
  observer.observe(target);
})();
