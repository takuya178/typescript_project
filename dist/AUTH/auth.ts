// 確認ボタンを押した時に配列内にfalseが入っていたら不正解。正解が入っていたら正解と出す
type Image<bool> = {
  img: HTMLImageElement,
  judge: bool
}

const $main = <HTMLElement>document.getElementById('top')!;
const button = <HTMLButtonElement>document.getElementById('button')!;
let img1 = <HTMLImageElement>document.createElement("img")
let img2 = <HTMLImageElement>document.createElement("img")
let img3 = <HTMLImageElement>document.createElement("img")
let img4 = <HTMLImageElement>document.createElement("img")
let img5 = <HTMLImageElement>document.createElement("img")
let img6 = <HTMLImageElement>document.createElement("img")
let img7 = <HTMLImageElement>document.createElement("img")
let img8 = <HTMLImageElement>document.createElement("img")
let img9 = <HTMLImageElement>document.createElement("img")
let ImageBooleanLists: Array<boolean> = [];
const $wrapperImage = document.querySelectorAll(".image");
const IMG_WIDTH = 200;
const IMG_HEIGHT = 200;
const TRUE_IMG_COUNT = 3;
const $questionText = <HTMLElement>document.getElementById('question-text')!;
$questionText.innerHTML = "トイプードルを全て選んでください";

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
  const image1 = await displayimage(rodingTrueImage(img1, './../../static/pudol1.png'), 100);
  await createImageTag($wrapperImage[0].appendChild(img1));
  const image2 = await displayimage(rodingTrueImage(img2, './../../static/pudol2.jpeg'), 100);
  await createImageTag($wrapperImage[1].appendChild(img2));
  const image3 = await displayimage(rodingTrueImage(img3, './../../static/pudol3.jpeg'), 100);
  await createImageTag($wrapperImage[2].appendChild(img3));
  const image4 = await displayimage(rodingTrueImage(img4, './../../static/pudol4.jpeg'), 100);
  await createImageTag($wrapperImage[3].appendChild(img4));
  const image5 = await displayimage(rodingFalseImage(img5, './../../static/tichen.webp'), 100);
  await createImageTag($wrapperImage[4].appendChild(img5));
  const image6 = await displayimage(rodingFalseImage(img6, './../../static/tichen2.webp'), 100);
  await createImageTag($wrapperImage[5].appendChild(img6));
  const image7 = await displayimage(rodingFalseImage(img7, './../../static/tichen3.jpeg'), 100);
  await createImageTag($wrapperImage[6].appendChild(img7));
  const image8 = await displayimage(rodingFalseImage(img8, './../../static/tichen4.jpeg'), 100);
  await createImageTag($wrapperImage[7].appendChild(img8));
  const image9 = await displayimage(rodingFalseImage(img9, './../../static/tichen5.jpeg'), 100);
  await createImageTag($wrapperImage[8].appendChild(img9));
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
    const displayImage = () => {
      $wrapperImage.forEach(image => {
        return new Promise<void> (() => {image.addEventListener('click', (e: Event) => {
          image.classList.toggle('active');
          clickImageBooleanLists(e, imageLists)
        })})
      });
    }
    displayImage()
    const clickImageBooleanLists = async (e: Event, imageLists: Array<boolean>) => {
      type ImageType = { img: HTMLImageElement }
      const getImage = (image: ImageType) => {
        switch(e.target) {
          case img1:
            ImageBooleanLists.push(imageLists[0]);
            break;
          case img2:
            ImageBooleanLists.push(imageLists[1]);
            break;
          case img3:
            ImageBooleanLists.push(imageLists[2]);
            break;
          case img4:
            ImageBooleanLists.push(imageLists[3]);
            break;
          case img5:
            ImageBooleanLists.push(imageLists[4]);
            break;
          case img6:
            ImageBooleanLists.push(imageLists[5]);
            break;
          case img7:
            ImageBooleanLists.push(imageLists[6]);
            break;
          case img8:
            ImageBooleanLists.push(imageLists[7]);
            break;
          case img9:
            ImageBooleanLists.push(imageLists[8]);
            return ImageBooleanLists;
        }
      };
      getImage({img: img1});
      return ImageBooleanLists;
    }
    // 「確認」ボタンを押したときのクリックアクション
    button.addEventListener('click', (): void => {
        if (ImageBooleanLists.includes(false)) { 
          window.alert('不正解です。ロック解除に失敗しました'); 
        } else if (ImageBooleanLists.includes(true) && isTrueCount()) { 
          window.alert('正解です。ロック解除に成功しました'); 
        }
    });
    const isTrueCount = (): void => {
      const trueList = ImageBooleanLists.filter(item => item !== false);
      trueList.length >= TRUE_IMG_COUNT;
    }
});
