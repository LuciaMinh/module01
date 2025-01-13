let zak = 'Zak Ruvalcaba'
let sally = 'Sally Smith'
let holly = 'Holly Unlikely'
let amol = 'Amol Shokup'
let robin = 'Robin Banks'
let aaron = 'Aaron D.Tyres'
let minh = 'Minh Nguyen'
const element = (
<ul style= {{'color': 'blue', 'frontSize': '24px'}} >
    <li>{zak}</li>
    <li>{sally}</li>
    <li>{holly}</li> 
    <li>{amol}</li>
    <li>{robin}</li>
    <li>{aaron}</li>
    <li>{minh}</li>
</ul>
)

ReactDOM.render(element, document.getElementById('content'))