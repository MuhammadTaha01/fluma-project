let currentIndex = 0;

function moveSlider(index) {
    const slider = document.getElementById('testimonial-slider');
    const dots = document.querySelectorAll('.dot');
    
    // Prevent unnecessary moves
    if (index === currentIndex) return;

    currentIndex = index;

    // Move the slider
    slider.style.transform = `translateX(-${index * 100}%)`;

    // Update dots
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('bg-[#6078ff]');
            dot.classList.remove('bg-gray-300');
        } else {
            dot.classList.add('bg-gray-300');
            dot.classList.remove('bg-[#6078ff]');
        }
    });
}

// this is card2
{/* <div class="mt-5 ml-7 mr-7 mb-[200px] pb-12">
              <!-- This is talent section image -->
              <div class="extra-sm:absolute extra-sm:z-10 w-[260px] h-[275px] rounded-xl bg-[#8972FF] opacity-50"></div>
              <img src="assets/talent2.jpg" alt="talent2" class="extra-sm:rounded-xl">
              <!-- This is talent section card -->
              <div class="extra-sm:absolute top-[1070%] bg-white w-[260px] pb-8 z-10 flex flex-col items-center justify-center shadow-2xl rounded-2xl">
                <h1 class="font-[600] text-[15px] mt-5">David Kim</h1>
                <h1 class="font-[650] text-[#295BFF] text-[13px]">TECH ENTHUSIAST</h1>
                <div class="flex gap-[17px] mt-5">
                  <i class="fa-brands fa-facebook-f text-[#295BFF] bg-[#F0F2FF] rounded-[100px] p-2"></i>
                  <i class="fa-brands fa-instagram text-[#295BFF] bg-[#F0F2FF] rounded-[100px] p-2"></i>
                  <i class="fa-brands fa-tiktok text-[#295BFF] bg-[#F0F2FF] rounded-[100px] p-2"></i>
                  <i class="fa-brands fa-youtube text-[#295BFF] bg-[#F0F2FF] rounded-[100px] p-2"></i>
                </div>
                <div class="extra-sm:flex ml-7 mr-7 mt-5">
                  <p class="text-center text-[13px] font-[500] text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, atque voluptates excepturi dolorem vel porro.</p>
                </div>
              </div>
              <div class="extra-sm:absolute w-[260px] h-[4px] z-30 bg-[#295BFF] rounded-b-2xl mt-[190px]"></div>
            </div> */}