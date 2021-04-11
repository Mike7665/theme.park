
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>                    
     __  __________   ______   _________ 
   /  |/  / ____/ | / / __ \ / ____/   |
  / /|_/ / / __/  |/ / /_/ // /   / /| |
 / /  / / /_/ / /|  / ____// /___/ ___ |
/_/  /_/\____/_/ |_/_/   (_)____/_/  |_|
                                                    </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
