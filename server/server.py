from fastapi import FastAPI, File, UploadFile
import torch
import torch.nn as nn
import torch.optim as optim
from torchvision import transforms
from PIL import Image
import io
import uvicorn

app = FastAPI()

# Dummy PyTorch Model
class SimpleCNN(nn.Module):
    def __init__(self):
        super(SimpleCNN, self).__init__()
        self.conv1 = nn.Conv2d(3, 16, kernel_size=3, stride=1, padding=1)
        self.relu = nn.ReLU()
        self.fc = nn.Linear(16 * 128 * 128, 1)  # Assuming 128x128 input

    def forward(self, x):
        x = self.conv1(x)
        x = self.relu(x)
        x = x.view(x.size(0), -1)  # Flatten
        x = self.fc(x)
        return x

# Load model (For now, it's untrained)
model = SimpleCNN()
model.eval()

def transform_image(image_bytes):
    transform = transforms.Compose([
        transforms.Resize((128, 128)),
        transforms.ToTensor()
    ])
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    return transform(image).unsqueeze(0)

@app.post("/predict")
def predict(file: UploadFile = File(...)):
    image = transform_image(file.file.read())
    with torch.no_grad():
        output = model(image)
    score = torch.sigmoid(output).item() * 10  # Scale from 0 to 10
    return {"EAS_score": round(score, 2)}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
