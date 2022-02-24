<div align="center"> <img src="assets/images/readme/readme-logo.png"> </div>

# **ArchiQuiz TESTING** <a name="top"></a>

Within this markdown file, you shall find extensive test analysis and reporting for the ArchiQuiz website.
This has been added in a separate file for its readability and user-friendly approach. You can return
to ArchiQuiz's main readme file here: [README.md]####################.

You can also find an Excel spreadsheet (saved as PDF) containing extensive test analysis and reporting. This spreadsheet is intended to provide a more visual report.
You can find a link to the Excel (PDF) report here: [ArchiQuiz Testing PDF]################.

---

## :books: **TABLE OF CONTENTS**

1. [Testing](#testing)
    * [Home](#home-test)
    * [Questions](#questions-test)
    * [Completed](#completed-test)
    * [Leaderboard](#leader-test)
    * [Footer](#foot-test)

2. [Display Testing](#display-test)

3. [Code Validation](#validation)

4. [Other](#other)
    * [Image Size Reduction](#size)
    * [Spelling & Grammar](#spell)
    * [Bugs](#bugs)

---

## :test_tube: **TESTING** <a name="testing"></a>

### **HOME PAGE** <a name="home-test"></a>

* The user is presented with a landing page (Home page). The ArtiQuiz main logo image and text are central. The Main logo has keyframes zoom animation which lasts for four seconds. 
During this time the logo increases in size from 80% to 100%. This works well and offers great UX. This is initiated every time the Home page is loaded. 

* Below the text there are two buttons. Each button is a link to another page. The first button, "Start Game", links us to the questions.html page. This page is the beginning 
of the quiz game that ArtiQuiz's website has to offer. The second button, "View Leaderboard", links us to the leaderboard.html page. This page is the page which we'll generally 
find towards the end of the game. Both buttons work as expected and direct us flawlessly. Both buttons have a hover effect (box-shadow) which provides great UX. When a user's 
mouse hovers over the buttons, each button highlights gold which keeps to the theme of the website and mimics the colour of the button itself. Also, it's worth mentioning that 
the mouse cursor transforms into a pointer when hovered. This is true for both buttons. 

* The Home page has been tested across multiple devices and browsers: Chrome, Firefox, Safari, Samsung, iPhone, Amazon... to name a few. 
Each device and browser displayed the Home page perfectly and it was found that the page was responsive without any issues. 

* Footer displays as expected and link works as expected.

### **QUESTIONS PAGE** <a name="questions-test"></a>

* The user is presented with the Questions page. Located at the top left-hand side of the screen is ArtiQuiz's page logo. There are ten randomly generated questions and four randomly 
generated answers to match said questions in the middle of the screen. The quiz has been played multiple times and it is found that the questions were, in fact, random every time the quiz 
was played, as were the answers. This makes the quiz different every time it's played which makes great UX and superb replayability. 

* Each answer is a button. Each button has a hover effect mimicking the buttons found on the Home page. When a user's mouse hovers over the buttons, each button highlights gold which keeps 
to the theme of the website. Also, it's worth mentioning that the mouse cursor transforms into a pointer when hovered. This is true for all buttons. 

* When a question is answered correctly, the button will briefly change colour to green and it's text colour changes to white. If a question is answered incorrectly, the button will briefly 
change colour to red and it's text colour changes to white. This stays true for all question's answers. This is a great indication to the user as to whether they answered correctly or not. 

* Below the questions/answers, the user is presented with a long horizontal progression bar. This bar appears empty, but every time the user answers a question, the bar fills by ten per cent (10%). 
The bar fills by ten per cent because there are ten (10) questions in total. The game has been played multiple times and the bar has filled as expected every time without fail. The only thing 
noticed which may not be intentional is that when completing question ten out of ten (10/10), the bar does not fill all the way to the top and the completed.html page is loaded. One would expect 
the bar to fill completely once the final question has been answered. Another slight issue which may be worth mentioning is that when using Chrome developer tools and viewing the web page as a 
Galaxy Fold device, the inner div of the progression bar doesn't fill the outer div fully (vertically). It is only slight, but this has been tested and noted. These two minor issues do not impact 
the game in any way and does not harm the user's experience whatsoever.

* Positioned below the progression bar, situated to the left, is a question counter. The question counter is displayed one out of ten (1/10) at the start of the game. Every time a question is answered 
the first number in the fraction is increased by one (1). As the game progresses, the counter eventually reaches ten out of ten (10/10), once all questions have been answered. The math within the 
JavaScript works perfectly and there are no issues. 

* To the right-hand side of the question counter is a timer. At the beginning of the game, the timer starts at ten (10). This number decreases by one (1) every second until it reaches zero (0). 
Once the timer has reached zero, a new question is randomly generated and three (3) points are deducted from the score tally. When a new question is randomly generated, the timer resets itself 
to ten. This stays true for all ten questions and never falters. If a question is answered, correctly or incorrectly, the timer is reset to ten and the next question is randomly generated. 
When a question is answered, correctly or incorrectly, ten points are awarded to the user and these points are added to the score tally. This stays true for all questions. 

* To the right-hand side of the timer is the score tally. The score tally updates automatically depending on whether the user answers correctly or incorrectly. The user is awarded ten (10) points 
for a correct answer and deducted three (3) points for an incorrect answer. If the user does not answer a question, this is considered an incorrect answer, thus resulting in a point deduction. 
There are a total of one hundred (100) points to be earned and minus thirty (-30) to be deducted. These limits are reachable as tested through multiple plays. 

* The Questions page has been tested across multiple devices and browsers: Chrome, Firefox, Safari, Samsung, iPhone, Amazon... to name a few. Each device and browser displayed the Questions page 
perfectly and it was found that the page was responsive without any issues. 

* Footer displays as expected and link works as expected.

### **COMPLETED PAGE** <a name="completed-test"></a>

* The user is presented with the Completed page. Located at the top is the ArtiQuiz main logo. This has keyframes animation which zooms in from 80% to 100% over four seconds. This works well.

* There is a large heading stating "congratulations" and directly beneath that is the user's awarded score. This score changes every time the game is played. Whatever score the user accumulated 
during the course of the game, that score is presented here. The game has been played multiple times and the score shown is always accurate without fail. 

* Below the score is an empty name field with placeholder text informing the user what they should type. I am able to click in this field and type anything I wish. Below the name field is a 
"Save Score" button which is actually disabled. You can tell it is disabled because it is slightly greyed out and when you hover your mouse over it, a cursor not-allowed symbol appears. You cannot
click this button. If a user enters text within the name field, the "Save Score" button enables automatically and becomes clickable. The mouse cursor changes into a pointer. This works very well 
and prevents users from saving scores onto the leaderboard without typing their name. When "Save Score" is eventually clicked, the user is taken automatically to the leaderboard.html page.
Here they can view their newly awarded score, any historical scores, and any scores awarded to other players. 

* Three more buttons are south of the "Save Score" button: "Play Again", "View Leaderboard", and "Return to Home". Each button navigates the user to a different HTML page. "Play Again" successfully 
takes us to the questions.html page. "View Leaderboard" successfully takes us to the leaderboard.html page. "Return to Home" successfully takes us to the index.html page. Each button on the 
completed.html page has the box-shadow effect as seen on other HTML pages.

* The Completed page has been tested across multiple devices and browsers: Chrome, Firefox, Safari, Samsung, iPhone, Amazon... to name a few. Each device and browser displayed the Completed page 
perfectly and it was found that the page was responsive without any issues. 

* Footer displays as expected and link works as expected.

### **LEADERBOARD PAGE** <a name="leader-test"></a>

* The user is presented with the Leaderboard page. Located at the top left-hand side of the screen is ArtiQuiz's page logo. Central to the page is a large heading. If nobody has ever played
ArtiQuiz on the device they're currently using, no data or charts will be displayed. The page will be blank apart from the logo, header, "Return to Home" button, and the footer. If however
a user has played a game and has been awarded with a score, the leaderboard will display a chart. This chart displays a user's name and their score only. Names are displayed on the left
and scores are displayed on the right. Every time a game was played, a score was awarded and saved, my name and score was displayed on the leaderboard.html page perfectly and as expected.
I feel this works rather well. Please note that scores are saved in local storage so if a computer's cache is deleted, so will the scores on the leaderboard. Scores are limited to their devices,
my score on one device will not appear on another device. 

* Below the user's names and scores, there is a "Return to Home" button. This button when clicked returns the user to the index.html page. This button works as expected. 

* The Leaderboard page has been tested across multiple devices and browsers: Chrome, Firefox, Safari, Samsung, iPhone, Amazon... to name a few. Each device and browser displayed the Leaderboard 
page perfectly and it was found that the page was responsive without any issues. 

* Footer displays as expected and link works as expected.

### **FOOTER** <a name="foot-test"></a>

* The ArtiQuiz footer is located at the very bottom of all HTML pages within the ArtiQuiz website. Each footer is identical. Each footer contains text and a link to the web developers LinkedIn 
profile page. When this link is clicked, a new tab opens and I am directed to the profile page without a problem. There is also a hover effect much like the box-shadow effect found
elsewhere on this site. When a user hovers their mouse over the developer's name, the text highlights and the mouse cursor transforms into a pointer. This works well for every HTML page.

---

## :tv: **DISPLAY TESTING** <a name="display-test"></a>

The ArtiQuiz website has been tested using an 18" Dell XPS laptop with Windows 10 + on an external 30" display as well as the following devices:

| **Browser Platform**                       | **Version**    
| -------------------------------------------|:---------------------------------------------:| 
| Google Chrome (Official Build) (64-bit)    | 84.0.4147.105
| Firefox (Windows 10)                       | 79.0
| Opera (Windows 10)                         | 70.0
| Safari (Windows 10)                        | 13.1
| Edge (Windows 10)                          | 84.0.522.52
| Google Chrome Android (Samsung Galaxy S8+) | 84.0.4147.111
| Google Chrome Android (OnePlus 7T Pro)     | 84.0.4147.111
| Safari iOS (Apple iPhone 7 Plus)           | 13.1
| Silk Android (Amazon Kindle Fire 5)        | 83.3.19.4103.106.30
| Internet Explorer 10                       | [Cloud Browser](https://www.ieonchrome.com/)
| Internet Explorer 11                       | [Cloud Browser](https://www.ieonchrome.com/)

All tests were positive and no issues found apart from Internet Explorer 10 & 11 would not load the questions.html page. This is not a problem because
Internet Explorer is now obsolete. It may also be worth mentioning that the keyframes animation on the index.html page is extremely laggy when using
Internet Explorer, however as previously stated, this is mostly an obsolete browser.

It is worth mentioning that the ArtiQuiz favicon image displays within the browser's tab for all HTML pages.

---

## :heavy_check_mark: **CODE VALIDATION** <a name="validation"></a>

ArtiQuiz's code has been tested via the [W3C Markup Validation Service](https://validator.w3.org/) & [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/).
A few warnings did flag up:

* questions.html & completed.html both contain empty heading tags.
* lb-score has the same colour used for background colour and border colour.

Both of these warnings are irrelevant to this particular website because the empty heading tags and the colours used are necessary.

There were no other reported problems using the HTML & CSS validation services.

ArtiQuiz's CSS code has been tested for irrelevant code using the Chrome Developer Tool 'Coverage'.
No irrelevant code currently exists within the style.css file.

---

## :memo: **OTHER** <a name="other"></a>

### **IMAGE SIZE REDUCTION** <a name="size"></a>

All of ArtiQuiz's images have been run through [Tiny PNG](https://tinypng.com/) to drastically reduce their file size. This will ultimately offer a better user 
experience due to loading times being cut short.

### **SPELLING & GRAMMAR** <a name="spell"></a>

All of ArtiQuiz's textual content including this Readme file has been run through [Grammarly](https://www.grammarly.com) to check for any spelling and grammar mistakes.

### **BUGS** <a name="bugs"></a>

During the creation of the ArtiQuiz website I came across one rather troublesome bug. The JavaScript timer counted down perfectly but when it moved onto the next question,
the timer reduced by two instead of one. When the next question was populated, the timer reduced by three, and so on... After much deliberation and strenuous testing, it was
discovered that setInterval was being called every time a new question was generated. setInterval("countDown()", 1000); should have only been called once, not several times.
Because setInterval is set to 1000ms, every time it was called, it added an extra 1000ms to the interval. The additional setInterval code was removed and the timer worked as expected.

---

***This document is for educational use***

---

[:arrow_up: Return to top?](#top)