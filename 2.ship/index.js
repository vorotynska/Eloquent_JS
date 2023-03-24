let shipSize = {
    width: 30,
    height: 30,
};

// position is used to track the position of the ship within the play field.
let position = {
    x: 200,
    y: 200,
};

//moveRate is the number of pixels each keystroke moves the ship forward and backward
let moveRate = 9;

//turnRate is how many degrees of rotation 
let turnRate = 5;

// andle is the current amount of rotation applied to the ship in degrees;
let angle = 0;

let spaceship = document.getElementById('spaceship');

/* updatePosition(). This function takes as input the distance the ship is to
 be moved, where positive is a forward movement and negative is a backward 
 movement. This function computes the new position of the ship given the distance 
 moved and the current direction the ship is facing. It also handles ensuring that the 
 ship wraps across the boundaries of the play field instead of vanishing.*/
function updatePosition(offset) {
    let rad = angle * (Math.PI / 180);
    position.x += Math.sin(rad) * offset;
    position.y -= Math.cos(rad) * offset;

    if (position.x < 0) {
        position.x = 399;
    } else if (position.x > 399) {
        position.x = 0;
    }

    if (position.y < 0) {
        position.y = 399;
    } else if (position.y > 399) {
        position.y = 0;
    }
}

function refresh() {
    let x = position.x - shipSize.width / 2;
    let y = position.y - shipSize.height / 2;
    let transform = `translate(${x} ${y}) rotate(${angle} 15 15) `;

    spaceship.setAttribute("transform", transform);
}
refresh();

//The refresh() function handles applying the rotation and position 


/* Finally, the addEventListener() method is used to start listening for keydown events,
 acting on each key by updating the ship position and rotation angle, then calling refresh()
  to draw the ship at its new position and angle.*/
window.addEventListener(
    'keydown',
    (e) => {
        if (e.defaultPrevented) {
            return; //Do nothing if event alredy handled 
        }
        switch (e.code) {
            case 'KeyS':
            case 'ArrowDown':
                // Handle 'back'
                updatePosition(-moveRate);
                break
            case 'KeyW':
            case 'ArrowUp':
                //Handle 'forward'
                updatePosition(moveRate);
                break;
            case 'KeyA':
            case 'ArrowLeft':
                //Handle 'turn left'
                angle -= turnRate;
                break;
            case 'KeyD':
            case 'ArrowRight':
                //Handle 'turn right'
                angle += turnRate
                break
        }
        refresh();

        if (e.code !== 'Tab') {
            // Consume the event so it doesn't get handled twice,
            // as long as the user isn't trying to move focus away
            e.preventDefault();
        }
    },
    true
);
console.log('HHHH');