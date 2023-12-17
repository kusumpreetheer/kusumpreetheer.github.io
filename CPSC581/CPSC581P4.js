// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // content variables
    const description1 =
      " ";
    const concept = " ";
    const conceptSummary =
      "";
    const detailed = " "
    const videoEmbed = " ";
  
    // populate content from JavaScript variables
    document.getElementById("description1").innerText = description1;
    document.getElementById("concept").innerText = concept;
    document.getElementById("conceptSummary").innerText = conceptSummary;
    document.getElementById("detailed").innerText = detailed;
  
    // slides for concept sketches carousel
    const conceptSketches = [
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/ASLCommunication.jpg',
        title: 'ASLCommunication',
        description: 'A chair-mounted sensor connected to an Arduino that alerts the user to correct their posture when slouching.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/CampusMap.jpg',
        title: 'Campus Map',
        description: 'A Lego-built robotic arm controlled by an Arduino and servo motors for basic tasks.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/cinema.jpg',
        title: 'Cinema',
        description: 'An Arduino-based system that tracks water usage in showers and alerts when it\'s excessive.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/ClassroomQnA.jpg',
        title: 'ClassroomQnA',
        description: 'A setup using ultrasonic sensors and an Arduino to monitor and signal when pantry items are low.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/escapeRoom.jpg',
        title: 'Escape Room',
        description: 'A device using a photoresistor and Arduino to automatically turn on LEDs in the dark.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/FriendBombing.jpg',
        title: 'Interactive Art Installation',
        description: 'An art installation that responds to people\'s presence using ultrasonic sensors, servo motors, and LED lights, creating an engaging and dynamic visual experience.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/OnlineDebate.jpg',
        title: 'Smart Garbage Can',
        description: 'A hands-free garbage can with an ultrasonic sensor and servo motor to automatically open the lid when someone approaches, promoting hygiene.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/openMic.jpg',
        title: 'Automated Plant Watering System',
        description: 'A system using Arduino, humidity, and temperature sensors to water plants automatically when the soil is dry, preventing forgetfulness.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/PeerFeedback.jpg',
        title: 'Sunrise Simultion Alarm Clock',
        description: 'An alarm clock that mimics a gentle sunrise by gradually increasing the brightness and color temperature of LED lights, providing a more pleasant wake-up experience.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/projectManagement.jpg',
        title: 'Toys For Pets',
        description: 'The pet toy was drawn by Logan and serves as a way for cats, dogs and other small pets to entertain themselves. The basic idea is that the toy will be able to move itself away from the pet using an ultrasonic sensor and motors. Furthermore, the toy would have some sort of decoration on it that pets would want to play with. We decided not to further explore this idea because similar products already exist.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/remoteTrainer.jpg',
        title: 'Pet Feeder',
        description: 'The pet feeder is an idea created by Logan that solves the problem of forgetting to feed your pet. Using an internal timer in the arduino software, at a set interval, for example 6am and 6pm, a motor would activate and let the food bowl be filled from a reservoir. In the end we decided not to pursue this idea due to similar products already existing.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/RemoteWhiteboard.jpg',
        title: 'Closet Organiser',
        description: 'The closet organiser is an idea by Logan that helps to keep a cluttered closet organised. By replacing the hanging rack with a rotating rack powered by a motor, the user would hold a button to rotate their clothes until the one they want is found. While this idea was interesting, due to hardware constraints, we decided not to pursue it.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/SharedExpense.jpg',
        title: 'Automatic Fan',
        description: 'The automatic fan was created by Logan as a way to automatically trigger a fan based on a temperature and humidity sensor. When a certain threshold temperature was reached, the fan would trigger. This idea would be used on an office desk, or with bigger hardware in a room. We decided not to pursue this idea due to its simplicity.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/SocialMediaForAcademics.jpg',
        title: 'Automatic Fan',
        description: 'The automatic fan was created by Logan as a way to automatically trigger a fan based on a temperature and humidity sensor. When a certain threshold temperature was reached, the fan would trigger. This idea would be used on an office desk, or with bigger hardware in a room. We decided not to pursue this idea due to its simplicity.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/translation.jpg',
        title: 'Automatic Fan',
        description: 'The automatic fan was created by Logan as a way to automatically trigger a fan based on a temperature and humidity sensor. When a certain threshold temperature was reached, the fan would trigger. This idea would be used on an office desk, or with bigger hardware in a room. We decided not to pursue this idea due to its simplicity.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/whiteboad.jpg',
        title: 'Automatic Fan',
        description: 'The automatic fan was created by Logan as a way to automatically trigger a fan based on a temperature and humidity sensor. When a certain threshold temperature was reached, the fan would trigger. This idea would be used on an office desk, or with bigger hardware in a room. We decided not to pursue this idea due to its simplicity.'
      }
    ];
  
    // slides for detailed sketches carousel
    const detailedSketches = [
        {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/ASLCommunication.jpg',
            title: 'Posture Corrector',
            description: 'A chair-mounted sensor connected to an Arduino that alerts the user to correct their posture when slouching.'
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/CampusMap.jpg',
            title: 'Robot Arm',
            description: 'A Lego-built robotic arm controlled by an Arduino and servo motors for basic tasks.'
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/ClassroomQnA.jpg',
            title: 'Shower Monitor',
            description: 'An Arduino-based system that tracks water usage in showers and alerts when it\'s excessive.'
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/FriendBombing.jpg',
            title: 'Interactive Art Installation',
            description: 'An art installation that responds to people\'s presence using ultrasonic sensors, servo motors, and LED lights, creating an engaging and dynamic visual experience.'
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/OnlineDebate.jpg',
            title: 'Smart Garbage Can',
            description: 'A hands-free garbage can with an ultrasonic sensor and servo motor to automatically open the lid when someone approaches, promoting hygiene.'
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/openMic2.jpg',
            title: 'Automated Plant Watering System',
            description: 'A system using Arduino, humidity, and temperature sensors to water plants automatically when the soil is dry, preventing forgetfulness.'
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/PeerFeedback.jpg',
            title: 'Sunrise Simultion Alarm Clock',
            description: 'An alarm clock that mimics a gentle sunrise by gradually increasing the brightness and color temperature of LED lights, providing a more pleasant wake-up experience.'
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/pojectManagement2.jpg',
            title: 'Toys For Pets',
            description: 'The pet toy was drawn by Logan and serves as a way for cats, dogs and other small pets to entertain themselves. The basic idea is that the toy will be able to move itself away from the pet using an ultrasonic sensor and motors. Furthermore, the toy would have some sort of decoration on it that pets would want to play with. We decided not to further explore this idea because similar products already exist.'
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/remoteTrainer2.jpg',
            title: 'Pet Feeder',
            description: 'The pet feeder is an idea created by Logan that solves the problem of forgetting to feed your pet. Using an internal timer in the arduino software, at a set interval, for example 6am and 6pm, a motor would activate and let the food bowl be filled from a reservoir. In the end we decided not to pursue this idea due to similar products already existing.'
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/RemoteWhiteboard.jpg',
            title: 'Closet Organiser',
            description: 'The closet organiser is an idea by Logan that helps to keep a cluttered closet organised. By replacing the hanging rack with a rotating rack powered by a motor, the user would hold a button to rotate their clothes until the one they want is found. While this idea was interesting, due to hardware constraints, we decided not to pursue it.'
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/SharedExpense.jpg',
            title: 'Automatic Fan',
            description: 'The automatic fan was created by Logan as a way to automatically trigger a fan based on a temperature and humidity sensor. When a certain threshold temperature was reached, the fan would trigger. This idea would be used on an office desk, or with bigger hardware in a room. We decided not to pursue this idea due to its simplicity.'
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/SocialMediaForAcademics.jpg',
            title: 'Automatic Fan',
            description: 'The automatic fan was created by Logan as a way to automatically trigger a fan based on a temperature and humidity sensor. When a certain threshold temperature was reached, the fan would trigger. This idea would be used on an office desk, or with bigger hardware in a room. We decided not to pursue this idea due to its simplicity.'
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/whiteboard2.jpg',
            title: 'Automatic Fan',
            description: 'The automatic fan was created by Logan as a way to automatically trigger a fan based on a temperature and humidity sensor. When a certain threshold temperature was reached, the fan would trigger. This idea would be used on an office desk, or with bigger hardware in a room. We decided not to pursue this idea due to its simplicity.'
          }
    ];
  
    createCarousel('carouselExampleIndicators1', conceptSketches);
    createCarousel('carouselExampleIndicators2', detailedSketches);

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
  