import Steps from '../comps/Steps';

export const tutorialOptions = {
    FinishedLook1: {
        titleDIY:"ripped jeans",
        spacing: -3,
        stars: "/2-star-level.svg",  
        picture:"/distressed_jeans.svg",
        children: <ul>
            <li> A pair of jeans</li>
            <li>Chalk</li>
            <li>Tweezers</li>
            <li>Box Cutter</li>
            <li>Safely Pin</li>
        </ul>,

        steps: <div>
            <Steps
                boldtext="Step 1: "
                text= "Use chalk to roughly mark the area you want to distress. It is best to start cutting 2 inches above the knee if you decided to distress that area."                      
                images= "/step1_distressed_jeans.svg"
            />
            <Steps
                boldtext="Step 2: "
                text= "Insert a magazine into the leg, which will prevent the box cutter from slicing through both layers of fabric and use the box cutter to start slicing at the line you marked."                      
                images= "/step2_distressed_jeans.svg"
            />

            <Steps
                boldtext="Step 3: "
                text= "Continue to slice in horizontal strips. Make each strip about 1/2 inch to an inch apart. The cuts don't need to be equal in length or in width."                      
                images= "/step3_distressed_jeans.svg"
            />

            <Steps
                boldtext="Step 4: "
                text= "Flip the first strip over and individually tease out each white thread with the sharp point of a safety pin and use your tweezers to pluck out and remove those short vertical threads."                      
                images= "/step4_distressed_jeans.svg"
            />         
        </div>        
    },
    
    FinishedLook2: {
        titleDIY:"patch-worked jeans",
        stars: "/2-star-level.svg",  
        picture:"/patched1.svg",
        children: <ul>
            <li>1 Pair of ripped jeans</li>
            <li>Extra denim scraps</li>
            <li>Grosgrain fabric in a stripe or other fabric you want to add</li>
            <li>Needle and contrast color thread</li>
            <li>Pins</li>
        </ul>,

        steps: <div>
        <Steps
            boldtext="Step 1: "
            text= "Lay your jeans out flat and measure your extra denim and fabric to make your patches. You will need patches for the inside of your jeans where the holes are and more decorative patches for the outside."                     
            images= {null}
        />
        <Steps
            boldtext="Step 2: "
            text= "Pin your patches on the inside of your jeans and using your needle and thread sew them on."
            images= {null}                      
        />

        <Steps
            boldtext="Step 3: "
            text= "Lay your jeans flat and place all your patches on your jeans, overlapping them and mixing up the denim and other fabrics. Once you have all your patches where you want them, pin them to your jeans. I folded all the edges over before pinning mine, you can leave raw edges if you prefer, it just depends on how you want your jeans to look."                      
            images= "/patched2.svg"
        />

        <Steps
            boldtext="Step 4: "
            text= "Again using your needle and thread sew your patches to your jeans."                      
            images= "/patched3.svg"
        />       
        </div>     
    },

    
    FinishedLook3: {
        titleDIY:"sweater pillow case",
        stars: "/2-star-level.svg",  
        picture:"/sweater_pillow.svg",
        children: <ul>
            <li>Sweater</li>
            <li>Throw Pillow</li>
            <li>Sewing Machine</li>
            <li>Thread</li>
            <li>Safety pins</li>
            <li>Scissors</li>
            <li>Pins</li>
            <li>Needles</li>
            <li>Chalk</li>
            <li>Ruler</li>
        </ul>,

        steps: <div>
        <Steps
            boldtext="Step 1: "
            text= "Start by smoothing out and pinning together the two sides of the bottom hem. With a colored pencil or chalk, use a ruler or measuring tape to mark out a square. For the button pillow, we only needed to cut two sides of the sweater to create the right size square: the bottom hem forms the opening, and the right seam we left intact."                      
            images= "/step1_sweater_pillow.svg"
        />
        <Steps
            boldtext="Step 2: "
            text= "Sew the seam you just marked on the two sides of the square and sew the seam you just marked on the two sides of the square. Finish the newly cut seam edges with a zig-zag or overlock stitch, to keep the sweater seam from unraveling."                      
            images= "/step2_sweater_pillow.svg"
        />

        <Steps
            boldtext="Step 3: "
            text= "Turn the pillow right-side out and remove the pins along the hem. Measure out and mark a spot for 4 equally spaced buttons along the inside edge hem of the sweater. Use a needle and thread to hand sew the buttons on. Mark the holes on the other side as well and cut them."                      
            images= "/step3_sweater_pillow.svg"
        />               
        </div>     
    }    
}


