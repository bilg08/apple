import gradientBackground from "./asset/gradientBackground.png";
import gradientBackgroundReversed from "./asset/gradientBackgroundReversed.png";
import blackImage from "./asset/blackImage.jpg";

console.log(gradientBackground,gradientBackgroundReversed)
let timelineLite_Iphone14_Text = new TimelineLite();
let iphone_14_text_container = document.getElementById(
  "iphone_14_text_container"
);
let controller_Iphone14_Text = new ScrollMagic.Controller();

timelineLite_Iphone14_Text.fromTo(
  iphone_14_text_container,
  5,
  {
    opacity: 1,
  },
  {
    opacity: 0,
  }
);

new ScrollMagic.Scene({
  triggerElement: iphone_14_text_container,
  duration: 100,
  triggerHook: 0,
})
  .setTween(timelineLite_Iphone14_Text)
  .setPin(iphone_14_text_container)
  .addTo(controller_Iphone14_Text);

let timelineLite_LeftHand_Iphone = new TimelineLite();
let controller_Two_Iphone = new ScrollMagic.Controller();
let twoIphoneContainer = document.getElementById("twoIphoneContainer");
let left_Hand_Iphone = document.getElementById(`left_Hand_Iphone`);
let right_Hand_Iphone = document.getElementById(`right_Hand_Iphone`);
let battery = document.getElementById(`battery`);
let batteryColorFiller = document.getElementById(`batteryColorFiller`);
let Big_Text_Left_Hand_Iphone = document.getElementById(
  "Big_Text_Left_Hand_Iphone"
);
timelineLite_LeftHand_Iphone
  .fromTo(
    left_Hand_Iphone,
    3,
    {
      transform: `translateX(0px)`,
    },
    {
      transform: `translateX(-2000px)`,
    }
  )
  .from(battery, 1, {
    position: "absolute",
    left: `40%`,
    top: `150px`,
    width: `50px`,
    transformStyle: `preserve-3d`,
    transform: `perspective(1px)`,
    transformOrigin: `right`,
    transform: `perspective(10px) translate3d(42px, -62px, -85px)`,
  })
  .to(
    battery,
    1,
    {
      transform: `perspective(264.697px) translate3d(22.8692px, -21.8274px, 70.4483px) rotate(-2.1488deg) rotateY(-11.3716deg) rotateX(15.5338deg) skew(6.1993deg, 0deg) scale(0.9474, 0.9422)`,
      transformOrigin: `100% 50%`,
      transformStyle: `preserve - 3d`,
      width: `340px`,
      top: `300px`,
      left: `40 %`,
      position: `absolute`,
      opacity: 1,
    },
    0
  )

  .fromTo(
    batteryColorFiller,
    1,
    {
      width: `0%`,
    },
    {
      width: `100%`,
    },
    0
  )
  .fromTo(
    right_Hand_Iphone,
    3,
    {
      transform: `translateX(0px)`,
    },
    {
      transform: `translateX(2000px)`,
    },
    //Assuming the wheel tween is the first tween in the timeline and has a start time of 0, you can
    //tell the second tween to start at a time of 0 as well:
    0
  );

new ScrollMagic.Scene({
  triggerElement: twoIphoneContainer,
  duration: 1000,
  triggerHook: 0,
})
  .setTween(timelineLite_LeftHand_Iphone)
  .setPin(twoIphoneContainer)
  .addTo(controller_Two_Iphone);

let TextcolorChangingEffect_TimelineLite = new TimelineLite();
let textChangingColorController = new ScrollMagic.Controller();
let textChangingColorContainer = document.getElementById(
  "textChangingColorContainer"
);
let bigContainer = document.getElementById("bigContainer");
let textChangingColor = document.getElementById("textChangingColor");
let text_changing = document.getElementById("text_changing");
TextcolorChangingEffect_TimelineLite.from(textChangingColor, 2, {
  backgroundPosition: `0% 0%`,
})
  .to(textChangingColor,2, { backgroundPosition: `0% 100%` })
  .to(textChangingColor, 2,{ backgroundPosition: `0% 0%` });

new ScrollMagic.Scene({
  triggerHook: 0,
  duration:1000,
  triggerElement: textChangingColorContainer,
})
  .setTween(TextcolorChangingEffect_TimelineLite)
  .setPin(textChangingColorContainer)
  .addTo(textChangingColorController);

let proBeyondTextContainer = document.getElementById(
    "proBeyondTextContainer"
);
let proBeyondTextTimeLineLite = new TimelineLite();
let proBeyondTextController = new ScrollMagic.Controller();
proBeyondTextTimeLineLite
  .from(proBeyondTextContainer, 2, { backgroundPosition: `0% 0%` })
  .to(
    proBeyondTextContainer,
    2,
    {
      backgroundPosition: `0% 100%`,
    },
    
  )
  .to(proBeyondTextContainer, 2, {
    backgroundPosition: `0% 0%`,
  })
  
  // .to(
  //   proBeyondTextContainer,
  //   2,
  //   {
  //     background:`url(${gradientBackgroundReversed})`,
  //     backgroundPosition: `0% 0%`,
  //   },
    
  // );

new ScrollMagic.Scene({
  triggerHook: 0,
  duration: 1000,
  triggerElement: proBeyondTextContainer,
})
.setTween(proBeyondTextTimeLineLite)
  .setPin(proBeyondTextContainer)
  .addTo(proBeyondTextController);