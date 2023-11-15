import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { constants } from 'node:buffer';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});
//

let semester1 = {
    vakken: {
        prO1:{
            leerkrachten: `i am a doctor`
        },
        itE:{
            leerkrachten: `mister C`
        }
    }
};

