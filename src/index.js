// import sum from './sum';
// import './image_viewer';
// const total = sum(10, 5);
// console.log(total);

const button = document.createElement('button');
button.innerText = 'Click Me';
button.onclick = () => {
	System.import('./image_viewer').then(module => {
		module.default(); //would run the export default function
	});
};

document.body.appendChild(button);
