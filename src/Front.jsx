import React, { useState } from 'react';
import profilePic from './assets/pics.jpg';
import profile from './assets/comp.jpg';
import profilePicture from './assets/computer.jpg';
import prof from './assets/caap.png';
import proof from './assets/cop.png';
import pf from './assets/coop.png';
import black from './assets/black.jpg';

import { FaHtml5, FaCss3Alt, FaJsSquare, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaGraduationCap } from 'react-icons/fa';
import { SiReact, SiCplusplus, SiPython, SiCsharp } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Circle } from 'react-bootstrap-icons';


function Front() {
    const [selectedDiv, setSelectedDiv] = useState(null); 

    const handleClick = (divId) => {
        setSelectedDiv(prevId => prevId === divId ? null: divId);
    };
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const [formData, setData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    function handleName(event) {
        setData(n => ({ ...n, name: event.target.value }));
    }

    function handleEmail(event) {
        setData(n => ({ ...n, email: event.target.value }));
    }

    function handleSubject(event) {
        setData(n => ({ ...n, subject: event.target.value }));
    }

    function handleMessage(event) {
        setData(n => ({ ...n, message: event.target.value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data submitted:', formData);
        alert('Thank you! Your message has been submitted');
        setData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">Warda's Portfolio</div>
                <div className="navbar-right">
                    <ul>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#contact">Contact Me</a></li>
                    </ul>
                </div>
            </nav>

            <div className="div">
  <div className="intro">
    <h1>
      I'm <span style={{ fontWeight: 'bold', color: 'rgb(107,19,19)' }}>Warda Tayyab</span><br />
      a Front-End Developer
    </h1>
    <p>
  Undergraduate Software Engineer | ORIC Intern | Web Development Enthusiast | Passionate About Coding & Problem-Solving 
</p>
    <button type="button" className="btn" onClick={scrollToTop}>LEARN MORE</button><br />
  </div>
  <div className="img-container">
    <img src={profilePic} alt="Profile" />
  </div>
</div>

            <p className="paragraph">Hi, Here My Short Information</p>

            <h2 id="about">About Me</h2>
            <p><b>Passionate about creating dynamic web experiences while exploring the latest frontend technologies.</b></p>
            <p>
                I am a passionate and detail-oriented Frontend Web Developer with a strong foundation in creating responsive, user-friendly
                web interfaces. With a focus on delivering seamless user experiences, I specialize in<span> HTML, CSS, JavaScript,</span> and
                modern frontend frameworks like React.
            </p>

            <ol>
                <li className="experience-item">Development of thorough SRS document for a semester project guaranteeing precise and defined software requirements thereby enhancing the efficiency of the development process</li>
                <li className="experience-item">Developed a Java-based library management system incorporating advanced OOP principles for streamlined operations</li>
                <li className="experience-item">Completed C++ projects and implemented various data structures and algorithms for practical applications. Developed web projects using HTML, CSS, and JavaScript, such as a personal portfolio and a to-do list application.</li>
            </ol>

            <button type="button" className="btn"><a href="https://warda-tayyab.github.io/Curriculum-Vitae/">Download CV</a></button>

            <h2 id="skills">Skills</h2>

            <div
                onClick={() => handleClick('webDev')}
                style={{
                    marginTop: '40px',
                    border: `7px solid ${selectedDiv === 'webDev' ? 'rgb(107, 19, 19)' : '#f1f1f1'}`,
                }}
            >
                <img className="pic" src={profile} alt="Web development" />
                <h2>Web Development</h2>
                <p>Web developer creating engaging and responsive websites to bring ideas to life.</p>
                <ul>
                    <li><FaHtml5 color='rgb(107,19,19)' /> HTML</li>
                    <li><FaCss3Alt color='rgb(107,19,19)' /> CSS</li>
                    <li><FaJsSquare color='rgb(107,19,19)' /> JavaScript</li>
                    <li><SiReact color='rgb(107,19,19)' /> React</li>
                    <li> <i className="bi bi-circle"   color='rgb(107,19,19)'></i> Bootstrap </li>
                </ul>
            </div>

            <div
                onClick={() => handleClick('compLang')}
                style={{
                    marginTop: '40px',
                    border: `7px solid ${selectedDiv === 'compLang' ? 'rgb(107, 19, 19)' : '#f1f1f1'}`,
                }}
            >
                <img className="pic" src={profilePicture} alt="Programming Languages" />
                <h2>Programming Languages</h2>
                <p>Crafting efficient and scalable solutions through precise and innovative coding.</p>
                <ul>
                    <li><SiCplusplus color='rgb(107,19,19)' /> C/C++</li>
                    <li><SiCsharp color='rgb(107,19,19)' /> C#</li>
                    <li><DiJava color='rgb(107,19,19)' /> Java</li>
                    <li><SiPython color='rgb(107,19,19)' /> Python</li>
                </ul>
            </div>

            <div
                onClick={() => handleClick('prog')}
                style={{
                    marginTop: '40px',
                    border: `7px solid ${selectedDiv === 'prog' ? 'rgb(107, 19, 19)' : '#f1f1f1'}`,
                }}
            >
                <img className="pic" src={black} alt="Interpersonal Skills" />
                <h2>Interpersonal Skills</h2>
                <ul>
                    <li>Time Management</li>
                    <li>Communication</li>
                    <li>Problem Solving</li>
                    <li>Teamwork</li>
                </ul>
            </div>

            <h2 id="education">Education</h2>
            <FaGraduationCap size={30} color="rgb(107,19,19)" />
            <ul>
                <li className="education-item">
                    <strong><span>IISAT University Gujranwala</span></strong>
                    <span>2022-2026</span>
                    <span>BS Software Engineering (in progress)</span>
                </li>
                <li className="education-item">
                    <strong><span>Punjab Group of Colleges</span></strong>
                    <span>2020-2022</span>
                    <span>Certificate in Intermediate with A+ grade</span>
                </li>
                <li className="education-item">
                    <strong><span>Dar-e-Arqam School Gujranwala</span></strong>
                    <span>Certificate in Matric with A+ grade</span>
                </li>
            </ul>

            <section id="github" style={{ padding: '20px', backgroundColor: '#f1f1f1' }}>
                <h2>Check Out My GitHub</h2>
                <p style={{ marginTop: '10px' }}>
                    I'm actively contributing to various open-source projects and showcasing my work on GitHub. Explore my repositories to see my code and learn more about my projects.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FaGithub size={30} color="rgb(107,19,19)" />
                    <button type="button" className="btn"><a href="https://github.com/Warda-Tayyab">Visit My GitHub</a></button>
                </div>
                <div class="service-container">
            <div class="service-box">
           <div class="img">
           <img  src={prof} alt="Computer Languages" />
            </div>         
            </div>
            <div class="service-box">
                <div class="img">
                <img  src={proof} alt="Computer Languages" />
                 </div>
                 
                 </div>
                 <div class="service-box">
                    <div class="img">
                    <img  src={pf} alt="Computer Languages" />
                     </div>
                     </div> 
                  </div>
    

            </section>

            <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
            <p style={{textAlign:'center',    color:'rgb(107,19,19)'}}>Contact</p>
                <h2 id="contact" style={{ textAlign: 'center' }}>Contact Us</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <h3>Name:</h3>
                    <input type="text" name="name" onChange={handleName} value={formData.name} placeholder="Your Name" style={{ padding: '6px', fontSize: '16px' }} />
                    <h3>Email:</h3>
                    <input type="email" name="email" value={formData.email} onChange={handleEmail} placeholder="Your Email" style={{ padding: '6px', fontSize: '16px' }} />
                    <h3>Subject:</h3>    
                    <input type="text" name="subject" onChange={handleSubject} value={formData.subject} placeholder="Subject" style={{ padding: '6px', fontSize: '16px' }} required />
                    <h3>Message:</h3>
                    <textarea name="message" onChange={handleMessage} value={formData.message} placeholder="Your Message" rows="3" style={{ padding: '6px', fontSize: '16px' }}></textarea>
                    <br />
                    <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', color: 'white', backgroundColor: 'rgb(107,19,19)', width: '120px', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>
                        Send
                    </button>
                </form>
            </div>

            <footer style={{ padding: '20px', backgroundColor: 'rgb(107,19,19)', color: 'white' }}>
  <h4>Make Call</h4>
  <p>
    <FaPhoneAlt color="white"/> <a href="tel:+923237930909" style={{ color: 'white', textDecoration: 'none' }}>+923237930909</a>
  </p>
  <h4>Send Mail</h4>
  <p>
    <FaEnvelope color="white"/> <a href="mailto:wardat057@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>wardat057@gmail.com</a>
  </p>
  <h4>Get In Touch</h4>
  <p><FaMapMarkerAlt color="white"/> Currently available for remote opportunities</p>
  <hr style={{ borderColor: 'white' }}/>

  <p style={{ textAlign: 'center', color: 'white' }}>Copyright &copy; {new Date().getFullYear()} ThemePure. All Rights Reserved</p>
</footer>

        </>
    );
}

export default Front;
