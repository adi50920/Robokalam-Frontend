import React, { useState, useRef, useEffect } from 'react'
import ReactPlayer from 'react-player'
import './App.css'
import Reaction from './component/Reaction'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

function App() {
  const videoRef = useRef(null)
  const [emotion, setEmotion] = useState(1)

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
      })
      .catch((error) => console.log('Error accessing camera:', error))
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid main-div m-0  p-0">
        <div className="row p-0 m-0">
          <div className="live-instructional-video col-md-6 p-0">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Wn_Kb3MR_cU&ab_channel=JavaScriptMastery"
              playing
              controls
              width="100%"
              height="60vh"
            />
          </div>
          <div className="live-student-video col-md-6 p-0 m-0">
            <video
              className="live-video-feed p-0 m-0"
              ref={videoRef}
              autoPlay
            />
          </div>
        </div>
      </div>
      <Reaction setEmotion={setEmotion} value={emotion} />
      <Footer />
    </div>
  )
}

export default App
