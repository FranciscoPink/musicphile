import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <h3>Francisco Rosado</h3>
      <a href="https://github.com/FranciscoPink">
        <img src={github} alt="GitHub : FranciscoPink" />
      </a>
      <a href="https://linkedin.com/in/francisco-rosado-b652151a9">
        <img src={linkedin} alt="LinkedIn : Francisco Rosado" />
      </a>
    </div>
  )
}

export default Contact;
