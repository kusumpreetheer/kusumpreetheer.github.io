// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

  // content variables
  const description1 =
    "For our innovative multi-touch unlocking system, we embarked on a journey of ideation, exploring a multitude of intriguing concepts. Among these, 'Cosmic Alignment' emerged, envisioning users interacting with celestial entities akin to planets for phone access. Another concept, 'Composition Unlock,' entailed crafting a unique musical composition that, when performed correctly, would grant device entry. Lastly, the 'Zodiac Unlock' required users to input a constellation sign corresponding to their chosen symbol for unlocking.\n\nAfter extensive deliberation and the creation of initial sketches for each idea, it became apparent that the Composition Unlock not only stood as a unique approach but also promised an engaging user experience. As we transitioned from concept to implementation, our focus shifted towards refining the user interface, departing from the conventional guitar-like design to elevate the overall interaction.\n\nUpon a sagacious suggestion from our professor, we integrated a musical element, enriching user interaction with harmonious notes upon key activation. While Heer led the charge in design and conceptualization, Kai took the helm in crafting the user interface and ensuring seamless functionality on both the front-end and back-end using HTML, CSS, and Javascript. Simultaneously, Logan integrated the musical effects into the website, guaranteeing flawless operation of the entire system.";
  const description2 = 
    "Logan pioneered the sensory-based unlocking method, introducing innovative concepts such as the shake pattern, where users move the phone in a specific pattern to interact with the screen and unlock the device. Another inventive idea involved using vocal cues, where users could hum a tune, and the device would unlock once the correct melody was sung. As the implementation evolved, remarkable concepts emerged, including the angle unlock, which required physically manipulating the phone to reach a specific angle for unlocking. Another concept was the ladder, where a ball navigated between rungs, ultimately landing on the correct one to unlock the device. Ted endorsed this implementation, recognizing its potential.Throughout the iterations, notable improvements were made, notably refining the locking mechanism to incorporate a tile-based approach rather than simply reaching the end, enhancing overall security. Additionally, meticulous attention was paid to the user interface. Ted authored the Unity script for the unlock screen, augmenting it with various illustrations to enhance the website's visual appeal.";
  const concept = "";
  const conceptSummary =
    "";
  const detailed = ""
  const videoEmbed = "description of the video here";

  // populate content from JavaScript variables
  document.getElementById("description1").innerText = description1;
  document.getElementById("description2").innerText = description2;
  document.getElementById("concept").innerText = concept;
  document.getElementById("conceptSummary").innerText = conceptSummary;
  document.getElementById("detailed").innerText = detailed;

  // slides for concept sketches carousel
  const conceptSketches = [
    {
      imageSrc: 'portfolio-pictures/10-basic-ideas/color pattern.jpeg',
      title: 'Color Palette',
      description: 'This multi-touch unlock system necessitates users to blend their chosen unlock color, and if the resultant mixture aligns with the preset color, the phone will unlock. While this design for multi-touch demonstrates a clever concept, it garnered only two out of four votes in favor during the proposal phase. The majority of members expressed reservations about its viability as a final choice, citing potential difficulty for users to consistently reproduce the exact color and a belief that other ideas might offer greater creativity.'
    },
    {
      imageSrc: 'portfolio-pictures/10-basic-ideas/Cosmic alignment.jpeg',
      title: 'Cosmic Alignment',
      description: 'For this multi-touch unlocking system, users would need to align all the planets in the correct sequence for the phone to unlock. This concept initially appeared quite innovative, promising an engaging user experience. However, it faced a couple of significant drawbacks. Firstly, representing the entire solar system on a mobile screen posed a challenge. If only a few parts of the system were visible at a time, it would diminish the overall user experience. Additionally, creating a visually appealing and enjoyable interface presented another difficulty. In the proposal stage, only three out of the four members supported this idea.'
    },
    {
      imageSrc: 'portfolio-pictures/10-basic-ideas/Emoji Pattern.jpeg',
      title: 'Emoji Pattern',
      description: 'The multi-touch unlock system employs an emoji pattern, allowing users to select and input a specific sequence of emojis to access their phone. The user sets their own unique pattern. Initially, this design received a score of 0 out of 4 in the design proposal phase due to its perceived simplicity.'
    },
    {
      imageSrc: 'portfolio-pictures/10-basic-ideas/Music Composition.jpeg',
      title: 'Music Composition',
      description: 'This multi-touch unlocking system enables users to input the correct combination, and once it\'s successfully entered, the phone unlocks. Originally, these concepts, as depicted in the diagrams, were envisioned to be executed using a keyboard, guitar, or drums. The majority of members were highly enthusiastic about this concept, as it not only presented a unique approach but also offered numerous opportunities for enhancements and additional features to make the lock more enticing.'
    },
    {
      imageSrc: 'portfolio-pictures/10-basic-ideas/Puzzle piece.jpeg',
      title: 'Puzzle Piece',
      description: 'The multi-touch unlocking system utilized puzzle pieces, requiring them to be arranged in a specific sequence for the phone to unlock. This sequence could involve solving a jigsaw puzzle or organizing numbers in the correct order by sliding them one at a time. Unfortunately, only one out of four team members endorsed this concept. One of the drawbacks of this unlocking method was its resemblance to the familiar \'slide to unlock\' approach.'
    },
    {
      imageSrc: 'portfolio-pictures/10-basic-ideas/Zodiac Constellation.jpeg',
      title: 'Zodiac constellation',
      description: 'This multi-touch unlocking system draws inspiration from constellations. Users have the option to select their preferred constellation pattern to unlock the phone. To gain access, they arrange the stars of the chosen constellation. Three out of four team members endorsed this design for further development, finding it an intriguing addition. However, it was noted that one drawback was its similarity to the Android unlock method. Additionally, accommodating the extensive variety of constellations could pose a challenge.'
    },
    {
      imageSrc: 'portfolio-pictures/10-basic-ideas/Three-door Riddle.jpeg',
      title: 'Three-door Riddle',
      description: 'The multi-touch unlocking method, utilizing the three-door unlock approach, mirrors the Monte Carlo principle where users select a door at random to locate the goat. However, in the event they fail to identify the correct door, the game resets. While this concept holds potential, the practical execution may not yield optimal results. Moreover, relying on guesswork to find the correct door undermines the primary objective of enabling users to access their phones conveniently using their chosen unlocking method.'
    },
    {
      imageSrc: 'portfolio-pictures/10-basic-ideas/Potion-Brewing.jpeg',
      title: 'Potion-Brewing',
      description: 'This method involves brewing a potion to unlock the phone, using a multi-touch approach. Users are given a set of basic potions and must brew the one they select as their unlocking elixir. While this concept has potential, it falls short in terms of uniqueness and simplicity. Additionally, implementing it would necessitate a significant emphasis on UI design to make up for the lack of distinctive features. '
    }
  ];

  // slides for detailed sketches carousel
  const detailedSketches = [
    {
      imageSrc: 'portfolio-pictures/10-refined-ideas/Zodiac symbol.jpg',
      title: 'Zodiac Symbol',
      description: 'For this implementation of the zodiac symbol multi-touch unlocking method, we observe various screens. In this design, users are required to scroll across the expansive constellation and locate the precise constellation to unlock. However, one drawback of this approach is its potential size, which may make it less accessible compared to other, more innovative and adaptable ideas.'
    },
    {
      imageSrc: 'portfolio-pictures/10-refined-ideas/keyboard.jpg',
      title: 'Keyboard',
      description: 'Another approach to unlocking this multi-touch composition involves a piano key setup. Users can play the designated chords on the keyboard to activate the unlocking sequence. This concept closely resembled the guitar unlocking method. Ultimately, our team opted for the guitar method because it resonated more with us in terms of interest and engagement. '
    },
    {
      imageSrc: 'portfolio-pictures/10-refined-ideas/band.jpg',
      title: 'Band',
      description: 'Logan\'s proposed multi-touch composition method, which would have allowed users to play drums and a band to unlock the phone upon successful execution, was ultimately not selected due to its complexity in implementation.'
    },
    {
      imageSrc: 'portfolio-pictures/10-refined-ideas/guitar.jpg',
      title: 'Guitar',
      description: 'Logan\'s guitar composition employing a multi-touch method allows users to select keys and strum them to produce sound. This method holds great appeal, as it not only offers an enjoyable experience but also provides room for enhancements, including adding sound to the corresponding chords.'
    }
  ];

  // slides for final sketches carousel
  const finalSketches = [
    {
      imageSrc: 'portfolio-pictures/guitargameplay/LockScreen.png'
    },
    {
      imageSrc: 'portfolio-pictures/guitargameplay/guitarScreen.png'
    },
    {
      imageSrc: 'portfolio-pictures/guitargameplay/HomeScreen.png'
    }
  ];

  createCarousel('carouselExampleIndicators1', conceptSketches);
  createCarousel('carouselExampleIndicators2', detailedSketches);
  createCarousel('carouselExampleIndicators3', finalSketches);


  // slides for concept sketches carousel
  const conceptSketches2 = [
    {
      imageSrc: 'portfolio-pictures/10-basic-ideas/Shake Pattern.jpeg',
      title: 'Shake Pattern',
      description: 'The sensory unlocking system operates by requiring specific motions with the phone to enable unlocking when the moving object reaches a designated endpoint. The majority of our group members supported this model for sensory unlocking, as it offers an innovative approach and ample room for generating creative ideas, such as golf-based or ladder-based unlocking, as envisaged in future implementations.'
    },
    {
      imageSrc: 'portfolio-pictures/10-basic-ideas/Singinghumming.jpeg',
      title: 'Singing/humming',
      description: 'This sensory-based unlocking method requires users to hum or sing a specific tune to gain access to their devices. The tune is then recorded by the sensory device and analyzed for a match with the tune already registered in the system. This concept garnered a 75% approval rate from a sample of four individuals. However, one potential drawback to implementing this method is its perceived complexity.'
    },
    {
      imageSrc: 'portfolio-pictures/10-basic-ideas/spint.jpeg',
      title: 'Sprint',
      description: 'In this sensory-based unlocking method, users are required to engage in physical activity, prompting the device\'s meter to measure their speed. When the device registers a specific speed threshold, it triggers the phone to unlock. While one out of four team members advocated for this approach, it was ultimately not selected, partly due to its limited suitability for testing purposes.'
    },
    {
      imageSrc: 'portfolio-pictures/10-basic-ideas/Hand Temperature.jpeg',
      title: 'Hand Temperature',
      description: 'This method of sensory-based unlocking utilizes the hand\'s temperature to grant access to the phone. When the temperature gauge approaches the predetermined unlocking threshold, the device is activated. However, only one in four individuals supports this concept. One drawback raised is the potential difficulty in accessing a device to measure its temperature.'
    },
    {
      imageSrc: 'portfolio-pictures/10-basic-ideas/Basketball finger spin.jpeg',
      title: 'Basketball finger spin',
      description: 'This method employs a sensory approach to unlocking the phone, wherein the user spins the device on their finger, akin to spinning a basketball. While this concept garnered a 75% approval rate, it\'s worth noting that despite its popularity, it may not be the most practical solution. Not every user possesses the dexterity to execute such a maneuver, potentially leading to accidents.'
    }
  ];

  // slides for detailed sketches carousel
  const detailedSketches2 = [
    {
      imageSrc: 'portfolio-pictures/10-refined-ideas/singinghumming1.jpg',
      title: 'Singing/Humming 1',
      description: 'This approach employs sensory techniques such as singing and humming to unlock the device. In the depicted scenario, Kai illustrates users attempting to reproduce a specific tune set as their password. If the gathered rendition is incorrect, users receive a notification about its inaccuracy. Additionally, users have the option to specify how much of the tune they wish to record.'
    },
    {
      imageSrc: 'portfolio-pictures/10-refined-ideas/singinghumming2.jpg',
      title: 'Singing/Humming 2',
      description: 'Some of the more detailed illustrations demonstrate the capability to record notes. They go even further by displaying voice frequency alongside visual representations of the musical notes. In contrast, certain depictions showcase a fixed set of notes, requiring them to be sung to access specific ones. Another option explored involved using a keyboard or a musical instrument to indicate the notes. Despite the extensive scope of possibilities, this approach was ultimately not chosen. We were particularly focused on developing the guitar unlocking method for the multi-touch system, and it may have been too complex to pursue given our limited experience with sensory applications.'
    },
    {
      imageSrc: 'portfolio-pictures/10-refined-ideas/Shake pattern1.jpg',
      title: 'Shake Pattern 1',
      description: 'Ted developed a sensory-based phone unlocking method that relies on specific motion patterns. By moving the phone diagonally or up and down, it can be unlocked. While this approach appeared enjoyable, it didn\'t garner much interest for further exploration, as it seemed rather straightforward and lacked uniqueness.'
    },
    {
      imageSrc: 'portfolio-pictures/10-refined-ideas/Shake pattern2.jpg',
      title: 'Shake Pattern 2',
      description: 'Ted developed a motion-based sensory unlocking method. In this approach, users must set the angle on their device to one that closely matches the intended unlocking angle. Once this angle is reached, the phone unlocks. While this method appears effective, it also brings to mind a similar technique used in a prior project by another group, where they employed a rotating lock for phone access.'
    },
    {
      imageSrc: 'portfolio-pictures/10-refined-ideas/Shake pattern3.jpg',
      title: 'Shake Pattern 3',
      description: 'The innovative sensory motion technique devised by Ted involves gently tilting the phone from side to side, facilitating the movement of the ball from one rung to another. Eventually, it aligns perfectly with the correct rung, enabling the phone to be unlocked and accessed. This approach not only demonstrated uniqueness but also added an element of enjoyment to the process. Ultimately, our team decided that this implementation was the most effective choice.'
    },
    {
      imageSrc: 'portfolio-pictures/10-refined-ideas/Shake pattern4.jpg',
      title: 'Shake Pattern 4',
      description: 'This implementation, conceived by Ted, involves a sensory response to the motion of water descending when the phone is tilted. The act of water cascading down serves as the mechanism for unlocking the phone. While this approach initially appears intriguing, it also raises concerns. It seems straightforward and potentially lacks the robust security needed for unlocking sensitive devices.'
    },
    {
      imageSrc: 'portfolio-pictures/10-refined-ideas/Shake pattern5.jpg',
      title: 'Shake Pattern 5',
      description: 'Ted also devised this sensory approach to unlock the phone. In this method, if the device is held at a specific angle for a designated duration in a particular pattern, the phone would unlock. While this unlocking mechanism proved effective, it appeared somewhat simplistic and lacked the distinctive and enjoyable elements present in some of our other methods. '
    },
    {
      imageSrc: 'portfolio-pictures/10-refined-ideas/Shake pattern6.jpg',
      title: 'Shake Pattern 6',
      description: 'Heer devised this sensory-based approach for the shake pattern. The concept involved using a golf ball set in motion, ultimately reaching the goal and landing in the golf hole. While the idea was innovative and entertaining, its practical implementation posed significant challenges, making it less feasible for seamless execution.'
    },
    {
      imageSrc: 'portfolio-pictures/10-refined-ideas/Shake pattern7.jpg',
      title: 'Shake Pattern 7',
      description: 'In this rendition of the shake pattern by Heer, the objective is to relocate the object to the appropriate box. While the execution was well done, it bore a resemblance to another concept and lacked a distinct uniqueness.'
    }
  ];

  // slides for final sketches carousel
  const finalSketches2 = [
    {
      imageSrc: 'portfolio-pictures/guideballgameplay/gameplay1.png'
    },
    {
      imageSrc: 'portfolio-pictures/guideballgameplay/gameplay2.png'
    }
  ];

  createCarousel('carouselExampleIndicators4', conceptSketches2);
  createCarousel('carouselExampleIndicators5', detailedSketches2);
  createCarousel('carouselExampleIndicators6', finalSketches2);

  // Get the modal element
  const modal = document.getElementById('myModal');

  // Get the close button element
  const closeButton = document.getElementsByClassName('close')[0];

  // Close the modal when the close button is clicked
  closeButton.addEventListener('click', closeModal);

  // Close the modal when the user clicks outside of it
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Close the modal when the "Esc" key is pressed
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

});


