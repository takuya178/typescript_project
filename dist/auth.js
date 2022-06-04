// クリックした内容を配列に入れる。
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var $main = document.getElementById('top');
var img1 = document.createElement("img");
var img2 = document.createElement("img");
var img3 = document.createElement("img");
var img4 = document.createElement("img");
var img5 = document.createElement("img");
var img6 = document.createElement("img");
var img7 = document.createElement("img");
var img8 = document.createElement("img");
var img9 = document.createElement("img");
var ImageBooleanLists = [];
var $wrapperImage = document.querySelectorAll(".image");
var IMG_WIDTH = 200;
var IMG_HEIGHT = 200;
var createImageTag = function (createImage) {
    return new Promise(function (resolve) {
        resolve(createImage);
    });
};
var displayimage = function (imageSrc, displayTime) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(imageSrc);
        }, displayTime);
    });
};
// 正解の画像
var rodingTrueImage = function (img, src) {
    img.src = src;
    img.width = IMG_WIDTH;
    img.height = IMG_HEIGHT;
    img.classList.add('grid-item');
    return {
        img: img,
        judge: "true"
    };
};
// 不正解の画像
var rodingFalseImage = function (img, src) {
    img.src = src;
    img.width = IMG_WIDTH;
    img.height = IMG_HEIGHT;
    img.classList.add('grid-item');
    return {
        img: img,
        judge: "false"
    };
};
// クイズの表示
var displayQuiz = function () { return __awaiter(_this, void 0, void 0, function () {
    var image1, image2, image3, image4, image5, image6, image7, image8, image9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, displayimage(rodingTrueImage(img1, 'static/pudol1.png'), 1000)];
            case 1:
                image1 = _a.sent();
                return [4 /*yield*/, createImageTag($wrapperImage[0].appendChild(img1))];
            case 2:
                _a.sent();
                return [4 /*yield*/, displayimage(rodingTrueImage(img2, 'static/pudol2.jpeg'), 1000)];
            case 3:
                image2 = _a.sent();
                return [4 /*yield*/, createImageTag($wrapperImage[1].appendChild(img2))];
            case 4:
                _a.sent();
                return [4 /*yield*/, displayimage(rodingTrueImage(img3, 'static/pudol3.jpeg'), 1000)];
            case 5:
                image3 = _a.sent();
                return [4 /*yield*/, createImageTag($wrapperImage[2].appendChild(img3))];
            case 6:
                _a.sent();
                return [4 /*yield*/, displayimage(rodingTrueImage(img4, 'static/pudol4.jpeg'), 1000)];
            case 7:
                image4 = _a.sent();
                return [4 /*yield*/, createImageTag($wrapperImage[3].appendChild(img4))];
            case 8:
                _a.sent();
                return [4 /*yield*/, displayimage(rodingFalseImage(img5, 'static/tichen.webp'), 1000)];
            case 9:
                image5 = _a.sent();
                return [4 /*yield*/, createImageTag($wrapperImage[4].appendChild(img5))];
            case 10:
                _a.sent();
                return [4 /*yield*/, displayimage(rodingFalseImage(img6, 'static/tichen2.webp'), 1000)];
            case 11:
                image6 = _a.sent();
                return [4 /*yield*/, createImageTag($wrapperImage[5].appendChild(img6))];
            case 12:
                _a.sent();
                return [4 /*yield*/, displayimage(rodingFalseImage(img7, 'static/tichen3.jpeg'), 1000)];
            case 13:
                image7 = _a.sent();
                return [4 /*yield*/, createImageTag($wrapperImage[6].appendChild(img7))];
            case 14:
                _a.sent();
                return [4 /*yield*/, displayimage(rodingFalseImage(img8, 'static/tichen4.jpeg'), 1000)];
            case 15:
                image8 = _a.sent();
                return [4 /*yield*/, createImageTag($wrapperImage[7].appendChild(img8))];
            case 16:
                _a.sent();
                return [4 /*yield*/, displayimage(rodingFalseImage(img9, 'static/tichen5.jpeg'), 1000)];
            case 17:
                image9 = _a.sent();
                return [4 /*yield*/, createImageTag($wrapperImage[8].appendChild(img9))];
            case 18:
                _a.sent();
                console.log(JSON.stringify(image1).includes('false'));
                return [2 /*return*/, [
                        JSON.stringify(image1).includes('true'),
                        JSON.stringify(image2).includes('true'),
                        JSON.stringify(image3).includes('true'),
                        JSON.stringify(image4).includes('true'),
                        JSON.stringify(image5).includes('true'),
                        JSON.stringify(image6).includes('true'),
                        JSON.stringify(image7).includes('true'),
                        JSON.stringify(image8).includes('true'),
                        JSON.stringify(image9).includes('true'),
                    ]];
        }
    });
}); };
var rodingImageSize = function (img, src) {
    img.src = src;
    img.width = IMG_WIDTH;
    img.height = IMG_HEIGHT;
    img.classList.add('grid-item');
};
displayQuiz().then(function (imageLists) {
    console.log(imageLists);
    var displayImage = function () {
        $wrapperImage.forEach(function (image) {
            return new Promise(function () {
                image.addEventListener('click', function (e) {
                    image.classList.toggle('active');
                    // console.log(image);
                    clickImageBooleanLists(e, imageLists);
                });
            });
        });
    };
    displayImage();
    var clickImageBooleanLists = function (e, imageLists) { return __awaiter(_this, void 0, void 0, function () {
        var getImage;
        return __generator(this, function (_a) {
            getImage = function (image) {
                switch (e.target) {
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
            getImage({ img: img1 });
            console.log(ImageBooleanLists);
            return [2 /*return*/, ImageBooleanLists];
        });
    }); };
});
// console.log(JSON.stringify(imageLists[0]).includes('false'));
