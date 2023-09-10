import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div>
        <div id='hero'>
            <div className='content_top'>
                <h1>Learn to Code</h1>
                <h3>With the world's largest web developer site.</h3>
                <div className='search'>
                    <input id='searchbar' type='text' placeholder='Search our tutorials, e.g. HTML' />
                    <button type="button" id="learntocode_searchbtn">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256">
                         <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M21,3c-9.39844,0 -17,7.60156 -17,17c0,9.39844 7.60156,17 17,17c3.35547,0 6.46094,-0.98437 9.09375,-2.65625l12.28125,12.28125l4.25,-4.25l-12.125,-12.09375c2.17969,-2.85937 3.5,-6.40234 3.5,-10.28125c0,-9.39844 -7.60156,-17 -17,-17zM21,7c7.19922,0 13,5.80078 13,13c0,7.19922 -5.80078,13 -13,13c-7.19922,0 -13,-5.80078 -13,-13c0,-7.19922 5.80078,-13 13,-13z"></path></g></g>
                    </svg>
                    </button>
                </div>
                <a id='link_top' href='https://www.w3schools.com/where_to_start.asp'>Not Sure Where To Begin?</a>
            </div>

        </div>
        <div id='hero_middle'>
        <svg  width="100%" height="70" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path id="wavepath" d="M0,0  L110,0C35,150 35,0 0,100z" fill="#282A35"></path>
        </svg>
        </div>
        <div id='hero_bottom'></div>
    </div>
  )
}
