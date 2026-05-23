import React from "react";

function Services() {
  return (
    <section className="services flex flex-col items-center">
      <div className="container">
        <div className="services-grid">
          {/* Trainings */}
          <div className="service-card">
            <svg
              width="90"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.2425 56.1329V61.4065C56.2425 71.35 56.2425 76.3217 52.9474 79.411C49.6522 82.4999 44.349 82.4999 33.7427 82.4999C23.1361 82.4999 17.8328 82.4999 14.5377 79.411C11.2427 76.3217 11.2427 71.35 11.2427 61.4065V43.3262C11.2427 33.3824 11.2427 28.4106 14.5377 25.3215C16.7198 23.2759 19.5938 22.711 22.4927 22.5566"
                stroke="#EBEBEB"
                stroke-width="5.625"
                stroke-linecap="round"
              />
              <path
                d="M33.7427 71.25H33.7764"
                stroke="#EBEBEB"
                stroke-width="7.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M56.2429 13.125C48.3416 8.69239 43.5847 7.8396 37.493 7.5C35.0673 7.93961 34.2994 8.81715 33.743 11.25V33.75C33.724 37.1784 34.485 38.4596 37.493 39.375C45.6577 40.6796 49.5667 41.862 55.7812 44.7818C56.0741 44.9194 56.4157 44.9254 56.7135 44.7979C62.7105 42.2258 66.585 40.7854 71.0344 39.9495C73.6444 39.459 76.8919 39.4226 78.189 37.1054C78.6439 36.2928 78.7999 35.2394 78.7429 33.75V11.25C77.979 8.83519 77.157 8.02031 74.9929 7.5C68.4094 7.8627 64.4254 8.79397 56.2429 13.125ZM56.2429 13.125L56.2425 43.125"
                stroke="#EBEBEB"
                stroke-width="5.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h3>Internship</h3>
            <p>
              Unlock new career opportunities in the tech industry with
              Placement-Hub's specialized internship programs.
            </p>
          </div>

          {/* CAP */}
          <div className="service-card">
            <svg
              width="90"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.92823 9.24608C15.8064 1.83905 67.5428 19.9838 67.5 26.6084C67.4516 34.1207 47.2954 36.4317 41.7086 37.9991C38.3494 38.9415 37.4494 39.9079 36.6747 43.4306C33.1664 59.3858 31.4049 67.3215 27.3904 67.4989C20.9912 67.7816 2.21574 16.4748 8.92823 9.24608Z"
                stroke="#EBEBEB"
                stroke-width="5.625"
              />
              <path
                d="M62.1274 48.9095C63.717 48.6968 65.3299 48.6968 66.9199 48.9095M75.4152 52.4225C76.6808 53.3888 77.8605 54.5686 78.8269 55.8342M82.341 64.3347C82.5529 65.9217 82.5529 67.5312 82.341 69.1182M54.1377 53.1987C46.8769 60.077 47.1477 70.8155 53.7889 77.4548C60.5037 84.1685 71.4278 84.3871 78.2813 76.8725"
                stroke="#EBEBEB"
                stroke-width="5.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h3>CAP</h3>
            <p>
              Transform your career trajectory with Placement-Hub's intensive
              Career Acceleration Program
            </p>
          </div>

          {/* Mentorship */}
          <div className="service-card">
            <svg
              width="90"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45 82.5L37.5 60H7.5L15 82.5H45ZM45 82.5H60"
                stroke="#EBEBEB"
                stroke-width="5.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M45 48.75V46.875C45 39.804 45 36.2684 42.8032 34.0717C40.6065 31.875 37.0711 31.875 30 31.875C22.9289 31.875 19.3934 31.875 17.1967 34.0717C15 36.2684 15 39.804 15 46.875V48.75"
                stroke="#EBEBEB"
                stroke-width="5.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M71.25 48.75C71.25 52.8922 67.8922 56.25 63.75 56.25C59.6078 56.25 56.25 52.8922 56.25 48.75C56.25 44.6078 59.6078 41.25 63.75 41.25C67.8922 41.25 71.25 44.6078 71.25 48.75Z"
                stroke="#EBEBEB"
                stroke-width="5.625"
              />
              <path
                d="M37.5 15C37.5 19.1421 34.1421 22.5 30 22.5C25.8579 22.5 22.5 19.1421 22.5 15C22.5 10.8579 25.8579 7.5 30 7.5C34.1421 7.5 37.5 10.8579 37.5 15Z"
                stroke="#EBEBEB"
                stroke-width="5.625"
              />
              <path
                d="M52.5 65.625H75C79.1422 65.625 82.5 68.9828 82.5 73.125V75C82.5 79.1422 79.1422 82.5 75 82.5H71.25"
                stroke="#EBEBEB"
                stroke-width="5.625"
                stroke-linecap="round"
              />
            </svg>

            <h3>Mentorship</h3>
            <p>
              Accelerate your tech journey with one-on-one mentorship support
              from Placement-Hub's seasoned professionals.
            </p>
          </div>

          {/* Workshops */}
          <div className="service-card">
            <svg
              width="90"
              height="90"
              viewBox="0 0 90 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.25 7.5C15.8947 7.5 7.5 15.8947 7.5 26.25C7.5 33.1902 11.2706 39.2498 16.875 42.4916V66.9116C16.875 69.9772 16.875 71.5102 17.4459 72.8884C18.0168 74.2669 19.1007 75.3506 21.2684 77.5185L26.25 82.5L34.1557 74.5942C34.5203 74.2297 34.7028 74.0471 34.854 73.8495C35.2512 73.3301 35.5056 72.7159 35.5921 72.0675C35.625 71.8208 35.625 71.5627 35.625 71.0471C35.625 70.6297 35.625 70.4212 35.6029 70.2184C35.5449 69.6866 35.3739 69.1736 35.1013 68.7135C34.9974 68.538 34.8722 68.3711 34.6217 68.0374L30 61.875L32.625 58.3751C34.1118 56.3925 34.8552 55.4014 35.2401 54.2468C35.625 53.0921 35.625 51.8531 35.625 49.3751V42.4916C41.2294 39.2498 45 33.1902 45 26.25C45 15.8947 36.6053 7.5 26.25 7.5Z"
                stroke="#EBEBEB"
                stroke-width="5.625"
                stroke-linejoin="round"
              />
              <path
                d="M26.25 26.25H26.2837"
                stroke="#EBEBEB"
                stroke-width="7.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M48.75 52.5H71.25C74.7446 52.5 76.4917 52.5 77.8702 53.0707C79.7077 53.832 81.168 55.2923 81.9292 57.1298C82.5 58.5083 82.5 60.2554 82.5 63.75C82.5 67.2446 82.5 68.9917 81.9292 70.3702C81.168 72.2077 79.7077 73.668 77.8702 74.4292C76.4917 75 74.7446 75 71.25 75H48.75"
                stroke="#EBEBEB"
                stroke-width="5.625"
                stroke-linecap="round"
              />
              <path
                d="M56.25 18.75H71.25C74.7446 18.75 76.4917 18.75 77.8702 19.3209C79.7077 20.0821 81.168 21.5422 81.9292 23.3799C82.5 24.7582 82.5 26.5055 82.5 30C82.5 33.4945 82.5 35.2418 81.9292 36.6201C81.168 38.4578 79.7077 39.918 77.8702 40.6793C76.4917 41.25 74.7446 41.25 71.25 41.25H56.25"
                stroke="#EBEBEB"
                stroke-width="5.625"
                stroke-linecap="round"
              />
            </svg>

            <h3>Workshops</h3>
            <p>
              Enhance your skills and network with like-minded professionals at
              Placement-Hub's engaging workshops.
            </p>
          </div>
        </div>
      </div>

      <div className="quote-btn">
        <button className="cta-button">Get a Quote</button>
      </div>
    </section>
  );
}

export default Services;
