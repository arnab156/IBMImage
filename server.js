var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

var visualRecognition = new VisualRecognitionV3({
  version: '2019-01-24',
  iam_apikey: '-n5_SJ9Z5AQXyX4VRN7ktUFVVSSdW7xEg4MFgZVTuNqZ'
});

// var url= 'https://watson-developer-cloud.github.io/doc-tutorial-downloads/visual-recognition/640px-IBM_VGA_90X8941_on_PS55.jpg';
// var url='https://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/w(01-64)_gr.jpg';


// var classifier_ids = ["food"];
// var url = 'https://watson-developer-cloud.github.io/doc-tutorial-downloads/visual-recognition/fruitbowl.jpg';

// var params = {
//   url: url,
// };

// visualRecognition.classify(params, function(err, response) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(JSON.stringify(response, null, 2))
//   }
// });

//FaceDetection

var url='https://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/w(01-64)_gr.jpg';
//  var url= 'https://watson-developer-cloud.github.io/doc-tutorial-downloads/visual-recognition/Ginni_Rometty_at_the_Fortune_MPW_Summit_in_2011.jpg'
var params1 = {
  url: url,
};

visualRecognition.detectFaces(params1, function(err, response) {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(response, null, 2))
});
