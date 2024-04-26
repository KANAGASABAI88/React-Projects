

import './tabs.css'

export default function Tabs(){



    return(
        <div className="container">
            <div className="bloc-tabs">
                <div className="tabs active tabs">Tab 1</div>
                <div className="tabs ">Tab 2</div>
                <div className="tabs">Tab 3</div>
                
            </div>
        <div className="content-tabs">
            <div className="content active-content">
             <h2>content 1</h2>
             <hr/>
             <p>
                Lorem ipsum dolor sit, 
                amet consectetur adipisicing elit. 
                Perspiciatis nesciunt iusto quae vero earum maiores quisquam voluptates vitae iste, ad repudiandae non ipsum odit voluptatem.     
                Natus doloremque rerum excepturi atque.
             </p>
            </div>
            <div className="content">
             <h2>content 2</h2>
             <hr/>
             <p>
                Lorem ipsum dolor sit, 
                amet consectetur adipisicing elit. 
                Perspiciatis nesciunt iusto quae vero earum maiores quisquam voluptates vitae iste, ad repudiandae non ipsum odit voluptatem.     
                Natus doloremque rerum excepturi atque.
             </p>
            </div>
            <div className="content">
             <h2>content 3</h2>
             <hr/>
             <p>
                Lorem ipsum dolor sit, 
                amet consectetur adipisicing elit. 
                Perspiciatis nesciunt iusto quae vero earum maiores quisquam voluptates vitae iste, ad repudiandae non ipsum odit voluptatem.     
                Natus doloremque rerum excepturi atque.
             </p>
            </div>

        </div>
        </div>
    )
}