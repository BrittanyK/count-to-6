console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(username, ...comment) {
   let replaced = username[0];
   comment.forEach((comment, index, array) =>{
       replaced += comment.replace(/&/g, '&amp;')
                          .replace(/'/g, '&apos;')
                          .replace(/"/g, '&quot;')
                          .replace(/</g, '&lt;')
                          .replace(/>/g, '&gt;')
                    + username[index + 1];

   });

   return replaced;

   }
