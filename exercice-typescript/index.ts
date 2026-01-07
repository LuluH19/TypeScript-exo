// =====================
// Image setup
// =====================
const imageWidth = 20;
const imageHeight = 8;
const imageData = createImageData();

// =====================
// Draw face
// =====================

// head
drawRectangle(0, 0, 20, 8);

// eyes
drawDot(7, 2);
drawDot(12, 2);

// smile
drawDot(4, 4);
drawHorizontalLine(4, 5, 12);
drawDot(15, 4);

// output result
outputImage();

// =====================
// Drawing functions
// =====================

function drawDot(x: number, y: number) {
  if (!isPointInImage(x, y)) return;

  const index = y * imageWidth + x;
  imageData[index] = true;
}

function drawHorizontalLine(x: number, y: number, width: number) {
  for (let i = 0; i < width; i++) {
    drawDot(x + i, y);
  }
}

function drawVerticalLine(x: number, y: number, height: number) {
  for (let i = 0; i < height; i++) {
    drawDot(x, y + i);
  }
}

function drawRectangle(
  x: number,
  y: number,
  width: number,
  height: number
) {
  // top
  drawHorizontalLine(x, y, width);
  // bottom
  drawHorizontalLine(x, y + height - 1, width);
  // left
  drawVerticalLine(x, y, height);
  // right
  drawVerticalLine(x + width - 1, y, height);
}

// =====================
// Utilities
// =====================

function isPointInImage(x: number, y: number): boolean {
  return x >= 0 && x < imageWidth && y >= 0 && y < imageHeight;
}

function outputImage(onChar = "X", offChar = " ") {
  let text = "";

  for (let i = 0; i < imageData.length; i++) {
    if (i > 0 && i % imageWidth === 0) {
      text += "\n";
    }

    text += imageData[i] ? onChar : offChar;
  }

  console.log(text);
}

function createImageData(): boolean[] {
  const length = imageWidth * imageHeight;
  return new Array(length).fill(false);
}
