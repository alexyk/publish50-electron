import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom'

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import 'popper.js/dist/popper.min.js'

import logo from './assets/images/logo-dark.svg'

import Home from './Home'
import Metadata from './Metadata'
import ResizeStills from './ResizeStills'
import GenerateThumbnails from './GenerateThumbnails'
import Transcode from './Transcode'
import Preferences from './Preferences'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="h-100">
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <NavLink to="/" className="navbar-brand"><img className="logo p-1 rounded-circle" src={ logo } alt="publish50" /></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink to="/new-publish" className="nav-link pr-0">
                    New Publish
                    <span className="divider ml-4"></span>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/browse-cdn" className="nav-link pr-0 pl-4">
                    Browse CDN
                    <span className="divider ml-4"></span>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/update-metadata" className="nav-link pr-0 pl-4">
                    Update Metadata
                    <span className="divider ml-4"></span>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/resize-stills" className="nav-link pr-0 pl-4">
                    Resize Stills
                    <span className="divider ml-4"></span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/transcode" className="nav-link pr-0 pl-4">
                    Transcode
                    <span className="divider ml-4"></span>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/generate-thumbnails" className="nav-link pr-0 pl-4">
                    Generate Thumbnails
                  </NavLink>
                </li>
              </ul>

              <button className="notifications-icon btn" title="Notifications"></button>
              <NavLink className="preferences-icon" to="/preferences" title="Preferences"></NavLink>
            </div>
          </nav>
          <div className="d-flex h-100 w-100">
            <Route exact path="/" component={ Home } />
            <Route exact path="/update-metadata" component={ Metadata } />
            <Route exact path="/resize-stills" component={ ResizeStills } />
            <Route exact path="/transcode" component={ Transcode } />
            <Route exact path="/generate-thumbnails" component={ GenerateThumbnails } />
            <Route exact path="/preferences" component={ Preferences } />
          </div>
          <script>

          </script>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
