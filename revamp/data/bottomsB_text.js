import Steps from '../comps/Steps';

export const tutorialOptions = {
    FinishedLook1: {
        titleDIY:"ripped jeans",
        spacing: -3,
        stars: "/2-star-level.svg",  
        picture:"/distressed_jeans.svg",
        mtext:"5 materials",
        ttext:"60 minutes",
        ltext:"beginner",
        bio:"Looking for a new way to spruce up your old jeans you barely wear? Then this is the DIY for you! Turn that old jeans into a trendy teared jeans within a short amount of time by following these steps below.",
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
        mtext:"5 materials",
        ttext:"30 minutes",
        ltext:"beginner",
        bio:"Looking for a new way to change your old pair of jeans? Then this is the DIY for you! Turn that jeans into a fashionable patched jean in short time by following these steps below.",
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
            images= "/patched3.svg"
        />

        <Steps
            boldtext="Step 4: "
            text= "Again using your needle and thread sew your patches to your jeans."                      
            images= "/patched4.svg"
        />       
        </div>     
    },

    
    FinishedLook3: {
        titleDIY:"fabric basket",
        stars: "/2-star-level.svg",  
        picture:"/Fabric-Basket.svg",
        mtext:"3 materials",
        ttext:"20 minutes",
        ltext:"beginner",
        bio:"Needing a basket to hold some of your things? This diy tutorial is perfect for you! All you need is a pair of jeans and follow the steps below!",
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


