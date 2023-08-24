import './stylesheet.css';


function App() {
  // const toggleTheme = () => {
  //   let themes = document.styleSheets
  //   console.log(themes)
  // }
  return (
    <div className='site'>

      <header className='site-header'>
        
        <nav id='site-nav'>
          
          <p><a href='/'>home</a></p>
          <p><a href='/resume.pdf'>resume</a></p>

          <div id='site-url'>
            <p><a href='/'>jobyfoster.dev</a></p>
          </div>
          
          
        </nav>

      </header>

      <div className='site-content'>

        <div className='site-aboutme'>

          <p id='name'>JOBY FOSTER</p>

          <div id='site-aboutme-text'>

            <p>
              Graduated from <a rel='noreferrer' id='shs-name' href='https://www.starkvillesd.com/starkville-high-school/'>Starkville High School</a> in 2023 as a motivated coder with a strong background in HTML, CSS, JavaScript, Python, SQL, a CTE distinguished diploma, and a CSpire Certification.
              Currently amplifying front and back-end development skills at <a id='bcca-name' rel="noreferrer" href='https://basecampcodingacademy.org/' target='_blank'>Base Camp Coding Academy</a>, graduating  by May 2024.
              Aiming to apply my passion for coding to solve real-world problems and promote innovation.
            </p>

          </div>

        </div>

      </div>
      
    </div>
    
    
  );
}

export default App;
