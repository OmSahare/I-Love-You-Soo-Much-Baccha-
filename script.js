const febHolidays = [
  "Dear Billy😺, Please Feel It",
  "Please Ye Pyaar Ka Cycle Hai, Achee Se Feel Karna",
  "Dost Bhi Tum, Pyaar Bhi Tum 😊",
  "Ek Bhi Tum Aur Hazar Bhi Tum 🤩",
  "Dukh Me Tum Aur Khushi Me Tum 🤨",
  "Jindagi Ke Safar Me Kaafi Ho Tum ❤",
  "Maine Shiddat Se Chaha Hai Tumhe, I Love You❤️",
  "You're My Everything ✔",
  "You Are My Soulmate ✨💕",
  "And Of Course... Wait Baby.....",
  "My Future Wife🤭",
  "I Will Always Be There For You",
  "No Matter How Far We Are🥰",
  "I Promise I Will Never Multi-Thread On You",
  "You're The Prettiest, Cutest, Funniest,",
  "Sweetest Girl Alive. 🤞✍",
  "In One Word, You're Just Perfect.😍",
  "I'm The Happiest Man Alive🥰",
  "I'm So Grateful I Met You❤️",
  "I'll Always Do My Best To Keep You Happy🥺",
  "Main Humesa Tumhre Sath Hun 🤞✔",
  "Kabhi Khud Ko Akela Mat Samjhna💓",
  "You Are The Most Special Person In My Life🥰",
  "I Don't Want To Lose You 😒",
  "And Trust Me I Don't Want Anyone Else 🥰",
  "There's No One Better Than You❤️",
  "You're The Best Baby!! 💖",
  "Or Should I Say, I Miss You When",
  "Something Really Good Happens 🤨",
  "Acche Lagte Hai Wo Pal Jo Tumhare",
  "Sath Bitaye Hain Virtually Or Offline💓",
  "There's Some Hardships, 😢",
  "But We Overcame Most Of Them 🥰",
  "And It Made Me Realised How",
  "Important You Are In My Life❤️",
  "This Complete Love Cycle Is Just For You, 😘",
  "My Unconditional Love, My Private Variable💖",
  "Please Take Care Of Love Who Really Loves You❤",
  "I'm Binary In Love; You're The One And Only '1 In My Life",
  "Thanks To God For Helping Us, Ki Hum Logo Ko Milaya🙏",
  "You're The Love Of My Life,",
  "I Love You So Much Jaan 🥺❤️"
];

const ulEl = document.querySelector("ul");
const d = new Date();
let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
let activeIndex = daynumber;
const rotate = -360 / febHolidays.length;
init();

function init() {
  febHolidays.forEach((holiday, idx) => {
    const liEl = document.createElement("li");
    liEl.style.setProperty("--day_idx", idx);
    liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1}</time><span>${holiday}</span>`;
    ulEl.append(liEl);
  });
  ulEl.style.setProperty("--rotateDegrees", rotate);
  adjustDay(0);
}

function adjustDay(nr) {
  daynumber += nr;
  ulEl.style.setProperty("--currentDay", daynumber);
  const activeEl = document.querySelector("li.active");
  if (activeEl) activeEl.classList.remove("active");
  activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
  const newActiveEl = document.querySelector(`li:nth-child(${activeIndex + 1})`);
  document.body.style.backgroundColor = window.getComputedStyle(newActiveEl).backgroundColor;
  newActiveEl.classList.add("active");
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      adjustDay(-1);
      break;
    case "ArrowDown":  // Corrected line
      adjustDay(1);
      break;
    default:
      return;
  }
});
