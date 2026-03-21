// Shared class for all timeline items (border + dot pseudo-element)
const item =
  "border-l-2 border-[#b8a07e] box-border pt-0 pl-[1.3rem] pb-[0.4rem] relative text-base " +
  "before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full " +
  "before:left-[-11px] before:top-0 before:bg-white before:border-2 before:border-[#b8a07e]";

// item2 adds extra bottom padding
const item2 = item + " pb-4";

function Resume(): JSX.Element {
  return (
    <div className="m-0 p-0 pb-48 box-border overflow-x-hidden w-screen relative bg-white">
      <div className="mx-auto mt-12 mb-0 flex flex-col items-center w-[80%]">
        <div className="flex flex-col items-center justify-center mb-32">
          <h1 className="text-[1.8rem] uppercase tracking-[3px] font-semibold">
            Resume
          </h1>
          <div className="mt-2 h-1 w-[60px] rounded-[50px] bg-gray-500"></div>
        </div>

        <div className="w-full relative flex flex-wrap box-border max-[600px]:flex-col max-[600px]:items-center">
          {/* Left column */}
          <div className="box-border w-1/2 flex-none p-4 pl-0 max-[600px]:w-4/5">
            <section>
              {/* Skills */}
              <div className={item}>
                <h3 className="text-[1.6rem] font-bold mb-4">Skills</h3>
                <div>
                  <ul className="block text-[1.1rem] ml-4">
                    <li className="mb-4">
                      <span className="font-medium">Programming :</span> Python,
                      C, C++, Java, HTML, CSS, SQL, JavaScript
                    </li>
                    <li className="mb-4">
                      <span className="font-medium">
                        Libraries/ Frameworks :
                      </span>{" "}
                      Scikit-learn, NumPy, Pandas, Matplotlib, BeautifulSoup,
                      Node.js
                    </li>
                    <li className="mb-4">
                      <span className="font-medium">Developer Tools :</span>{" "}
                      AWS, GCP, Git, Bitbucket, Colab, IntelliJ, Vim, PyCharm,
                      VS Code, Unity, Postman, JUnit
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              {/* Education heading */}
              <h3 className="text-[1.6rem] font-bold mt-[1.3rem] mb-[1.3rem]">
                Education
              </h3>

              {/* BTech */}
              <div className={item2}>
                <h3 className="text-[1.2rem] mb-2">
                  BTECH COMPUTER SCIENCE &amp; ENGINEERING
                </h3>
                <div className="inline-block text-[1.2rem] bg-[#f4ece3] mb-12 px-[15px] py-[5px]">
                  <h5>2019 - 2023</h5>
                </div>
                <p className="text-[1.2rem] italic text-[#ae9c84] mb-6">
                  Gurukula Kangri Vishwavidhyalaya, Haridwar
                </p>
                <div>
                  <ul className="block text-[1.1rem] ml-4">
                    <li className="mb-[0.3rem]">
                      <span className="font-medium">Relevant Coursework :</span>{" "}
                      Data Structures, Algorithms, Object Oriented Programming,
                      DBMS, Open Source
                    </li>
                    <li className="mb-[0.3rem]">
                      IIC Mentor; Google DSC Coordinator
                    </li>
                  </ul>
                </div>
              </div>

              {/* Senior School */}
              <div className={item2}>
                <h3 className="text-[1.2rem] mb-2">SENIOR SCHOOL</h3>
                <div className="inline-block text-[1.2rem] bg-[#f4ece3] mb-12 px-[15px] py-[5px]">
                  <h5>2018 - 2019</h5>
                </div>
                <p className="text-[1.2rem] italic text-[#ae9c84] mb-6">
                  Maheshwari Public School, Kota
                </p>
                <div>
                  <ul className="block text-[1.1rem] ml-4">
                    <li className="mb-[0.3rem]">
                      Physics, Chemistry, Mathematics
                    </li>
                    <li className="mb-[0.3rem]">
                      Central Board of Secondary Education -{" "}
                      <span className="font-medium">89.00%</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* High School */}
              <div className={item2}>
                <h3 className="text-[1.2rem] mb-2">HIGH SCHOOL</h3>
                <div className="inline-block text-[1.2rem] bg-[#f4ece3] mb-12 px-[15px] py-[5px]">
                  <h5>2016 - 2017</h5>
                </div>
                <p className="text-[1.2rem] italic text-[#ae9c84] mb-6">
                  The Creative Brain Academy, Rajsamand
                </p>
                <div>
                  <ul className="block text-[1.1rem] ml-4">
                    <li className="mb-[0.3rem]">
                      Rajasthan Board of Secondary Education -{" "}
                      <span className="font-medium">93.00%</span>
                    </li>
                    <li className="mb-[0.3rem]">Head Boy</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              {/* Achievements heading */}
              <h3 className="text-[1.6rem] font-bold mt-[1.3rem] mb-[1.3rem]">
                Achievements
              </h3>

              <div className={item2}>
                <div>
                  <ul className="block text-[1.1rem] ml-4">
                    <li className="mb-[0.3rem]">
                      Received Global Rank <b>2457</b> in leetcode weekly coding
                      contest 317.
                    </li>
                    <li className="mb-[0.3rem]">
                      Ranked under <b>10</b> in Geeks for Geeks college
                      Chapters.
                    </li>
                    <li className="mb-[0.3rem]">
                      Solved <b>700+</b> DSA problems across various coding
                      platforms.
                    </li>
                    <li className="mb-[0.3rem]">
                      Sucessfully submitted solution in Major League Hacking,
                      2021.
                    </li>
                    <li className="mb-[0.3rem]">
                      Got All India Rank under 55k out of 16 lakh students in
                      JEE-Mains, 2019.
                    </li>
                    <li className="mb-[0.3rem]">
                      Received Silver Medal in Science Olympiad in class 10.
                    </li>
                    <li className="mb-[0.3rem]">
                      Received District Merit in class 10.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right column */}
          <div className="box-border w-1/2 flex-none p-4 pl-0 max-[600px]:w-4/5">
            <section>
              {/* Experience heading */}
              <h3 className="text-[1.6rem] font-bold mt-[1.3rem] mb-[1.3rem]">
                Experience
              </h3>

              <div className={item2}>
                <h3 className="text-[1.2rem] mb-2">Hillnick Capitals</h3>
                <div className="inline-block text-[1.2rem] bg-[#f4ece3] mb-12 px-[15px] py-[5px]">
                  <h5>Oct, 2021 - Jan, 2022</h5>
                </div>
                <p className="text-[1.2rem] italic text-[#ae9c84] mb-6">
                  Web Developer Intern
                </p>
                <div>
                  <ul className="block text-[1.1rem] ml-4">
                    <li className="mb-[0.3rem]">
                      <span className="font-medium">Project Task -:</span>{" "}
                      Developed mobile - responsive website for the firm, using
                      ReactJs and Firebase
                    </li>
                    <li className="mb-[0.3rem]">
                      <span className="font-medium">
                        Feature Enhancement -:
                      </span>{" "}
                      Created features to enhance the user experience while
                      ensuring the web design is optimized for smartphones.
                    </li>
                    <li className="mb-[0.3rem]">
                      <span className="font-medium">Impact -:</span> The
                      website&apos;s traffic increased by 200% and average time
                      spent by user also increased from 45 seconds to over 1.5
                      minutes.
                    </li>
                    <li className="mb-[0.3rem]">
                      <span className="font-medium">Skills Learned -:</span>{" "}
                      HTML, CSS, Javascript, ReactJs, Firebase, SEO, UI Design.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              {/* Certifications heading */}
              <h3 className="text-[1.6rem] font-bold mt-[1.3rem] mb-[1.3rem]">
                Certifications
              </h3>

              {/* Goldman Sachs — item3: item-date mb-2, p mb-4 */}
              <div className={item2}>
                <h3 className="text-[1.2rem] mb-2">Goldman Sachs</h3>
                <div className="inline-block text-[1.2rem] bg-[#f4ece3] mb-2 px-[15px] py-[5px]">
                  <h5>May, 2021 - June, 2022</h5>
                </div>
                <p className="text-[1.2rem] italic text-[#ae9c84] mb-4">
                  Engineering Virtual Program
                </p>
                <div>
                  <ul className="block text-[1.1rem] ml-4">
                    <li className="mb-[0.3rem]">
                      <span className="font-medium">
                        Skill &amp; Experience Gained-:{" "}
                      </span>
                      Experienced the work-culture in the Engineering division
                      at Goldman Sachs. Developed critical engineering skills,
                      learned problem solving and optimisation of already
                      existing solution.
                    </li>
                  </ul>
                </div>
              </div>

              {/* PadhAI — item3: item-date mb-2, p mb-4 */}
              <div className={item2}>
                <h3 className="text-[1.2rem] mb-2">PadhAI, IIT Madras</h3>
                <div className="inline-block text-[1.2rem] bg-[#f4ece3] mb-2 px-[15px] py-[5px]">
                  <h5>Jan, 2021</h5>
                </div>
                <p className="text-[1.2rem] italic text-[#ae9c84] mb-4">
                  Foundations of Data Science
                </p>
                <div>
                  <ul className="block text-[1.1rem] ml-4">
                    <li className="mb-[0.3rem]">
                      <span className="font-medium">
                        Skill &amp; Experience Gained-:{" "}
                      </span>
                      Understand the value of data science and the process
                      behind using it. Learned the fundamentals of statistics
                      and probability required for data science. Use Python to
                      gather, store, clean, analyse, and visualise data-sets.
                      Understood real-world challenges with several case studies.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              {/* Leadership — item4: item-date mb-0 */}
              <div className={item}>
                <h3 className="text-[1.6rem] font-bold mb-4">
                  Activities &amp; Leadership
                </h3>
                <div>
                  <ul className="block text-[1.1rem] ml-4">
                    <li className="mb-4">
                      Worked as{" "}
                      <span className="font-medium">
                        Head of Instititute Innovation Council
                      </span>{" "}
                      where single handledly managed several college events like
                      Webinars, Hackathons, Seminars etc.{"  "}
                      <div className="inline-block text-[1.2rem] bg-[#f4ece3] mb-0 px-[15px] py-[5px]">
                        <h5>March, 2022 - Dec, 2022</h5>
                      </div>
                    </li>
                    <li className="mb-4">
                      Student Member at{" "}
                      <span className="font-medium">
                        Developer Student Clubs
                      </span>{" "}
                      GKV Haridwar, India. Conducted online and offline
                      technical &amp; soft-skills training for various college
                      students.{"  "}
                      <div className="inline-block text-[1.2rem] bg-[#f4ece3] mb-0 px-[15px] py-[5px]">
                        <h5>August, 2019 - Dec, 2022</h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
