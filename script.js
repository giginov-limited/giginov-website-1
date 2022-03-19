// Why Us progress bar
const skillsSection = document.getElementById("skills-section");
const progressBars = document.querySelectorAll(".progress-bar");

function showProgress(){
    progressBars.forEach( progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    });
}
function hideProgress(){
    progressBars.forEach(p => {
        p.style.opacity = 0;
        // p.style.width = 0;
    });
}
window.addEventListener("scroll", () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight/2;

    if(sectionPos < screenPos){
        showProgress();
    }else{
        hideProgress();
    }
});  



// Milestone
let isMilestonesLoaded = false;
const observer = new IntersectionObserver(
    function (entries) {
        if (entries[0].isIntersecting === true) startMilestonesCount();
        },
        {
            threshold: [0.5],
        }
);

observer.observe(document.querySelector(".milestones_container"));

const startMilestonesCount = () => {
    if(!isMilestonesLoaded) {
        isMilestonesLoaded = true;
        $(".milestone_number").each(function () {
            $(this).prop("Counter",0).animate({Counter:$(this).text()}, {
                        duration: 4000,
                        easing: "swing",
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        },
                    }
                )
        })
    }
};