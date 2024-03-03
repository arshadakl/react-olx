## React OLX Web application

This project is a React web application inspired by OLX, built with Vite for a smooth development experience. It allows users to seamlessly sell items online through features like:

* **User Authentication:** Secure login and signup using Firebase Auth
* **Product Listing:** Users can create listings for their items, including details and multiple images
* **Image Upload:** Firebase Storage facilitates uploading multiple images for each product listing

**Technologies Used:**

* **Frontend:** React
* **Backend:** Firebase (Authentication, Firestore, Storage)

![Image description](https://github.com/arshadakl/assets/blob/main/olx-home.png?raw=true")

![Image description](https://github.com/arshadakl/assets/blob/main/olx-singlepost.png?raw=true")

![Image description](https://github.com/arshadakl/assets/blob/main/olx-post.png?raw=true")

**Getting Started:**

1. **Prerequisites:**
    * Node.js (version 18 or later) and npm installed on your system.

2. **Clone the Repository:**

   ```bash
   git clone https://github.com/arshadakl/react-olx.git
   ```

3. **Install Dependencies:**

   Navigate to the project directory and install dependencies:

   ```bash
   cd react-olx
   npm install
   ```

4. **Configure Firebase:**

   - **Create a Firebase Project:** If you haven't already, create a new project on the Firebase console (https://console.firebase.google.com/).
   - **Enable Required Services:** In your Firebase project, enable the following services:
      * Authentication
      * Firestore
      * Storage
   - **Obtain Firebase Configuration:** Navigate to your project settings and copy the configuration (web setup) snippet. This snippet includes your API key, project ID, etc.

5. **Create `config.js` (Important):**

   - In the `src` folder, create a new file named `firebase` and create a new file named `config.js`.
   - Paste the Firebase configuration snippet you copied from the console into this file, wrapping it in a JavaScript object. Here's an example:

   ```javascript
   import { initializeApp } from "firebase/app";
   import { getFirestore } from "firebase/firestore";
   import { getStorage } from "firebase/storage";

   const firebaseConfig = {
     // Replace with your Firebase configuration
     apiKey: "...",
     authDomain: "...",
     projectId: "...",
     storageBucket: "...",
     messagingSenderId: "...",
     appId: "...",
   };

   export const Firebase = initializeApp(firebaseConfig);
   export const db = getFirestore(Firebase)
   export const storage = getStorage(Firebase);
   ```

   - **Important:** Replace the placeholder values with your actual Firebase configuration details.

6. **Run the Development Server:**

   Start the development server using npm:

   ```bash
   npm run dev
   ```

   This will typically launch the application at http://localhost:5173