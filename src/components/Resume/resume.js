import React from "react";
import "./resume.scss";
function Resume() {
  return (
    <div className="resume">
      <div className="container">
        <div className="heading-top">
          <h1 className="head">Resume</h1>
          <div className="md-line"></div>
        </div>
        <div className="resume-main">
          <div className="resume-col">
            <section className="Skills">
              <div className="resume-item item1">
                <h3 className="item-title">Skills</h3>
                <div className="item-des">
                  <ul>
                    <li>
                      <span>Programming :</span> Python, C, C++, Java, HTML,
                      CSS, SQL, JavaScript
                    </li>
                    <li>
                      <span>Libraries/ Frameworks :</span> Scikit-learn, NumPy,
                      Pandas, Matplotlib, BeautifulSoup, Node.js
                    </li>
                    <li>
                      <span>Developer Tools :</span> AWS, GCP, Git, Bitbucket,
                      Colab, IntelliJ, Vim, PyCharm, VS Code, Unity, Postman,
                      JUnit
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="Education">
              <h3 className="item-title title-out">Education</h3>
              <div className="resume-item item2">
                <h3 className="item-title-mini">
                  BTECH COMPUTER SCIENCE & ENGINEERING
                </h3>
                <div className="item-date">
                  <h5>2019 - 2023</h5>
                </div>
                <p>Gurukula Kangri Vishwavidhyalaya, Haridwar</p>
                <div className="item-des">
                  <ul>
                    <li>
                      <span>Relevant Coursework :</span> Data Structures,
                      Algorithms, Object Oriented Programming, DBMS, Open Source
                    </li>
                    <li>IIC Mentor; Google DSC Coordinator</li>
                  </ul>
                </div>
              </div>
              <div className="resume-item item2">
                <h3 className="item-title-mini">SENIOR SCHOOL</h3>
                <div className="item-date">
                  <h5>2018 - 2019</h5>
                </div>
                <p>Maheshwari Public School, Kota</p>
                <div className="item-des">
                  <ul>
                    <li>Physics, Chemistry, Mathematics</li>
                    <li>
                      Central Board of Secondary Education - <span>89.00%</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="resume-item item2">
                <h3 className="item-title-mini">HIGH SCHOOL</h3>
                <div className="item-date">
                  <h5>2016 - 2017</h5>
                </div>
                <p>The Creative Brain Acadmey, Rajsamand</p>
                <div className="item-des">
                  <ul>
                    <li>
                      Rajasthan Board of Secondary Education -{" "}
                      <span>93.00%</span>
                    </li>
                    <li>Head Boy</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="achievements">
              <h3 className="item-title title-out">Achievements</h3>

              <div className="resume-item item2">
                <div className="item-des">
                  <ul>
                    <li>
                      Received Global Rank <b>2457</b> in leetcode weekly coding
                      contest 317.
                    </li>
                    <li>
                      Ranked under <b>10</b> in Geeks for Geeks college
                      Chapters.
                    </li>
                    <li>
                      Solved <b>700+</b> DSA problems across various coding
                      platforms.
                    </li>
                    <li>
                      Sucessfully submitted solution in Major League Hacking,
                      2021.
                    </li>
                    <li>
                      Got All India Rank under 55k out of 16 lakh students in
                      JEE-Mains, 2019.
                    </li>
                    <li>
                      Received Silver Medal in Science Olympiad in class 10.
                    </li>
                    <li>Received District Merit in class 10.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="resume-col">
            <section className="experience">
              <h3 className="item-title title-out">Experience</h3>
              <div className="resume-item item2">
                <h3 className="item-title-mini">Hillnick Capitals</h3>
                <div className="item-date">
                  <h5>Oct, 2021 - Jan, 2022</h5>
                </div>
                <p>Web Developer Intern</p>
                <div className="item-des">
                  <ul>
                    <li>
                      <span>Project Task -:</span> Developed mobile - responsive
                      website for the firm, using ReactJs and Firebase
                    </li>
                    <li>
                      <span>Feature Enhancement -:</span> Created features to
                      enhance the user experience while ensuring the web design
                      is optimized for smartphones.
                    </li>
                    <li>
                      <span>Impact -:</span> The website’s traffic increased by
                      200% and average tie spent by user also increased from 45
                      seconds to over 1.5 minutes. Certificatio
                    </li>
                    <li>
                      <span>Skills Learned -:</span> HTML, CSS, Javascript,
                      ReactJs, Firebase, SEO, UI Design.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="Certifications">
              <h3 className="item-title title-out">Certifications</h3>
              <div className="resume-item item2 item3">
                <h3 className="item-title-mini">Goldman Sachs</h3>
                <div className="item-date">
                  <h5>May, 2021 - June, 2022</h5>
                </div>
                <p>Engineering Virtual Program</p>

                <div className="item-des">
                  <ul>
                    <li>
                      <span>Skill & Experienced Gained-: </span>Experienced the
                      work-culture in the Engineering division at Goldman Sachs.
                      Developed critical engineering skills, learned problem
                      solving and optimisation of already existing solution.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="resume-item item2 item3">
                <h3 className="item-title-mini">PadhAI, IIT Madras</h3>
                <div className="item-date">
                  <h5>Jan, 2021</h5>
                </div>
                <p>Foundations of Data Science</p>

                <div className="item-des">
                  <ul>
                    <li>
                      <span>Skill & Experienced Gained-: </span>Understand the
                      value of data science and the process behind using it.
                      Learned the fundamentals of statistics and probability
                      required for data science. Use Python to gather, store,
                      clean, analyse, and visualise data-sets. Understood
                      real-world challenges with several case studies.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="Leadership">
              <div className="resume-item item1 item4">
                <h3 className="item-title">Activities & Leadership</h3>
                <div className="item-des">
                  <ul>
                    <li>
                      Worked as{" "}
                      <span>Head of Instititute Innovation Council</span> where
                      single handledly managed several college events like
                      Webinars, Hackathons, Seminars etc.{"  "}
                      <div className="item-date">
                        <h5>March, 2022 - Dec, 2022</h5>
                      </div>
                    </li>
                    <li>
                      Student Member at <span>Developer Student Clubs</span> GKV
                      Haridwar, India. Conducted online and offline technical &
                      soft-skills training for various college students.{"  "}
                      <div className="item-date">
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
