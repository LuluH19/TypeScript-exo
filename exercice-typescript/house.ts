// Image setup

const imageWidth = 30;
const imageHeight = 15;
const imageData = createImageData();

// Draw a picture (house + sun)


// house base
drawRectangle(5, 7, 20, 7);

// door
drawRectangle(13, 10, 4, 4);

// roof
drawLine(5, 7, 15, 2);
drawLine(15, 2, 25, 7);

// sun
drawCircle(23, 3, 2);

// ground
drawHorizontalLine(0, 14, 30);

// output result
outputImage("O", "█");

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

/**
 * Draws a line between two points using
 * Bresenham’s line algorithm
 */
function drawLine(
  x1: number,
  y1: number,
  x2: number,
  y2: number
) {
  let dx = Math.abs(x2 - x1);
  let dy = Math.abs(y2 - y1);

  let sx = x1 < x2 ? 1 : -1;
  let sy = y1 < y2 ? 1 : -1;

  let err = dx - dy;

  while (true) {
    drawDot(x1, y1);

    if (x1 === x2 && y1 === y2) break;

    const e2 = 2 * err;

    if (e2 > -dy) {
      err -= dy;
      x1 += sx;
    }

    if (e2 < dx) {
      err += dx;
      y1 += sy;
    }
  }
}

/**
 * Draws a circle using the midpoint algorithm
 */
function drawCircle(cx: number, cy: number, radius: number) {
  let x = radius;
  let y = 0;
  let err = 0;

  while (x >= y) {
    plotCirclePoints(cx, cy, x, y);
    y++;

    if (err <= 0) {
      err += 2 * y + 1;
    }

    if (err > 0) {
      x--;
      err -= 2 * x + 1;
    }
  }
}

function plotCirclePoints(
  cx: number,
  cy: number,
  x: number,
  y: number
) {
  drawDot(cx + x, cy + y);
  drawDot(cx - x, cy + y);
  drawDot(cx + x, cy - y);
  drawDot(cx - x, cy - y);
  drawDot(cx + y, cy + x);
  drawDot(cx - y, cy + x);
  drawDot(cx + y, cy - x);
  drawDot(cx - y, cy - x);
}

function drawRectangle(
  x: number,
  y: number,
  width: number,
  height: number
) {
  drawHorizontalLine(x, y, width);
  drawHorizontalLine(x, y + height - 1, width);
  drawVerticalLine(x, y, height);
  drawVerticalLine(x + width - 1, y, height);
}


// Utilities


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
