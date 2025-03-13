export default function HelloWorld() {
	const props = {
		text: "Hello World from spread syntax",
	};
	return (
		<div>
			<HeaderHelloWorld {...props} />
			<ParagraphHelloWorld />
		</div>
	);
}

function HeaderHelloWorld({ text = "Ups, lupa kasih teks" }) {
	return (
		<h1
			style={{
				color: "red",
				backgroundColor: "aqua",
				fontSize: "50px",
			}}
		>
			{text.toUpperCase()}
		</h1>
	);
}

function ParagraphHelloWorld() {
	const text = "Selamat Belajar ReactJS dari Programmer Zaman Now";
	const style = {
		fontSize: "20px",
		color: "blue",
		backgroundColor: "yellow",
	};
	return <p style={style}>{text.toLowerCase()}</p>;
}
