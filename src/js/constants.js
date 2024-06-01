import { Path, Vector3 } from "yuka";
import { Vector3 as Vec3, Audio, AudioListener, AudioLoader } from "three";

const YELLOWVEHICLESPATHS = [];
const REDVEHICLESPATHS = [];
const BLUEVEHICLESPATHS = [];
const AMBULANCEPATHS = [];

// Ambulance with hardcoded positions
const ambulanceV1 = new Path();
ambulanceV1.add(new Vector3(3.5, 0.3, 140.0)); // Starting position
ambulanceV1.add(new Vector3(3.5, 0.3, 85.0)); // Adjusted position, further behind
AMBULANCEPATHS.push(ambulanceV1);

// Yellow Cars
const yellowV1 = new Path();
yellowV1.add(new Vector3(5.91, 0.3, 130.0));
yellowV1.add(new Vector3(6.5, 0.3, 125.92));
YELLOWVEHICLESPATHS.push(yellowV1);

const yellowV2 = new Path();
yellowV2.add(new Vector3(6.21, 0.3, 30.19));
yellowV2.add(new Vector3(7.07, 0.3, 24.66));
yellowV2.add(new Vector3(33.32, 0.3, 24.36));
YELLOWVEHICLESPATHS.push(yellowV2);

const yellowV3 = new Path();
yellowV3.add(new Vector3(80, 0.3, 24.5));
yellowV3.add(new Vector3(100, 0.3, 24.5));
yellowV3.add(new Vector3(120, 0.3, 24.5));
YELLOWVEHICLESPATHS.push(yellowV3);

const yellowV4 = new Path();
yellowV4.add(new Vector3(102.5, 0.3, -66));
yellowV4.add(new Vector3(140, 1, -66));
// yellowV4.add(new Vector3(76.0, 0.3, -66));
YELLOWVEHICLESPATHS.push(yellowV4);

const yellowV5 = new Path();
yellowV5.add(new Vector3(11.86, 0.3, -75.86));
yellowV5.add(new Vector3(5.98, 0.3, -75.96));
yellowV5.add(new Vector3(5.63, 0.3, -102.59));
YELLOWVEHICLESPATHS.push(yellowV5);

const yellowV6 = new Path();
yellowV6.add(new Vector3(5.97, 0.3, -161.04));
yellowV6.add(new Vector3(4.55, 0.3, -169.5));
yellowV6.add(new Vector3(-20.11, 0.3, -170.21));
YELLOWVEHICLESPATHS.push(yellowV6);

const yellowV7 = new Path();
yellowV7.add(new Vector3(-82.82, 0.3, -171.17));
yellowV7.add(new Vector3(-115.08, 0.3, -170.5));
YELLOWVEHICLESPATHS.push(yellowV7);

// Red cars
const redV1 = new Path();
redV1.add(new Vector3(1.38, 0.3, 109.32));
// redV1.add(new Vector3(3.91, 0.3, 118.82));
// redV1.add(new Vector3(27.74, 0.3, 119.04));
REDVEHICLESPATHS.push(redV1);

const redV2 = new Path();
redV2.add(new Vector3(1.13, 0.3, 14.01));
redV2.add(new Vector3(3.7, 0.3, 22.64));
redV2.add(new Vector3(26.53, 0.3, 24.73));
REDVEHICLESPATHS.push(redV2);

const redV3 = new Path();
// redV3.add(new Vector3(107.5, 0.3, 20.33));
// redV3.add(new Vector3(102.63, 0.3, 18.32));
// redV3.add(new Vector3(102.45, 0.3, -8.42));
redV3.add(new Vector3(70, 0.3, 24.5));
redV3.add(new Vector3(100, 0.3, 18));
redV3.add(new Vector3(102.45, 0.3, -24.5));
REDVEHICLESPATHS.push(redV3);

const redV4 = new Path();
redV4.add(new Vector3(97.45, 0.3, -81.35));
redV4.add(new Vector3(97.98, 0.3, -50.34));
REDVEHICLESPATHS.push(redV4);

const redV5 = new Path();
redV5.add(new Vector3(-3.55, 0.3, -71.24));
redV5.add(new Vector3(5.51, 0.3, -73.1));
redV5.add(new Vector3(6.15, 0.3, -97.01));
REDVEHICLESPATHS.push(redV5);

