import gradientBackground from "./asset/gradientBackground.png";
import gradientBackgroundReversed from "./asset/gradientBackgroundReversed.png";

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
TextcolorChangingEffect_TimelineLite.fromTo(
  
  textChangingColor,
  5,
  {
    fontSize: `50px`,
    webkitBackgroundClip: "text",
    background: `linear-gradient( 126.3deg,  rgba(30,2,83,1) 32.2%, rgba(198,55,160,0.46) 109.2% )`,
    webkitTextFillColor: "transparent",
    color: "red",
  },
  {
    fontSize: `50px`,
    webkitBackgroundClip: "text",
    // backgroundImage:`url(${gradientBackgroundReversed})`,
    // // ???
    // // background-image: linear-gradient( 109.6deg,  rgba(255,24,134,1) 11.2%, rgba(252,232,68,1) 52%, rgba(53,178,239,1) 100.2% );
    // // background-image: linear-gradient( 109.6deg,  rgba(255,174,0,1) 11.2%, rgba(255,0,0,1) 100.2% );
    background: "linear-gradient( 109.6deg,  #FF8DC7,#FFACC7",
    webkitTextFillColor: `text`,
    webkitTextFillColor: "transparent",
  }
)
  .to(textChangingColor, 5, {
    fontSize: `50px`,
    webkitBackgroundClip: "text",
    background: `linear-gradient( 126.3deg,  rgba(30,2,83,1) 32.2%, rgba(198,55,160,0.46) 109.2% )`,
    webkitTextFillColor: "transparent",
    color: "red",
  })
 
 
  


new ScrollMagic.Scene({
  triggerHook: 0,
  duration:1000,
  triggerElement: textChangingColorContainer,
})
  .addIndicators()
  .setTween(TextcolorChangingEffect_TimelineLite)
  .setPin(textChangingColorContainer)
  .addTo(textChangingColorController);
