import Popup from 'reactjs-popup'

import './index.css'

const Circadian = () => (
  <div className="main">
    <h1 className="main-heading-element">Circadian Rhythms</h1>

    <div className="sub-main">
      <div className="half">
        <h2>
          The body’s circadian cycles are not designed for
          <Popup
            modal
            trigger={<h2 className="popup-word">late-night TV binges</h2>}
            className="popup-content"
          >
            {close => (
              <div className="popup-container">
                <h2>Side Effects of Binge Watching</h2>
                <img
                  alt="simpson"
                  className="super-nucleus"
                  src="https://qph.cf2.quoracdn.net/main-qimg-8c8ee01593477a892ada79b3f7fc313a-lq"
                />
                <ul className="un-ol-list">
                  <li className="li-item">WEIGHT GAIN</li>
                  <li className="li-item">FLUCTUATIONS IN SLEEP CYCLE</li>
                  <li className="li-item">HEART BURN AND ACID REFLUX</li>
                </ul>
                <button
                  className="close-btn-styles"
                  type="button"
                  onClick={() => close()}
                >
                  Close
                </button>
              </div>
            )}
          </Popup>
        </h2>
        <h3>
          Chronobiology is the study of the body’s circadian rhythms, and it
          suggests that the daily schedule of when we do things like eat and
          exercise — and especially when we go to bed and when we’re exposed to
          light — may play a vital role on day-to-day bodily functioning.
        </h3>
      </div>

      <div className="half">
        <h2>Circadian Rhythms and Body Clock</h2>
        <h3>
          Here is how our circadian rhythms work. They are the natural physical,
          mental, and behavioral changes that happen in the body, and they
          follow a 24-hour cycle.
        </h3>
        <h3>
          The body also has one master internal clock, Dr. Wright says. That
          clock is housed in the brain’s hypothalamus (above the optic nerve);
          it’s called the
        </h3>
        <Popup
          modal
          trigger={<h2 className="popup-word">Suprachiasmatic nucleus</h2>}
          className="popup-content-2"
        >
          {close => (
            <div className="popup-container">
              <img
                className="super-nucleus"
                alt="Suprachiasmatic_Nucleus"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Suprachiasmatic_Nucleus.jpg/1024px-Suprachiasmatic_Nucleus.jpg"
              />
              <h3>
                The master clock takes its cues from the lightness or darkness
                we’re exposed to (the fact that these cells live near the eyes
                is not a coincidence — the cells receive direct input from the
                eyes). And the master clock coordinates the body’s other clocks
                by regulating things like body temperature and hormone levels,
                which in turn trigger the molecular clocks in individual cells.
              </h3>
              <button
                className="close-btn-styles"
                type="button"
                onClick={() => close()}
              >
                Close
              </button>
            </div>
          )}
        </Popup>
      </div>
    </div>
  </div>
)

export default Circadian
