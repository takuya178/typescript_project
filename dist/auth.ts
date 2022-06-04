// クリックした内容を配列に入れる。

type Image<bool> = {
  img: HTMLImageElement,
  judge: bool
}

const $main = <HTMLElement>document.getElementById('top')!;
let img1 = <HTMLImageElement>document.createElement("img")
let img2 = <HTMLImageElement>document.createElement("img")
let img3 = <HTMLImageElement>document.createElement("img")
let img4 = <HTMLImageElement>document.createElement("img")
let img5 = <HTMLImageElement>document.createElement("img")
let img6 = <HTMLImageElement>document.createElement("img")
let img7 = <HTMLImageElement>document.createElement("img")
let img8 = <HTMLImageElement>document.createElement("img")
let img9 = <HTMLImageElement>document.createElement("img")
let clickImageJudgeLists: Array<boolean> = [];
const $wrapperImage = document.querySelectorAll(".image");
const IMG_WIDTH = 200;
const IMG_HEIGHT = 200;

const createImageTag = (createImage: any) => {
  return new Promise((resolve) => {
    resolve(createImage)
  });
}

const displayimage = (imageSrc: any, displayTime: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(imageSrc);
    }, displayTime)
  });
}

// 正解の画像
const rodingTrueImage = (img: HTMLImageElement, src: string): Image<"true"> => {
  img.src = src
  img.width = IMG_WIDTH;
  img.height = IMG_HEIGHT;
  img.classList.add('grid-item');
  return {
    img: img,
    judge: "true"
  }
}

// 不正解の画像
const rodingFalseImage = (img: HTMLImageElement, src: string): Image<"false"> => {
  img.src = src
  img.width = IMG_WIDTH;
  img.height = IMG_HEIGHT;
  img.classList.add('grid-item');
  return {
    img: img,
    judge: "false"
  }
}


// クイズの表示
const displayQuiz = async () => {
  const image1 = await displayimage(rodingTrueImage(img1, 'static/pudol1.png'), 1000);
  await createImageTag($wrapperImage[0].appendChild(img1));
  const image2 = await displayimage(rodingTrueImage(img2, 'static/pudol2.jpeg'), 1000);
  await createImageTag($wrapperImage[1].appendChild(img2));
  const image3 = await displayimage(rodingTrueImage(img3, 'static/pudol3.jpeg'), 1000);
  await createImageTag($wrapperImage[2].appendChild(img3));
  const image4 = await displayimage(rodingTrueImage(img4, 'static/pudol4.jpeg'), 1000);
  await createImageTag($wrapperImage[3].appendChild(img4));
  const image5 = await displayimage(rodingFalseImage(img5, 'static/tichen.webp'), 1000);
  await createImageTag($wrapperImage[4].appendChild(img5));
  const image6 = await displayimage(rodingFalseImage(img6, 'static/tichen2.webp'), 1000);
  await createImageTag($wrapperImage[5].appendChild(img6));
  const image7 = await displayimage(rodingFalseImage(img7, 'static/tichen3.jpeg'), 1000);
  await createImageTag($wrapperImage[6].appendChild(img7));
  const image8 = await displayimage(rodingFalseImage(img8, 'static/tichen4.jpeg'), 1000);
  await createImageTag($wrapperImage[7].appendChild(img8));
  const image9 = await displayimage(rodingFalseImage(img9, 'static/tichen5.jpeg'), 1000);
  await createImageTag($wrapperImage[8].appendChild(img9));
  console.log(JSON.stringify(image1).includes('false'));

  return [
    JSON.stringify(image1).includes('true'),
    JSON.stringify(image2).includes('true'),
    JSON.stringify(image3).includes('true'),
    JSON.stringify(image4).includes('true'),
    JSON.stringify(image5).includes('true'),
    JSON.stringify(image6).includes('true'),
    JSON.stringify(image7).includes('true'),
    JSON.stringify(image8).includes('true'),
    JSON.stringify(image9).includes('true'),
  ]
}

const rodingImageSize = (img: HTMLImageElement, src: string): void => {
  img.src = src
  img.width = IMG_WIDTH;
  img.height = IMG_HEIGHT;
  img.classList.add('grid-item')
}


displayQuiz().then((imageLists: Array<boolean>) => {
  console.log(imageLists);
    const displayImage = () => {
      $wrapperImage.forEach(image => {
        return new Promise<void> (() => {image.addEventListener('click', (e: Event) => {
          image.classList.toggle('active');
          // console.log(image);
          
          clickHandler(e, imageLists);
        })})
      });
    }
    displayImage();
    
    const clickHandler = async (e: Event, imageLists: Array<boolean>) => {

      type ImageType = {
        img: HTMLImageElement
      }

      const getImage = (image: ImageType) => {
        switch(e.target) {
          case img1:
            clickImageJudgeLists.push(imageLists[0]);
            break;
          case img2:
            clickImageJudgeLists.push(imageLists[1]);
            break;
          case img3:
            clickImageJudgeLists.push(imageLists[2]);
            break;
          case img4:
            clickImageJudgeLists.push(imageLists[3]);
            break;
          case img5:
            clickImageJudgeLists.push(imageLists[4]);
            break;
          case img6:
            clickImageJudgeLists.push(imageLists[5]);
            break;
          case img7:
            clickImageJudgeLists.push(imageLists[6]);
            break;
          case img8:
            clickImageJudgeLists.push(imageLists[7]);
            break;
          case img9:
            clickImageJudgeLists.push(imageLists[8]);
            return clickImageJudgeLists;
        }
      };
      getImage({img: img1});

      console.log(clickImageJudgeLists);
      return clickImageJudgeLists;
    }
  });

// console.log(JSON.stringify(imageLists[0]).includes('false'));