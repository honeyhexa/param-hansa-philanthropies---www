import React from 'react';

const Frontpage = () => (
<div className="flex flex-col justify-center items-start w-full bg-white">
  <div className="flex justify-between items-start self-stretch py-12 px-16">
    <div className="flex items-center gap-3">
      <svg width={65} height={50} viewBox="0 0 65 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M37.0282 49.9999H45.3779C45.9286 49.9999 46.3061 49.4448 46.1038 48.9326L41.1899 36.4941C39.9094 33.2057 37.3484 30.7395 34.2538 29.7999L27.1042 27.5686C24.0097 26.629 21.5553 24.1628 20.1681 20.8744L13.232 3.14074C12.5917 1.37912 11.0978 0.322144 9.39045 0.322144H1.14702C0.596417 0.322144 0.218919 0.876929 0.421023 1.3891L8.10993 20.8744C9.39045 24.1628 11.9515 26.629 15.0461 27.5686L22.1956 29.7999C25.2902 30.7395 27.7445 33.2057 29.1317 36.4941L33.2934 47.1813C33.9337 48.9429 35.4276 49.9999 37.0282 49.9999Z" fill="#303030" />
        <path d="M37.0282 49.9999H45.3779C45.9286 49.9999 46.3061 49.4448 46.1038 48.9326L41.1899 36.4941C39.9094 33.2057 37.3484 30.7395 34.2538 29.7999L27.1042 27.5686C24.0097 26.629 21.5553 24.1628 20.1681 20.8744L13.232 3.14074C12.5917 1.37912 11.0978 0.322144 9.39045 0.322144H1.14702C0.596417 0.322144 0.218919 0.876929 0.421023 1.3891L8.10993 20.8744C9.39045 24.1628 11.9515 26.629 15.0461 27.5686L22.1956 29.7999C25.2902 30.7395 27.7445 33.2057 29.1317 36.4941L33.2934 47.1813C33.9337 48.9429 35.4276 49.9999 37.0282 49.9999Z" fill="url(#paint0_linear_17_2391)" fillOpacity="0.6" style={{mixBlendMode: 'soft-light'}} />
        <path d="M45.8851 32.9709L51.434 47.1813C52.0743 48.9429 53.5682 49.9999 55.2756 49.9999H63.6255C64.1762 49.9999 64.5537 49.445 64.3515 48.9328L58.05 32.9709C56.7695 29.6825 54.2085 27.2162 51.1139 26.2767L43.9644 24.0453C40.8698 23.1058 38.4155 20.6395 37.0282 17.3512L31.4793 3.14074C30.8391 1.37912 29.3451 0.322144 27.6378 0.322144H19.2878C18.7372 0.322144 18.3597 0.877025 18.5619 1.38922L24.8633 17.3512C26.1438 20.6395 28.7049 23.1058 31.7995 24.0453L38.949 26.2767C42.0436 27.3337 44.4979 29.7999 45.8851 32.9709Z" fill="#303030" />
        <path d="M45.8851 32.9709L51.434 47.1813C52.0743 48.9429 53.5682 49.9999 55.2756 49.9999H63.6255C64.1762 49.9999 64.5537 49.445 64.3515 48.9328L58.05 32.9709C56.7695 29.6825 54.2085 27.2162 51.1139 26.2767L43.9644 24.0453C40.8698 23.1058 38.4155 20.6395 37.0282 17.3512L31.4793 3.14074C30.8391 1.37912 29.3451 0.322144 27.6378 0.322144H19.2878C18.7372 0.322144 18.3597 0.877025 18.5619 1.38922L24.8633 17.3512C26.1438 20.6395 28.7049 23.1058 31.7995 24.0453L38.949 26.2767C42.0436 27.3337 44.4979 29.7999 45.8851 32.9709Z" fill="url(#paint1_linear_17_2391)" fillOpacity="0.6" style={{mixBlendMode: 'soft-light'}} />
        <circle cx="51.3246" cy="10.7368" r="10.7368" fill="#303030" />
        <circle cx="51.3246" cy="10.7368" r="10.7368" fill="url(#paint2_linear_17_2391)" fillOpacity="0.6" style={{mixBlendMode: 'soft-light'}} />
        <defs>
          <linearGradient id="paint0_linear_17_2391" x1="46.5254" y1="49.9999" x2="-3.04576" y2="3.57427" gradientUnits="userSpaceOnUse">
            <stop offset="0.130208" />
            <stop offset="0.619792" stopColor="#909090" stopOpacity="0.437126" />
            <stop offset={1} stopColor="white" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="paint1_linear_17_2391" x1="64.7727" y1="49.9999" x2="15.1943" y2="3.46092" gradientUnits="userSpaceOnUse">
            <stop offset="0.130208" />
            <stop offset="0.619792" stopColor="#909090" stopOpacity="0.437126" />
            <stop offset={1} stopColor="white" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="paint2_linear_17_2391" x1="62.0614" y1="21.4735" x2="40.5879" y2={0} gradientUnits="userSpaceOnUse">
            <stop offset="0.130208" />
            <stop offset="0.619792" stopColor="#909090" stopOpacity="0.437126" />
            <stop offset={1} stopColor="white" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div className="frame_279 flex items-center">
      <div className="flex justify-center items-center gap-2.5 pt-[0.3125rem] pb-[0.3125rem] px-3 home opacity-[0.6] text-[#1e1e21]  text-[2rem] font-semibold leading-[120%]">
        Home
      </div>
      <div className="flex justify-center items-center gap-2.5 pt-[0.3125rem] pb-[0.3125rem] px-3 home-1 text-[#1e1e21]  text-[2rem] font-semibold leading-[120%] underline">
        Resources
      </div>
      <div className="flex items-start p-1 rounded-[0.875rem] border border-[#909090]/[.44] bg-[#ececec]/[.44]">
        <div className="flex justify-center items-center gap-2.5 py-0 px-4 h-10 rounded-xl bg-[#131316] in text-white  text-2xl font-semibold leading-[120%]">
          IND
        </div>
        <div className="flex justify-center items-center gap-2.5 py-0 px-4 h-10 rounded-full in-1 text-[#1e1e21]  text-2xl font-semibold leading-[120%]">
          USA
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-center items-center gap-16 self-stretch p-16 to_enhance_the_quality_of_human_life_through_the_power_of_science_complimented_by_innovations_in_technology w-[1600px] text-[#1e1e21] text-center  text-6xl font-semibold leading-[100%]">
    To enhance the quality of human life through the power of science complimented by innovations in technology
  </div>
  <div className="flex flex-col items-start w-full">
    <div className="w-full h-[1000px]">
      <div className="lightgray 50% / cover no-repeat] flex-shrink-0 w-[2256px] h-[1503px] bg-black" />
      <div className="lightgray 0% 0% / 100px 100px repeat] flex-shrink-0 w-[1919px] h-[1000px] opacity-[0.2] bg-black" />
    </div>
    <div className="flex justify-between items-start self-stretch py-6 px-16">
      <div className="22nd_jan__2023__bangalore text-[#1e1e21]  text-2xl font-medium leading-[110%]">22nd Jan, 2023, Bangalore</div>
      <div className="first_meeting_with_the_iisc_scholars__ideating_the_impossible_ text-[#1e1e21]  text-2xl leading-[110%]">First meeting with the IISc scholars. Ideating the impossible.</div>
    </div>
  </div>
  <div className="flex justify-center items-center gap-6 py-16 px-0 w-full">
    <div className="flex flex-shrink-0 justify-center items-center gap-2.5 py-1 px-6 w-12 h-12 rounded-xl border border-[#c8c8c8] bg-white">
      <div className="flex flex-shrink-0 justify-center items-center w-6 h-6">
        <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.0117 8.24878L10.0117 12.2488L14.0117 16.2488" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
    <div className="flex flex-col flex-shrink-0 items-start w-[6.25rem] opacity-[0.2]">
      <div className="w-[6.25rem] h-[3.25rem]">
        <div className="lightgray 50% / cover no-repeat] flex-shrink-0 w-[7.375rem] h-[4.875rem] bg-black" />
        <div className="lightgray 0% 0% / 5.249748378992081px 5.249748378992081px repeat] flex-shrink-0 w-[6.25rem] h-[3.25rem] opacity-[0.2] bg-black" />
      </div>
    </div>
    <div className="flex flex-col flex-shrink-0 items-start w-[6.25rem] opacity-[0.6]">
      <div className="w-[6.25rem] h-[3.25rem]">
        <div className="lightgray 50% / cover no-repeat] flex-shrink-0 w-[7.375rem] h-[4.875rem] bg-black" />
        <div className="lightgray 0% 0% / 5.249748378992081px 5.249748378992081px repeat] flex-shrink-0 w-[6.25rem] h-[3.25rem] opacity-[0.2] bg-black" />
      </div>
    </div>
    <div className="flex flex-col flex-shrink-0 items-start w-[6.25rem]">
      <div className="w-[6.25rem] h-[3.25rem]">
        <div className="lightgray 50% / cover no-repeat] flex-shrink-0 w-[7.375rem] h-[4.875rem] bg-black" />
        <div className="lightgray 0% 0% / 5.249748378992081px 5.249748378992081px repeat] flex-shrink-0 w-[6.25rem] h-[3.25rem] opacity-[0.2] bg-black" />
      </div>
    </div>
    <div className="flex flex-col flex-shrink-0 items-start w-[6.25rem] opacity-[0.6]">
      <div className="w-[6.25rem] h-[3.25rem]">
        <div className="lightgray 50% / cover no-repeat] flex-shrink-0 w-[7.375rem] h-[4.875rem] bg-black" />
        <div className="lightgray 0% 0% / 5.249748378992081px 5.249748378992081px repeat] flex-shrink-0 w-[6.25rem] h-[3.25rem] opacity-[0.2] bg-black" />
      </div>
    </div>
    <div className="flex flex-col flex-shrink-0 items-start w-[6.25rem] opacity-[0.2]">
      <div className="w-[6.25rem] h-[3.25rem]">
        <div className="lightgray 50% / cover no-repeat] flex-shrink-0 w-[7.375rem] h-[4.875rem] bg-black" />
        <div className="lightgray 0% 0% / 5.249748378992081px 5.249748378992081px repeat] flex-shrink-0 w-[6.25rem] h-[3.25rem] opacity-[0.2] bg-black" />
      </div>
    </div>
    <div className="flex flex-shrink-0 justify-center items-center gap-2.5 py-1 px-6 w-12 h-12 rounded-xl border border-[#c8c8c8] bg-white">
      <div className="flex flex-shrink-0 justify-center items-center w-6 h-6">
        <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.9883 8.24878L14.9883 12.2488L10.9883 16.2488" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  </div>
  <div className="w-full h-px bg-[#c5c5c5]" />
  <div className="flex items-start gap-16 self-stretch p-16">
    <div className="giving__focused_on_research_at_the_intersection_of_computing_and_life_sciences__on_ideas_that_harness_the_power_of_natural_sciences_to_create_better_versions_of_our_planet_s_future_ text-[#1e1e21]  text-4xl leading-[110%]">Giving. Focused on research at the intersection of computing and life sciences, on ideas that harness the power of natural sciences to create better versions of our planet’s future.</div>
    <div className="self-stretch w-px bg-[#c5c5c5]" />
    <div className="grid flex flex-col justify-between items-start self-stretch">
      <div className="join_us_on_the_journey_ self-stretch text-[#1e1e21]  text-4xl leading-[110%]">Join us on the journey.</div>
      <div className="flex items-start gap-4">
        <div className="flex justify-center items-center gap-2.5 py-1 px-6 h-12 rounded-xl bg-[#131316] home-2 text-white  text-2xl leading-[120%]">
          Contact us
        </div>
        <div className="flex flex-col justify-center items-center gap-2.5 py-1 px-3 w-12 h-12 rounded-xl bg-[#1e1e21]">
          <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.0101 5.21083C18.3742 5.49216 17.6998 5.67698 17.0093 5.75916C17.7368 5.32345 18.2812 4.63811 18.5409 3.83083C17.8576 4.2375 17.1084 4.5225 16.3284 4.67666C15.8039 4.11548 15.1087 3.7433 14.3509 3.61798C13.5931 3.49267 12.8151 3.62124 12.1378 3.98371C11.4606 4.34618 10.9221 4.92223 10.606 5.62232C10.29 6.32242 10.2141 7.10731 10.3901 7.855C9.00422 7.78566 7.64841 7.4256 6.41072 6.79822C5.17303 6.17083 4.08114 5.29014 3.20594 4.21333C2.89618 4.74537 2.7334 5.35019 2.73427 5.96583C2.73427 7.17416 3.3501 8.24166 4.28427 8.86666C3.73095 8.84921 3.18981 8.69979 2.70594 8.43083V8.47333C2.70591 9.27822 2.9843 10.0584 3.49388 10.6814C4.00346 11.3044 4.71287 11.732 5.50177 11.8917C4.98814 12.031 4.44952 12.0515 3.92677 11.9517C4.14921 12.6445 4.58278 13.2504 5.16677 13.6845C5.75076 14.1186 6.4559 14.3592 7.18344 14.3725C6.4604 14.9404 5.63251 15.3601 4.74711 15.6078C3.86171 15.8555 2.93618 15.9262 2.02344 15.8158C3.61654 16.8403 5.47102 17.3842 7.3651 17.3825C13.7768 17.3825 17.2818 12.0717 17.2818 7.46583C17.2818 7.31583 17.2784 7.16416 17.2718 7.015C17.9538 6.52196 18.5424 5.91047 19.0101 5.21083Z" fill="white" />
          </svg>
        </div>
        <div className="flex flex-col justify-center items-center gap-2.5 py-1 px-3 w-12 h-12 rounded-xl bg-[#1e1e21]">
          <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5013 7.99764C9.83826 7.99764 9.20238 8.26103 8.73354 8.72987C8.26469 9.19871 8.0013 9.8346 8.0013 10.4976C8.0013 11.1607 8.26469 11.7966 8.73354 12.2654C9.20238 12.7342 9.83826 12.9976 10.5013 12.9976C11.1643 12.9976 11.8002 12.7342 12.2691 12.2654C12.7379 11.7966 13.0013 11.1607 13.0013 10.4976C13.0013 9.8346 12.7379 9.19871 12.2691 8.72987C11.8002 8.26103 11.1643 7.99764 10.5013 7.99764ZM10.5013 6.33097C11.6064 6.33097 12.6662 6.76996 13.4476 7.55136C14.229 8.33276 14.668 9.39257 14.668 10.4976C14.668 11.6027 14.229 12.6625 13.4476 13.4439C12.6662 14.2253 11.6064 14.6643 10.5013 14.6643C9.39623 14.6643 8.33643 14.2253 7.55502 13.4439C6.77362 12.6625 6.33464 11.6027 6.33464 10.4976C6.33464 9.39257 6.77362 8.33276 7.55502 7.55136C8.33643 6.76996 9.39623 6.33097 10.5013 6.33097ZM15.918 6.12264C15.918 6.39891 15.8082 6.66386 15.6129 6.85921C15.4175 7.05456 15.1526 7.16431 14.8763 7.16431C14.6 7.16431 14.3351 7.05456 14.1397 6.85921C13.9444 6.66386 13.8346 6.39891 13.8346 6.12264C13.8346 5.84637 13.9444 5.58142 14.1397 5.38607C14.3351 5.19072 14.6 5.08097 14.8763 5.08097C15.1526 5.08097 15.4175 5.19072 15.6129 5.38607C15.8082 5.58142 15.918 5.84637 15.918 6.12264ZM10.5013 3.83097C8.43964 3.83097 8.10297 3.83681 7.1438 3.87931C6.49047 3.91014 6.05214 3.99764 5.64547 4.15597C5.30515 4.28092 4.99748 4.48119 4.74547 4.74181C4.48464 4.99381 4.2841 5.30146 4.1588 5.64181C4.00047 6.05014 3.91297 6.48764 3.88297 7.14014C3.83964 8.06014 3.8338 8.38181 3.8338 10.4976C3.8338 12.5601 3.83964 12.896 3.88214 13.8551C3.91297 14.5076 4.00047 14.9468 4.15797 15.3526C4.29964 15.7151 4.4663 15.976 4.74297 16.2526C5.0238 16.5326 5.28464 16.7001 5.64297 16.8385C6.05464 16.9976 6.49297 17.086 7.14297 17.116C8.06297 17.1593 8.38464 17.1643 10.5005 17.1643C12.563 17.1643 12.8988 17.1585 13.858 17.116C14.5096 17.0851 14.948 16.9976 15.3555 16.8401C15.6955 16.7146 16.003 16.5144 16.2555 16.2543C16.5363 15.9743 16.7038 15.7135 16.8421 15.3543C17.0005 14.9443 17.0888 14.506 17.1188 13.8543C17.1621 12.9351 17.1671 12.6126 17.1671 10.4976C17.1671 8.43597 17.1613 8.09931 17.1188 7.14014C17.088 6.48847 16.9996 6.04847 16.8421 5.64181C16.7165 5.30182 16.5163 4.99429 16.2563 4.74181C16.0044 4.48085 15.6967 4.28028 15.3563 4.15514C14.948 3.99681 14.5096 3.90931 13.858 3.87931C12.9388 3.83597 12.618 3.83097 10.5013 3.83097ZM10.5013 2.16431C12.7655 2.16431 13.048 2.17264 13.9371 2.21431C14.8238 2.25597 15.4288 2.39514 15.9596 2.60181C16.5096 2.81347 16.973 3.10014 17.4363 3.56264C17.86 3.97922 18.1879 4.48313 18.3971 5.03931C18.603 5.57014 18.743 6.17514 18.7846 7.06264C18.8238 7.95097 18.8346 8.23347 18.8346 10.4976C18.8346 12.7618 18.8263 13.0443 18.7846 13.9326C18.743 14.8201 18.603 15.4243 18.3971 15.956C18.1885 16.5124 17.8605 17.0165 17.4363 17.4326C17.0196 17.8562 16.5157 18.1841 15.9596 18.3935C15.4288 18.5993 14.8238 18.7393 13.9371 18.781C13.048 18.8201 12.7655 18.831 10.5013 18.831C8.23714 18.831 7.95464 18.8226 7.06547 18.781C6.1788 18.7393 5.57464 18.5993 5.04297 18.3935C4.48657 18.1847 3.98257 17.8568 3.5663 17.4326C3.14249 17.0161 2.8146 16.5122 2.60547 15.956C2.3988 15.4251 2.25964 14.8201 2.21797 13.9326C2.17797 13.0443 2.16797 12.7618 2.16797 10.4976C2.16797 8.23347 2.1763 7.95097 2.21797 7.06264C2.25964 6.17431 2.3988 5.57097 2.60547 5.03931C2.814 4.48279 3.14197 3.97874 3.5663 3.56264C3.98269 3.13867 4.48666 2.81075 5.04297 2.60181C5.5738 2.39514 6.17797 2.25597 7.06547 2.21431C7.95464 2.17514 8.23714 2.16431 10.5013 2.16431Z" fill="white" />
          </svg>
        </div>
        <div className="flex flex-col justify-center items-center gap-2.5 py-1 px-3 w-12 h-12 rounded-xl bg-[#1e1e21]">
          <svg width={21} height={21} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7037 3.83081C11.1487 3.83331 12.262 3.84414 13.4453 3.89164L13.8653 3.90998C15.0562 3.96581 16.2462 4.06248 16.837 4.22664C17.6245 4.44831 18.2428 5.09331 18.452 5.91164C18.7853 7.21164 18.827 9.74664 18.832 10.3608L18.8328 10.4875V10.6325C18.827 11.2466 18.7853 13.7825 18.452 15.0816C18.2403 15.9025 17.6212 16.5483 16.837 16.7666C16.2462 16.9308 15.0562 17.0275 13.8653 17.0833L13.4453 17.1025C12.262 17.1491 11.1487 17.1608 10.7037 17.1625L10.5078 17.1633H10.2953C9.35366 17.1575 5.41533 17.115 4.16199 16.7666C3.37533 16.545 2.75616 15.9 2.54699 15.0816C2.21366 13.7816 2.17199 11.2466 2.16699 10.6325V10.3608C2.17199 9.74664 2.21366 7.21081 2.54699 5.91164C2.75866 5.09081 3.37783 4.44498 4.16283 4.22748C5.41533 3.87831 9.35449 3.83581 10.2962 3.83081H10.7037ZM8.83283 7.58081V13.4141L13.8328 10.4975L8.83283 7.58081Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  <div className="flex items-start self-stretch">
    <div className="line-3 h-px bg-[#c5c5c5]" />
  </div>
  <div className="flex items-start self-stretch h-px">
  </div>
  <div className="flex items-center gap-2.5 self-stretch p-16">
    <div className="flex flex-col items-start gap-2 self-stretch w-[672px] blogs self-stretch text-[#1e1e21]  text-6xl font-semibold leading-[100%]">
      Blogs
    </div>
  </div>
  <div className="flex items-start py-6 px-0 w-full">
    <div className="flex flex-col flex-shrink-0 items-start w-[640px]">
      <div className="self-stretch h-[21.4375rem]">
        <div className="lightgray 50% / cover no-repeat] flex-shrink-0 w-[640px] h-[478px] bg-black" />
        <div className="lightgray 0% 0% / 100px 100px repeat] flex-shrink-0 w-[640px] h-[21.4375rem] opacity-[0.2] bg-black" />
      </div>
      <div className="flex flex-col items-start gap-4 self-stretch p-12">
        <div className="flex items-start gap-4">
          <div className="flex items-start gap-2.5 py-1 px-3 rounded-full bg-[#ebebeb] article text-[#1e1e21]  text-2xl leading-[110%]">
            Article
          </div>
          <div className="flex items-start gap-2.5 py-1 px-3 rounded-full bg-[#ebebeb] wellbeing text-[#1e1e21]  text-2xl leading-[110%]">
            Wellbeing
          </div>
        </div>
        <div className="the_art_of_impossible_and_how_to_achieve_it_ self-stretch text-[#1e1e21]  text-4xl font-semibold leading-[120%]">The art of impossible and how to achieve it.</div>
        <div className="opinion_and_advice_on_a_wide_range_of_topics__designed_to_inform__inspire__and_empower_your_journey_ self-stretch text-[#1e1e21]  text-2xl leading-[110%]">Opinion and advice on a wide range of topics, designed to inform, inspire, and empower your journey.</div>
        <div className="flex justify-center items-center gap-2.5 py-1 px-6 h-12 rounded-xl border border-[#c8c8c8] bg-white home-3 text-[#131316]  text-2xl leading-[120%]">
          Read story
        </div>
      </div>
    </div>
    <div className="flex flex-col flex-shrink-0 items-start w-[640px]">
      <div className="self-stretch h-[21.4375rem]">
        <div className="lightgray 50% / cover no-repeat] flex-shrink-0 w-[848px] h-[634px] bg-black" />
        <div className="lightgray 0% 0% / 100px 100px repeat] flex-shrink-0 w-[640px] h-[21.4375rem] opacity-[0.2] bg-black" />
      </div>
      <div className="flex flex-col items-start gap-4 self-stretch p-12">
        <div className="flex items-start gap-4">
          <div className="flex items-start gap-2.5 py-1 px-3 rounded-full bg-[#ebebeb] article-1 text-[#1e1e21]  text-2xl leading-[110%]">
            Article
          </div>
          <div className="flex items-start gap-2.5 py-1 px-3 rounded-full bg-[#ebebeb] biotech text-[#1e1e21]  text-2xl leading-[110%]">
            Biotech
          </div>
        </div>
        <div className="revolutionising_healthcare___the_promise_of_biotech_ self-stretch text-[#1e1e21]  text-4xl font-semibold leading-[120%]">Revolutionising Healthcare:  The Promise of Biotech.</div>
        <div className="opinion_and_advice_on_a_wide_range_of_topics__designed_to_inform__inspire__and_empower_your_journey_-1 self-stretch text-[#1e1e21]  text-2xl leading-[110%]">Opinion and advice on a wide range of topics, designed to inform, inspire, and empower your journey.</div>
        <div className="flex justify-center items-center gap-2.5 py-1 px-6 h-12 rounded-xl border border-[#c8c8c8] bg-white home-4 text-[#131316]  text-2xl leading-[120%]">
          Read story
        </div>
      </div>
    </div>
    <div className="flex flex-col flex-shrink-0 items-start w-[640px]">
      <div className="self-stretch h-[21.4375rem]">
        <div className="lightgray 50% / cover no-repeat] flex-shrink-0 w-[642px] h-[480px] bg-black" />
        <div className="lightgray 0% 0% / 100px 100px repeat] flex-shrink-0 w-[640px] h-[21.4375rem] opacity-[0.2] bg-black" />&gt;
      </div>
      <div className="flex flex-col items-start gap-4 self-stretch p-12">
        <div className="flex items-start gap-4">
          <div className="flex items-start gap-2.5 py-1 px-3 rounded-full bg-[#ebebeb] article-2 text-[#1e1e21]  text-2xl leading-[110%]">
            Article
          </div>
          <div className="flex items-start gap-2.5 py-1 px-3 rounded-full bg-[#ebebeb] mental_health text-[#1e1e21]  text-2xl leading-[110%]">
            Mental health
          </div>
        </div>
        <div className="unlocking_nature_s_secrets__biotechnology_in_conservation self-stretch text-[#1e1e21]  text-4xl font-semibold leading-[120%]">Unlocking Natures Secrets: Biotechnology in Conservation</div>
        <div className=" self-stretch text-[#1e1e21]  text-2xl leading-[110%]">Opinion and advice on a wide range of topics, designed to inform, inspire, and empower your journey.</div>
        <div className="flex justify-center items-center gap-2.5 py-1 px-6 h-12 rounded-xl border border-[#c8c8c8] bg-white home-5 text-[#131316]  text-2xl leading-[120%]">
          Read story
        </div>
      </div>
    </div>
  </div>
  <div className="flex items-start py-6 px-0 w-full">
    <div className="flex flex-col flex-shrink-0 items-start w-[640px]">
      <div className="self-stretch h-[21.4375rem]">
        <div className="lightgray 50% / cover no-repeat] flex-shrink-0 w-[658px] h-[492px] bg-black" />&gt;
        <div className="lightgray 0% 0% / 100px 100px repeat] flex-shrink-0 w-[640px] h-[21.4375rem] opacity-[0.2] bg-black" />
      </div>
      <div className="flex flex-col items-start gap-4 self-stretch p-12">
        <div className="flex items-start gap-4">
          <div className="flex items-start gap-2.5 py-1 px-3 rounded-full bg-[#ebebeb] article-3 text-[#1e1e21]  text-2xl leading-[110%]">
            Article
          </div>
          <div className="flex items-start gap-2.5 py-1 px-3 rounded-full bg-[#ebebeb] casual text-[#1e1e21]  text-2xl leading-[110%]">
            Casual
          </div>
        </div>
        <div className="biotech_beyond_medicine__innovations_in_agriculture_and_food_production self-stretch text-[#1e1e21]  text-4xl font-semibold leading-[120%]">Biotech Beyond Medicine: Innovations in Agriculture and Food Production</div>
        <div className="opinion_and_advice_on_a_wide_range_of_topics__designed_to_inform__inspire__and_empower_your_journey_-3 self-stretch text-[#1e1e21]  text-2xl leading-[110%]">Opinion and advice on a wide range of topics, designed to inform, inspire, and empower your journey.</div>
        <div className="flex justify-center items-center gap-2.5 py-1 px-6 h-12 rounded-xl border border-[#c8c8c8] bg-white home-6 text-[#131316]  text-2xl leading-[120%]">
          Read story
        </div>
      </div>
    </div>
    <div className="flex flex-col flex-shrink-0 items-start w-[640px]">
      <div className="self-stretch h-[21.4375rem]">&gt;
        <div className="lightgray 50% / cover no-repeat] flex-shrink-0 w-[644px] h-[481px] bg-black" />
        <div className="lightgray 0% 0% / 100px 100px repeat] flex-shrink-0 w-[640px] h-[21.4375rem] opacity-[0.2] bg-black" />
      </div>
      <div className="flex flex-col items-start gap-4 self-stretch p-12">
        <div className="flex items-start gap-4">
          <div className="flex items-start gap-2.5 py-1 px-3 rounded-full bg-[#ebebeb] article-4 text-[#1e1e21]  text-2xl leading-[110%]">
            Article
          </div>
          <div className="flex items-start gap-2.5 py-1 px-3 rounded-full bg-[#ebebeb] wellbeing-1 text-[#1e1e21]  text-2xl leading-[110%]">
            Wellbeing
          </div>
        </div>
        <div className="emerging_trends_in_biotech__what_lies_ahead_for_the_industry_ self-stretch text-[#1e1e21]  text-4xl font-semibold leading-[120%]">Emerging Trends in Biotech: What Lies Ahead for the Industry?</div>
        <div className="opinion_and_advice_on_a_wide_range_of_topics__designed_to_inform__inspire__and_empower_your_journey_-4 self-stretch text-[#1e1e21]  text-2xl leading-[110%]">Opinion and advice on a wide range of topics, designed to inform, inspire, and empower your journey.</div>
        <div className="flex justify-center items-center gap-2.5 py-1 px-6 h-12 rounded-xl border border-[#c8c8c8] bg-white home-7 text-[#131316]  text-2xl leading-[120%]">
          Read story
        </div>
      </div>
    </div>
    <div className="flex flex-col flex-shrink-0 items-start w-[640px]">&gt;
      <div className="self-stretch h-[21.4375rem]">
        <div className="lightgray 50% / cover no-repeat] flex-shrink-0 w-[640px] h-[478px] bg-black" />
        <div className="lightgray 0% 0% / 100px 100px repeat] flex-shrink-0 w-[640px] h-[21.4375rem] opacity-[0.2] bg-black" />
      </div>
      <div className="flex flex-col items-start gap-4 self-stretch p-12">
        <div className="flex items-start gap-4">
          <div className="flex items-start gap-2.5 py-1 px-3 rounded-full bg-[#ebebeb] article-5 text-[#1e1e21]  text-2xl leading-[110%]">
            Article
          </div>
          <div className="flex items-start gap-2.5 py-1 px-3 rounded-full bg-[#ebebeb] health text-[#1e1e21]  text-2xl leading-[110%]">
            Health
          </div>
        </div>
        <div className="from_lab_to_market__navigating_the_biotech_startup_ecosystem self-stretch text-[#1e1e21]  text-4xl font-semibold leading-[120%]">From Lab to Market: Navigating the Biotech Startup Ecosystem</div>
        <div className="opinion_and_advice_on_a_wide_range_of_topics__designed_to_inform__inspire__and_empower_your_journey_-5 self-stretch text-[#1e1e21]  text-2xl leading-[110%]">Opinion and advice on a wide range of topics, designed to inform, inspire, and empower your journey.</div>
        <div className="flex justify-center items-center gap-2.5 py-1 px-6 h-12 rounded-xl border border-[#c8c8c8] bg-white home-8 text-[#131316]  text-2xl leading-[120%]">
          Read story
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col justify-center items-end gap-2.5 self-stretch pt-6 pb-16 px-16">
    <div className="flex items-center gap-2.5 py-1 px-6 h-12 rounded-xl bg-[#131316] home-9 text-white  text-2xl leading-[120%]">
      Load more
    </div>
  </div>
  <div className="w-full h-px bg-[#c5c5c5]" />&gt;
  <div className="flex items-center self-stretch py-16 px-0">
    <div className="image_wrapper-12 h-[1120px] bg-[#e4e1da]">
      <div className="lightgray 50% / cover no-repeat] flex-shrink-0 w-[1125px] h-[1120px] bg-black" />
      <div className="lightgray 0% 0% / 100px 100px repeat] flex-shrink-0 w-&gt;1124px] h-[1120px] opacity-[0.2] bg-black" />
    </div>
    <div className="flex flex-col items-start gap-12 p-16 w-[800px] h-[1120px]">
      <div className="flex flex-col items-start gap-4 self-stretch">
        <div className="flex flex-col items-start gap-2 self-stretch">
          <div className="newsletter w-[572px] text-[#1e1e21]  text-[2rem] font-semibold leading-[120%]">Newsletter</div>
          <div className="foundation_for_change_ self-stretch text-[#1e1e21]  text-6xl font-semibold leading-[100%]">Foundation for change.</div>
        </div>
        <div className="paramhansa_philanthropies_embodies_a_noble_vision__focusing_on_uplifting_and_enriching_the_lives_of_individuals_and_societies_in_need__exemplifying_the_ideals_of_selflessness_and_empathy__it_stands_as_a_powerful_force_for_good__demonstrating_an_unwavering_dedication_to_improving_the_well-being_of_humanity_through_its_charitable_actions_and_initiatives_ self-stretch text-[#1e1e21]  text-4xl leading-[110%]">ParamHansa Philanthropies embodies a noble vision, focusing on uplifting and enriching the lives of individuals and societies in need, exemplifying the ideals of selflessness and empathy. It stands as a powerful force for good, demonstrating an unwavering dedication to improving the well-being of humanity through its charitable actions and initiatives.</div>
        <div className="flex items-start gap-4">
          <div className="flex justify-center items-center gap-2.5 py-1 px-6 h-12 rounded-xl bg-[#131316] home-10 text-white  text-2xl leading-[120%]">
            Subscribe
          </div>
          <div className="flex items-center gap-2.5 py-1 px-6 h-12 rounded-xl border border-[#c8c8c8] bg-white home-11 text-[#131316]  text-2xl leading-[120%]">
            Read recent Newsletter
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full h-px bg-[#c5c5c5]" />
  <div className="flex items-center gap-2.5 self-stretch p-16">
    <div className="flex flex-col items-start gap-2 self-stretch w-[672px] news self-stretch text-[#1e1e21]  text-6xl font-semibold leading-[100%]">
      News
    </div>
  </div>&gt;
  <div className="flex items-start py-6 px-0 w-full">
    <div className="flex flex-shrink-0 items-start w-[960px]">&gt;
      <div className="image_wrapper-13 h-[21.4375rem]">
        <div className="lightgray 50% / cover no-repeat] flex-shrink-0 w-[640px] h-[478px] bg-black" />
        <div className="lightgray 0% 0% / 100px 100px repeat] flex-shrink-0 w-[480px] h-[21.4375rem] opacity-[0.2] bg-black" />
      </div>
      <div className="grid-14 flex flex-col items-start gap-4 pt-3 pb-12 px-12">
        <div className="lightgray 50% / cover no-repeat] w-10 h-[2.5625rem] bg-black" />
        <div className="the_art_of_impossible_and_how_to_achieve_it_-1 self-stretch text-[#1e1e21]  text-4xl font-semibold leading-[120%]">The art of impossible and how to achieve it.</div>
        <div className="sean_de_paul__monday_12th__april_2023 self-stretch text-[#1e1e21]  text-2xl leading-[110%]">Sean de Paul.
          Monday 12th, April 2023</div>
        <div className="flex justify-center items-center gap-2.5 py-1 px-6 h-12 rounded-xl border border-[#c8c8c8] bg-white home-12 text-[#131316]  text-2xl leading-[120%]">
          Read story&gt;
        </div>
      </div>&gt;
    </div>
    <div className="flex flex-shrink-0 items-start w-[960px]">
      <div className="image_wrapper-14 h-[21.4375rem]">
        <div className="lightgray 50% / cover no-repeat] flex-shrink-0 w-[483px] h-[22.5625rem] bg-black" />
        <div className="lightgray 0% 0% / 100px 100px repeat] flex-shrink-0 w-[480px] h-[21.4375rem] opacity-[0.2] bg-black" />
      </div>
      <div className="grid-15 flex flex-col items-start gap-4 pt-3 pb-12 px-12">
        <div className="lightgray 50% / cover no-repeat] w-[6.375rem] h-10 bg-black" />
        <div className="the_art_of_impossible_and_how_to_achieve_it_-2 self-stretch text-[#1e1e21]  text-4xl font-semibold leading-[120%]">The art of impossible and how to achieve it.</div>
        <div className="sean_de_paul__monday_12th__april_2023-1 self-stretch text-[#1e1e21]  text-2xl leading-[110%]">Sean de Paul.
          Monday 12th, April 2023</div>
        <div className="flex justify-center items-center gap-2.5 py-1 px-6 h-12 rounded-xl border border-[#c8c8c8] bg-white home-13 text-[#131316]  text-2xl leading-[120%]">
          Read story&gt;
        </div>
      </div>&gt;
    </div>
  </div>
  <div className="flex items-start py-6 px-0 w-full">
    <div className="flex flex-shrink-0 items-start w-[960px]">
      <div className="image_wrapper-15 h-[21.4375rem]">
        <div className="lightgray 50% / cover no-repeat] flex-shrink-0 w-[640px] h-[478px] bg-black" />
        <div className="lightgray 0% 0% / 100px 100px repeat] flex-shrink-0 w-[480px] h-[21.4375rem] opacity-[0.2] bg-black" />
      </div>
      <div className="grid-17 flex flex-col items-start gap-4 pt-3 pb-12 px-12">
        <div className="lightgray 50% / cover no-repeat] w-10 h-[2.5625rem] bg-black" />
        <div className="the_art_of_impossible_and_how_to_achieve_it_-3 self-stretch text-[#1e1e21]  text-4xl font-semibold leading-[120%]">The art of impossible and how to achieve it.</div>&gt;
        <div className="sean_de_paul__monday_12th__april_2023-2 self-stretch text-[#1e1e21]  text-2xl leading-[110%]">Sean de Paul.
          Monday 12th, April 2023</div>&gt;
        <div className="flex justify-center items-center gap-2.5 py-1 px-6 h-12 rounded-xl border border-[#c8c8c8] bg-white home-14 text-[#131316]  text-2xl leading-[120%]">
          Read story
        </div>
      </div>
    </div>
    <div className="flex flex-shrink-0 items-start w-[960px]">
      <div className="image_wrapper-16 h-[21.4375rem]">
        <div className="lightgray 50% / cover no-repeat] flex-shrink-0 w-[793px] h-[592px] bg-black" />
        <div className="lightgray 0% 0% / 100px 100px repeat] flex-shrink-0 w-[480px] h-[21.4375rem] opacity-[0.2] bg-black" />
      </div>
      <div className="grid-18 flex flex-col items-start gap-4 pt-3 pb-12 px-12">
        <div className="lightgray 50% / cover no-repeat] w-[6.375rem] h-10 bg-black" />
        <div className="the_art_of_impossible_and_how_to_achieve_it_-4 self-stretch text-[#1e1e21]  text-4xl font-semibold leading-[120%]">The art of impossible and how to achieve it.</div>&gt;
        <div className="sean_de_paul__monday_12th__april_2023-3 self-stretch text-[#1e1e21]  text-2xl leading-[110%]">Sean de Paul.
          Monday 12th, April 2023</div>&gt;
        <div className="flex justify-center items-center gap-2.5 py-1 px-6 h-12 rounded-xl border border-[#c8c8c8] bg-white home-15 text-[#131316]  text-2xl leading-[120%]">
          Read story
        </div>
      </div>
    </div>
  </div>
  <div className="flex items-start py-6 px-0 w-full">
    <div className="flex flex-shrink-0 items-start w-[960px]">
      <div className="image_wrapper-17 h-[21.4375rem]">
        <div className="lightgray 50% / cover no-repeat] flex-shrink-0 w-[640px] h-[478px] bg-black" />
        <div className="lightgray 0% 0% / 100px 100px repeat] flex-shrink-0 w-[480px] h-[21.4375rem] opacity-[0.2] bg-black" />&gt;
      </div>
      <div className="grid-20 flex flex-col items-start gap-4 pt-3 pb-12 px-12">&gt;
        <div className="lightgray 50% / cover no-repeat] w-[8.5625rem] h-10 bg-black" />
        <div className="the_art_of_impossible_and_how_to_achieve_it_-5 self-stretch text-[#1e1e21]  text-4xl font-semibold leading-[120%]">The art of impossible and how to achieve it.</div>
        <div className="sean_de_paul__monday_12th__april_2023-4 self-stretch text-[#1e1e21]  text-2xl leading-[110%]">Sean de Paul.
          Monday 12th, April 2023</div>
        <div className="flex justify-center items-center gap-2.5 py-1 px-6 h-12 rounded-xl border border-[#c8c8c8] bg-white home-16 text-[#131316]  text-2xl leading-[120%]">
          Read story
        </div>
      </div>
    </div>
    <div className="flex flex-shrink-0 items-start w-[960px]">
      <div className="image_wrapper-18 h-[21.4375rem]">
        <div className="lightgray 50% / cover no-repeat] flex-shrink-0 w-[640px] h-[478px] bg-black" />
        <div className="lightgray 0% 0% / 100px 100px repeat] flex-shrink-0 w-[480px] h-[21.4375rem] opacity-[0.2] bg-black" />
      </div>
      <div className="grid-21 flex flex-col items-start gap-4 pt-3 pb-12 px-12">
        <div className="lightgray 50% / cover no-repeat] w-10 h-[2.5625rem] bg-black" />
        <div className="the_art_of_impossible_and_how_to_achieve_it_-6 self-stretch text-[#1e1e21]  text-4xl font-semibold leading-[120%]">The art of impossible and how to achieve it.</div>
        <div className="sean_de_paul__monday_12th__april_2023-5 self-stretch text-[#1e1e21]  text-2xl leading-[110%]">Sean de Paul.&gt;
          Monday 12th, April 2023</div>
        <div className="flex justify-center items-center gap-2.5 py-1 px-6 h-12 rounded-xl border border-[#c8c8c8] bg-white home-17 text-[#131316]  text-2xl leading-[120%]">
          Read story
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col justify-center items-end gap-2.5 self-stretch pt-6 pb-16 px-16">
    <div className="flex items-center gap-2.5 py-1 px-6 h-12 rounded-xl bg-[#131316] home-18 text-white  text-2xl leading-[120%]">
      Load more
    </div>
  </div>
  <div className="w-full h-px bg-[#c5c5c5]" />
  <div className="flex items-center self-stretch">
    <div className="image_wrapper-19 h-[1120px] bg-[#e4e1da]">
      <div className="lightgray 50% / cover no-repeat] flex-shrink-0 w-[2012px] h-[1124px] bg-black" />
      <div className="lightgray 0% 0% / 100px 100px repeat] flex-shrink-0 w-[1924px] h-[1120px] opacity-[0.2] bg-black" />
      <div className="biotechnology_for_me__is_a_way_of_improving_the_world_for_everybody__james_d__watson w-[1124px] text-[#1e1e21]  text-6xl font-semibold leading-[100%]">Biotechnology for me, is a way of improving the world for everybody. James D. Watson</div>
    </div>
  </div>
  <div className="w-full h-px bg-[#c5c5c5]" />
  <div className="flex flex-col items-start gap-16 self-stretch p-16 bg-black">
    <div className="flex items-start gap-4 self-stretch">
      <div className="flex flex-col items-start gap-2.5 w-[403px]">
        <div className="flex items-center gap-3">
          <svg width={65} height={51} viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.0282 50.498H45.3779C45.9286 50.498 46.3061 49.943 46.1038 49.4308L41.1899 36.9923C39.9094 33.7039 37.3484 31.2376 34.2538 30.2981L27.1042 28.0667C24.0097 27.1272 21.5553 24.6609 20.1681 21.3726L13.232 3.63891C12.5917 1.87729 11.0978 0.820312 9.39045 0.820312H1.14702C0.596417 0.820312 0.218919 1.3751 0.421023 1.88727L8.10993 21.3726C9.39045 24.6609 11.9515 27.1272 15.0461 28.0667L22.1956 30.2981C25.2902 31.2376 27.7445 33.7039 29.1317 36.9923L33.2934 47.6794C33.9337 49.4411 35.4276 50.498 37.0282 50.498Z" fill="white" />
            <path d="M37.0282 50.498H45.3779C45.9286 50.498 46.3061 49.943 46.1038 49.4308L41.1899 36.9923C39.9094 33.7039 37.3484 31.2376 34.2538 30.2981L27.1042 28.0667C24.0097 27.1272 21.5553 24.6609 20.1681 21.3726L13.232 3.63891C12.5917 1.87729 11.0978 0.820312 9.39045 0.820312H1.14702C0.596417 0.820312 0.218919 1.3751 0.421023 1.88727L8.10993 21.3726C9.39045 24.6609 11.9515 27.1272 15.0461 28.0667L22.1956 30.2981C25.2902 31.2376 27.7445 33.7039 29.1317 36.9923L33.2934 47.6794C33.9337 49.4411 35.4276 50.498 37.0282 50.498Z" fill="white" style={{mixBlendMode: 'soft-light'}} />
            <path d="M45.8851 33.469L51.434 47.6794C52.0743 49.4411 53.5682 50.498 55.2756 50.498H63.6255C64.1762 50.498 64.5537 49.9432 64.3515 49.431L58.05 33.469C56.7695 30.1807 54.2085 27.7144 51.1139 26.7749L43.9644 24.5435C40.8698 23.604 38.4155 21.1377 37.0282 17.8493L31.4793 3.63891C30.8391 1.87729 29.3451 0.820312 27.6378 0.820312H19.2878C18.7372 0.820312 18.3597 1.37519 18.5619 1.88739L24.8633 17.8493C26.1438 21.1377 28.7049 23.604 31.7995 24.5435L38.949 26.7749C42.0436 27.8318 44.4979 30.2981 45.8851 33.469Z" fill="white" />
            <path d="M45.8851 33.469L51.434 47.6794C52.0743 49.4411 53.5682 50.498 55.2756 50.498H63.6255C64.1762 50.498 64.5537 49.9432 64.3515 49.431L58.05 33.469C56.7695 30.1807 54.2085 27.7144 51.1139 26.7749L43.9644 24.5435C40.8698 23.604 38.4155 21.1377 37.0282 17.8493L31.4793 3.63891C30.8391 1.87729 29.3451 0.820312 27.6378 0.820312H19.2878C18.7372 0.820312 18.3597 1.37519 18.5619 1.88739L24.8633 17.8493C26.1438 21.1377 28.7049 23.604 31.7995 24.5435L38.949 26.7749C42.0436 27.8318 44.4979 30.2981 45.8851 33.469Z" fill="white" style={{mixBlendMode: 'soft-light'}} />
            <circle cx="51.3246" cy="11.2348" r="10.7368" fill="white" />
            <circle cx="51.3246" cy="11.2348" r="10.7368" fill="white" style={{mixBlendMode: 'soft-light'}} />
          </svg>
        </div>
      </div>
      <div className="flex items-start gap-4 w-[800px]">
        <div className="flex flex-col flex-shrink-0 items-start gap-6 w-[18.75rem]">
          <div className="home-19 self-stretch text-white  text-[2rem] font-semibold leading-[120%]">Home</div>
          <div className="flex flex-col items-start gap-1 self-stretch">
            <div className="mission self-stretch opacity-[0.6] text-white  text-2xl leading-[110%]">Mission</div>
            <div className="goals self-stretch opacity-[0.6] text-white  text-2xl leading-[110%]">Goals</div>
            <div className="shipping_and_payment self-stretch opacity-[0.6] text-white  text-2xl leading-[110%]">Shipping and payment</div>
            <div className="partners self-stretch opacity-[0.6] text-white  text-2xl leading-[110%]">Partners</div>
            <div className="opportunities self-stretch opacity-[0.6] text-white  text-2xl leading-[110%]">Opportunities</div>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 items-start gap-6 w-[18.75rem]">
          <div className="resources self-stretch text-white  text-[2rem] font-semibold leading-[120%]">Resources</div>
          <div className="flex flex-col items-start gap-1 self-stretch">
            <div className="gallery self-stretch opacity-[0.6] text-white  text-2xl leading-[110%]">Gallery</div>
            <div className="blogs-1 self-stretch opacity-[0.6] text-white  text-2xl leading-[110%]">Blogs</div>
            <div className="news-1 self-stretch opacity-[0.6] text-white  text-2xl leading-[110%]">News</div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch h-px bg-[#c5c5c5]" />
    <div className="flex items-start gap-24 self-stretch">
      <div className="subs flex items-end gap-4 to_enhance_the_quality_of_human_life_through_the__power_of_science_complimented_by_innovations_in_technology opacity-[0.6] text-white  text-2xl leading-[110%]">
        To enhance the quality of human life through the  power of science complimented by innovations in technology
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-start gap-2">
          <div className="flex justify-center items-center gap-2.5 py-1 px-6 h-12 rounded-xl bg-white home-20 text-black  text-2xl leading-[120%]">
            Contact us
          </div>
          <div className="flex flex-col justify-center items-center gap-2.5 py-1 px-3 w-12 h-12 rounded-xl bg-white">
            <svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5101 5.21181C17.8742 5.49314 17.1998 5.67795 16.5093 5.76014C17.2368 5.32442 17.7812 4.63909 18.0409 3.83181C17.3576 4.23847 16.6084 4.52347 15.8284 4.67764C15.3039 4.11646 14.6087 3.74428 13.8509 3.61896C13.0931 3.49365 12.3151 3.62222 11.6378 3.98468C10.9606 4.34715 10.4221 4.92321 10.106 5.6233C9.78997 6.32339 9.71406 7.10829 9.8901 7.85597C8.50422 7.78663 7.14841 7.42658 5.91072 6.79919C4.67303 6.17181 3.58114 5.29112 2.70594 4.21431C2.39618 4.74635 2.2334 5.35116 2.23427 5.96681C2.23427 7.17514 2.8501 8.24264 3.78427 8.86764C3.23095 8.85019 2.68981 8.70076 2.20594 8.43181V8.47431C2.20591 9.2792 2.4843 10.0593 2.99388 10.6824C3.50346 11.3054 4.21287 11.733 5.00177 11.8926C4.48814 12.032 3.94952 12.0525 3.42677 11.9526C3.64921 12.6455 4.08278 13.2514 4.66677 13.6855C5.25076 14.1196 5.9559 14.3601 6.68344 14.3735C5.9604 14.9414 5.13251 15.3611 4.24711 15.6088C3.36171 15.8564 2.43618 15.9271 1.52344 15.8168C3.11654 16.8413 4.97102 17.3852 6.8651 17.3835C13.2768 17.3835 16.7818 12.0726 16.7818 7.46681C16.7818 7.31681 16.7784 7.16514 16.7718 7.01597C17.4538 6.52294 18.0424 5.91144 18.5101 5.21181Z" fill="black" />
            </svg>
          </div>
          <div className="flex flex-col justify-center items-center gap-2.5 py-1 px-3 w-12 h-12 rounded-xl bg-white">
            <svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0013 7.99837C9.33826 7.99837 8.70238 8.26176 8.23354 8.73061C7.76469 9.19945 7.5013 9.83533 7.5013 10.4984C7.5013 11.1614 7.76469 11.7973 8.23354 12.2661C8.70238 12.735 9.33826 12.9984 10.0013 12.9984C10.6643 12.9984 11.3002 12.735 11.7691 12.2661C12.2379 11.7973 12.5013 11.1614 12.5013 10.4984C12.5013 9.83533 12.2379 9.19945 11.7691 8.73061C11.3002 8.26176 10.6643 7.99837 10.0013 7.99837ZM10.0013 6.33171C11.1064 6.33171 12.1662 6.77069 12.9476 7.55209C13.729 8.3335 14.168 9.3933 14.168 10.4984C14.168 11.6034 13.729 12.6632 12.9476 13.4447C12.1662 14.2261 11.1064 14.665 10.0013 14.665C8.89623 14.665 7.83643 14.2261 7.05502 13.4447C6.27362 12.6632 5.83464 11.6034 5.83464 10.4984C5.83464 9.3933 6.27362 8.3335 7.05502 7.55209C7.83643 6.77069 8.89623 6.33171 10.0013 6.33171ZM15.418 6.12337C15.418 6.39964 15.3082 6.66459 15.1129 6.85994C14.9175 7.05529 14.6526 7.16504 14.3763 7.16504C14.1 7.16504 13.8351 7.05529 13.6397 6.85994C13.4444 6.66459 13.3346 6.39964 13.3346 6.12337C13.3346 5.84711 13.4444 5.58215 13.6397 5.3868C13.8351 5.19145 14.1 5.08171 14.3763 5.08171C14.6526 5.08171 14.9175 5.19145 15.1129 5.3868C15.3082 5.58215 15.418 5.84711 15.418 6.12337ZM10.0013 3.83171C7.93964 3.83171 7.60297 3.83754 6.6438 3.88004C5.99047 3.91087 5.55214 3.99837 5.14547 4.15671C4.80515 4.28165 4.49748 4.48192 4.24547 4.74254C3.98464 4.99454 3.7841 5.30219 3.6588 5.64254C3.50047 6.05087 3.41297 6.48837 3.38297 7.14087C3.33964 8.06087 3.3338 8.38254 3.3338 10.4984C3.3338 12.5609 3.33964 12.8967 3.38214 13.8559C3.41297 14.5084 3.50047 14.9475 3.65797 15.3534C3.79964 15.7159 3.9663 15.9767 4.24297 16.2534C4.5238 16.5334 4.78464 16.7009 5.14297 16.8392C5.55464 16.9984 5.99297 17.0867 6.64297 17.1167C7.56297 17.16 7.88464 17.165 10.0005 17.165C12.063 17.165 12.3988 17.1592 13.358 17.1167C14.0096 17.0859 14.448 16.9984 14.8555 16.8409C15.1955 16.7153 15.503 16.5151 15.7555 16.255C16.0363 15.975 16.2038 15.7142 16.3421 15.355C16.5005 14.945 16.5888 14.5067 16.6188 13.855C16.6621 12.9359 16.6671 12.6134 16.6671 10.4984C16.6671 8.43671 16.6613 8.10004 16.6188 7.14087C16.588 6.48921 16.4996 6.04921 16.3421 5.64254C16.2165 5.30255 16.0163 4.99502 15.7563 4.74254C15.5044 4.48158 15.1967 4.28101 14.8563 4.15587C14.448 3.99754 14.0096 3.91004 13.358 3.88004C12.4388 3.83671 12.118 3.83171 10.0013 3.83171ZM10.0013 2.16504C12.2655 2.16504 12.548 2.17337 13.4371 2.21504C14.3238 2.25671 14.9288 2.39587 15.4596 2.60254C16.0096 2.81421 16.473 3.10087 16.9363 3.56337C17.36 3.97995 17.6879 4.48386 17.8971 5.04004C18.103 5.57087 18.243 6.17587 18.2846 7.06337C18.3238 7.95171 18.3346 8.23421 18.3346 10.4984C18.3346 12.7625 18.3263 13.045 18.2846 13.9334C18.243 14.8209 18.103 15.425 17.8971 15.9567C17.6885 16.5132 17.3605 17.0172 16.9363 17.4334C16.5196 17.857 16.0157 18.1848 15.4596 18.3942C14.9288 18.6 14.3238 18.74 13.4371 18.7817C12.548 18.8209 12.2655 18.8317 10.0013 18.8317C7.73714 18.8317 7.45464 18.8234 6.56547 18.7817C5.6788 18.74 5.07464 18.6 4.54297 18.3942C3.98657 18.1854 3.48257 17.8575 3.0663 17.4334C2.64249 17.0168 2.3146 16.5129 2.10547 15.9567C1.8988 15.4259 1.75964 14.8209 1.71797 13.9334C1.67797 13.045 1.66797 12.7625 1.66797 10.4984C1.66797 8.23421 1.6763 7.95171 1.71797 7.06337C1.75964 6.17504 1.8988 5.57171 2.10547 5.04004C2.314 4.48352 2.64197 3.97947 3.0663 3.56337C3.48269 3.1394 3.98666 2.81148 4.54297 2.60254C5.0738 2.39587 5.67797 2.25671 6.56547 2.21504C7.45464 2.17587 7.73714 2.16504 10.0013 2.16504Z" fill="black" />
            </svg>
          </div>
          <div className="flex flex-col justify-center items-center gap-2.5 py-1 px-3 w-12 h-12 rounded-xl bg-white">
            <svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.2037 3.83105C10.6487 3.83355 11.762 3.84439 12.9453 3.89189L13.3653 3.91022C14.5562 3.96605 15.7462 4.06272 16.337 4.22689C17.1245 4.44855 17.7428 5.09355 17.952 5.91189C18.2853 7.21189 18.327 9.74689 18.332 10.3611L18.3328 10.4877V10.6327C18.327 11.2469 18.2853 13.7827 17.952 15.0819C17.7403 15.9027 17.1212 16.5486 16.337 16.7669C15.7462 16.9311 14.5562 17.0277 13.3653 17.0836L12.9453 17.1027C11.762 17.1494 10.6487 17.1611 10.2037 17.1627L10.0078 17.1636H9.79533C8.85366 17.1577 4.91533 17.1152 3.66199 16.7669C2.87533 16.5452 2.25616 15.9002 2.04699 15.0819C1.71366 13.7819 1.67199 11.2469 1.66699 10.6327V10.3611C1.67199 9.74689 1.71366 7.21106 2.04699 5.91189C2.25866 5.09105 2.87783 4.44522 3.66283 4.22772C4.91533 3.87855 8.85449 3.83605 9.79616 3.83105H10.2037ZM8.33283 7.58105V13.4144L13.3328 10.4977L8.33283 7.58105Z" fill="black" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);

export default Frontpage;
