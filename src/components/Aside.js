import image from "../static/profile-pic-c715447ce38098828758e525a1128b87.jpg";

const Aside = () => {
    return (
      <>
        <aside>
            <div style={{display: 'flex', marginBottom: '3.5rem'}}>
              <img src={image} alt="Dan Abramov"
                style={{marginRight: '0.875rem', marginBottom: 0, width: '3.5rem', height: '3.5rem', borderRadius: '50%'}} />
                  <p style={{maxWidth: '310px'}}>Personal blog by{/* */} <a href="https://mobile.twitter.com/dan_abramov">Dan Abramov</a>.{/* */} {/* */}I&nbsp;explain with words and code.</p>
            </div>
        </aside>
        </>
    )
}

export default Aside
