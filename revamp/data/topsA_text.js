import Steps from "../comps/Steps";
import Tips from "../comps/Tips";

export const tutorialOptions = {
    
    FinishedLook1: {
        titleDIY:"one shoulder shirt",
        stars: "/3-star-level.svg",  
        picture:"/One-Shoulder-Shirt.svg",
        mtext:"5 materials",
        ttext:"60 minutes",
        ltext:"advanced",
        bio:"That old sweater of yours looking like it needs an upcycle? Look no further, here we teach you how to make the comfiest beany that you can rock in the fall and winter seasons",
        children: <ul>
            <li>Eastic 8mm</li>
            <li>Basic shirt</li>
            <li>Scissors</li>
            <li>Sewing machine</li>
            <li>Pins</li>
        </ul>,

        steps: <div>

        <Steps
            boldtext=""
            text= ""                      
            images= "/step0_one_shoulder_shirt.svg"
        />
        <Steps
            boldtext="Step 1: "
            text= "Lay your shirt on a flat service, make it wrinkle free."                      
            images= "/step1_one_shoulder_shirt.svg"
        />

        <Steps
            boldtext="Step 2: "
            text= "Make a new neckline. You can draw out the shape first before cutting. Then try on the shirt to check if you you're happy with the new shape."                      
            images= "/step2_one_shoulder_shirt.svg"
        />

        <Steps
            boldtext="Step 3: "
            text= "You can skip this step if you don't want a crop. From your marking, cut straight across your shirt."                      
            images= "/step3_one_shoulder_shirt.svg"
        />  

        <Steps
            boldtext="Step 4: "
            text= "Measure the elastic along the edge, leave this much space and cut the elastic."                      
            images= ""
        /> 

        <Steps
            boldtext="Step 5: "
            text= "Sew ends of elastic together with a zigzag stitch."                      
            images= "/step5_one_shoulder_shirt.svg"
        /> 

        <Steps
            boldtext="Step 6: "
            text= "Pin the elastic in four midpoints. In the shoulder seam, side seam, centre front and in the centre back as shown."                      
            images= "/step6_one_shoulder_shirt.svg"
        /> 

        <Steps
            boldtext="Step 7: "
            text= "Sew the elastic on with a zigzag stitch, stretch the elastic while your sewing."                      
            images= ""
        />   
        
        <Steps
            boldtext="Step 8: "
            text= "Fold the edge then sew along the edge again, using a zigzag stitch. Stretch out the top when you sew."                      
            images= ""
        />   
        
        <Steps
            boldtext="Step 9: "
            text= "If you did not make yours a crop top, skip this step. Hem top. Use a zigzag stitch."                      
            images= ""
        /> 


        </div>     
    },
    
    FinishedLook2: {
        titleDIY:"sweater beanie",
        stars: "/3-star-level.svg",  
        picture:"/sweater-beanie.svg",
        mtext:"5 materials",
        ttext:"75 minutes",
        ltext:"advanced",
        bio:"Get into the winter vibes by changing up your old sweater into a cozy pair fo slippers! These super cute pull on boots will make you want to curl up with a cup of hot cocoa.",
        children: <ul>
            <li>Sweater with beanie potential</li>
            <li>Old beanie for template</li>
            <li>Pins</li>
            <li>Sewing machine</li>
            <li>Scissors</li>
        </ul>,
        steps: <div>
            <Steps
                boldtext=""
                text= ""                      
                images= "/step0_sweater_beanie.svg"
            />
            <Steps
                boldtext="Step 1: "
                text= "Cut off the sleeves, and cut them open. I used the sleeves because the knit ribbing at the bottom is great for the knit ribbing on the edge of the beanie."                      
                images= "/step1_sweater_beanie.svg"
            />

            <Steps
                boldtext="Step 2: "
                text= "Lay the two sleeves on top of each other, outsides touching. Then trace the shape of a beanie."                      
                images= ""
            />

            <Steps
                boldtext="Step 3: "
                text= "Sew the markings. Zig zag stitch the edges to prevent fraying."                      
                images= "/step3_sweater_beanie.svg"
            />         
        </div>
    },   
    
    FinishedLook3: {
        titleDIY:"sweater slipper",
        stars: "/5-star-level.svg",  
        picture:"/Sweater-Slippers.svg",
        mtext:"5 materials",
        ttext:"30 minutes",
        ltext:"advanced",
        bio:"Tired of your basic long-sleaved shirt? Here is a fun DIY to turn your old long-sleaved shirt into a chic off-the-shoulder top that you can both dress-up and dress-down.",
        children: <ul>
            <li>Shoe soles</li>
            <li>Old sweater</li>
            <li>Elastic</li>
            <li>Needles</li>
            <li>Yarn</li>
        </ul>,

        steps: <div>
        <Steps
            boldtext=""
            text= ""                      
            images= "/step0_sweater_slippers.svg"
        />
        <Steps
            boldtext="Step 1: "
            text= "Cut off the sleeves of your sweater. When cutting include the seam allowance. This will keep the sweater from unraveling. "                      
            images= "/step1_sweater_slippers.svg"
        />

        <Steps
            boldtext="Step 2: "
            text= " Cut a strip of elastic that measures the curve of your foot minus 1'' (the red dashed line)."                      
            images= "/step2_sweater_slippers.svg"
        />  
        
        <Steps
            boldtext="Step 3: "
            text= " Sew (zig zag stitch) the elastic on the wrong side where it starts to curve. As you sew, pull the elastic to fit from one side to the other. You want this to be snug but not uncomfortable. This will keep the boot from sliding when you walk. "                      
            images= "/step3_sweater_slippers.svg"
        />  
        
        <Steps
            boldtext="Step 4: "
            text= "Stretch the bottom of the sweater out to fit the sole."                      
            images= ""
        />  
        
        <Steps
            boldtext="Step 5: "
            text= " Pin the sweater onto the sole. I pinned the back (where the seam was), the front mid point, and sides. Then added the pins around those points. The pins stick right into the sole."                      
            images= "/step5_sweater_slippers.svg"
        />  
        
        <Steps
            boldtext="Step 6: "
            text= "Use yarn and a blanket stitch to attach around the edges. Start from the outer mid sole going to the heel, and continue to wrap around to where you started. "                      
            images= ""
        />               
        </div>     
    }    
}