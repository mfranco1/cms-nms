# EAS/mEAS Frontend - React + TypeScript

## Overview

This is the frontend for the EAS/mEAS real-time attractiveness scoring app. It captures webcam images and sends them to the backend for processing.

## Prerequisites

Ensure you have **Node.js (v16+)** and **npm** or **yarn** installed.

## Installation

Clone the repository and navigate to the frontend directory:

```sh
git clone https://github.com/mfranco1/cms-nms.git
cd cms-nms/app
```

Install dependencies:

```sh
npm install  # or yarn install
```

## Running the Frontend

Start the React development server:

```sh
npm run dev  # or yarn dev
```

The app will be available at `http://localhost:3000`

## Features

- Captures webcam frames
- Sends images to the backend for EAS/mEAS score prediction
- Displays the predicted attractiveness score in real-time

## Configuration

If the backend is running on a different host/port, update the API URL in `main.tsx`:

```typescript
const API_URL = "http://localhost:8000/predict";
```

## Troubleshooting

- If the frontend doesn’t start, ensure dependencies are installed.
- If CORS issues occur, modify the backend to allow requests from the frontend.
- If the webcam doesn’t work, check browser permissions.
