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
        description: 'An app where people can participate in conversations using ASL signs and can make friends based on that '
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/CampusMap.jpg',
        title: 'Campus Map',
        description: 'A VR app that lets prospective students explore college campuses remotely in a virtual environment.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/cinema.jpg',
        title: 'Cinema',
        description: 'Virtual big screen experience in virtual reality for you and your friends. This makes remote movie-watching sessions with your friends more personal because it is like they are watching the movie right next to you!'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/ClassroomQnA.jpg',
        title: 'ClassroomQnA',
        description: 'A real-time Q&A tool that students can use during lectures to ask and upvote questions anonymously.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/escapeRoom.jpg',
        title: 'Escape Room',
        description: 'This sketch is for a remote team-building exercise idea. Escape rooms are an ideal team-building exercise because they require problem-solving and collaboration. They are also fun and a great way to build relationships with people. We came up with the idea of a VR escape room as a team-building exercise for remote teams. '
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/FriendBombing.jpg',
        title: 'FriendBombing',
        description: 'An app where people are given a choice to bomb random people on the application and if someone is bombed they have to participate in some activities with each other. '
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/OnlineDebate.jpg',
        title: 'OnlineDebate',
        description: 'A website where students can engage in structured debates on various topics, with tools for timing and scoring.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/openMic.jpg',
        title: 'openMic',
        description: 'An open mic that allows people to join both in person or from any device (phone/computer/VR headset). Cameras are placed around the room and stage for remote audiences and there is a projector on the stage for remote performers'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/PeerFeedback.jpg',
        title: 'PeerFeedback',
        description: 'A mobile application where students can give and receive anonymous feedback on group projects or presentations.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/projectManagement.jpg',
        title: 'projectManagement',
        description: 'A sketch for a collaborative project management app. This app contains a task board to help keep track of your team’s tasks, a file-sharing app for files and links, and text and voice communication'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/remoteTrainer.jpg',
        title: 'remoteTrainer',
        description: 'A sketch for an app to help you find a personal trainer online. Then, you can send your workouts or videos of your workouts to your trainer to receive feedback.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/RemoteWhiteboard.jpg',
        title: 'RemoteWhiteboard',
        description: 'A sketch for a set of whiteboards that are synchronized. Writing anything on one of the boards also appears on all of the other boards. '
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/SharedExpense.jpg',
        title: 'SharedExpense',
        description: 'An app that helps track and split expenses within a project team or student group.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/SocialMediaForAcademics.jpg',
        title: 'SocialMediaForAcademics',
        description: 'A social networking site focused on academic collaboration, where students can share research and find project partners.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/translation.jpg',
        title: 'translation',
        description: 'The automatic fan was created by Logan as a way to automatically trigger a fan based on a temperature and humidity sensor. When a certain threshold temperature was reached, the fan would trigger. This idea would be used on an office desk, or with bigger hardware in a room. We decided not to pursue this idea due to its simplicity.'
      },
      {
        imageSrc: '/portfolio-pictures/CPSC581P4IS/whiteboad.jpg',
        title: 'whiteboad',
        description: 'The automatic fan was created by Logan as a way to automatically trigger a fan based on a temperature and humidity sensor. When a certain threshold temperature was reached, the fan would trigger. This idea would be used on an office desk, or with bigger hardware in a room. We decided not to pursue this idea due to its simplicity.'
      }
    ];
  
    // slides for detailed sketches carousel
    const detailedSketches = [
        {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/ASLCommunication.jpg',
            title: 'ASL Communication',
            description: 'Connect with friends using American Sign Language (ASL) through this innovative app. Users can chat using ASL video, making it a great tool for the deaf and hard of hearing community to socialize and meet new people.'
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/CampusMap.jpg',
            title: 'Campus Map',
            description: 'Experience immersive virtual tours of college campuses from anywhere. This VR app provides a detailed look at campus life, facilities, and more to help prospective students make informed decisions.'
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/ClassroomQnA.jpg',
            title: 'Classroom QnA',
            description: ' Enhance classroom interaction with this real-time Q&A platform. Students can anonymously ask and upvote questions, promoting a more engaging and inclusive learning environment.'
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/FriendBombing.jpg',
            title: 'Friend Bombing',
            description: ' A playful app that randomly matches users to bomb each other with challenges, encouraging them to engage in fun activities and fostering new friendships.'
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/OnlineDebate.jpg',
            title: 'Online Debate',
            description: 'Debate with peers across the globe on this online platform. Structured debates with built-in timing and scoring promote critical thinking and public speaking skills.'
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/openMic2.jpg',
            title: 'Open Mic',
            description: ' '
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/PeerFeedback.jpg',
            title: 'Peer Feedback',
            description: ' Offer constructive criticism or praise anonymously on class projects. This mobile app encourages honest feedback and continuous improvement among students.'
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/pojectManagement2.jpg',
            title: 'Poject Management',
            description: ' '
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/remoteTrainer2.jpg',
            title: 'Remote Trainer',
            description: ' '
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/RemoteWhiteboard.jpg',
            title: 'Remote Whiteboard',
            description: 'Collaborate remotely with this digital whiteboard app. Team members can brainstorm in real-time, using tools for drawing and annotating.'
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/SharedExpense.jpg',
            title: 'Shared Expense',
            description: 'Simplify group finance management with this app. Track, split, and manage expenses for projects or trips, ensuring fairness and transparency.'
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/SocialMediaForAcademics.jpg',
            title: 'Social Media For Academics',
            description: 'A niche social network for academic professionals and students. Share research, collaborate on projects, and network with peers in your field.'
          },
          {
            imageSrc: '/portfolio-pictures/CPSC581P4CS/whiteboard2.jpg',
            title: 'whiteboard',
            description: ' '
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
  