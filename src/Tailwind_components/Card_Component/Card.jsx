import bgImage from './assets/bgimage.jpg'
import ImageCard from './ImageCard'

export default function Card(){
    return(
        <div >
             <div className="flex justify-center items-center h-screen rounded-sm bg-gray-200">
      <ImageCard
        title="Italy"
        imageSrc={bgImage}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero."
      />
      
    </div>
        </div>
    )
}