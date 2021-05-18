import Steps from '../comps/Steps';
import ExtraStep from '../comps/ExtraStepText';
import DIYIcons from '../comps/DIYIcons';

export const tutorialOptions = {
    FinishedLook1: {
        titleDIY:"denim flower",
        spacing: -3,
        stars: "/4-star-level.svg",  
        picture:"/denimflower.svg",
        mtext:"8 materials",
        ttext:"90 minutes",
        ltext:"advanced",
        bio:"Looking for a new way to make your home beautiful with old denim scraps? Then this is the DIY for you! Turn that denims into a stylish artificial roses by following these steps below.",
        children: <ul>
            <li>Denim scraps</li>
            <li>Petal template</li>
            <li>Wooden skewers for the bouquet</li>
            <li>Garden wire for napkin rings</li>
            <li>Glue</li>
            <li>Hot glue gun</li>
            <li>Scissors</li>
            <li>Pen</li>
        </ul>,

        steps: <div>
            <Steps
                boldtext="Step 1: "
                text= "Draw out a small, medium, and big petal shape to use as tracers, and cut them out."                      
                images= "/denimf1.svg"
            />
            <Steps
                boldtext="Step 2: "
                text= "Use the template to cut petals in 3 different sizes, 6 small, 5 medium and 5 large."                      
                images= "/denimf2.svg"
            />

            <Steps
                boldtext="Step 3: "
                text= "Cut out 2 leaves in denim of a different shade."                      
                images= "/denimf3.svg"
            />

            <Steps
                boldtext="Step 4: "
                text= "Cut a strip of denim 1-2cm by 30cm wrap around the wooden skewer and use glue to hold it in place."                      
                images= "/denimf4.svg"
            />     

            <Steps
                boldtext="Step 5: "
                text= "Cut a strip of denim 1-2cm by 30cm wrap around the wooden skewer and use glue to hold it in place."                      
                images= "/denimf5.svg"
            />     

            <Steps
                boldtext="Step 6: "
                text= "Once all the petals are glued to the stem then glue the 2 leaves to the base."                      
                images= "/denimf6.svg"
            />   
        </div>        
    },
    
    FinishedLook2: {
        titleDIY:"resize your jeans",
        stars: "/4-star-level.svg",  
        picture:"/Resize-Your-Jeans.svg",
        mtext:"7 materials",
        ttext:"70 minutes",
        ltext:"advanced",
        bio:"Do you have a pair of jeans that fits too big? This DIY can teach you how to easily resize your jeans so you can get them to fit perfectly!",
        children: <ul>
            <li>Jeans that are too big</li>
            <li>Seam ripper</li>
            <li>Scissors</li>
            <li>Sewing machine</li>
            <li>Pins</li>
            <li>Elastic</li>
            <li>Safety pin</li>
        </ul>,

        steps: <div>
        <Steps
            boldtext="Step 1: "
            text= "Make two slits one to two centimeters away from the belt loop and sew the elastic into place underneath the belt loop."                      
            images= "/jeans1.svg"
        />
        <Steps
            boldtext="Step 2: "
            text= "Cut two slits in the waistband with your seam ripper. Make sure that you only cut on the inside of the waistband. Before you start with making the slits check the other side of the waistband."                      
            images= "/resize2.svg"
        />
        <img src="/resize3.svg" />

        <Steps
            boldtext="Step 3: "
            text= "Check if the elastic fits in the hole if not make the hole bigger then cut out the elastic that is shorter than the distance between the two holes."                      
            images= "/resize4.svg"
        />
        <img src="/resize5.svg" />

        <Steps
            boldtext="Step 4: "
            text= "Attach the safety pin to the elastic then loop the elastic through the other side of the waistband."                      
            images= "/resize6.svg"
        />  

        <Steps
            boldtext="Step 5: "
            text= "Secure the elastic on both sides with a pin on the waistband and then sew the elastic into place with a couple back stitches. If you can sew it underneath the belt loop otherwise close as possible.            "                  
            images= "/resize7.svg"
        /> 
        <img src="/resize7.svg" />

        </div>     
    },

    
    FinishedLook3: {
        titleDIY:"knee-length skirt",
        stars: "/4-star-level.svg",  
        picture:"/skirt.svg",
        mtext:"6 materials",
        ttext:"40 minutes",
        ltext:"advanced",
        bio:"Time to spruce up your wardrobe by changing your old trousers into a super chic skirt! This skirt can be worn to the office or add some heels with it for your girls night out!",
        children: <ul>
            <li>Trousers</li>
            <li>Buttons (big and small)</li>
            <li>Sewing needle</li>
            <li>Thread</li>
            <li>Safety pins</li>
            <li>Scissors</li>
            <li>Seam ripper</li>
        </ul>,

        steps: <div>
        <Steps
            boldtext="Step 1: "
            text= "Cut to approximately above the knee length."                      
            images= "/skirt1.svg"
        />
        <Steps
            boldtext="Step 2:"
            text= " Rip the seams on the inner sides of the trousers."                      
            images= "/skirt2.svg"
        />
        <ExtraStep
        text="If needed, leave pins to hold the front sides together, and the back sides together. Make sure the sewing will be straight-- leave out any parts sticking out like this."
        images="/skirt3.svg"
        ></ExtraStep>
    
        <Steps
            boldtext="Step 3: "
            text= "Sew the front sides together and the back sides together, to create a skirt."                      
            images= "/skirt4.svg"
        />

        <ExtraStep
        text="Cut off any excess fabric."
        images="/skirt5.svg"
        ></ExtraStep>

          <Steps
            boldtext="Step 4: "
            text=  "Try on the skirt, to see if it fits. Make any adjustments for it to fit properly."             
            images= "/skirt6.svg"
        />                   
        </div>     
    }    
}


