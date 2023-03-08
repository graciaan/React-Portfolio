import React from 'react';
import secretSauce from './assets/secretsauce.png'
import mongooseapi from './assets/mongooseapi.png'
import texteditor from './assets/jate.png'
import movieGenerator from './assets/moviegenerator.png'
import readme from './assets/README.png'
import notetaker from './assets/notetaker.png'

function Portfolio({ handlePageChange }) {

  return(
    <div>
      <div>
        <h1>
          Portfolio
        </h1>
        <div>
          <h4>
            Secret Sauce
          </h4>
          <img src={secretSauce} alt="Secret Sauce project screenshot"></img>
          <p>Social Media Website for sharing Secret Family Recipes</p>
          <a href="https://damp-river-14558.herokuapp.com/" target="_blank" onClick={() => handlePageChange('SecreSauce')}>View App</a>
                    <a href="https://github.com/graciaan/SecretSauce" target="_blank" onClick={() => handlePageChange('SecretSauce')}>GitHub</a>
        </div>
      </div>

      <div>
        <div>
          <h4>
            Mongoose Social Media API
          </h4>
          <img src={mongooseapi} alt="Mongoose API screenshot"></img>
          <p>Back-End API for a Social Media Site</p>
                    <a href="https://github.com/graciaan/Mongoose-Social-Media-API" target="_blank" onClick={() => handlePageChange('SocialMediaAPI')}>GitHub</a>
        </div>
      </div>

      <div>
        <div>
          <h4>
            Secret Sauce
          </h4>
          <img src={texteditor} alt="Just Another Text Editor Screenshot"></img>
          <p>An Online Text Editor</p>
          <a href="https://fathomless-woodland-47550.herokuapp.com/" target="_blank" onClick={() => handlePageChange('JATE')}>View App</a>
                    <a href="https://github.com/graciaan/PWA-Text-Editor" target="_blank" onClick={() => handlePageChange('JATE')}>GitHub</a>
        </div>
      </div>

      <div>
        <div>
          <h4>
            Movie Time Machine
          </h4>
          <img src={movieGenerator} alt="Movie Time Machine Screenshot"></img>
          <p>Random Movie Generator</p>
          <a href="https://graciaan.github.io/Class-Project-1/" target="_blank" onClick={() => handlePageChange('MovieTimeMachine')}>View App</a>
                    <a href="https://github.com/graciaan/Class-Project-1" target="_blank" onClick={() => handlePageChange('MovieTimeMachine')}>GitHub</a>
        </div>
      </div>

      <div>
        <div>
          <h4>
            ReadME Generator
          </h4>
          <img src={readme} alt="screenshot of readMe Generator"></img>
          <p>Generator for ReadME's</p>
                <a href="https://github.com/graciaan/README-GENERATOR" target="_blank" onClick={() => handlePageChange('readme')}>GitHub</a>
        </div>
      </div>

      <div>
        <div>
          <h4>
            Note Taker
          </h4>
          <img src={notetaker} alt="Note Taker project screenshot"></img>
          <p>A Website to Take Notes</p>
          <a href="https://obscure-citadel-33579.herokuapp.com/" target="_blank" onClick={() => handlePageChange('NoteTaker')}>View App</a>
                    <a href="https://github.com/graciaan/Note-Taker-Backend" target="_blank" onClick={() => handlePageChange('NoteTaker')}>GitHub</a>
        </div>
      </div>
    </div>

  )
}

export default Portfolio;