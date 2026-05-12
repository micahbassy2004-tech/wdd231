const courses = [
  { code: "WDD130", credits: 3, category: "WDD", completed: true },
  { code: "CSE110", credits: 3, category: "CSE", completed: true },
  { code: "WDD131", credits: 3, category: "WDD", completed: false },
  { code: "CSE111", credits: 3, category: "CSE", completed: false }
];

const list = document.getElementById("course-list");
const creditsEl = document.getElementById("credits");

function displayCourses(filtered) {
  list.innerHTML = "";

  filtered.forEach(course => {
    const div = document.createElement("div");
    div.textContent = course.code;

    if (course.completed) {
      div.style.background = "#b6fcb6";
      div.style.border = "2px solid green";
    }

    list.appendChild(div);
  });

  const total = filtered.reduce((sum, c) => sum + c.credits, 0);
  creditsEl.textContent = total;
}

function filterCourses(type) {
  if (type === "all") return displayCourses(courses);

  const filtered = courses.filter(c => c.category === type);
  displayCourses(filtered);
}

displayCourses(courses);