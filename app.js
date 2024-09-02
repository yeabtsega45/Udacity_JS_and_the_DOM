// 9.7 Update Program Title
const card__content = document.querySelector(".card__content--h5");
card__content.innerHTML = "<em>Everything</em> You Need to Know About Data";

// 9.15 Add Page Content
const page__content = document.querySelector(".testimonials");
const newH2 = document.createElement("h2");
const newH2Text = document.createTextNode("Advice for New Udacity Students");
page__content.appendChild(newH2);
newH2.appendChild(newH2Text);

const newP =
  "<p>Set aside specific blocks of time each week \
			for your coursework. Add those blocks to your calendar and \
			set reminders.</p>";
newH2.insertAdjacentHTML("afterend", newP);

// 9.27 Style Page Content
const start__now = document.querySelector("#start-now");
start__now.style.cssText = "background-color: #2015ff; border-radius: 5rem;";

const hero__homepage = document.querySelector(".hero--homepage");
const newHero = hero__homepage.classList.add("new-hero");
hero__homepage.appendChild(newHero);

const cardList = document.querySelectorAll(".card");
for (i = 0; i < cardList.length; i++) {
  cardList[i].classList.add("new-card");
}

// 10.10 Add a Listener
const mainHeading = document.querySelector("h1");
const originalText = mainHeading.textContent;
const newH1Text = "Build an AR App";
mainHeading.addEventListener("mouseover", function () {
  mainHeading.textContent = newH1Text;
});
mainHeading.addEventListener("mouseout", function () {
  mainHeading.textContent = originalText;
});
