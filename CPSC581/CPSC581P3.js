// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // content variables
    const description1 =
      "Kai, Heer, Htet, and Logan embarked on a project to create a practical, technology-driven solution for an everyday problem using the basic Arduino kit. \nIn their brainstorming phase, they explored a wide array of ideas. These included developing a Robot Arm for performing simple tasks, a Shower Monitor to conserve water, a Smart Pantry for efficient food inventory management, and a Night Light that adjusts its brightness and color automatically. They also considered creating an Interactive Art Installation, a Smart Garbage Can for efficient waste sorting, an Automated Plant Watering System, and a Sunrise Simulation Alarm Clock for a natural waking experience. Ideas for pet owners like Interactive Toys for Pets, an Automated Pet Feeder, and other household aids such as a Closet Organizer and an Automatic Fan were also on their list. After much deliberation, they decided to focus on a posture corrector to address the common issue of maintaining proper posture during extended periods at a desk. \nThis project involved an ultrasonic sensor mounted on a chair's headrest, with software developed by Kai, Heer, and Logan, and hardware handled by Htet. When a user slouches, exceeding a set distance threshold, the device triggers a buzzer and alarm, prompting the user to sit up straight. Their prototype, enhanced with cardboard for a more finished look, demonstrated a practical and innovative approach to everyday ergonomic challenges.";
    const concept = "In their project brainstorming, Kai, Heer, Htet, and Logan evaluated a range of ideas, each with distinct pros and cons. The posture corrector, their final choice, offered a direct solution to poor posture, a prevalent health issue, although its success depended on user adherence. Other concepts like the Robot Arm and Shower Monitor provided innovative automation but faced design complexities and varied user acceptance. The Smart Pantry and Night Light aimed at reducing waste and improving sleep but required regular user interaction. Creative ideas like the Interactive Art Installation and Smart Garbage Can were intriguing yet faced logistical challenges. While pet-focused solutions like Toys for Pets and the Pet Feeder promised convenience, they had limitations in functionality and interaction. Household aids like the Closet Organizer and Automatic Fan offered organizational and comfort benefits but were constrained by user engagement and market competition. Each concept presented a unique blend of potential impact and feasibility challenges, leading to their well-considered final decision.";
    const conceptSummary =
      "";
    const detailed = "In their project, Kai, Heer, Htet, and Logan explored a range of innovative ideas, each accompanied by detailed sketches and several iterations, especially notable in the development of their final choice, the posture corrector. Initial concepts like the Shower Monitor and Night Light were designed to encourage water conservation and automate lighting based on ambient conditions, respectively. The posture corrector, which evolved through multiple iterations, featured versions by each team member, experimenting with different feedback mechanisms such as sound, vibration, and visual alerts to correct poor posture. Other ideas included a hygienic Smart Garbage Can, an Automatic Fan with a cooling system for hot days, and a Sunrise Simulation Alarm Clock that aimed to provide a natural waking experience. Each concept represented the team's commitment to creatively using technology to solve everyday problems while balancing practicality and user experience."
    const videoEmbed = "description of the video here";
  
    // populate content from JavaScript variables
    document.getElementById("description1").innerText = description1;
    document.getElementById("concept").innerText = concept;
    document.getElementById("conceptSummary").innerText = conceptSummary;
    document.getElementById("detailed").innerText = detailed;
  
    // slides for concept sketches carousel
    const conceptSketches = [
      {
        imageSrc: '/portfolio-pictures/posture-ideaske/postureCorrector.png',
        title: 'Posture Corrector',
        description: 'A chair-mounted sensor connected to an Arduino that alerts the user to correct their posture when slouching.'
      },
      {
        imageSrc: '/portfolio-pictures/posture-ideaske/robotArm.png',
        title: 'Robot Arm',
        description: 'A Lego-built robotic arm controlled by an Arduino and servo motors for basic tasks.'
      },
      {
        imageSrc: '/portfolio-pictures/posture-ideaske/showerMonitor.png',
        title: 'Shower Monitor',
        description: 'An Arduino-based system that tracks water usage in showers and alerts when it\'s excessive.'
      },
      {
        imageSrc: '/portfolio-pictures/posture-ideaske/smartPantry.png',
        title: 'Smart Pantry',
        description: 'A setup using ultrasonic sensors and an Arduino to monitor and signal when pantry items are low.'
      },
      {
        imageSrc: '/portfolio-pictures/posture-ideaske/nightLight.png',
        title: 'Night Light',
        description: 'A device using a photoresistor and Arduino to automatically turn on LEDs in the dark.'
      },
      {
        imageSrc: '/portfolio-pictures/posture-ideaske/art.jpg',
        title: 'Interactive Art Installation',
        description: 'An art installation that responds to people\'s presence using ultrasonic sensors, servo motors, and LED lights, creating an engaging and dynamic visual experience.'
      },
      {
        imageSrc: '/portfolio-pictures/posture-ideaske/garbage.jpg',
        title: 'Smart Garbage Can',
        description: 'A hands-free garbage can with an ultrasonic sensor and servo motor to automatically open the lid when someone approaches, promoting hygiene.'
      },
      {
        imageSrc: '/portfolio-pictures/posture-ideaske/plant.jpg',
        title: 'Automated Plant Watering System',
        description: 'A system using Arduino, humidity, and temperature sensors to water plants automatically when the soil is dry, preventing forgetfulness.'
      },
      {
        imageSrc: '/portfolio-pictures/posture-ideaske/sunrise.jpg',
        title: 'Sunrise Simultion Alarm Clock',
        description: 'An alarm clock that mimics a gentle sunrise by gradually increasing the brightness and color temperature of LED lights, providing a more pleasant wake-up experience.'
      },
      {
        imageSrc: '/portfolio-pictures/posture-ideaske/petplay.jpg',
        title: 'Toys For Pets',
        description: 'The pet toy was drawn by Logan and serves as a way for cats, dogs and other small pets to entertain themselves. The basic idea is that the toy will be able to move itself away from the pet using an ultrasonic sensor and motors. Furthermore, the toy would have some sort of decoration on it that pets would want to play with. We decided not to further explore this idea because similar products already exist.'
      },
      {
        imageSrc: '/portfolio-pictures/posture-ideaske/petfood.jpg',
        title: 'Pet Feeder',
        description: 'The pet feeder is an idea created by Logan that solves the problem of forgetting to feed your pet. Using an internal timer in the arduino software, at a set interval, for example 6am and 6pm, a motor would activate and let the food bowl be filled from a reservoir. In the end we decided not to pursue this idea due to similar products already existing.'
      },
      {
        imageSrc: '/portfolio-pictures/posture-ideaske/closet.jpg',
        title: 'Closet Organiser',
        description: 'The closet organiser is an idea by Logan that helps to keep a cluttered closet organised. By replacing the hanging rack with a rotating rack powered by a motor, the user would hold a button to rotate their clothes until the one they want is found. While this idea was interesting, due to hardware constraints, we decided not to pursue it.'
      },
      {
        imageSrc: '/portfolio-pictures/posture-ideaske/fan.jpg',
        title: 'Automatic Fan',
        description: 'The automatic fan was created by Logan as a way to automatically trigger a fan based on a temperature and humidity sensor. When a certain threshold temperature was reached, the fan would trigger. This idea would be used on an office desk, or with bigger hardware in a room. We decided not to pursue this idea due to its simplicity.'
      }
    ];
  
    // slides for detailed sketches carousel
    const detailedSketches = [
      {
        imageSrc: '/portfolio-pictures/posture-detailske/showerMonitor.png',
        title: 'Shower Monitor',
        description: 'A water flow sensor (or ultrasonic sensor) measures water use during showers. The Arduino processes this data, displaying it and alerting users when usage is high. This system helps in conserving water and monitoring usage in real-time.'
      },
      {
        imageSrc: '/portfolio-pictures/posture-detailske/nightLight.png',
        title: 'Night Light',
        description: 'The photoresistor detects ambient light levels, varying its resistance accordingly. The Arduino reads the photoresistor\'s resistance, turning on LEDs when it detects darkness. This setup automates lighting, ideal for use in places like bedrooms and hallways.'
      },
      {
        imageSrc: '/portfolio-pictures/posture-detailske/postureCorrector.png',
        title: 'Posture Corrector - Heer',
        description: 'An ultrasonic sensor on a chair\'s back measures the distance to the user\'s back. The Arduino triggers a buzzer or motor when it detects slouching, promoting good posture. Users can set their preferred distance thresholds for posture alerts.'
      },
      {
        imageSrc: '/portfolio-pictures/posture-detailske/posture-Kai.jpg',
        title: 'Posture Corrector - Kai',
        description: 'An ultrasonic sensor attached to a chair\'s back measures the distance to the user\'s back. When the user slouches, increasing this distance beyond a set threshold, the Arduino microcontroller triggers an alarm. This alarm, different from a close-range buzzer, alerts the user to improve their posture. It can be a unique sound or a series of beeps, providing a clear indication that the user needs to sit closer to maintain good posture.'
      },
      {
        imageSrc: '/portfolio-pictures/posture-detailske/detailed_posture.jpg',
        title: 'Posture Corrector - Htet',
        description: 'This version of the posture corrector works in the same way as the ones above but provides feedback differently. The chair box in the back that contains a buzzer and a vibration motor, as well as the arduino. When the user has a bad posture, the buzzer makes a sound and the vibration motor vibrates the entire chairs.'
      },
      {
        imageSrc: '/portfolio-pictures/posture-detailske/posture_logan.jpg',
        title: 'Posture Corrector - Logan',
        description: 'This version of the posture corrector was sketched by Logan. These two versions show the same basic idea of creating an output when bad posture is detected. In the first version, a buzzer is activated on the seat and in the second version, a fan is activated on the user\'s desk. We decided to implement this idea using a vibration on the seat and an audio output.'
      },
      {
        imageSrc: '/portfolio-pictures/posture-detailske/detailed_garbage.jpg',
        title: 'Smart Garbage Can',
        description: 'This smart garbage can aims to improve hygiene when using a garbage can by removing any physical touch necessary. First, walk up to the garbage machine to be detected by the first ultrasonic sensor and, wave ur hand above the can to trigger the second ultrasonic sensor. Then, the servo motor opens the lid for you.'
      },
      {
        imageSrc: '/portfolio-pictures/posture-detailske/detailed_closet.jpg',
        title: 'Closet Organiser',
        description: ''
      },
      {
        imageSrc: '/portfolio-pictures/posture-detailske/detailed_fan.jpg',
        title: 'Automatic Fan + Cooling System',
        description: 'This automatic fan and cooling system is meant to help get through those hot summer days. The fan begins to spin when the temperature sensor has detected that the temperature is too high. The user can also press the button to spray themselves with a refreshing splash of water.'
      },
      {
        imageSrc: '/portfolio-pictures/posture-detailske/detailed_alarm.jpg',
        title: 'Sunrise Simulation Alarm Clock',
        description: 'The sunrise simulator alarm clock solves the problem of unpleasant alarms and it helps you start the day with a positive mood. Set the alarm to the time of your liking or set it to match the sunrise outside, which is detected by the photoresistor. The alarm wakes you up by simulating natural sunlight with the LED strip and producing natural sounds (like birds chirping, wind chimes) to wake you up.'
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
  