// Function to open the modal
function openModal(slide) {
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');

  modalImage.src = slide.imageSrc;
  modalTitle.textContent = slide.title;
  modalDescription.textContent = slide.description;

  document.getElementById('myModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// Function to create a carousel
function createCarousel(containerId, slides) {
  // Get the container element
  const carouselDiv = document.getElementById(containerId);

  // Create ol element for indicators
  const ol = document.createElement('ol');
  ol.classList.add('carousel-indicators');

  // Create div element for inner carousel content
  const innerDiv = document.createElement('div');
  innerDiv.classList.add('carousel-inner');

  // Create prev and next buttons
  const prevButton = document.createElement('a');
  prevButton.classList.add('carousel-control-prev');
  prevButton.href = `#${containerId}`;
  prevButton.role = 'button';
  prevButton.setAttribute('data-slide', 'prev');
  prevButton.innerHTML = '<span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span>';

  const nextButton = document.createElement('a');
  nextButton.classList.add('carousel-control-next');
  nextButton.href = `#${containerId}`;
  nextButton.role = 'button';
  nextButton.setAttribute('data-slide', 'next');
  nextButton.innerHTML = '<span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span>';

  // Append ol, innerDiv, and buttons to the carouselDiv
  carouselDiv.appendChild(ol);
  carouselDiv.appendChild(innerDiv);
  carouselDiv.appendChild(prevButton);
  carouselDiv.appendChild(nextButton);

  // carousel indicators container
  const carouselIndicators = ol;
  // carousel inner container
  const carouselInner = innerDiv;
  // Loop through the slides and create carousel items dynamically
  slides.forEach((slide, index) => {

    // Create the indicators
    const indicator = document.createElement('li');
    indicator.setAttribute('data-target', `#${containerId}`);
    indicator.setAttribute('data-slide-to', index);
    if (index === 0) {
      indicator.classList.add('active'); // Set the first indicator as active
    }
    carouselIndicators.appendChild(indicator);

    // Create the carousel items
    const item = document.createElement('div');
    item.classList.add('carousel-item');
    if (index === 0) {
      item.classList.add('active'); // Set the first slide as active
    }

    // Create the image element
    const img = document.createElement('img');
    img.classList.add('d-block', 'w-100');
    img.src = slide.imageSrc;
    img.alt = `Slide ${index + 1}`;

    // Add click event listener to open modal
    img.addEventListener('click', () => {
      openModal(slide);
    });

    // Create the caption div
    const caption = document.createElement('div');
    caption.classList.add('carousel-caption', 'd-none', 'd-md-block', 'bg-[#FCFCFC]');

    // Create the caption title and description
    const title = document.createElement('h5');
    title.classList.add('text-black', 'text-lg', 'sm:text-xl', 'font-medium');
    title.textContent = slide.title;
    const description = document.createElement('p');
    description.textContent = slide.description;
    description.classList.add('text-black', 'font-light');

    caption.appendChild(title);
    caption.appendChild(description);

    item.appendChild(img);
    item.appendChild(caption);

    carouselInner.appendChild(item);
  });
}
