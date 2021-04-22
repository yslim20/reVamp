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
        titleDIY:"fabric basket",
        stars: "/2-star-level.svg",  
        picture:"/Fabric-Basket.svg",
        children: <ul>
            <li>Jeans</li>
            <li>Compass Drawing Tool</li>
            <li>Hot Glue</li>
        </ul>,

        steps: <div>
        <Steps
            boldtext="Step 1: "
            text= "Cut 9 inches off the bottom of the jeans."                      
            images= "/basket/basket_1.svg"
        />
        <Steps
            boldtext="Step 2: "
            text= "Measure around the cuff to see how long it is (ex: in the image is 37cm)."                      
            images= "/basket/basket_2.svg"
        />

        <Steps
            boldtext="Step 3: "
            text= "Take the length and divide it by 3.14 to find the radius of the circle."                      
            images= "/basket/basket_3.svg"
        />    

        <Steps
            boldtext="Step 4: "
            text= "Use the compass tool to draw a circle with the radius you have (center to edge)."                      
            images= "/basket/basket_4.svg"
        /> 

        <Steps
            boldtext="Step 5: "
            text= "Cut your circle out."                      
            images= "/basket/basket_5.svg"
        /> 

        <Steps
            boldtext="Step 6: "
            text= "Turn the pants sleeve inside out, and grab the cutted side to fold 1 inch up to start gluing the pieces together."                      
            images= "/basket/basket_6.svg"
        /> 

        <Steps
            boldtext="Step 7: "
            text= "Once you finish gluing, flip the piece to make the proper side flipped outwards. Roll the top part down 2 folds."                      
            images= "/basket/basket_7.svg"
        />            
        </div>
    }    
}


