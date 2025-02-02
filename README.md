# BeyondChats Chatbot Setup UI/UX

## Features Implemented
### 1. User Registration
- Users can sign up using their name, email and password.
- "Continue with Google" option for easy login.
- Email verification via OTP to ensure authenticity.

### 2. Organization Setup
- Users enter company name, website URL and description.
- Auto-fetch meta-description from the website URL.
- UI to show detected web pages that have been scraped.
- Status of web pages: scraped, pending, and completed.
- Ability to click on a page to view scraped data chunks.

### 3. Chatbot Integration & Testing
- **Test Chatbot**: Opens the client’s website with a dummy chatbot integrated at the bottom right.
- **Integration Instructions**: Provides an easy-to-follow guide for embedding chatbot code.
- **Mail Instructions**: Sends integration details to the client’s developer.
- **Test Integration**: Verifies successful chatbot deployment with a confetti UI upon success.
- **Error Handling**: Displays a relevant UI if integration is unsuccessful.

### 4. Post Integration Actions
- "Explore Admin Panel" button for further configurations.
- "Start Talking to Your Chatbot" for direct interaction.
- Social media sharing options.

## Tech Stack
- **Frontend:** React, Tailwind CSS, Framer Motion for animations.
- **Icons & Components:** Lucide-react, react-icons.
- **State Management:** useState, useEffect hooks.
- **User Experience:** Step indicators, animations, progress tracking.

## Live Demo
Access the live project here: [Live Website](https://beyond-chats-beta.vercel.app/)

## Installation & Setup
1. Clone the repository
   ```sh
   git clone git clone https://github.com/Annu117/beyond-chats.git
   cd beyond-chats
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Start the development server
   ```sh
   npm start
   ```