const redV6 = new Path();
redV6.add(new Vector3(1.45, 0.3, -175.84));
redV6.add(new Vector3(-0.64, 0.3, -170.2));
redV6.add(new Vector3(-25.56, 0.3, -170.28));
REDVEHICLESPATHS.push(redV6);

const redV7 = new Path();
redV7.add(new Vector3(-98.74, 0.3, -166.74));
redV7.add(new Vector3(-67.84, 0.3, -166.61));
REDVEHICLESPATHS.push(redV7);

// Blue cars
const blueV1 = new Path();
blueV1.add(new Vector3(-3.55, 1.0, 119.5)); // Made y-coordinate higher
// blueV1.add(new Vector3(33.29, 1.0, 118.85)); // Made y-coordinate higher
BLUEVEHICLESPATHS.push(blueV1);

const blueV2 = new Path();
blueV2.add(new Vector3(-4.08, 1.0, 24.64)); // Made y-coordinate higher
blueV2.add(new Vector3(39.31, 1.0, 24.53)); // Made y-coordinate higher
BLUEVEHICLESPATHS.push(blueV2);

const blueV3 = new Path();
blueV3.add(new Vector3(98.08, 1.0, 14.95)); // Made y-coordinate higher
blueV3.add(new Vector3(98.53, 1.0, 45.91)); // Made y-coordinate higher
BLUEVEHICLESPATHS.push(blueV3);

const blueV4 = new Path();
blueV4.add(new Vector3(93.599, 1.0, -70.83)); // Made y-coordinate higher
blueV4.add(new Vector3(101.51, 1.0, -75.48)); // Made y-coordinate higher
blueV4.add(new Vector3(102.25, 1.0, -96.45)); // Made y-coordinate higher
BLUEVEHICLESPATHS.push(blueV4);

const blueV7 = new Path();
blueV7.add(new Vector3(-88.88, 1.0, -160.78)); // Made y-coordinate higher
blueV7.add(new Vector3(-89, 1.0, -192.14)); // Made y-coordinate higher
BLUEVEHICLESPATHS.push(blueV7);

const ANSWERSTEXT = [
  {
    question:
      " Q1: There’s an ambulance siren coming up close behind you… What should you do?",
    answer1:
      "A. Pull over to the right and slow down or even stop if necessary", //answer
    answer2: "B. Speed up so that you dont hold the ambulance",
    answer3: "C. Stop abruptly",
  },
  {
    question:
      "Q2: Which vehicle goes first in this intersection with no signs?",
    answer1: "A. The yellow vehicle", //answer
    answer2: "B. The jeepney",
    answer3: "C. The red vehicle",
  },
  {
    question: "Q3: In which lane does the red vehicle overtake?",
    answer1: "A. It does not matter",
    answer2: "B. The right lane",
    answer3: "C. The left lane", // answer
  },
  {
    question: "Q4: What does this road sign mean?",
    answer1: "A. The  driver is approaching a zigzag road",
    answer2: "B. The  driver is approaching a dangerous curve",
    answer3: "C. The driver is approaching a slippery road", // answer
  },
  {
    question:
      "Q5: What should be your maximum speed here (entering a school zone)?",
    answer1: "A. 30 kph",
    answer2: "B. 35 kph",
    answer3: "C. 20 kph", //answer
  },
  {
    question: "Q6: How should you approach a blinking yellow traffic light?",
    answer1: "A. Stop",
    answer2: "B. Drive faster",
    answer3: "C. Stop for a while and continue if there is no danger", // answer
  },
  {
    question: "Q7: What does this road sign mean?",
    answer1: "A. Cars and the jeepney can park/stop. ",
    answer2: "B. Cars can park, but the jeepney is not allowed to stop.",
    answer3: "C. Cars cannot park, but the jeepney is allowed to stop.",
  },
];

