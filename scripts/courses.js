const courses = [
  { code: "WDD130", credits: 3, category: "WDD", completed: true },
  { code: "CSE110", credits: 3, category: "CSE", completed: true },
  { code: "WDD131", credits: 3, category: "WDD", completed: false },
  { code: "CSE111", credits: 3, category: "CSE", completed: false }
];

const list = document.getElementById("course-list");
const creditsEl = document.getElementById("credits");

// DISPLAY COURSES
function displayCourses(filteredCourses) {
  list.innerHTML = "";

  filteredCourses.forEach(course => {
    const div = document.createElement("div");
    div.textContent = course.code;

    // highlight completed courses
    if (course.completed) {
      div.style.background = "#b6fcb6";
      div.style.border = "2px solid green";
    }

    list.appendChild(div);
  });

  // reduce function (TOTAL CREDITS)
  const totalCredits = filteredCourses.reduce((sum, course) => {
    return sum + course.credits;
  }, 0);

  creditsEl.textContent = totalCredits;
}

// FILTER FUNCTION
function filterCourses(type) {
  if (type === "all") {
    displayCourses(courses);
    return;
  }

  const filtered = courses.filter(course => course.category === type);
  displayCourses(filtered);
}

// INITIAL LOAD
displayCourses(courses);

// EVENT LISTENERS (THIS FIXES YOUR onclick ISSUE)
document.querySelectorAll("button[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    filterCourses(button.dataset.filter);
  });
});