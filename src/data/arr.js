
// Random
let random = ()=> Math.round(Math.random() * 100); 
export const data = [
{id: Date.now()+random(), url:`https://randomuser.me/portraits/men/${random()}.jpg`},
{id: Date.now()+random(), url:`https://randomuser.me/portraits/men/${random()}.jpg`},
{id: Date.now()+random(), url:`https://randomuser.me/portraits/men/${random()}.jpg`},
];