var cardData = [
    {
      title: "My Partner in Crime",
      paragraph: "To my partner in crime, here's to another year of shared secrets, adventures, and laughter.Happy birthday to the one who always joins me in mischief and makes life so much more exciting!"
    },
    {
      title: "Forever Friends",
      paragraph: "Happy birthday to my forever friend - with you, I know that true friendship knows no boundaries.Here's to the one who's been there through thick and thin; cheers to a lifelong bond that never ends!"
    },
    {
      title: "Laughter & affection, Always",
      paragraph: "Wishing you a birthday filled with endless laughter and love, just like the beautiful bond we share.To my dear friend, may your special day be a reflection of the joy and love you bring to my life."
    },
    {
      title: "Adventuring Allies",
      paragraph: "With you by my side, every journey becomes an incredible adventure. Happy birthday, my fearless friend!"
    },
    {
      title: "Dream Chasers Togethe",
      paragraph: "To my fellow dream chaser, may this year bring us one step closer to making our dreams a reality."
    },
    {
      title: "Kindred Spirits",
      paragraph: "Here's to my kindred spirit - your friendship is a treasure that fills my heart with joy.Happy birthday to the one who understands me like no other, thank you for being my soul's companion."
    },
  ];
  function goToDesiredLink() {
    // Replace 'your_desired_link_here' with the URL you want to navigate to
    window.location.href = 'index.html';
  }

  for (var i = 0; i < 6; i++) {
    var cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    var labelDiv = document.createElement("div");
    labelDiv.classList.add("label");

    var labelInnerDiv = document.createElement("div");
    labelInnerDiv.classList.add("label-inner");

    var titleParagraph = document.createElement("p");
    titleParagraph.classList.add("card-title");
    titleParagraph.textContent = cardData[i].title;

    var contentParagraph = document.createElement("p");
    contentParagraph.classList.add("card-paragraph");
    contentParagraph.textContent = cardData[i].paragraph;

    labelInnerDiv.appendChild(titleParagraph);
    labelInnerDiv.appendChild(contentParagraph);
    labelDiv.appendChild(labelInnerDiv);
    cardDiv.appendChild(labelDiv);

    var imageDiv = document.createElement("div");
    imageDiv.classList.add("image");

    cardDiv.appendChild(imageDiv);

    document.getElementById("cards-container").appendChild(cardDiv);
  };
  const audio = document.getElementById('loopingAudio');
    // window.onload = function () {
    //         audio.play();
    //     };
        
        // Play the audio when the page is fully loaded
       
        // Play the audio
        audio.play();
  