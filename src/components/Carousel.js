import React from "react";
import alter from "../pages/real.png"
const Carousel = () => {
  return (
    <div id="default-carousel" class="relative w-full" data-carousel="slide" style={{width : "550px" , height : "400px"}}>
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">

      <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={alter}
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt={alter}
          />
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://plus.unsplash.com/premium_photo-1683120796013-f2f18451a907?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt={alter}
          />
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://images.unsplash.com/photo-1606942298712-8bd250ff40f0?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt={alter}
          />
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://plus.unsplash.com/premium_photo-1663134275544-7d83fcfa0e54?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt={alter}
          />
        </div>

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://images.unsplash.com/photo-1607273685680-6bd976c5a5ce?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt={alter}
          />
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://images.unsplash.com/photo-1595054225874-7d2315262e73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt={alter}
          />
        </div>

        
      </div>

      

      
    </div>
  );
};

export default Carousel;
