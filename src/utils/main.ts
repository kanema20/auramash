'use client'
import path from "path";
// import fs from "fs";

// export function to get all file names in a folder
export function getAllFiles(dirPath: string, arrayOfFiles: string[] = []) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
    } else {
      arrayOfFiles.push(file);
    }
  });
  return arrayOfFiles;
}

const imgDir = "images/ct/";
const arrayLength = 90;
const imageArray: string[] = []

let baseRating = 1000;
const k = 32; // K-factor for Elo rating system

// Get a random item from the array
export function getRandomItem(array: string[]) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return imageArray[randomIndex];
}

// Get img name without extension from element src
export function getImgName(url: string) {
  const lastIndex = url.lastIndexOf('/');
  if (lastIndex !== -1) {
    return url.substring(lastIndex + 1);
  }
  return url;
}

// elo rating formula in chess
export function probability(leftRating: number, rightRating: number){
  return 1.0*1.0/(1+1.0*Math.pow(10, 1.0*(leftRating-rightRating)/400));
}

export function eloRating(leftRating: number, rightRating: number, k: number, win: any){
  let leftProb = probability(rightRating, leftRating); // left win probability
  let rightProb = probability(leftRating, rightRating); // right win probability
  if (win) { // left wins, right chosen
    leftRating = leftRating + k * (1 - leftProb); // add left rating
    rightRating = rightRating + k * (0 - rightProb); // minus right rating
  } else { // right wins. left chosen
    leftRating = leftRating + k * (0 - leftProb); // minus left rating
    rightRating = rightRating + k * (1 - rightProb); // add  right rating
  }
  return { leftRating, rightRating };
}

// update session value and get new image
export function updateEloAndDisplay(leftWin: boolean) {
  // var leftImage = document.getElementById("leftImg");
  // // @ts-ignore: Object is possibly 'null'.
  // var leftImgName = getImgName(leftImage.src);
  
  // var rightImage = document.getElementById("rightImg");
  // // @ts-ignore: Object is possibly 'null'.
  // var rightImgName = getImgName(rightImage.src);

  // const storedLeft = sessionStorage.getItem(leftImgName);
  // const storedRight = sessionStorage.getItem(rightImgName);
  
  // if (storedLeft == null) {
  //   sessionStorage.setItem(leftImgName, baseRating.toString());
  // } 

  // if (storedRight == null) {
  //   sessionStorage.setItem(rightImgName, baseRating.toString());
  // }

  // const leftRating = parseFloat(sessionStorage.getItem(leftImgName)!);
  // const rightRating = parseFloat(sessionStorage.getItem(rightImgName)!);
  
  // const result = eloRating(leftRating, rightRating, k, leftWin);

  // // Update the Elo ratings for the next round
  // sessionStorage.setItem(leftImgName, result.leftRating.toString());
  // sessionStorage.setItem(rightImgName, result.rightRating.toString());

  // let rightImageSource;
  // let leftImageSource;
  // // change image for unclicked side
  // if (leftWin) {
  //   // swap right image
  //   do {
  //     rightImageSource = imgDir + getRandomItem(imageArray);
  //     // @ts-ignore: Object is possibly 'null'.
  //   } while (rightImageSource === leftImage.src);
  //   // @ts-ignore: Object is possibly 'null'.
  //   rightImage.src = rightImageSource;
  // } else {
  //   // swap left image
  //   do {
  //   leftImageSource = imgDir + getRandomItem(imageArray);
  //   // @ts-ignore: Object is possibly 'null'.
  //   } while (leftImageSource === rightImage.src);
  //   // @ts-ignore: Object is possibly 'null'.
  //   leftImage.src = leftImageSource;

  // }
  console.log("Elo ratings updated");
}