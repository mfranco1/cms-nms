# EAS/mEAS Backend - FastAPI + PyTorch

## Overview

This backend is responsible for processing images and predicting EAS/mEAS scores using a PyTorch model. It provides an API that accepts image uploads and returns a predicted attractiveness score.

## Prerequisites

Ensure you have Python installed (version 3.8+ recommended). You also need `pip` to install dependencies.

## Installation

Clone the repository and navigate to the backend directory:

```sh
git clone https://github.com/mfranco1/cms-nms.git
cd cms-nms/server
```

Install required dependencies:

```sh
pip install -r requirements.txt
```

## Running the Backend

Start the FastAPI server with:

```sh
uvicorn server:server --host 0.0.0.0 --port 8000 --reload
```

The API will be available at `http://localhost:8000`

## API Endpoints

### **1. Predict EAS Score**

- **Endpoint:** `POST /predict`
- **Description:** Accepts an image file and returns a predicted EAS score.
- **Example Usage:**

```sh
curl -X POST "http://localhost:8000/predict" -F "file=@image.jpg"
```

### **2. Documentation**

FastAPI automatically generates interactive API documentation:

- Swagger UI: [http://localhost:8000/docs](http://localhost:8000/docs)
- Redoc: [http://localhost:8000/redoc](http://localhost:8000/redoc)

## Troubleshooting

- If `ModuleNotFoundError` occurs, ensure all dependencies are installed.
- If CORS issues arise, add FastAPI's CORS middleware to allow frontend requests.

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace * with specific frontend URL if needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```
