import React, { useEffect, useRef } from 'react'
import { use } from 'react';
import { useSearchParams } from 'react-router-dom';

const Testing = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const markerRef=useRef(null)
    let magicNavList = document.querySelectorAll('ul li');
    // console.log(searchParams.get('name'))

    // Get a specific search parameter
    const query = searchParams.get('query');
    const updateSearchParams = () => {
        setSearchParams({ query: 'newQuery', page: 2, name: 'ravi' });
    };

    const moveIndicator = (e) => {
        markerRef.current.style.left = e.offsetLeft + 'px';
        markerRef.current.style.width = e.offsetWidth + 'px';
    }

    function activeLink() {
        magicNavList.forEach((link) => 
            link.classList.remove('active'));
            this.classList.add('active')
            console.log(this, 'active');
        
    }
    useEffect(() => {
        magicNavList.forEach(link => {
            link.addEventListener('click', (e) => {
                moveIndicator(e.target);
                console.log(e.target, 'clk')
                activeLink(e)
            })

            link.addEventListener('click',activeLink)
        })
    }, [])
    return (
        <div>Testing page
            <p>Current Query: {query}</p>
            <button onClick={updateSearchParams}>Update Query</button>

            <ul className='magicNavList'>
                <li><a href="#"><ion-icon name="home"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="person"></ion-icon></a></li>
                <li className='active'><a href="#"><ion-icon name="add-circle"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="settings"></ion-icon></a></li>
                <li><a href="#"><ion-icon name="chatbubble"></ion-icon></a></li>
                <div id='marker' ref={markerRef}></div>

            </ul>
        </div>
    )
}

export default Testing