const WHEELS = {
  yellowCar: {
    frontRight: "SUV_FrontRightWheel",
    frontLeft: "SUV_FrontLeftWheel",
    back: "SUV_BackWheels",
  },
  redCar: {
    frontRight: "NormalCar1_FrontRightWheel",
    frontLeft: "NormalCar1_FrontLeftWheel",
    back: "NormalCar1_BackWheels",
  },
  blueCar: {
    frontRight: "SportsCar_FrontRightWheel",
    frontLeft: "SportsCar_FrontLeftWheel",
    back: "SportsCar_BackWheels",
  },
};

const BLINKINGLIGHTS = {
  yellow: {
    left: {
      front: new Vec3(0.83, 0.66, 1.76),
      back: new Vec3(0.76, 0.83, -1.68),
    },
    right: {
      front: new Vec3(-0.83, 0.66, 1.76),
      back: new Vec3(-0.76, 0.83, -1.68),
    },
  },
  red: {
    left: {
      front: new Vec3(0.72, 0.48, 1.86),
      back: new Vec3(0.68, 0.6, -1.8),
    },
    right: {
      front: new Vec3(-0.72, 0.48, 1.86),
      back: new Vec3(-0.68, 0.6, -1.8),
    },
  },
  blue: {
    left: {
      front: new Vec3(0.72, 0.45, 1.64),
      back: new Vec3(0.62, 0.66, -1.68),
    },
    right: {
      front: new Vec3(-0.72, 0.45, 1.64),
      back: new Vec3(-0.62, 0.66, -1.68),
    },
  },
};

const LISTENER = new AudioListener();
const audioLoader = new AudioLoader();
const AUDIOS = [{}, {}, {}, {}, {}, {}, {}];

audioLoader.load("./assets/sounds/q1.mp3", function (buffer) {
  AUDIOS[0].question = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q1a1.mp3", function (buffer) {
  AUDIOS[0].answer1 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q1a2.mp3", function (buffer) {
  AUDIOS[0].answer2 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q1a3.mp3", function (buffer) {
  AUDIOS[0].answer3 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q2.mp3", function (buffer) {
  AUDIOS[1].question = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q2a1.mp3", function (buffer) {
  AUDIOS[1].answer1 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q2a2.mp3", function (buffer) {
  AUDIOS[1].answer2 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q2a3.mp3", function (buffer) {
  AUDIOS[1].answer3 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q3.mp3", function (buffer) {
  AUDIOS[2].question = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q3a1.mp3", function (buffer) {
  AUDIOS[2].answer1 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q3a2.mp3", function (buffer) {
  AUDIOS[2].answer2 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q3a3.mp3", function (buffer) {
  AUDIOS[2].answer3 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q4.mp3", function (buffer) {
  AUDIOS[3].question = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q4a1.mp3", function (buffer) {
  AUDIOS[3].answer1 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q4a2.mp3", function (buffer) {
  AUDIOS[3].answer2 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q4a3.mp3", function (buffer) {
  AUDIOS[3].answer3 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q5.mp3", function (buffer) {
  AUDIOS[4].question = new Audio(LISTENER).setBuffer(buffer);
  AUDIOS[5].question = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q5a1.mp3", function (buffer) {
  AUDIOS[4].answer1 = new Audio(LISTENER).setBuffer(buffer);
  AUDIOS[5].answer1 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q5a2.mp3", function (buffer) {
  AUDIOS[4].answer2 = new Audio(LISTENER).setBuffer(buffer);
  AUDIOS[5].answer2 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q5a3.mp3", function (buffer) {
  AUDIOS[4].answer3 = new Audio(LISTENER).setBuffer(buffer);
  AUDIOS[5].answer3 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q7.mp3", function (buffer) {
  AUDIOS[6].question = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q7a1.mp3", function (buffer) {
  AUDIOS[6].answer1 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q7a2.mp3", function (buffer) {
  AUDIOS[6].answer2 = new Audio(LISTENER).setBuffer(buffer);
});

audioLoader.load("./assets/sounds/q7a3.mp3", function (buffer) {
  AUDIOS[6].answer3 = new Audio(LISTENER).setBuffer(buffer);
});

export {
  AMBULANCEPATHS,
  YELLOWVEHICLESPATHS,
  REDVEHICLESPATHS,
  BLUEVEHICLESPATHS,
  ANSWERSTEXT,
  WHEELS,
  BLINKINGLIGHTS,
  LISTENER,
  AUDIOS,
};
