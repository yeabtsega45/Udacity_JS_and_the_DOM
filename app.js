// Update Program Title
const card__content = document.querySelector(".card__content--h5");
card__content.innerHTML = "<em>Everything</em> You Need to Know About Data";

// Add Page Content
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
