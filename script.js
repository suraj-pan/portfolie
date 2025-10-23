document.addEventListener("DOMContentLoaded", function () {
    const hireBtn = document.getElementById("btn");
    const jobportalBtn = document.getElementById("job-portal-btn");
    const nextNotesBtn = document.getElementById("next-notes-btn");
    const weatherBtn = document.getElementById("weather-btn");


    nextNotesBtn.addEventListener("click", function () {
        window.open("https://next-notes-tailwind.netlify.app/", "_blank");
    });

    jobportalBtn.addEventListener("click", function () {
        window.open("https://naukri-job-portal.netlify.app", "_blank");
    });


    weatherBtn.addEventListener("click", function () {
        window.open("https://get-weather-site.netlify.app/", "_blank");
    });





    hireBtn.addEventListener("click", function () {
        // Path to your resume file
        const resumeUrl = "./resume/SurajPandey_Resume.pdf"; // adjust if path different

        // Create a hidden <a> tag to trigger download
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "SurajPandey_Resume.pdf"; // this is the downloaded file name
        document.body.appendChild(link);
        alert("Your resume is downloading...");
        link.click();
        document.body.removeChild(link);
    });
});
