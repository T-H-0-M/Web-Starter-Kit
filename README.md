# Web-Starter-Kit

Welcome to the **Web-Starter Kit**! This repository serves as a foundational
template for creating modern web applications using **React** and
**TypeScript**. It comes pre-configured with authentication (via Google
Firebase) and a functional payment system.

Please note that this template is a **work in progress**. The following is a
loose roadmap -

- [x] React Application Basics
- [ ] Firebase Authentication
- [x] React Application Styling
- [ ] React Application Animations
- [ ] Stripe Payment Support

## Features

- **React + TypeScript**: A powerful combination for building scalable and
  maintainable web applications.
- **Authentication**: Integrated with Google Firebase for functional user login,
  registration, and authentication.
- **Payment System**: Pre-configured with a basic stripe payment flow to get you
  started quickly.
- **Extensible Architecture**: Clean and modular folder structure to facilitate
  easy customisation.

## Getting Started

Follow these steps to set up and run the project:

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A Firebase project (set up [here](https://firebase.google.com/))
- A payment gateway account (e.g., [Stripe](https://stripe.com/) or
  [PayPal](https://www.paypal.com/))

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/T-H-0-M/Web-Starter-Kit.git
   cd Web-Starter-Kit
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables:** Create a `.env` file (or modify the
   existing .env.example) in the root directory and add the following:

   ```env
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
   REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
   ```

   Replace the placeholders with your actual Firebase and Stripe credentials.

4. **Run the Application:**
   ```bash
   npm start
   # or
   yarn start
   ```
   The app will be available at `http://localhost:5173`.

## Project Structure

```plaintext
web-starter/
├── public/           # Static assets (HTML, images, etc.)
├── src/
│   ├── assets/       # Images
│   ├── config/       # Configuration files (e.g., Firebase)
│   ├── components/   # Reusable components (e.g., buttons, forms)
│   ├── pages/        # Application pages (e.g., Home, Login, Checkout)
│   ├── services/     # API integrations (e.g., Firebase, Stripe)
│   ├── utils/        # Utility functions and helpers
│   ├── App.tsx       # Main application component
│   ├── index.tsx     # Entry point
├── .env.example      # Example environment variables
├── package.json      # Project configuration and dependencies
└── README.md         # Project documentation
```

## Authentication

This template uses Google Firebase for authentication. It supports the
following:

- User registration
- User login/logout
- Secure session management

### Setting Up Firebase

1. Create a Firebase project at
   [Firebase Console](https://console.firebase.google.com/).
2. Enable the **Authentication** module and configure providers (e.g., Google).
3. Add your Firebase credentials to the `.env` file.

## Payment Integration

The starter kit includes a basic payment flow. By default, it is set up for
Stripe, but it can be replaced with other providers.

### Setting Up Stripe

1. Sign up for a [Stripe account](https://stripe.com/).
2. Get your **Publishable Key** from the Stripe dashboard.
3. Add the key to the `.env` file as `REACT_APP_STRIPE_PUBLIC_KEY`.
4. Customise the payment flow in the `src/pages/Checkout.tsx` file.

## Scripts

Here are the main scripts you can use:

- `npm start` / `yarn start`: Run the development server.
- `npm run build` / `yarn build`: Build the application for production.
- `npm test` / `yarn test`: Run tests.
- `npm run lint` / `yarn lint`: Lint the codebase.

## Contributing

Contributions are welcome! If you have ideas for improvements or find any
issues, feel free to open an issue or submit a pull request.
