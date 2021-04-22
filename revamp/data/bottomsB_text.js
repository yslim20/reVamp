import Steps from '../comps/Steps';

export const tutorialOptions = {
    FinishedLook1: {
        titleDIY:"distressed jeans (look 1)",
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
        titleDIY:"cat tent",
        stars: "/2-star-level.svg",  
        picture:"/cat_tent.svg",
        children: <ul>
            <li>A t-shirt</li>
            <li>15″ x 15″ piece of cardboard</li>
            <li>2 wire hangers</li>
            <li>Masking tape</li>
            <li>Safety pins</li>
            <li>Pliers</li>
        </ul>,

        steps: <div>
        <Steps
            boldtext="Step 1: "
            text= "Cut the tops off of your hangers using pliers."                      
            images= "/step1_cat_tent.svg"
        />
        <Steps
            boldtext="Step 2: "
            text= "Bend your cut wire hangers and shape them into curves. Reinforce your cardboard box by taping the edges with masking tape. If your cardboard has creases in it you can also tape over them to provide additional support."                      
            images= "/step2_cat_tent.svg"
        />

        <Steps
            boldtext="Step 3: "
            text= "Using your the edge of your hanger, poke holes in each corner of the cardboard. These holes should be around a half an inch in from the sides of the cardboard."                      
            images= "/step3_cat_tent.svg"
        />

        <Steps
            boldtext="Step 4: "
            text= "Push the wires ends through the holes you’ve created in the corners. Using your pliers, bend the edges of the wire hangers down. Bend around an inch of the wire so that it sits flush against the bottom of the cardboard. Then tape this down to secure. This will protect your cat from sharp edges and allow the t-shirt to fit well without snagging."                      
            images= "/step4_cat_tent.svg"
        />  

        <Steps
            boldtext="Step 5: "
            text= "Check to make sure everything is even. If necessary tweak the wire hangers with your pliers."                      
            images= "/step5_cat_tent.svg"
        /> 

        <Steps
            boldtext="Step 6: "
            text= "Pull the t-shirt over the tent frame and position it so the hole is in the middle."                      
            images= "/step6_cat_tent.svg"
        /> 

        <Steps
            boldtext="Step 7: "
            text= "Flip the tent over and fold the excess fabric over the bottom of the cardboard. Make sure the neck hole and sleeves are pulled taut. Then safety pin everything into place. Alternatively you could cut the t-shirt, but leaving it whole will make it easy to remove and wash it when need be."                      
            images= "/step7_cat_tent.svg"
        /> 

        <Steps
            boldtext="Step 8: "
            text= "Introduce your cat to its new upcycled cat tent!"                      
            images= "/step8_cat_tent.svg"
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


