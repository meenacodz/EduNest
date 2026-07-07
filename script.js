const page = window.location.pathname.split("/").pop();

if (page === "index.html" || page === "") {

    const title = document.querySelector(".title");
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");

    let selectedMedium = "";
    let selectedClass = "";

    const titles = [
        "Choose Medium",
        "Choose Class"
    ];

    const buttonTexts = [
        ["English Medium", "Hindi Medium"],
        ["Class 9", "Class 10"]
    ];

    let currentScreen = 0;

    // Initial Screen
    title.textContent = titles[currentScreen];
    btn1.textContent = buttonTexts[currentScreen][0];
    btn2.textContent = buttonTexts[currentScreen][1];

    btn1.addEventListener("click", () => {

        if (currentScreen === 0) {
            selectedMedium = "English";
            showClassSelection();
        }

        else if (currentScreen === 1) {
            selectedClass = "Class 9";
            openClassPage();
        }

    });

    btn2.addEventListener("click", () => {

        if (currentScreen === 0) {
            selectedMedium = "Hindi";
            showClassSelection();
        }

        else if (currentScreen === 1) {
            selectedClass = "Class 10";
            openClassPage();
        }

    });

    function showClassSelection() {

        currentScreen = 1;

        title.textContent = titles[currentScreen];
        btn1.textContent = buttonTexts[currentScreen][0];
        btn2.textContent = buttonTexts[currentScreen][1];

    }

    function openClassPage() {

        console.log("Selected Medium:", selectedMedium);
        console.log("Selected Class:", selectedClass);

        // Opens the same page for both classes
        location.href = "class.html";

    }

}

if (page === "class.html") {

    // Write your Class Page code here.

}