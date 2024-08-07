# Frontend Assessment Task

This repository contains my implementation of the frontend assessment task. here are the key aspects I noticed from the Figma design and have incorporated into the project.

## Features Implemented

1. **Checkbox States:**
   - there are different states (idle, hover, active, checked) states for the checkbox and I have tried to incorporate all these states. I have even tries to add the blue box shadow that appears on the checkbox when the checkbox is in the active state

2. **"Done" Button States:**
   - I have also tried to add different states (idle, hover, active) to the "Done" button. You can see that the opacity of the background changes during hover and the button moves a little bit downwards when it is clicked

3. **Interactive Page Option Items:**
   - the checkbox can be activated by clicking on any point of the page option item. for instance, if you click on the text "page 3" the corresponding checkbox for page 3 will be activated. this is done after exploring on the prototype hosted on figma

4. **Design Consistency:**
   - All font styles, font sizes, card sizes, and checkbox sizes were taken directly from the Figma design to ensure consistency.

5. **Responsive Design:**
   - As an extra effort, I have made the website responsive. so in mobile devices, the website will appear with no card and no box shadow and just as a simple page. that was done on purpose to give users a better experience

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/PaulosNed/frontend-assessment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd frontend-assessment
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

## Usage

- Open your browser and navigate to `http://localhost:3000` to see the project in action.
- Interact with the page options and the "Done" button to see the different states and behaviors as described above.

## Deployement

This project has been deployed on vercel. please use the following [link](https://frontend-assesment-zeta.vercel.app/) to navigate to the deployed website.